console.log('test main ')

angular.module('VA',[

    'angular-meteor',
    'ui.router',
    'ngFileUpload',



])
// config func runs before anything is ready (before all services are ready) Providers are accessible.
.config([

	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',


	 function($stateProvider, $urlRouterProvider, $locationProvider) {


		console.log($stateProvider)
		console.log($urlRouterProvider)

		$stateProvider
			.state('/', {

				url: '/',
				controller: 'LandingController',
				templateUrl: 'client/views/LandingView.ng.html'

			})
			.state('/overons', {

				url: '/overons',
				controller: 'AboutController',
				templateUrl: 'client/views/AboutView.ng.html'

			})
			.state('/blog', {

				url: '/blog',
				controller: 'BlogController',
				templateUrl: 'client/views/BlogView.ng.html'

			})
			.state('/blog/:postId', {

				url: '/blog/:postId',
				controller: 'PostController',
				templateUrl: 'client/views/PostView.ng.html'

			})
			.state('/veteranen', {

				url: '/de-veldpost',
				controller: 'VeteranenController',
				templateUrl: 'client/views/VeteranenView.ng.html'

			})
			.state('/de-veldpost', {

				url: '/de-veldpost',
				controller: 'VeldpostController',
				templateUrl: 'client/views/VeldpostView.ng.html'

			})
			.state('/activiteiten', {

				url: '/activiteiten',
				controller: 'ActivitiesController',
				templateUrl: 'client/views/ActivitiesView.ng.html'

			})
			.state('/donaties', {

				url: '/donaties',
				controller: 'DonationsController',
				templateUrl: 'client/views/DonationsView.ng.html'

			})
			.state('/contact', {

				url: '/contact',
				controller: 'ContactController',
				templateUrl: 'client/views/ContactView.ng.html'

			})
			.state('/maak-bericht', {

				url: '/maak-bericht',
				controller: 'CreatePostController',
				templateUrl: 'client/views/CreatePostView.ng.html'

			})
			.state('/inloggen', {

				url: '/inloggen',
				controller: 'LoginController',
				templateUrl: 'client/views/LoginView.ng.html'

			})
			.state('/404', {

				url: '/404',
				controller: 'ErrorController',
				templateUrl: 'client/views/ErrorView.ng.html'

			})

			$urlRouterProvider.otherwise('/404');


		 $locationProvider.html5Mode(true);
}]).run(['$rootScope', 'LoginService', function($rootScope, LoginService) {



	console.log('runn angular app')



	Deps.autorun(function() {

		$rootScope.userId = LoginService.getLoginStatus();

		console.log('logged or not ', $rootScope.userId)


	});



}]);

Meteor.subscribe('posts');
Meteor.subscribe('users');
