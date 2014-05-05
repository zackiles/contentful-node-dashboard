'use strict';

angular.module('contentfulNodeDashboardApp')
  .controller('EntryListCtrl', function ($scope, entryService) {
		
		$scope.entries= null;
	  entryService.getEntries().then(function(data) {
			$scope.entries = data;
    });
		
		$scope.dateFromUTCString = function(s) {
			s = s.split(/[-T:Z]/ig);
			var date =new Date(Date.UTC(s[0], --s[1], s[2], s[3], s[4], s[5]));
			return date.toString();
		};
		
	});
