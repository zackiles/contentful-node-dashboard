'use strict';

angular.module('contentfulNodeDashboardApp')
  .factory('Publisher', function ($resource) {
		return $resource('https://api.contentful.com/spaces/:space/:type/:id/published',
      {}, 
      {
				publishEntry: {
					method:'PUT',
					data: null,
					params: {type: 'entries', id: '@id', space: 'c0jrauxvndyp'},
					headers: {
						'Content-Type': 'application/vnd.contentful.management.v1+json',
						'Authorization': 'Bearer ' + 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
						'Content-Length': '0',
					}
				},
		});
});
