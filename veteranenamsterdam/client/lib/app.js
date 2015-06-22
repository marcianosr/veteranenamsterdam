console.log('test main ')

angular.module('VA',[

    'angular-meteor',
    'ui.router',



])
// config func runs before anything is ready (before all services are ready) Providers are accessible. 
.config([

	'$stateProvider',
	'$locationProvider',


	 function($stateProvider, $locationProvider) { 


		console.log($stateProvider,  $locationProvider)

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


		// $locationProvider.html5Mode(true);
}]).run(['$rootScope', function($rootScope) {



	console.log('runn angular app')
}])

Meteor.subscribe('posts');



