Sightings = new Mongo.Collection("sightings");

SightingsSchema = new SimpleSchema({
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
});

Sightings.attachSchema(SightingsSchema);

Sightings.allow({
  insert: function (userId, doc) {
    return true
  },
  update: function (userId, doc, fieldNames, modifier) {
    return true
  },
  remove: function (userId, doc) {
    return true
  }
});

Sightings.deny({
  insert: function (userId, doc) {
    return false
  },
  update: function (userId, doc, fieldNames, modifier) {
    return false
  },
  remove: function (userId, doc) {
    return false
  }
});

Router.route('/sightings', function () {
  this.render('SightingsList', {
    data: function () {
      return Sightings.find();
    }
  });
}, {
  name: 'SightingsList'
});

Router.route('/sightings/:_id', function () {
  this.render('SightingsView', {
    data: function () {
      return Sightings.findOne({
        _id: this.params._id
      });
    }
  });
}, {
  name: 'SightingsView'
});

Router.route('/sightings/:_id/edit', function () {
  this.render('SightingsEdit', {
    data: function () {
      return Sightings.findOne({
        _id: this.params._id
      });
    }
  });
}, {
  name: 'SightingsEdit'
});
