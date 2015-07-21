angular.module("VA").controller('CreatePostController', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {


		$scope.errorForm = true;
		$scope.uploadImage = false;
		$scope.post = {};

		$scope.createPost = function() {

			var post = $scope.validate();
			console.log(post)


			if(post && !$scope.errorForm) {
				console.log('succes')




				if($scope.uploadImage) {
					console.log(' upload a pic')
					$scope.post.image_id = $scope.image_id;
				
				}
				else {
					console.log('do not upload')
				}

				console.log($scope.post)



				post._id = Posts.insert($scope.post);
				$location.path('/blog')

			}
			else {
				console.log('not succes')

			}
		};

		$scope.validate = function() {

			$scope.errors = [];

		   	$scope.post = {
		    	  title: $('input[name="title"]').val(),
		    	  intro: $('input[name="intro"]').val(),
				  message: $('textarea').val(),
				  date: new Date(),
				  author: $rootScope.currentUser.emails[0].address,

			};

			if($scope.post.title.length < 1) {

				$scope.errors.push('Het titel veld is leeg.');
			}

			if($scope.post.message.length < 1) {

				$scope.errors.push('Het bericht veld is leeg.');

			}

			if($scope.post.intro.length < 1) {

				$scope.errors.push('Het intro veld is leeg.');

			}

			if($scope.errors.length != 0) {

				$scope.errorForm = true;
				return false;

			}
			else {
				console.log('postting')
				$scope.errorForm = false;

				return $scope.post;

			}

		}



	$scope.uploadFile = function(event) {

			FS.Utility.eachFile(event, function(file) {
	      		Images.insert(file, function (err, fileObj) {
		        	// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP

		        	console.log('insert')
							console.log(err)
		        	console.log(fileObj)
		        	console.log(event.target.files)
		        	console.log(fileObj.url({store:"images"}));
		        	console.log(new FS.File(fileObj).url({store:"images"}));

					$scope.image_id = fileObj._id;
	
							
		     	});
	     	});

			$scope.uploadImage = true;
	}

	$scope.deleteFile = function() { 

		if($scope.uploadImage) { 

			Images.remove({ _id: $scope.image_id })
			$scope.uploadImage = false;

		}

	}

}]);


// $scope.upload = function(files) {
//
// 	if (files && files.length) {
// 					for (var i = 0; i < files.length; i++) {
// 							var file = files[i];
// 							console.log(file)
// 							Upload.upload({
// 									url: '/uploads',
// 									// fields: {
// 									//     'username': $scope.username
// 									// },
// 									file: files
// 							}).progress(function (evt) {
// 									var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
// 									$scope.log = 'progress: ' + progressPercentage + '% ' +
// 															evt.config.file.name + '\n' + $scope.log;
// 							}).success(function (data, status, headers, config) {
// 									$timeout(function() {
// 											$scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
// 									});
// 							});
// 					}
// 			}
// }
