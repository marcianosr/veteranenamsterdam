ImageExtNotAllowed = "";

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads/"})],
  filter: {
    maxSize: 20, // in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']
    },

    onInvalid: function (message) {

      ImageExtNotAllowed = "WRONG_EXTENSION";

      // TO FIX: Show detailed errors
      

    }
  }
  
});

// Images.deny({
//  insert: function(){
//  return false;
//  },s
//  update: function(){
//  return false;
//  },
//  remove: function(){
//  return false;
//  },
//  download: function(){
//  return false;
//  }
//  });

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});


