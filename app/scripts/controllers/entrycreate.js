'use strict';
angular.module('contentfulNodeDashboardApp')
  .controller('EntryCreateCtrl', function ($scope, $http, $upload, Entry, Publisher, Asset) {
    
    $scope.change = function() {
			Entry.update({entryId: $scope.entryId}, function() {
				$location.path('/');
			});
		};
		
		$scope.category = '';
		$scope.setCategory = function (category) {
			$scope.category = category;
			$scope.status.isopen = false;
		};
		
		$scope.publishEntry = function () {
			var entryId = convertToSlug($scope.projectName);
			Entry.create({
				"sys": {"id": entryId },
				"fields":{
					"projectName": {"en-US": $scope.projectName},
					"projectShortDescription": {"en-US": $scope.projectShortDescription},
					"projectLongDescription": {"en-US": $scope.projectLongDescription},
					"category": {"en-US": $scope.category},
				}
			}, function(response){ onEntryPublished(entryId);});
    };
    
		$scope.onFileSelect = function($files) {
			var assetObj = {"fields":{"title":{"en-US":""},"file":{"en-US":{"contentType":"","fileName":"","upload":""}}}};
			
			for (var i = 0; i < $files.length; i++) {
				var file = $files[i];
				$scope.upload = $upload.upload({
					url: 'api/asset',
					method: 'POST',
					file: file,
				}).progress(function(evt) {
					console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
				}).success(function(data, status, headers, config) {
					
					assetObj.fields.title['en-US'] = 'twitter-logo';
					assetObj.fields.file['en-US'].fileName = 'twitter-logo.png';
					//assetObj.fields.file['en-US'].contentType = data.file.type;
					assetObj.fields.file['en-US'].upload = 'http://www.wired.com/images_blogs/business/2011/01/twitter-logo.png';
					
					var fi = assetObj.fields.title['en-US'];
					
					//Asset.create(fi, assetObj, $scope.onAssetCreated(fi,assetObj), alertEntry() );
					Asset.create(fi, assetObj).then(
						function (data) {
							console.log('asset created ' + data);
							$scope.onAssetCreated(fi,assetObj);
						}, 
						function (error) {
							console.log('error ' + error);
					});
				});
			}
		};
		
		$scope.onAssetCreated = function(id, asset) {
			Asset.process(id, asset).then(
				function (data) {
					console.log('asset processed ' + data);
					$scope.onAssetProcessed(id,asset);
				}, 
				function (error) {
					console.log('error ' + error);
			});
		};
		$scope.onAssetProcessed = function (id, asset) {
			Asset.publish(id, asset).then(
				function (data) {
					console.log('asset published ' + data);
					$scope.onAssetPublished(id,asset);
				}, 
				function (error) {
					console.log('error ' + error);
			});
		};
		
		$scope.onAssetPublished = function(id, asset) {
			console.log('asset published ' + id);
		};
		
		function alertEntry() {
		
		};
		
		
		$scope.mediaFileImage = null;
		$scope.mediaFile = null;
		
		
		
		function onEntryPublished(entryId) {
			$http({
				url: 'https://api.contentful.com/spaces/c0jrauxvndyp/entries/' + entryId + '/published',
				method: "PUT",
				data: null,
				headers: {
					'Content-Type': 'application/vnd.contentful.management.v1+json',
					'Authorization': 'Bearer ' + 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
					'X-Contentful-Version': '1',
					}
					}).success(function (data, status, headers, config) {
							console.log(data); 
					}).error(function (data, status, headers, config) {
							console.log(status);
					});
		};
		
		function convertToSlug(text){
			return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
		};
		
  });
