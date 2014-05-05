'use strict';

angular.module('contentfulNodeDashboardApp')
	.controller('UploadCtrl', function ($scope, fileReader) {
	
		$scope.getFile = function () {
			$scope.progress = 0;
			fileReader.readAsDataUrl($scope.file, $scope)
				.then(function(result) {
						$scope.imageSrc = result;
				});
		};

		$scope.$on("fileProgress", function(e, progress) {
				$scope.progress = progress.loaded / progress.total;
		});
    
  });
