[[[[+imageJSON:isnot=``:then=`
    ImagePlus?
        &value=`[[+imageJSON]]`
        &options=`w=[[++max_thumb_width]]&q=[[++img_quality]]&zc=1`
        &type=`tpl`
        &tpl=`imgOverview`
`:else=`
    $imgOverviewReframeFallback
`]]]]