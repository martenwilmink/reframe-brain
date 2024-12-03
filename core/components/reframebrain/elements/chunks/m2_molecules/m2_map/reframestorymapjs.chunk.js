window.addEventListener('DOMContentLoaded', function()
{
    function flyToPlace (chapter, lat, lng, zoom, geoJSON)
    {
        let location = null;
        if (geoJSON !== null) {
            location = L.geoJSON(geoJSON).addTo(map);
        } else {
            location = L.marker([ lat, lng ]).addTo(map);
        }

        function comeFlyWithMe () {
            if (geoJSON !== null) {
                map.flyToBounds(location.getBounds(), zoom);
            } else {
                map.flyTo([ lat, lng ], zoom);
            }
        }

        location.on('click', function() {
            let offset = 30;

            if (chapter.length) {
                $('[id*=chapter-]').visibility('disable callbacks');
                $('html, body').scrollTop(chapter.offset().top - offset);

                comeFlyWithMe();

                map.once('zoomend', function () {
                    $('[id*=chapter-]').visibility('enable callbacks');
                });
            }
        });

        chapter.visibility({
            once: false,
            offset: 130,
            onTopPassed: function () {
                comeFlyWithMe();
                $(this).addClass('active');
            },
            onBottomPassedReverse: function () {
                comeFlyWithMe();
            },
            onTopPassedReverse: function () {
                $(this).removeClass('active');
            }
        });
    }

    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap<\/a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA<\/a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox<\/a>';

    // Load tile layers
    const tilesTerrain = L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}', {
        attribution: attribution,
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 18,
        id: '[[++earthbrain.mapbox_style_terrain_id]]',
        username: '[[++earthbrain.mapbox_username]]',
        accessToken: '[[++earthbrain.mapbox_access_token]]'
    });
    const tilesSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}', {
        attribution: attribution,
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 18,
        id: '[[++earthbrain.mapbox_style_satellite_id]]',
        username: '[[++earthbrain.mapbox_username]]',
        accessToken: '[[++earthbrain.mapbox_access_token]]'
    });

    const tileLayers = {
        "Terrain": tilesTerrain,
        "Satellite": tilesSatellite
    }

    let markers = L.markerClusterGroup.layerSupport({
        maxClusterRadius: 50,
        singleMarkerMode: false,
        disableClusteringAtZoom: 10
    });
    let mapLayers = {};
    let primaryLayer = '';
    let markersById = [];

    // Create map
    const map = new L.Map('storymap', {
        center: [64.111875, -117.320659],
        zoom: 8,
        scrollWheelZoom: true,
        layers: [tilesTerrain]
    });

    // Load markers with Places
    [[+rows]]

    // Load additional map layers
    [[+layers]]

    // Add scale indication
    L.control.scale({
        imperial: false,
        updateWhenIdle: true,
        position: 'bottomright'
    }).addTo(map);

    // Add selector to switch between layers
    L.control.layers(tileLayers, mapLayers, {
        position: 'bottomright'
    }).addTo(map);

    // Add all layers to map
    map.addLayer(markers);

    // Adjust map boundaries to first layer
    map.fitBounds(primaryLayer.getBounds());

    // Offset map center to accommodate content overlay
    map.setActiveArea({
        position: 'absolute',
        top: '0',
        left: '40vw',
        right: '0',
        height: '100vh'
    });

    // Start scrollytelling
    $('#chapter-0').visibility({
        once: false,
        onBottomVisible: function () {
            map.flyToBounds(primaryLayer);
        }
    });

    // Remove initial class from content after hovering
    $('#content').hover(function () {
        $(this).removeClass('initial');
    })

    // Only activate mousewheel scrolling on focus
    // map.on('focus', function () {
    //     map.scrollWheelZoom.enable();
    // });
    // map.on('blur', function () {
    //     map.scrollWheelZoom.disable();
    // });
});
