// UsersAccounts = new Mongo.Collection('users');

//Users = new Mongo.Collection('users');

// Meteor.methods({
//     checkIfUserExist: function(clientUserEmail) {
//
//
//     var test = Meteor.users.findOne({"emails.address": clientUserEmail})
//
//     console.log(test)
//
//
//       var serverUserEmail = Meteor.users.findOne({ 'emails.address': clientUserEmail });
//       console.log('client userEmail: ', clientUserEmail)
//       console.log('server userEmail: ', serverUserEmail)
//
//       if (serverUserEmail) {
//
//           alert('found')
//       }
//       else {
//         alert('not found')
//       }
//       // console.log(Meteor.users.findOne({_id: "GGJykSRXJthDxetQR"}))
//
//       //  if (userEmail === Meteor.users.findOne({emails[0].address }))
//     }
//
// });

if(Meteor.isServer) {


    Meteor.methods({
      'validateSignup':function(emailInput){
          console.log('user signup')

          // var user = Meteor.users.findOne({ username: input.username, 'emails.address': input.email});
          var email = Meteor.users.findOne({ 'emails.address': emailInput});

          // console.log(user);
          console.log(email);
          console.log(emailInput);

          if (email) {
            console.log('exist');
            return true;
            throw new Meteor.Error(403, "Dit email adres is al in gebruik.");
          }
          else  {

            console.log('create')
            return false;
          }

          // if(user.username !== input.username) {
          //
          //     console.log('username is niet in gebruik')
          //     errors.push('username is niet in gebruik')
          //     // return input.username + " bestaat niet."
          // }

          // if(user.emails[0].address === input.email) {
          //
          //   console.log('email adres is niet in gebruik')
          //   errors.push('email is niet in gebruik')
          //
          //    return input.email + " bestaat al."
          // }
          //
          // console.log('create')



          //
          // if(email) {
          //
          //   return email + "bestaat al."
          // }


      }

    });

}
