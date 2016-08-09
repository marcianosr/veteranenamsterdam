Posts = new Mongo.Collection('posts');

// allow only to insert and edit posts when logged in!
Posts.allow({
  insert: function(userId, doc) {
    /*
    	only allow posting if you are logged in and prevent creating and filling in other fields
		It's like the fillable array in PHP.
    */

    if(userId && _.contains(_.keys(doc), 'title', 'intro', 'slug', 'message', 'image_id')){

    	return _.without(_.keys(doc), 'title', 'intro', 'message', 'slug', 'date', 'datetime', 'author', 'image_id').length === 0;
    }
    else {

    	return false;
    }
  },

  update: function(userId, doc) {
  		return !! userId
 	// if(userId && _.contains(_.keys(doc), 'title', 'intro', 'message')){

  //   	return _.without(_.keys(doc), 'title', 'intro', 'message', 'date', 'author').length === 0;
  //   }
  //   else {

  //   	return false;
  //   }
  }
});


Posts.deny({


// set denial options
})
