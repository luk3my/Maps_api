function initMap(){
  // map options
  var options = {
    zoom:10,
    center:{lat:-27.4698, lng:153.0251}
  }

  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);


  // add marker

  var icon = {
  url: "img/omkr.png", // url
  scaledSize: new google.maps.Size(50, 50), // scaled size
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};

 var marker = new google.maps.Marker({
   position:{lat:-27.5667, lng:153.1333},
   map:map,
   icon: icon


 });

  var infoWindow = new google.maps.InfoWindow({
    content:'<<h1>Rochedale</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });

}
