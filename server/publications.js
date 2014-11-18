Meteor.publish('tips', function() {
  return Tips.find();
});