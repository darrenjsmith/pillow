Template.tipItem.helpers({
  
  // If user owns this post OR is an admin
  /*ownPost: function() {
    if (this.userId == Meteor.userId())
    {return true;}
    else if (Roles.userIsInRole(Meteor.userId(), ['admin']))
    {return true;}
    else
    {return false;}
  },
  // Outdated helper to link to url of tip. Should delete.
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }*/
});

console.log('test');

// previously used ownPost function
/*
ownPost: function() {
    return this.userId == Meteor.userId();
  }*/