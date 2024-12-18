[[+layer_title:replace=` ==`:toPlaceholder=`title_[[+idx]]`]]

let geoJson[[+title_[[+idx]]]] = [[+layer_geojson:empty=`[]`]];
let [[+title_[[+idx]]]]Layer = L.geoJson(geoJson[[+title_[[+idx]]]], {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: L.ExtraMarkers.icon({
                icon: 'marker',
                markerColor: '[[+layer_color:stripString=`#fafafa`:default=`#3388ff`]]',
                shape: 'circle',
                prefix: 'icon',
                svg: true
            })
        });
    },
    style: function() {
        return {
            color: '[[+layer_color:stripString=`#fafafa`:default=`#3388ff`]]',
            weight: [[+line_weight:default=`3`]],
            fill: [[+layer_fill:default=`false`]],
            dashArray: [[+line_dash:default=`null`:prepend=`'`:append=`'`]],
            //opacity: 0.5,
            //fillRule: 'nonzero'
        }
    },
    [[+marker_popup:eq=`1`:then=`
    onEachFeature: addPopup
    `]]
});

mapLayers[ "[[+layer_title]]" ] = [[+title_[[+idx]]]]Layer;

[[If?
    &subject=`[[+show_on_load]]`
    &operator=`eq`
    &operand=`1`
    &then=`markers.addLayer([[+title_[[+idx]]]]Layer);`
    &else=`markers.checkIn([[+title_[[+idx]]]]Layer);`
]]

[[If?
    &subject=`[[+idx]]`
    &operator=`eq`
    &operand=`1`
    &then=`primaryLayer = [[+title_[[+idx]]]]Layer;`
]]
