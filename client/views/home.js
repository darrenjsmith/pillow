Template.home.helpers({
  
  randomUrl: function() {

    var tipCollection = [];
    var currentId = this._id;
    var i = 0;
    
    // for each item in Tips, apart from current tip, put the url in tipCollection
    Tips.find().forEach(function (tip) {
      if (tip._id != currentId) {
        tipCollection.push(tip.url);
      }
      i++;
    });
    
    // select random tip from tipCollection
    randomUrl = tipCollection[Math.floor(Math.random() * tipCollection.length)];

    return "/p/" + randomUrl;
  },
  
  totalTips: function () {
    console.log("hello world");
    var noOfTips = Tips.find().count();
    return noOfTips;
  }
  
});