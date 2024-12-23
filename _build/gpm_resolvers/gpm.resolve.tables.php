<?php
/**
 * Resolve creating db tables
 *
 * THIS RESOLVER IS AUTOMATICALLY GENERATED, NO CHANGES WILL APPLY
 *
 * @package reframebrain
 * @subpackage build
 *
 * @var mixed $object
 * @var modX $modx
 * @var array $options
 */

if ($object->xpdo) {
    $modx =& $object->xpdo;
    switch ($options[xPDOTransport::PACKAGE_ACTION]) {
        case xPDOTransport::ACTION_INSTALL:
        case xPDOTransport::ACTION_UPGRADE:
            $modelPath = $modx->getOption('reframebrain.core_path', null, $modx->getOption('core_path') . 'components/reframebrain/') . 'model/';
            
            $modx->addPackage('reframebrain', $modelPath, null);


            $manager = $modx->getManager();

            $manager->createObjectContainer('reframeStory');
            $manager->createObjectContainer('reframeStoryPlace');
            $manager->createObjectContainer('reframePlace');

            break;
    }
}

return true;