angular.module('VA')
.controller('EditPostController', ['$scope', '$meteor', '$stateParams', '$location', function($scope, $meteor, $stateParams, $location) {

  $scope.editPost = true;
  $scope.textareaCustom = [];
  $scope.paragraphs = [];

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

      $location.path('/blog')

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

  // $scope.getPosts = function () { 

  //     _.each($scope.posts.message, function(value){ 
  //         console.log('post: ' + value)

  //     })
  // }

  // $scope.getPosts();

  $scope.checkParagraphs = function() { 


    _.each($('textarea'), function(t){

      if(t.value) {
        $scope.paragraphs.push(t.value)
      }

    });

    return $scope.paragraphs;

  }



  $scope.createTextArea = function () { 

   
    $scope.counter++;
    $scope.textareaCustom.push('textarea' + $scope.counter)

    // $scope.textareaCustom.push('textarea' +$scope.counter);
  }

  $scope.deleteTextArea = function(index) { 

    // var i = $scope.textareaCustom.splice(index);
    // console.log(i)

    console.log($scope.posts.message.length)
    if($scope.textareaCustom.length > 0) { 

        //index = index + $scope.posts.message.length;
        $scope.textareaCustom.splice(index, 1); 
        console.log($scope.textareaCustom)


    }

    console.log('index' + index)

    //$('div').remove('.customTextField' + index);

    $scope.posts.message.splice(index, 1); 

    // $scope.paragraphs.splice(index, 1);

    // $('div').find($('textarea')).closest('button').remove();

    // $($(this)).find($('textarea')).css('background', 'red')
  
  }
  

}]);



