<div id="[[+map_id:default=`map-[[+unique_idx]]`]]" class="map"></div>

<script>
    [[$reframeMapJS]]
</script>

[[loadAssets? &component=`map`]]
[[loadAssets?
    &component=`custom`
    &css=`[
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css",
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"
    ]`
    &js=`[
        "https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster-src.js",
        "https://unpkg.com/leaflet.markercluster.layersupport@2.0.1/dist/leaflet.markercluster.layersupport.js"
    ]`
]]