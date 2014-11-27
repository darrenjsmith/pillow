Template.tipPage.rendered = function() {
<<<<<<< HEAD
  
  console.log('loading FB & Twitter 123...');

   setTimeout(function() {


     // twitter
     !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

     // fb
     (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=225365587565244&version=v2.0";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

   }, 0);

}

Template.tipPage.helpers({
 
 randomUrl: function() {

   var tipCollection = [];
   var currentId = this._id;
   var i = 0;
   
   // for each item in Tips, apart from current tip, put the url in tipCollection
   Tips.find().forEach(function (tip) {
     if (tip._id != currentId) {
       tipCollection.push(tip);
     }
     i++;
   });
   
   // select random tip from tipCollection
   var randomTip = Math.floor(Math.random() * tipCollection.length);
   var randomUrl = tipCollection[randomTip].url;

   //share(this);

   return "/p/" + randomUrl;
 },

 updateShareButtons: function() {
    share(this);
 }
 
});

function share(tip) {
   if (typeof FB !== "undefined") {
     console.log('FB exists...');
   } else {
     console.log('FB doesnt exists');
   }

   setTimeout(function() { 
     $('#share').html('');
     var urlToShare = 'http://www.pillow.io/p/' + tip.url;
     $('#share').append('<fb:send href="' + urlToShare + '" colorscheme="light"></fb:send><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + urlToShare + '" data-text="' + tip.content + '" data-via="trypillow">Tweet</a>');

     if (typeof twttr !== "undefined")
         twttr.widgets.load(this.firstNode);;

       if (typeof FB !== "undefined")
         FB.XFBML.parse(this.firstNode);
   }, 0);

}
=======
    setTimeout(function() { 

      console.log('loading FB & Twitter...');

      // twitter
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

      // fb
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=225365587565244&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    }, 0);

}

Template.tipPage.helpers({
  
  randomUrl: function() {

    var tipCollection = [];
    var currentId = this._id;
    var i = 0;
    
    // for each item in Tips, apart from current tip, put the url in tipCollection
    Tips.find().forEach(function (tip) {
      if (tip._id != currentId) {
        tipCollection.push(tip);
      }
      i++;
    });
    
    // select random tip from tipCollection
    var randomTip = Math.floor(Math.random() * tipCollection.length);
    var randomUrl = tipCollection[randomTip].url;

    //share(this);

    return "/p/" + randomUrl;
  },

  updateShareButtons: function() {
     share(this);
  }
  
});

function share(tip) {
    if (typeof FB !== "undefined") {
      console.log('FB exists...');
    } else {
      console.log('FB doesnt exists');
    }

    setTimeout(function() { 
      $('#share').html('');
      var urlToShare = 'http://www.pillowtalk.io/p/' + tip.url;
      $('#share').append('<fb:send href="' + urlToShare + '" colorscheme="light"></fb:send><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + urlToShare + '" data-text="' + tip.content + '" data-via="somebody">Tweet</a>');

      if (typeof twttr !== "undefined")
          twttr.widgets.load(this.firstNode);;

        if (typeof FB !== "undefined")
          FB.XFBML.parse(this.firstNode);
    }, 0);

}
>>>>>>> FETCH_HEAD
