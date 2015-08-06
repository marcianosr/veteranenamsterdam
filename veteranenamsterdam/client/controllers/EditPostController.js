angular.module('VA')
.controller('EditPostController', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {

  $scope.editPost = true;
  $scope.textareaCustom = [];
  $scope.counter = 0; 
	
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


  // _.each($scope.posts.message, function(message){
  //     var last = $('textarea').last();

  //     last.after(function(){ 

  //       return '<p>'+ message +'</p>';
  //     });

  // })


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

    $scope.counter++;
    $scope.textareaCustom.push('textarea' +$scope.counter);
  }

  $scope.deleteTextArea = function(index) { 

    console.log(index)
    // var i = $scope.textareaCustom.splice(index);
    // console.log(i)


    //$('div').remove('.customTextField' + index);

    $scope.textareaCustom.splice(index, 1);

    // $('div').find($('textarea')).closest('button').remove();

    // $($(this)).find($('textarea')).css('background', 'red')
  
  }
  

}]);



