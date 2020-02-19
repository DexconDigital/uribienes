function initialize() {

      var mapOptions = {
    zoom: 11,
    scrollwheel: false,
    center: new google.maps.LatLng(6.2368415, -75.6002783)
  };

  var mapOptions2 = {
    zoom: 11,
    scrollwheel: false,
    center: new google.maps.LatLng(6.1895157, -75.616649)
  };

  var mapOptions3 = {
    zoom: 11,
    scrollwheel: false,
    center: new google.maps.LatLng(6.2044746,-75.5704528,20)
  };
  var mapOptions4 = {
    zoom: 11,
    scrollwheel: false,
    center: new google.maps.LatLng(6.156533,-75.626355)
  };

  var map = new google.maps.Map(document.getElementById('googleMap-2'),
      mapOptions);
   
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(6.2368415, -75.6002783),
    map: map,
    icon: 'img/map-marker-icon.png'
  });

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(6.1995157, -75.619649),
    map: map,
    icon: 'img/map-marker-icon.png'
  });

  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(6.2044746,-75.5704528,20),
    map: map,
    icon: 'img/map-marker-icon.png'
  });
  var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(6.156533,-75.626355),
    map: map,
    icon: 'img/map-marker-icon.png'
  });

  infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxHeight:100
  });

  infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxHeight:100
  });

  infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    maxHeight:100
  });
  infowindow4 = new google.maps.InfoWindow({
    content: contentString3,
    maxHeight:100
  });

  marker.addDomListener('click',function(){

    infowindow.open(map, marker);
    infowindow2.close();

  });
  marker2.addDomListener('click',function(){

    infowindow2.open(map, marker);
    infowindow.close();

  })

  marker3.addDomListener('click',function(){

    infowindow3.open(map, marker);
    infowindow.close();

  })
    marker4.addDomListener('click',function(){

    infowindow3.open(map, marker);
    infowindow.close();

  })

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'img/map-marker-icon.png',
    map: map
  });

}
google.maps.event.addDomListener(window, 'load', initialize);














