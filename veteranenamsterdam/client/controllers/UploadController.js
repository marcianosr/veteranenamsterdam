angular.module('VA')
.controller('UploadController', ['$scope', '$http', function($scope, $http) {

	
  console.log('Uplaod Init');


    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);

    $http.post(uploadUrl, fd, {
        // withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    }).success( console.log('good') ).error( console.log('error') );



}]);



