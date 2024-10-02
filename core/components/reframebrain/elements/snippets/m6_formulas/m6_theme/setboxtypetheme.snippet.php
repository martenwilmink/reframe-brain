<?php
/**
 * @var modX $modx
 * @var string $input
 */

$box_type = null;
switch($input) {
    case stripos($input,'ReframeOrgBasicCard') !== false:
        $box_type = "cards";
        $row_type = "";
        $column_type = "card";
        $grid_settings = "";
        break;
}

if ($box_type) return [
    'box_type' => $box_type,
    'row_type' => $row_type,
    'column_type' => $column_type,
    'grid_settings' => $grid_settings,
];

// Inception
return $modx->runSnippet('setBoxTypeEarth', ['input' => $input]);