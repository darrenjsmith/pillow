/*if (Tips.find().count() === 0) {
  Tips.insert({
    content: "Let's have sex in silence",
    url: "lets-have-sex-in-silence",
    author: "Darren",
    category: "talk"
  });

  Tips.insert({
    content: "Have you had a sexual health check up before, and if so when?",
    url: "have-you-had-a-sexual-health-check-up-before,-and-if-so-when",
    author: "Paul",
    category: "talk"
  });

  Tips.insert({
    content: "What contraception do you use?",
    url: "what-contraception-do-you-use",
    author: "Mark",
    category: "fact"
  });
}/*

/*Meteor.startup(function () {
  if (Tips.find().count() === 0) {
    Tips.insert(sexTips);
  }
});*/

Meteor.startup(function () {
  
  if (Tips.find().count() === 0) {
    
      console.log("Importing private/jsontips.json to db")

      var data = JSON.parse(Assets.getText("jsontips.json"));
    
      console.log("Found file")

      data.forEach(function (item, index, array) {
          Tips.insert(item);
      })
      
      console.log("Done")
  }
})
  