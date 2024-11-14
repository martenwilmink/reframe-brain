L.marker([ [[+Location_lat]], [[+Location_lng]] ]).addTo(map);

$('#chapter-[[+id]]').visibility({
    once: false,
    onBottomVisible: function () {
        map.flyTo([ [[+Location_lat]], [[+Location_lng]] ], [[+Location_zoom:default=`14`]]);
        $(this).addClass('active');
    },
    onTopVisibleReverse: function () {
        $(this).removeClass('active');
    }
});
