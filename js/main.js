// Quiz
// 1. Application programming interface, a pre-developed set of values and methods to be used by various developers
// 2. The programming langauge it functions in
// 3. using a script to link the specified API
// 4. success: function(data){}
// 5. string
// 6. javascript object notation, using the url and an ajax request, we loop through specified data and call the desired properties.



// CODE TO DISPLAY MAP ON PAGE WITH CODIFY'S COORDINATES
// function initialize(){
// 	var mapProp = {
// 		center: new google.maps.LatLng(37.171438, -122.228258),
// 		zoom: 15,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	}
// 	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
// }
// google.maps.event.addDomListener(window, 'load', initialize)

// CODE TO DISPLAY MAP WITH MARKER
function myMap() {
  var myCenter = new google.maps.LatLng(37.171438, -122.228258);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {
   center: myCenter,
   zoom: 10,
   disableDefaultUI: true,
   mapTypeId: google.maps.MapTypeId.SATELLITE
};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);


   google.maps.event.addListener(marker,'click',function() {
    map.setZoom(20);
    map.setCenter(marker.getPosition());
  });
}

google.maps.event.addDomListener(window, 'load', myMap)


// function bookSearch(){
// 	var search = document.getElementById('search').value
// 	document.getElementById('results').innerHTML = ""
// 	console.log(search)


// 	$.ajax({
// 		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
// 		dataType: "json",	 

// 		success: function(data) {
// 			for(i = 0; i < data.items.length; i++){
// 				console.log(data.items[i].volumeInfo.title)
// 				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
// 			}

// 		},

// 		type: "GET"
// 	});
// }

// document.getElementById('button').addEventListener('click', bookSearch, false)