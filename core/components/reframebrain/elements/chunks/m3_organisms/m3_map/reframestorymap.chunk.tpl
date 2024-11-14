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