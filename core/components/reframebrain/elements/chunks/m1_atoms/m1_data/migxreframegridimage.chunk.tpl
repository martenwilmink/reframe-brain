[[migxLoopCollection
    :replace=`"source": [[++earthbrain.img_source]]=="source": 1`
    :replace=`"src": "=="src": "/uploads/img/[[+class:replaceRegex=`^[a-z]+Image`:lcase]]/[[+parent_id]]/`
    :toPlaceholder=`img_[[+uid]]`
    ?
    &packageName=`earthbrain`
    &classname=`earthImage`
    &where=`[{"class_key":"[[+class]]"},{"parent_id":"[[+parent_id]]"},{"deleted:=":0}]`
    &tpl=`@CODE:[[+img]]`
    &limit=`1`
    &sortConfig=`[{"sortby":"pos","sortdir":"ASC"}]`
]]
<img src="[[ImagePlus? &options=`w=480` &value=`[[+img_[[+uid]]]]`]]" style="max-width:100%;height:auto;">