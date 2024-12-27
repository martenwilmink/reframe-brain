flyToPlace([[+id]], {
    lat: [[+Location_lat:default=`null`]],
    lng: [[+Location_lng:default=`null`]],
    zoom: [[+Location_zoom:default=`14`]],
    geoJSON: [[+Location_geojson:replace=`[[==[ [`:replace=`]]==] ]`:default=`null`]],
    markerIcon: '[[+icon:default=`marker`]]',
    markerColor: '[[+color:stripString=`#fafafa`:default=`#[[++theme_color_primary]]`]]'
});
