$(document).ready(function(){

	/* initialize main vars */
	geocoder = new google.maps.Geocoder();
	
	/*initialize maps on flat page*/
		load("flat_map", 49.839683, 24.029717, 7);
		addMarker(49.839683, 24.029717, "Квартира 1", "ул. Городоцкая 16");
	/*end initialize maps on flat page*/

});

/* main vars */
	var geocoder;
	var map;
	var myLatlng;
	var myOptions;
	var markersArray = new Array();
	var infowindow = null;	

function load(id, lat, lng, zoom) {
        myLatlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
    	myOptions = {zoom: zoom, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP};
    	map = new google.maps.Map(document.getElementById(id), myOptions);
}

function addMarker(lat, lng, name, address){
	  var point = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
      var marker = new google.maps.Marker({position:point, map:map});
      var html = '<div style="overflow:hidden;">'+
      				'<h5>'+name+'</h5>'+
      				'<span>'+address+'</span>'+
      			 '</div>';
      google.maps.event.addListener(marker, 'click', function() {

      	console.log(infowindow);

      	if (infowindow) {
       		infowindow.close();
	  	}
	    
       	infowindow = new google.maps.InfoWindow({content: html});
      	infowindow.open(map, marker);
      });
      markersArray.push(marker);
    return marker;
}

