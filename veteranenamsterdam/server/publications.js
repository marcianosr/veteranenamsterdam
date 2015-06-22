Meteor.publish('posts', function() {
  return Posts.find();
});


// Meteor.publish('users', function() {
//   return Users.find({ });
// });

