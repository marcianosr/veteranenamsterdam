angular.module('VA').directive('summernote', [function(){

  return {
      restrict: 'A',
      link:function(scope, element, attrs)
      {
        $('#summernote').summernote({ height: 400} );

      }
  }

}]);
