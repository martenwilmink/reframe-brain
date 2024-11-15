let marker_[[+id]] = null;
let geoJSON_[[+id]] = null;

[[+Location_geojson:isnot=``:then=`
geoJSON_[[+id]] = L.geoJSON([[+Location_geojson:replace=`[[==[ [`:replace=`]]==] ]`]]).addTo(map);
`:else=`
marker_[[+id]] = L.marker([ [[+Location_lat]], [[+Location_lng]] ]).addTo(map);
`]]

$('#chapter-[[+id]]').visibility({
    once: false,
    offset: 130,
    onTopPassed: function () {
        if (geoJSON_[[+id]] !== null) {
            map.flyToBounds(geoJSON_[[+id]].getBounds(), [[+Location_zoom:default=`14`]]);
        } else {
            map.flyTo([ [[+Location_lat]], [[+Location_lng]] ], [[+Location_zoom:default=`14`]]);
        }
        $(this).addClass('active');
    },
    onBottomPassedReverse: function () {
        if (geoJSON_[[+id]] !== null) {
            map.flyToBounds(geoJSON_[[+id]].getBounds(), [[+Location_zoom:default=`14`]]);
        } else {
            map.flyTo([ [[+Location_lat]], [[+Location_lng]] ], [[+Location_zoom:default=`14`]]);
        }
    },
    onTopPassedReverse: function () {
        $(this).removeClass('active');
    }
});
