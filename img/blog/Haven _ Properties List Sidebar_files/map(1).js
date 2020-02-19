function initialize() {
      var mapOptions = {
    zoom: 10,
    scrollwheel: false,
    center: new google.maps.LatLng(6.2368415, -75.6002783)
  };
      var mapOptions2 = {
    zoom: 10,
    scrollwheel: false,
    center: new google.maps.LatLng(6.1895157, -75.616649)
  };

  var map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);


  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'img/map-marker.png',
    map: map
  });

  var map2 = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions2);


  var marker2 = new google.maps.Marker({
    position: map2.getCenter(),
    icon: 'img/map-marker.png',
    map: map
  });

}
google.maps.event.addDomListener(window, 'load', initialize);



























