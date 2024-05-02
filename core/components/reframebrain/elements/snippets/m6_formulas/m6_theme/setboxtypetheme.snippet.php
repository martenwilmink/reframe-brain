<?php
/**
 * @var string $input
 */
switch($input) {
    case stripos($input,'ReframeOrgBasicCard') !== false:
        $box_type = "cards";
        $row_type = "";
        $column_type = "card";
        $grid_settings = "";
        break;
    default:
        return [];
}

return [
    'box_type' => $box_type,
    'row_type' => $row_type,
    'column_type' => $column_type,
    'grid_settings' => $grid_settings,
];