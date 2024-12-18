<script>

    window.addEventListener('DOMContentLoaded', function() {
        $(document).arrive('#contentblocks .contentblocks-region-container', function() {


            const $btn = $('#tv100001_items .x-table-layout .x-table-layout-cell > .x-btn').clone(true,true);
            //console.log(button);

            const $this = $(this);
            const $settings = $this.find('.contentblocks-region-settings');
            const $target = $this.find('.contentblocks-region-last');

            $target.find('> *').hide();
            $settings.appendTo($target);

            $settings.find('div > label + div')
                .after($btn.css({ "margin-left":"30%" }))
            ;
        });
    });


</script>