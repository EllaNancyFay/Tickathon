Projects = new Mongo.Collection("projects");

if (Meteor.isClient) {

  Template.body.helpers({

    projects: function () {
      return Projects.find({}, {sort: {createdAt: -1}});
    }
  });

    Template.body.events({
      "submit .new-project": function (event) {

        var text = event.target.text.value;

        Projects.insert({
          text: text,
          createdAt: new Date()
        });

        event.target.text.value = "";

        return false;
      }
    });
}  

