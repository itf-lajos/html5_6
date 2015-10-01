/* A poziíó feldolgozása.
function processPosition( pos ) {
    console.log( pos );
}

// Pillanatnyi tartózkodási hely lekérése.
navigator.geolocation.getCurrentPosition( processPosition ); */

function initMap() {
//    console.log( "initmap started" );
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

//      infoWindow.setPosition(pos);
//      infoWindow.setContent('Itt vagyok, sziasztok!');
//        console.log( infoWindow );
      map.setCenter(pos);
        // Saját jelőlő.
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Jelenlegi pozícióm.'
        });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

// A folyamat állása.
function changeProgress( progress ) {
    if( !progress ) {
        progress = document.querySelector( ".progress-value" ).value;
    }
    // Reguláris kifejezésekkel eltávolítjuk a nem kívánt karaktereket.
    progress = progress.replace( /,/g, ".");
    progress = progress.replace( /[^0-9\.]/g, "");
//    progress = progress.replace( "A", "");
//    console.log(progress);
    progress = parseFloat(progress);
//    progress = parseInt(progress, 10);
    if( !progress || isNaN(progress) )
        return;
    var bar = document.querySelector( " .progress .progress-bar" );
    bar.style.width = progress+"%";
}

// Késleltetett megjelenítés (ezred másodpercben).
function showModal() {
    $( "#myModal" ).modal( "show" );
}
setTimeout(showModal, 5000);    // Így nem indul el azonnal
// setTimeout(showModal(), 5000);    // Így azonnal elindul

/*
setTimeout( function() {
    $( "#myModal" ).modal( "show" );
}, 5000 );
*/

// Popover beállítása
$('#popover1').popover();

