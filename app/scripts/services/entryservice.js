'use strict';

angular.module('contentfulNodeDashboardApp')
	.service('entryService', function entryService($http) {
		this.getEntries = function() {
			return $http({
				method: 'GET',
				url: '/api/entries/all',
			});
		};
		this.createEntry = function() {
			return $http({
				method: 'GET',
				url: '/api/entries/all',
			});
		};
		
		
	});
