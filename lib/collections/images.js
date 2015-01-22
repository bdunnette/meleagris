imagesStore = new FS.Store.GridFS("images", {
  // mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB
  // mongoOptions: {...},  // optional, see note below
  // transformWrite: myTransformWriteFunction, //optional
  // transformRead: myTransformReadFunction, //optional
  // maxTries: 1, // optional, default 5
  // chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file). Default: 2MB. Reasonable range: 512KB - 4MB
});

Images = new FS.Collection("images", {
  stores: [imagesStore]
});

Images.allow({
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

Images.deny({
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
