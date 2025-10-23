
var google;

function init() {
    // Coordinates for All Season Driving School in Mississauga
    // 5428 Tenth Line W, Mississauga, ON L5M 0N1
    var myLatlng = new google.maps.LatLng(43.5890, -79.6441);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // Add marker for the driving school location
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'All Season Driving School',
        icon: {
            url: 'images/loc.png',
            scaledSize: new google.maps.Size(32, 32)
        }
    });

    // Add info window
    var infoWindow = new google.maps.InfoWindow({
        content: '<div style="padding: 10px;"><h5 style="margin: 0 0 5px 0; color: #333;">All Season Driving School</h5><p style="margin: 0; color: #666;">1151 Dundas St W<br>Mississauga, ON L5C 1C6</p></div>'
    });

    // Add click listener to marker
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Add click listener to map to close info window
    map.addListener('click', function() {
        infoWindow.close();
    });
}

// Initialize map when DOM is loaded
google.maps.event.addDomListener(window, 'load', init);