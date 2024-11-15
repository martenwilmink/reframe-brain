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
        [[[[modifiedIf?
            &subject=`mainNavTheme`
            &operator=`iselement`
            &operand=`chunk`
            &then=`$mainNavTheme`
            &else=`$mainNav`
        ]]]]
    </header>

    <main id="main" role="main">
        [[$reframeStoryMap]]

        <article id="content" class="initial">
            [[*content]]
        </article>

        [[[[If?
            &subject=`[[*neighbors_visibility]]`
            &operator=`eq`
            &operand=`1`
            &then=`$neighborsNav`
        ]]]]
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