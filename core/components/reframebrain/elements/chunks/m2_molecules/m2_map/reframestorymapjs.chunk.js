window.addEventListener('DOMContentLoaded', function() {
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
    let geoJsonTlichoBoundary = [[$geoJSON_tlicho_boundary:strip]];
    let geoJsonTlichoBoundaryLayer = L.geoJson(geoJsonTlichoBoundary, {
        style: function() {
            return {
                color: '#3388ff',
                weight: 2,
                fill: false,
                dashArray: '0 3',
            }
        }
    });
    mapLayers[ "Tlicho boundary" ] = geoJsonTlichoBoundaryLayer;

    // Add selector to switch between layers
    let layerControl = L.control.layers(tileLayers, mapLayers, {
        position: 'bottomright'
    }).addTo(map);

    // Add all layers to map
    //map.addLayer(mapLayers);

    // Adjust map boundaries to first layer
    map.fitBounds(map.getBounds(), {
        paddingTopLeft: [300, 50],
        paddingBottomRight: [50, 200],
    });

    // Scrollytelling
    $('#chapter-0').visibility({
        once: false,
        onBottomVisible: function () {
            map.flyToBounds(geoJsonTlichoBoundaryLayer, {
                paddingTopLeft: [500, 30],
            });
        }
    });

    // Only activate mousewheel scrolling on focus
    // map.on('focus', function () {
    //     map.scrollWheelZoom.enable();
    // });
    // map.on('blur', function () {
    //     map.scrollWheelZoom.disable();
    // });
});