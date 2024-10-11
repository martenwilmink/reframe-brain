<?php
/**
 * migxSaveReframeStoryPlace
 *
 * Aftersave snippet for joint StoryPlace object.
 *
 * @var modX $modx
 * @var array $scriptProperties
 */

$corePath = $modx->getOption('reframebrain.core_path', null, $modx->getOption('core_path') . 'components/reframebrain/');
$reframebrain = $modx->getService('reframebrain','ReframeBrain',$corePath . 'model/reframebrain/', array('core_path' => $corePath));
$corePath = $modx->getOption('earthbrain.core_path', null, $modx->getOption('core_path') . 'components/earthbrain/');
$earthbrain = $modx->getService('earthbrain','EarthBrain',$corePath . 'model/earthbrain/', array('core_path' => $corePath));

if (!($reframebrain instanceof ReframeBrain)) return;
if (!($earthbrain instanceof EarthBrain)) return;

$object = $modx->getOption('object', $scriptProperties);
$properties = $modx->getOption('scriptProperties', $scriptProperties, []);
$configs = $modx->getOption('configs', $properties, '');
$postValues = $modx->getOption('postvalues', $scriptProperties, []);
$co_id = $modx->getOption('co_id', $properties);

$earthbrain->resetNull($object, $properties);

return true;