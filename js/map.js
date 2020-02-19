function initialize() {
      var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(3.4661621, -76.5310012)
  };

  var map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);


  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'img/map-marker.png',
    tittle:'Nuestra oficina',
    map: map
  });

}
google.maps.event.addDomListener(window, 'load', initialize);




























