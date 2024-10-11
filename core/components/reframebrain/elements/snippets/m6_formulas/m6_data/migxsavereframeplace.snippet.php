<?php
/**
 * migxSaveReframePlace
 *
 * Aftersave snippet for creating / updating a Place.
 *
 * @var modX $modx
 * @var array $scriptProperties
 */

$corePath = $modx->getOption('earthbrain.core_path', null, $modx->getOption('core_path') . 'components/earthbrain/');
$earthbrain = $modx->getService('earthbrain','earthbrain',$corePath . 'model/earthbrain/',array('core_path' => $corePath));

if (!($earthbrain instanceof EarthBrain)) return;

$object = $modx->getOption('object', $scriptProperties);
$properties = $modx->getOption('scriptProperties', $scriptProperties, []);
$configs = $modx->getOption('configs', $properties, '');
$postValues = $modx->getOption('postvalues', $scriptProperties, []);
$co_id = $modx->getOption('co_id', $properties);

$earthbrain->resetNull($object, $properties);
$earthbrain->saveAddress($object, $properties);
$earthbrain->saveLocation($object, $properties);

return '';