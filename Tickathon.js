Projects = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Template.body.helpers({
   projects: function () {
    return Projects.find({});
   }
  });
}
