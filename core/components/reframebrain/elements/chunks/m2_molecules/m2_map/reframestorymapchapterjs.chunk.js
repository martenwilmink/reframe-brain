flyToPlace(
    $('#chapter-[[+id]]'),
    '[[+Location_lat]]',
    '[[+Location_lng]]',
    '[[+Location_zoom:default=`14`]]',
    [[+Location_geojson:replace=`[[==[ [`:replace=`]]==] ]`:default=`null`]]
);
