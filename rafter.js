Markers = new Meteor.Collection('markers');

if (Meteor.isClient) {
  Meteor.subscribe('markers');
  
  Template.map.rendered = function() {
    L.Icon.Default.imagePath = 'packages/fuatsengul_leaflet/images';
  
    var map = L.map('map', {
      doubleClickZoom: false
    }).setView([49.25044, -123.137], 13);
  
    L.tileLayer.provider('OpenStreetMap').addTo(map);
  
    map.on('dblclick', function(event) {
      Markers.insert({latlng: event.latlng});
    });
  
    var query = Markers.find();
    query.observe({
      added: function(document) {
        var marker = L.marker(document.latlng).addTo(map)
          .on('click', function(event) {
            map.removeLayer(marker);
            Markers.remove({_id: document._id});
          });
      },
      removed: function(oldDocument) {
        layers = map._layers;
        var key, val;
        for (key in layers) {
          val = layers[key];
          if (val._latlng) {
            if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
              map.removeLayer(val);
            }
          }
        }
      }
    });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  
  Meteor.publish("markers", function () {
    return Markers.find();
  });
}
