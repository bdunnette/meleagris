Template.SightingsEdit.helpers({
  onDelete: function () {
    return function (result) {
      //when record is deleted, go back to record listing
      Router.go('SightingsList');
    };
  },
});

Template.SightingsEdit.events({

});

Template.SightingsEdit.rendered = function () {

};

AutoForm.hooks({
  updateSightingsForm: {
    onSuccess: function (operation, result, template) {
      Router.go('SightingsView', {
        _id: template.data.doc._id
      });
    },
  }
});