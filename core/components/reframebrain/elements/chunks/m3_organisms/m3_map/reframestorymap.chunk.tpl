[[cbGetFieldContent?
    &field=`100011`
    &outputSeparator=`,`
    &toPlaceholder=`places`
]]
[[migxLoopCollection?
    &packageName=`reframebrain`
    &classname=`reframePlace`
    &where=`[{"id:IN":[ [[+places]] ]}]`
    &joins=`[{"alias": "Location"}]`
    &tpl=`reframeStoryMapChapterJS`
    &toPlaceholder=`rows`
]]

<div id="storymap"></div>

<script>
    [[$reframeStoryMapJS]]
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
[[loadAssets?
    &component=`custom`
    &js=`assets/components/reframebrain/js/leaflet.activearea.js`
]]