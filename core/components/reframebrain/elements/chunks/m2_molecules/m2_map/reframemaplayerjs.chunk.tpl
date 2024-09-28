let geoJson[[+layer_title]] = [[+layer_geojson:empty=`[]`]];
let [[+layer_title:lcase]]Layer = L.geoJson(geoJson[[+layer_title]], {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng);
    },
    [[+marker_popup:eq=`1`:then=`
    onEachFeature: addPopup
    `]]
});

mapLayers[ "[[+layer_title]]" ] = [[+layer_title:lcase]]Layer;

[[+show_on_load:eq=`1`:then=`
markers.addLayer([[+layer_title:lcase]]Layer);
`:else=`
markers.checkIn([[+layer_title:lcase]]Layer);
`]]

[[+idx:eq=`1`:then=`
primaryLayer = [[+layer_title:lcase]]Layer;
`]]
