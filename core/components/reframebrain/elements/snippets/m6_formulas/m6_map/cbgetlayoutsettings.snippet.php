<?php
/**
 * cbGetLayoutSettings snippet
 *
 * Retrieve the rendered settings of a specified layout.
 *
 * @var modX $modx
 * @var array $scriptProperties
 */

// Use the current resource if it's available
$resource = isset($modx->resource) ? $modx->resource : false;

// If we have a requested resource...
if ($scriptProperties['resource'] ?? false) {
    // ... check if it is the same one as the current, and only load the requested resource if it isn't
    if ($resource instanceof modResource || $resource instanceof \MODX\Revolution\modResource) {
        if ($scriptProperties['resource'] != $resource->get('id')) {
            $resource = $modx->getObject('modResource', (int)$scriptProperties['resource']);
        }
    }
    // ... or grab the requested resource anyway
    else {
        $resource = $modx->getObject('modResource', (int)$scriptProperties['resource']);
    }
}

// Make sure we have a resource or end here
if (!$resource) {
    return '';
}

//$corePath = $modx->getOption('earthbrain.core_path', null, $modx->getOption('core_path') . 'components/earthbrain/');
//$earthbrain = $modx->getService('earthbrain','EarthBrain',$corePath . 'model/earthbrain/',array('core_path' => $corePath));
//$corePath = $modx->getOption('reframebrain.core_path', null, $modx->getOption('core_path') . 'components/reframebrain/');
//$reframebrain = $modx->getService('reframebrain','reframeBrain',$corePath . 'model/reframebrain/',array('core_path' => $corePath));
//
//if (!($earthbrain instanceof EarthBrain)) return;
//if (!($reframebrain instanceof ReframeBrain)) return;

$layoutID = $modx->getOption('layout', $scriptProperties, 0, true);
$tpl = $modx->getOption('tpl', $scriptProperties, false, true);
$outputSeparator = $modx->getOption('outputSeparator', $scriptProperties, false, true);
$toPlaceholder = $modx->getOption('toPlaceholder', $scriptProperties, false, true);

$output = [];

$properties = $resource->get('properties');
$layouts = json_decode($properties['contentblocks']['content'], true);

foreach ($layouts as $layout) {
    if ($layout['layout'] != $layoutID) continue;
    if (!$placeID = $layout['settings']['place_id'] ?? false) continue;

    $place = $modx->getObject('reframePlace', ['id' => $placeID]);
    $location = $place->getOne('Location');

    // Convert GeoJSON array back to JSON
    $geoJSON = $location->get('geojson') ?? false;
    if ($geoJSON) {
        $geoJSON = json_encode($location->get('geojson'));
    }

    $output[] = $modx->getChunk($tpl, [
        'id' => $placeID,
        'name' => $place->get('name'),
        'description' => $place->get('description'),
        'icon' => $layout['settings']['marker_icon'] ?? $place->get('icon'),
        'color' => $layout['settings']['marker_color'] ?? $place->get('color'),
        'Location_lat' => $location->get('lat'),
        'Location_lng' => $location->get('lng'),
        'Location_zoom' => $layout['settings']['zoom_level'] ?? $location->get('zoom'),
        'Location_geojson' => $geoJSON,
    ]);
}

$output = implode($outputSeparator, $output);

if ($toPlaceholder) {
    $modx->setPlaceholder($toPlaceholder, $output);
    return '';
}
return $output;