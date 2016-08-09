Meteor.publish('posts', function() {
  return Posts.find({}, { sort: { datetime: -1 } });
});


Meteor.publish('users', function() {

  return Meteor.users.find({  }, {
    fields: {
      'services': false,

      // '_id': false,

    }

  });
});

// Meteor.publish('images', function() {
//     return Images.find({});
//   });
