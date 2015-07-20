Meteor.publish('posts', function() {
  return Posts.find({}, { reactive: false });
});


Meteor.publish('users', function() {

  return Meteor.users.find({  }, {
    fields: {
      'services': false,

      // '_id': false,

    }

  });
});

Meteor.publish('images', function() {
    return Images.find({});
  });
