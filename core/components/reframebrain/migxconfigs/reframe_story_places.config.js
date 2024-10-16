{
    "formtabs": [
        {
            "MIGX_id": 1,
            "caption": "Select existing",
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
                    "field": "story_id",
                    "caption": "Story ID",
                    "description": "This points to the story OBJECT.",
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
                    "caption": "Place",
                    "description": "Select existing place. If the place is not on the list, you need to add it first under the 'Places' tab (or under Top menu > ReframeBrain > Story).",
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
                    "inputOptionValues": "@CHUNK tvSelectEarthOption@Place",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                }
            ]
        },
        {
            "MIGX_id": 2,
            "caption": "<i class='icon icon-edit'><\/i> Create \/ Edit",
            "print_before_tabs": "0",
            "pos": "",
            "fields": [
                {
                    "MIGX_id": "",
                    "field": "divider",
                    "caption": "WORK IN PROGRESS",
                    "description": "This tab displays existing data, but modifications will not be saved.",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "option",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "divider",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "Place_type",
                    "caption": "Place type",
                    "description": "What kind of location is (or was) this place?",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "option",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "none",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "@CHUNK tvSelectInputOption@PlaceType",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "Place_title",
                    "caption": "Title",
                    "description": "Does your place or initiative have its own name?",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "text",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "Place_description",
                    "caption": "Description",
                    "description": "What are you able to provide or share, in case of an emergency?",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "richtext",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "Place_address",
                    "caption": "Location",
                    "description": "Describe your location as accurately as possible. Please include at least City \/ Municipality and Province.",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "textarea",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "Place_stories",
                    "caption": "Story(s)",
                    "description": "Please provide some information of the story(s) you are part of.",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "richtext",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "",
                    "default": "",
                    "useDefaultIfEmpty": "0",
                    "pos": ""
                },
                {
                    "MIGX_id": "",
                    "field": "Place_published",
                    "caption": "Public",
                    "description": "When set to 'Yes', this place will be visible to the outside world. When set to 'No', only registered members can see it.",
                    "description_is_code": "0",
                    "inputTV": "",
                    "inputTVtype": "option",
                    "validation": "",
                    "configs": "",
                    "restrictive_condition": "",
                    "display": "",
                    "sourceFrom": "config",
                    "sources": "",
                    "inputOptionValues": "Yes==1||No==",
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
        "migx_add": "Add Place",
        "disable_add_item": "",
        "add_items_directly": "",
        "formcaption": "",
        "update_win_title": "Add Place",
        "win_id": "reframe_story_places",
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
        "getlistwhere": "{\"story_id\":[[+object_id]]}",
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
        "cmptabcaption": "All places inside this story.",
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
            "header": "ID",
            "dataIndex": "Place_id",
            "width": 10,
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
            "header": "Image",
            "dataIndex": "Place_image_id",
            "width": 30,
            "sortable": false,
            "show_in_grid": 1,
            "customrenderer": "",
            "renderer": "this.renderChunk",
            "clickaction": "",
            "selectorconfig": "",
            "renderchunktpl": "[[$migxGridImage? &class=`reframeImagePlace` &img=`[[+Image_img]]` &parent_id=`[[+id]]` &uid=`place_[[+id]]`]]",
            "renderoptions": "",
            "editor": ""
        },
        {
            "MIGX_id": "",
            "header": "Title",
            "dataIndex": "Place_title",
            "width": 80,
            "sortable": false,
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
            "header": "Type",
            "dataIndex": "type",
            "width": 50,
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
            "header": "Location",
            "dataIndex": "Place_address_id",
            "width": 50,
            "sortable": false,
            "show_in_grid": 1,
            "customrenderer": "",
            "renderer": "this.renderChunk",
            "clickaction": "",
            "selectorconfig": "",
            "renderchunktpl": "[[migxLoopCollection? &packageName=`earthbrain` &classname=`earthAddress` &where=`[{\"id\":\"[[+Place_address_id]]\"},{\"deleted:=\":0}]` &tpl=`@CODE:[[+locality]]<br>[[+region]]`]]",
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