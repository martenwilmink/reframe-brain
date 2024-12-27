<script>
    window.addEventListener('DOMContentLoaded', function() {

        // Wait until ContentBlocks is loaded
        $(document).arrive('body.contentblocks_loaded', {
            fireOnAttributesModification: true,  // Watch for attribute changes
            existing: true,                      // Include existing elements
            onceOnly: false,
        }, function(newElement) {
            // Find Add Place button in MIGX TV
            const $btn = $('#tv100001_items .x-table-layout .x-table-layout-cell:first-child > .x-btn');

            // Watch for Chapter layouts to be added
            $('#contentblocks').arrive('.contentblocks-layout[data-layout*="100001"]', {
                existing: true,
            }, function(newElement) {
                const $settings = $(this).find('> .contentblocks-region-container > .contentblocks-region-settings');
                const $target = $(this).find('> .contentblocks-region-container > .contentblocks-region-content > .contentblocks-region-last');

                // Move content settings into the right layout column
                $target.find('> *').hide();
                $settings.appendTo($target);

                // Inject Add Place button below Place selector
                $settings
                    .find('div > label + div')
                    .after('<button class="add-place contentblocks-field-button big" style="margin-left: 30%; margin-bottom:20px;">Add Place</button>')
                ;
                $(this).find(".add-place").click(function () {
                    $btn.click();

                    //@todo: Can selector be updated with newly created place?
                    $(this).after('<button class="edit-place contentblocks-field-button big" style="margin-left: 10px; margin-bottom:20px;">Edit Place</button>');
                });
                $(this).find(".edit-place").click(function () {
                    //@todo: This doesn't work yet. One does not simply simulate a click action on an ExtJS button element.
                    const $btnMIGX = document.querySelector('#tv100001_items .x-grid3-scroller .x-grid3-row:nth-child(3) .actions a.update');
                    const event = new MouseEvent('click', {
                        'bubbles': true,
                        'cancelable': true,
                    });
                    $btnMIGX.dispatchEvent(event);
                });

                // Change settings label text
                $settings
                    .find('.contentblocks-exposed-fields-wrapper > label')
                    .html(' Map Settings')
                    .prepend('<span class="icon icon-cog"></span>')
                ;
            });
        });
    });
</script>