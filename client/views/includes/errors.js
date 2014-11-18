Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});


// Defers error my a millisecond to ensure the error is still displayed even if the user is redirected. Might be redundent as I have no redirects when an error is shown, yet.
Template.error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Errors.update(error._id, {$set: {seen: true}});
  });
};