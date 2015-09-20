angular.module('VA').service('PostService', ['$state', '$stateParams', '$meteor', '$q', function($state, $stateParams, $meteor, $q)
{

	console.log('PostsService init')

	this.getAllPosts = function() {

		var deferred = $q.defer();

		$meteor.subscribe('posts').then(function(){

			var getPosts = $meteor.collection(function(){
				console.log('poss')
				return Posts.find({})
			});

			deferred.resolve(getPosts);

		});

		return deferred.promise;
	}


}]);
