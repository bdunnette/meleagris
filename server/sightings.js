Meteor.publish("sightings", function () {
  return Sightings.find();
});

// Add access points for `GET`, `POST`, `PUT`, `DELETE`
HTTP.publish({
  collection: Sightings
}, function (data) {
  // this.userId, this.query, this.params
  return Sightings.find({});
});