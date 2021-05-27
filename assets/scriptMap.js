// const { findLastKey } = require("lodash");

function initMap() {
  var styles = [
    {
      "featureType": "landscape",
      "stylers": [
        { "hue": "#000" },
        { "saturation": -100 },
        { "lightness": 40 },
        { "gamma": 1 }
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        { "hue": "#85754e" },
        { "saturation": 100 },
        { "lightness": 20 },
        { "gamma": 1 }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        { "hue": "#85754e" },
        { "saturation": 100 },
        { "lightness": 20 },
        { "gamma": 1 }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        { "hue": "#85754e" },
        { "saturation": 100 },
        { "lightness": 50 },
        { "gamma": 1 }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        { "hue": "#000" },
        { "saturation": -100 },
        { "lightness": 15 },
        { "gamma": 1 }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        { "hue": "#000" },
        { "saturation": -100 },
        { "lightness": 25 },
        { "gamma": 1 }
      ]
    }
  ];
  // let drag;
  // if ($(window).width() < 796) { drag = false; } else { drag = true; }
  // 22.716401, -100.945632
  const myLatLng = { lat: 22.716401, lng: -100.945632 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    draggable: true,
    scrollwheel: false,
    panControl: false,
    styles: styles,
  });
  console.log(pinUrl);
  const pointerUrl = pinUrl; // set your color pointer here! (pointer-blue/green/yellow/fucsia/purple/turquoise/red/orange.png)
  new google.maps.Marker({
    position: myLatLng,
    icon: pointerUrl,
    map: map,
  });
}