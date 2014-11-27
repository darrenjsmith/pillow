Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('tips');},
  //for GA
  trackPageView: true
});


// Declares routes. Includes dynamic route example.
Router.map(function() {
  this.route('tipsList', {path: '/tipslist'});
  this.route('home', {path: '/'});
  console.log(this.params);
  this.route('tipPage', {
    path: '/p/:url',
    data: function() {return Tips.findOne({url: this.params.url}); },
    //waitOn: function() {return [IRLibLoader.load('//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-546c601a6e9972e6')]}
    //data: function() {return Tips.findOne(this.params._id); }
    });
  /*this.route('tipEdit', {
    path: '/tips/:_id/edit',
    data: function() { return Tips.findOne(this.params._id); }
  });
  this.route('tipSubmit', {
    path: '/submit'
  });
  this.route('loginPage', {path: '/login'});*/
});

// Function to check if user is logged in, and displays accessDenied template if not. It also waits whilst Meteor is running LoggingIn.
/*var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
      pause();
  }
}*/

/*var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}*/

// On first load, displays loading template.
Router.onBeforeAction('loading');

// Check if user is logged in and admin before tipSubmit is loaded.
// Router.onBeforeAction(requireLogin, {only: 'tipSubmit'});
// Router.onBeforeAction(isAdmin, {only: 'tipSubmit'});

// Check if user is logged in and admin before tipEdit is loaded.
// Router.onBeforeAction(requireLogin, {only: 'tipEdit'});
// Router.onBeforeAction(isAdmin, {only: 'tipEdit'});

// Clears errors so that navigating to another page will make these errors vanish forever.
// Router.onBeforeAction(function() { clearErrors() });


//check out in the future for animation.

    // animate old content out using
    // http://daneden.github.io/animate.css/
    // Use: global
    /*animateContentOut: function() {
        $('#content').removeClass("animated fadeIn fadeInRight");
        $('footer').addClass("hide");
    }*/