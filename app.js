mapboxgl.accessToken = 'pk.eyJ1IjoidmlldG5ndXllbjIyIiwiYSI6ImNrNmljeTl5MDFobXAzbnA2aGJpbWNlZ28ifQ.-lgz3jfRHGla4er4nmxbuA';
//describes location 
let geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [130.850647106420958, -30.41887907506214]
        },
        "properties": {
            "title": "Australia",
            "description": "There are 9 creators in Australia",
            "url": '#Australia'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-102.25525287112055, 40.16341910092053]
        },
        "properties": {
            "title": "United States",
            "description": "There are more 10+ creators in The United States",
            "url": '#UnitedStates'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-113.68103346069734, 60.229770308344925]
        },
        "properties": {
            "title": "Canada",
            "description": "There are more 10+ creators in Canada",
            "url": '#Canada'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.437596447626319, 55.15799432277926]
        },
        "properties": {
            "title": "United Kingdom",
            "description": "There are 10+ creators in the United Kingdom",
            "url": '#UnitedKingdom'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [5.706124013365534, 52.1917290828972]
        },
        "properties": {
            "title": "The Netherlands",
            "description": "There are 9 creators in the Netherlands",
            "url": '#Netherlands',
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7.202763523262558, 53.41720474725679]
        },
        "properties": {
            "title": "Ireland",
            "description": "There are 2 creators Ireland",
            "url": '#Ireland',
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.5396743454817081, 46.96884252035926]
        },
        "properties": {
            "title": "France",
            "description": "There are 7 creators France",
            "url": '#France'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.75591611364922, 38.9460306513735]
        },
        "properties": {
            "title": "Turkey",
            "description": "There is 1 creator Turkey",
            "url": '#Turkey'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.56439592913477, 39.55856045919112]
        },
        "properties": {
            "title": "Spain",
            "description": "There are 2 creators Spain",
            "url": '#Spain'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-63.84656919184333, -34.572140061141525]
        },
        "properties": {
            "title": "Argentina",
            "description": "There are 2 creators in Argentina",
            "url": '#Argentina',
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [11.696898355360867, 43.31114549629981]
        },
        "properties": {
            "title": "Italy",
            "description": "There are 3 creators in Italy",
            "url": '#Italy'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-55.128392108016826, -8.787873913464935]
        },
        "properties": {
            "title": "Brazil",
            "description": "There are 3 creators in Brazil",
            "url": '#Brazil'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19.25503490589682, 44.25092454913995]
        },
        "properties": {
            "title": "Yugoslavia",
            "description": "There is 1 creator in Yugoslavia",
            "url": '#Yugoslavia'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [138.24322900550396, 36.835966080581926]
        },
        "properties": {
            "title": "Japan",
            "description": "There are 2 creators in Japan",
            "url": '#Japan'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-65.81954435330836, 7.225728399851892]
        },
        "properties": {
            "title": "Venezuela",
            "description": "There is 1 creator in Venezuela",
            "url": '#Venezuela'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.92090640652039, 57.14687900424798]
        },
        "properties": {
            "title": "Scotland",
            "description": "There are 4 creators in Scotland",
            "url": '#Scotland'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [18.843762887378567, 53.00685734969413]
        },
        "properties": {
            "title": "Poland",
            "description": "There is 1 creator in Poland",
            "url": '#Poland',
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [18.843762887378567, 53.00685734969413]
        },
        "properties": {
            "title": "Germany",
            "description": "There are 2 creators in Germany",
            "url": '#Germany',
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [4.698095717962371, 50.533987199645864]
        },
        "properties": {
            "title": "Belgium",
            "description": "There is 1 creator in Belgium",
            "url": '#Belgium'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [146.95121800790193, -41.66119391462326]
        },
        "properties": {
            "title": "Tasmania",
            "description": "There is 1 creator in Tasmania",
            "url": '#Tasmania'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [104.62372368278335, 36.01917534296203]
        },
        "properties": {
            "title": "China",
            "description": "There is 1 creator in China",
            "url": '#China'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [114.16565640003715, 22.329220697149985]
        },
        "properties": {
            "title": "Hong Kong",
            "description": "There is 1 creator in Hong Kong",
            "url": '#HongKong'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [103.64115528225435, 46.823627971935124]
        },
        "properties": {
            "title": "Mongolia",
            "description": "There is 1 creator in Mongolia",
            "url": '#Mongolia'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7.641961486776809, 38.5201049547845],
        },
        "properties": {
            "title": "Portugal",
            "description": "There is 1 creator in Portugal",
            "url": '#Portugal'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [23.471319509214297, -31.08365983823224]
        },
        "properties": {
            "title": "South Africa",
            "description": "There are 2 creators in South Africa",
            "url": '#SouthAfrica'
        }
    }
    ]
};


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [20.918129242915494, 35.70187901312021], // starting position [lng, lat] , 
    zoom: 1 // starting zoom
});

//since geojson.features is a array of 4, function is needed to 

// add markers to map
geojson.features.forEach(function (marker) {
    let i = -1;
    if (i > 25) {
        i = -1;
    }
    else {
        // create a HTML element for each feature
        let el = document.createElement('div');
        el.className = 'marker';

        //when click on fly to coordinates
        el.addEventListener('click', function () {
            map.flyTo({
                center: marker.geometry.coordinates,
                zoom: 5
            });
            window.location = marker.properties.url;

            $('#reset').delay(3000).fadeIn(1000);
            $('#next').fadeOut(3000);
        });

        document.getElementById("reset").addEventListener("click", function () {
            map.setZoom(1);
            map.setCenter([20.918129242915494, 35.70187901312021]);
            $(this).fadeOut(1000);
            $('#next').fadeIn(3000);
            i = -1;
        });

        //add event listener for next button
        document.getElementById("next").addEventListener("click", function () {
            i++;
            if (i > 25) {
                map.flyTo({
                    center: marker.geometry.coordinates,
                    zoom: 5
                });
                $(this).fadeOut(1000);
                $('#reset').delay(3000).fadeIn(1000);
            }

            else {
                map.flyTo({
                    center: geojson.features[i].geometry.coordinates,
                    zoom: 5
                });

                window.location = geojson.features[i].properties.url;
                $('#reset').delay(3000).fadeIn(1000);
            }

        });

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(`<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`))

            //<img src="${marker.properties.image}" alt="${marker.properties.iden}">
            .addTo(map);

    }
}); // end Marker settings

// disable map zoom when using scroll

// map.scrollZoom.disable();

// doc ready to use jQuery
$(document).ready(function () {

    // zoom out and reset center with jQuery
    // $('#reset').on('click', function() {
    //     map.setZoom(1);
    //     map.setCenter([23.029373,-33.045321]);
    //     $(this).fadeOut(1000);
    //     i=-1;
    // })
    /*
    $('#next').on('click', function() {
      i++;
      if (i>places.length){
        i=-1;
        map.flyTo(map.center)
      }    
      else {
        map.setZoom(12);
        map.flyTo({
          center: places[i]
        });
       
      }
    })
    */
}); //close doc ready for jQuery
