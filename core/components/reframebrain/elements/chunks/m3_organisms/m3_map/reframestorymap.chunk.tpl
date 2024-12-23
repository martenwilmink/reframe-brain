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
[[cbGetFieldContent?
    &field=`100001`
    &wrapTpl=`rawRows`
    &tpl=`reframeMapLayerJS`
    &toPlaceholder=`layers`
]]

<div id="storymap"></div>

<script>
    [[$reframeStoryMapJS]]
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
        "assets/components/reframebrain/js/leaflet.activearea[[+minify]][[+cache_buster_js:empty=``]].js",
        "assets/components/reframebrain/js/leaflet.extra-markers[[+minify]][[+cache_buster_js:empty=``]].js"
    ]`
]]
