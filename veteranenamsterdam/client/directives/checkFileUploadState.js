angular.module('VA').directive('checkFileUploadState', ['$rootScope', function($rootScope) { 




		 return {
         restrict: 'E',
         link:function(scope, elem, attrs) { 

               scope.$watch('uploadImage', function(){

                  console.log('ddd')
               })
         }
       };
   	
}]);
