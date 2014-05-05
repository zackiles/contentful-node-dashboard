'use strict';

angular.module('contentfulNodeDashboardApp')
  .factory('Entry', function ($resource) {
		return $resource('https://api.contentful.com/spaces/c0jrauxvndyp/entries/:id',
      {id: '@sys.id' }, 
      {
			query: {method:'GET', params:{id:''}, isArray:true},
			create: {
				method:'PUT',
				headers: {
					'Content-Type': 'application/vnd.contentful.management.v1+json',
					'Authorization': 'Bearer ' + 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
					'X-Contentful-Content-Type': '7AcgzdhB1SKW00SAYEaw4m',
				},
			},
			delete: {method:'DELETE'},
		});
});
