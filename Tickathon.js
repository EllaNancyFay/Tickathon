if (Meteor.isClient) {

  Template.body.helpers({
    projects: [
    { text: "This is project 1" },
    { text: "This is project 2" },
    { text: "This is project 3" }
    ]
  });
}
