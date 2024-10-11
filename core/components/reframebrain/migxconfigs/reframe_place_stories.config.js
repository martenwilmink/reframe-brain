{
    "formtabs": [
        {
            "MIGX_id": 1,
            "caption": "Stories",
            "print_before_tabs": "0",
            "pos": "",
            "fields": [
                {
                    "MIGX_id": "",
                    "field": "id",
                    "caption": "ID",
                    "description": "",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "number",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "none",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "place_id",
                    "caption": "Place ID",
                    "description": "This points to the place object.",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "number",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "none",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "story_id",
                    "caption": "Story",
                    "description": "If the story is not on the list, you need to add it first under the 'Stories' tab (or under Top menu > ReframeBrain > Story).",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "listbox",
                    "validation": "",
                    "configs": {
                        "typeAhead": "true",
                        "typeAheadDelay": "400"
                    },
                    "restrictive_condition": "",
                    "display": "",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "@CHUNK tvSelectEarthOption@Story",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                }
            ]
        }
    ],
    "contextmenus": "update||duplicate",
    "actionbuttons": "addItem",
    "columnbuttons": "",
    "extended": {
        "migx_add": "Add to Story",
        "disable_add_item": "",
        "add_items_directly": "",
        "formcaption": "",
        "update_win_title": "Select Story",
        "win_id": "reframe_place_stories",
        "maxRecords": "",
        "addNewItemAt": "top",
        "media_source_id": "",
        "multiple_formtabs": "",
        "multiple_formtabs_label": "",
        "multiple_formtabs_field": "",
        "multiple_formtabs_optionstext": "",
        "multiple_formtabs_optionsvalue": "",
        "actionbuttonsperrow": 4,
        "winbuttonslist": "",
        "extrahandlers": "",
        "filtersperrow": 4,
        "packageName": "reframebrain",
        "classname": "reframeStoryPlace",
        "task": "",
        "getlistsort": "id",
        "getlistsortdir": "DESC",
        "sortconfig": "",
        "gridpagesize": 30,
        "use_custom_prefix": "0",
        "prefix": "",
        "grid": "",
        "gridload_mode": 2,
        "check_resid": 0,
        "check_resid_TV": "",
        "join_alias": "",
        "has_jointable": "yes",
        "getlistwhere": "{\"place_id\":[[+object_id]]}",
        "joins": [
            {
                "alias": "Story"
            },
            {
                "alias": "Place"
            }
        ],
        "hooksnippets": {
            "beforesave": "migxVerifyReframeStoryPlace",
            "aftersave": "migxSaveReframeStoryPlace"
        },
        "cmpmaincaption": "ReframeBrain",
        "cmptabcaption": "All stories this place belongs to.",
        "cmptabdescription": "",
        "cmptabcontroller": "",
        "winbuttons": "",
        "onsubmitsuccess": "",
        "submitparams": ""
    },
    "columns": [
        {
            "MIGX_id": "",
            "header": "ID",
            "dataIndex": "id",
            "width": 10,
            "sortable": true,
            "show_in_grid": 0,
            "customrenderer": "",
            "renderer": "",
            "clickaction": "",
            "selectorconfig": "",
            "renderchunktpl": "",
            "renderoptions": "",
            "editor": ""
        },
        {
            "MIGX_id": "",
            "header": "Story",
            "dataIndex": "story_id",
            "width": 50,
            "sortable": true,
            "show_in_grid": 1,
            "customrenderer": "",
            "renderer": "this.renderChunk",
            "clickaction": "",
            "selectorconfig": "",
            "renderchunktpl": "[[migxLoopCollection? &packageName=`reframebrain` &classname=`reframeStory` &where=`{\"id\":\"[[+story_id]]\"}` &joins=`[{\"alias\":\"Resource\"}]` &tpl=`@CODE: [[+Resource_pagetitle]]`]]",
            "renderoptions": "",
            "editor": ""
        },
        {
            "MIGX_id": "",
            "header": "Category",
            "dataIndex": "category",
            "width": 80,
            "sortable": true,
            "show_in_grid": 1,
            "customrenderer": "",
            "renderer": "",
            "clickaction": "",
            "selectorconfig": "",
            "renderchunktpl": "",
            "renderoptions": "",
            "editor": ""
        },
        {
            "MIGX_id": "",
            "header": "deleted",
            "dataIndex": "deleted",
            "width": "",
            "sortable": "false",
            "show_in_grid": "0",
            "customrenderer": "",
            "renderer": "",
            "clickaction": "",
            "selectorconfig": "",
            "renderchunktpl": "",
            "renderoptions": "",
            "editor": ""
        }
    ],
    "category": ""
}