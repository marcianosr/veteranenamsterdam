angular.module('VA').service('LoginService', ['$rootScope', '$state', '$stateParams', '$location', function($rootScope, $state, $stateParams, $location) {

	console.log('LoginService init')

	$rootScope.userId = Meteor.userId();

	this.getLoginStatus = function() {

			if($rootScope.userId) {
				return $rootScope.userId;
			}
			else {
				return false;
			}

	};


	this.logout = function() {

		Meteor.logout(function(){
			$rootScope.userId = null;

		});
	}


}]);
