'use strict';

angular.module('contentfulNodeDashboardApp')
  .factory('Asset', function ($http, $q) {
		return {
			create: function(id, asset) {
				var deferred = new $q.defer();
				$http({
					method:'PUT',
					url : 'https://api.contentful.com/spaces/c0jrauxvndyp/assets/' + id,
					headers: {
						'Content-Type': 'application/vnd.contentful.management.v1+json',
						'Authorization': 'Bearer ' + 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
					},
					data: asset,
				}).success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).error(function(data, status, headers, config) {
					deferred.reject(data);
				});
				return deferred.promise;
			},
			process: function(id, asset) {
				var deferred = new $q.defer();
				$http({
					method:'PUT',
					url : 'https://api.contentful.com/spaces/c0jrauxvndyp/assets/' + id + '/files/en-US/process',
					headers: {
						'Content-Type': 'application/vnd.contentful.management.v1+json',
						'Authorization': 'Bearer ' + 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
						'X-Contentful-Version': '1',
					},
					data: null,
				}).success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).error(function(data, status, headers, config) {
					deferred.reject(data);
				});
				return deferred.promise;
			},
			publish: function(id, asset) {
				var deferred = new $q.defer();
				$http({
					method:'PUT',
					url : 'https://api.contentful.com/spaces/c0jrauxvndyp/assets/' + id + '/published',
					headers: {
						'Content-Type': 'application/vnd.contentful.management.v1+json',
						'Authorization': 'Bearer ' + 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
						'X-Contentful-Version': '2',
					},
					data: null,
				}).success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).error(function(data, status, headers, config) {
					deferred.reject(data);
				});
				return deferred.promise;
			}
		};
	});
