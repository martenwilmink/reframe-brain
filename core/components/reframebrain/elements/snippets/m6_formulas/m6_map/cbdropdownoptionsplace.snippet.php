<?php
/**
 * cbDropdownOptionsPlace
 *
 * Snippet tpl for the ContentBlocks dropdown field.
 *
 * @var modX $modx
 * @var object $field
 */

$places = $modx->getCollection('reframePlace');

$options[] = [
    'value' => '',
    'display' => '--- Select place ---',
    'disabled' => true,
];
foreach ($places as $place) {
    $options[] = [
        'value' => $place->id,
        'display' => $place->name,
    ];
}

return json_encode($options);