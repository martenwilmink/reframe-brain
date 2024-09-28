[[[[cbHasFields?
    &field=`[[++earthbrain.cb_field_map_id]]`
    &then=`loadAssets? &component=`map``
]]]]

[[[[-cbHasFields?
    &field=`[[++earthbrain.cb_field_map_id]]`
    &then=`loadScrollable`
]]]]

[[loadAssets?
    &component=`custom`
    &js=`[
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster-src.js",
        "https://unpkg.com/leaflet.markercluster.layersupport@2.0.1/dist/leaflet.markercluster.layersupport.js"
    ]`
]]
