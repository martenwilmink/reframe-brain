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
                    center: [62.820465286717898, -116.024615364519192],
                    zoom: 11,
                    scrollWheelZoom: false,
                    layers: [tilesTerrain]
                });

                // Load layers with GeoJSON data
                L.marker([62.820465286717898, -116.024615364519192]).addTo(map);
                L.marker([62.820465286717898, -116.024615364519192]).addTo(map);
                L.marker([62.820465286717898, -116.024615364519192]).addTo(map);
                L.marker([62.820465286717898, -116.024615364519192]).addTo(map);

                // Add all layers to map
                //map.addLayer(mapLayers);

                // Adjust map boundaries to first layer
                map.fitBounds(primaryLayer.getBounds(), {
                    padding: [50, 50]
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
        <nav id="menu-neighbors" class="ui large fluid two item menu">
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