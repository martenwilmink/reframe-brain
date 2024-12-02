let marker_[[+id]] = null;
let geoJSON_[[+id]] = null;

[[+Location_geojson:isnot=``:then=`
geoJSON_[[+id]] = L.geoJSON([[+Location_geojson:replace=`[[==[ [`:replace=`]]==] ]`]]).addTo(map);
geoJSON_[[+id]].on('click', function() {
    var offset = 30;
    var target = $('#chapter-[[+id]]');

    if (target.length) {
        $('[id*=chapter-]').visibility('disable callbacks');
        $('html, body').scrollTop(target.offset().top - offset);

        map.flyToBounds(geoJSON_[[+id]].getBounds(), [[+Location_zoom:default=\`14\`]]);
    
        map.once('zoomend', function () {
            $('[id*=chapter-]').visibility('enable callbacks');
        });
    }
})
`:else=`
marker_[[+id]] = L.marker([ [[+Location_lat]], [[+Location_lng]] ]).addTo(map);
marker_[[+id]].on('click', function() {
    var offset = 30;
    var target = $('#chapter-[[+id]]');

    if (target.length) {
        $('[id*=chapter-]').visibility('disable callbacks');
        $('html, body').scrollTop(target.offset().top - offset);

        map.flyTo([ [[+Location_lat]], [[+Location_lng]] ], [[+Location_zoom:default=`14`]]);
    
        map.once('zoomend', function () {
            $('[id*=chapter-]').visibility('enable callbacks');
        });
    }
})
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
