[[+layer_title:replace=` ==`:toPlaceholder=`title_[[+idx]]`]]

let geoJson[[+title_[[+idx]]]] = [[+layer_geojson:empty=`[]`]];
let [[+title_[[+idx]]]]Layer = L.geoJson(geoJson[[+title_[[+idx]]]], {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng);
    },
    [[+marker_popup:eq=`1`:then=`
    onEachFeature: addPopup
    `]]
});

mapLayers[ "[[+layer_title]]" ] = [[+title_[[+idx]]]]Layer;

[[+show_on_load:eq=`1`:then=`
markers.addLayer([[+title_[[+idx]]]]Layer);
`:else=`
markers.checkIn([[+title_[[+idx]]]]Layer);
`]]

[[+idx:eq=`1`:then=`
primaryLayer = [[+title_[[+idx]]]]Layer;
`]]
