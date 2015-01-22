Meteor.publish("images", function () {
  return Images.find();
});

// Add access points for `GET`, `POST`, `PUT`, `DELETE`
HTTP.publish({
  collection: Images
}, function (data) {
  // this.userId, this.query, this.params
  return Images.find({});
});