angular.module('VA')
.controller('ActivitiesController', ['$scope', function($scope) {


  console.log('ActivitiesController Init');

	Template.body.helpers({
		options: function() {
				return {
						defaultView: 'basicWeek'
				};
		}
	});


}]);
