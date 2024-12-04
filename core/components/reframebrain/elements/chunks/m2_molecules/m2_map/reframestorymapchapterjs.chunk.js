flyToPlace([[+id]], {
    [[+Location_lat:prepend=`lat: `:append=`,`]]
    [[+Location_lng:prepend=`lng: `:append=`,`]]
    [[+Location_zoom:prepend=`zoom: `:append=`,`]]
    [[+Location_geojson:prepend=`geoJSON: `:replace=`[[==[ [`:replace=`]]==] ]`]]
});
