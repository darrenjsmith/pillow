Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('tips');},
  //for GA
  trackPageView: true
});


// On first load, displays loading template.
Router.onBeforeAction('loading');

// Declares routes. Includes dynamic route example.
Router.map(function() {
  this.route('tipsList', {path: '/tipslist'});
  
  this.route('home', {
    path: '/',
    fastRender: true
  });
  
  this.route('tipPage', { 
    path: '/p/:url',
    data: function() {
      var cursor = Tips.findOne({url: this.params.url});
      cursor = cursor || Tips.findOne({uid: this.params.url});
      return cursor;
    },
    fastRender: true
  });
  
  /*this.route('tipPage', {
    path: '/p/:url',
    data: function() {return Tips.findOne({url: this.params.url}); },
    waitOn: function() {
      console.log('waitOn');
    }
    //data: function() {return Tips.findOne(this.params._id); }
  });*/
  
  /*this.route('tipEdit', {
    path: '/tips/:_id/edit',
    data: function() { return Tips.findOne(this.params._id); }
  });
  this.route('tipSubmit', {
    path: '/submit'
  });
  this.route('loginPage', {path: '/login'});*/
});


/* Router.onAfterAction(function() {
  console.log('onAfterAction is running');
  
  setTimeout(function() {
    console.log('setTimeout is working');
    addthis.layers.refresh();                                

  },0);
}
);*/





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