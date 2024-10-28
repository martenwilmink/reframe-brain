<!DOCTYPE html>
<html id="[[*context_key]]" lang="[[++cultureKey]]">

<head>
    [[[[modifiedIf?
        &subject=`headTheme`
        &operator=`iselement`
        &operand=`chunk`
        &then=`$headTheme`
        &else=`$head`
    ]]]]
    <style>
        .ui.vertical.stripe.segment.white {
            background-color: rgba(255, 255, 255, 0.6);
        }
    </style>
</head>

<body id="[[*alias]]" class="overview storymap">

[[$offCanvasNav]]

<div class="pusher">
    <header id="header" class="masthead without hero [[++navbar_sticky:eq=`0`:then=`non-stick`]]">
        [[[[If?
            &subject=`[[$mainNavTheme]]`
            &operator=`isnull`
            &then=`$mainNav`
            &else=`$mainNavTheme`
        ]]]]
    </header>

    <main id="main" role="main">
        <div id="storymap" style="position:fixed;width:100vw;height:100vh;"></div>

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
        <script>
            window.addEventListener('DOMContentLoaded', function() {
                const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap<\/a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA<\/a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox<\/a>';

                // Load tile layers
                const tilesTerrain = L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}', {
                    attribution: attribution,
                    tileSize: 512,
                    zoomOffset: -1,
                    maxZoom: 18,
                    id: '[[++earthbrain.mapbox_style_terrain_id]]',
                    username: '[[++earthbrain.mapbox_username]]',
                    accessToken: '[[++earthbrain.mapbox_access_token]]'
                });
                const tilesSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}', {
                    attribution: attribution,
                    tileSize: 512,
                    zoomOffset: -1,
                    maxZoom: 18,
                    id: '[[++earthbrain.mapbox_style_satellite_id]]',
                    username: '[[++earthbrain.mapbox_username]]',
                    accessToken: '[[++earthbrain.mapbox_access_token]]'
                });

                const tileLayers = {
                    "Terrain": tilesTerrain,
                    "Satellite": tilesSatellite
                }

                let mapLayers = {};
                let primaryLayer = '';
                let markersById = [];

                // Create map
                const map = new L.Map('storymap', {
                    center: [64.111875, -117.320659],
                    zoom: 8,
                    scrollWheelZoom: true,
                    layers: [tilesTerrain]
                });

                // Load markers with Places
                [[+rows]]

                // Load additional map layers
                let geoJsonTlichoBoundary = [[$geoJSON_tlicho_boundary:strip]];
                let geoJsonTlichoBoundaryLayer = L.geoJson(geoJsonTlichoBoundary, {
                    style: function() {
                        return {
                            color: '#3388ff',
                            weight: 2,
                            fill: false,
                            dashArray: '0 3',
                        }
                    }
                });
                mapLayers[ "Tlicho boundary" ] = geoJsonTlichoBoundaryLayer;

                // Add selector to switch between layers
                let layerControl = L.control.layers(tileLayers, mapLayers, {
                    position: 'bottomright'
                }).addTo(map);

                // Add all layers to map
                //map.addLayer(mapLayers);

                // Adjust map boundaries to first layer
                map.fitBounds(map.getBounds(), {
                    paddingTopLeft: [300, 50],
                    paddingBottomRight: [50, 200],
                });

                // Only activate mousewheel scrolling on focus
                // map.on('focus', function () {
                //     map.scrollWheelZoom.enable();
                // });
                // map.on('blur', function () {
                //     map.scrollWheelZoom.disable();
                // });
            });
        </script>

        <article id="content">

            [[*content]]

        </article>

        [[*neighbors_visibility:eq=`1`:then=`
        <nav id="menu-neighbors" class="ui large fluid two item fitted segment menu">
            [[pdoNeighbors?
                &loop=`1`
                &tplPrev=`neighborNavItemPrev`
                &tplNext=`neighborNavItemNext`
                &tplWrapper=`@INLINE [[+prev]][[+next]]`
                &sortby=`publishedon`
                &sortdir=`asc`
            ]]
        </nav>
        `]]
    </main>

    [[[[modifiedIf?
        &subject=`footerTheme`
        &operator=`iselement`
        &operand=`chunk`
        &then=`$footerTheme`
        &else=`$footer`
    ]]]]
</div>

[[loadAssets? &component=`map`]]
[[loadAssets? &component=`table`]]
[[$script]]

</body>
</html>