'use strict';

angular.module('contentfulNodeDashboardApp')
  .controller('MainCtrl', function ($scope, $http) {

		// Static list of panels we'll be using.
		$scope.panels = {
			entryList: { name: 'List entries', disabled : true },
			entryCreate: { name: 'Create entries', disabled : true },
		}
		$scope.panelCurrent = ' ';
		
		$scope.categories = ['Web', 'Events','Tablet','Print','Misc'];
		
		
		// Shows the selected panel, and hides the rest.
		$scope.openPanel = function(panelName) {
				for (var panel in $scope.panels) {
						$scope.panels[panel].disabled = true;
				}
				$scope.panels[panelName].disabled = false;
				$scope.panelCurrent = $scope.panels[panelName].name;
		};
		
	});
