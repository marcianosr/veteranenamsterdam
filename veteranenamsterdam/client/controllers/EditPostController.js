angular.module('VA')
.controller('EditPostController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

  $scope.editPost = true;
	
  console.log('EditPostController Init');

  var title = $stateParams.postId;


  console.log(title)
  // $scope.posts = $meteor.collection(function(){

  // 	console.log('get post'); 

  //   // find where the title is equal to the title in the db 
  // 	return Posts.find({title: title}, {})
  // }); 



  $scope.posts = $meteor.object(Posts, { title: title})
  console.log($scope.posts)


  _.each($scope.posts.message, function(message){
      var last = $('textarea').last();

      last.after(function(){ 

        return '<p>'+ message +'</p>';
      });

  })


  $scope.editPost = function() {

      $scope.post = {
          title: $('input[name="title"]').val(),
          intro: $('input[name="intro"]').val(),
          message: $scope.checkParagraphs(),


      };


      Posts.update({ _id: $scope.posts._id }, { $set: { title: $scope.post.title, intro: $scope.post.intro, message: $scope.post.message, image_id: $scope.image_id } } )

  }
   $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
   console.log($scope.images)


  $scope.uploadFile = function(event) {

      FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
              // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
              $scope.image_id = fileObj._id;
              
          });
        });

      $scope.uploadImage = true;
  }

  $scope.checkParagraphs = function() { 



    

    var paragraphs = [];

    _.each($('textarea'), function(t){

      if(t.value) {
        paragraphs.push(t.value)
      }

    });
    return paragraphs;

  }

  $scope.createTextArea = function () { 

      var last = $('textarea').last();

      last.after(function(){ 

        return '<textarea name="message" id="message" class="form-control" cols="30" rows="10" placeholder="Bericht"></textarea>';
      });

  }

  

}]);



