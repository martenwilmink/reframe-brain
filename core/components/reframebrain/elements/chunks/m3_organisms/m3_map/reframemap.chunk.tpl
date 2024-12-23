<div id="[[+map_id:default=`map-[[+unique_idx]]`]]" class="map"></div>

<script>
    [[$reframeMapJS]]
</script>

[[loadAssets? &component=`map`]]
[[loadAssets?
    &component=`custom`
    &css=`[
        "assets/components/reframebrain/css/MarkerCluster[[+minify]][[+cache_buster_css:empty=``]].css",
        "assets/components/reframebrain/css/MarkerCluster.Default[[+minify]][[+cache_buster_css:empty=``]].css",
        "assets/components/reframebrain/css/leaflet.extra-markers[[+minify]][[+cache_buster_css:empty=``]].css"
    ]`
    &js=`[
        "assets/components/reframebrain/js/leaflet.markercluster-src[[+minify]][[+cache_buster_js:empty=``]].js",
        "assets/components/reframebrain/js/leaflet.markercluster.layersupport[[+minify]][[+cache_buster_js:empty=``]].js",
        "assets/components/reframebrain/js/leaflet.extra-markers[[+minify]][[+cache_buster_js:empty=``]].js"
    ]`
]]