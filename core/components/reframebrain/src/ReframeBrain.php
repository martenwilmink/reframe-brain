<?php
/**
 * @package reframebrain
 */

namespace FractalFarming\ReframeBrain;

use modX;

class ReframeBrain
{
    /**
     * A reference to the modX instance
     * @var modX $modx
     */
    public modX $modx;

    /**
     * The namespace
     * @var string $namespace
     */
    public string $namespace = 'reframebrain';

    /**
     * A configuration array
     * @var array $config
     */
    public array $config = [];

    /**
     * ReframeBrain constructor
     *
     * @param modX $modx A reference to the modX instance.
     * @param array $config An array of configuration options. Optional.
     */
    function __construct(modX &$modx, array $config = [])
    {
        $this->modx =& $modx;

        $corePath = $this->modx->getOption('reframebrain.core_path', $config, $this->modx->getOption('core_path') . 'components/reframebrain/');
        $assetsUrl = $this->modx->getOption('reframebrain.assets_url', $config, $this->modx->getOption('assets_url') . 'components/reframebrain/');

        $this->config = array_merge([
            'basePath' => $this->modx->getOption('base_path'),
            'corePath' => $corePath,
            'modelPath' => $corePath . 'model/',
            'processorsPath' => $corePath . 'processors/',
            'jsUrl' => $assetsUrl . 'js/',
            'cssUrl' => $assetsUrl . 'css/',
            'assetsUrl' => $assetsUrl,
            'connectorUrl' => $assetsUrl . 'connector.php',
        ], $config);

        $corePath = $this->modx->getOption('earthbrain.core_path', $config, $this->modx->getOption('core_path') . 'components/earthbrain/');
        $earthbrain = $modx->getService('earthbrain','EarthBrain',$corePath . 'model/earthbrain/', array('core_path' => $corePath));

        // Load EarthBrain classes that will be extended first
        $this->modx->loadClass('earthImage', $corePath . 'model/earthbrain/');

        $this->modx->loadClass('reframeStory', $this->config['modelPath'] . 'reframebrain/');
        $this->modx->loadClass('reframePlace', $this->config['modelPath'] . 'reframebrain/');
        $this->modx->loadClass('reframeStoryPlace', $this->config['modelPath'] . 'reframebrain/');
        $this->modx->loadClass('reframeImagePlace', $this->config['modelPath'] . 'reframebrain/');
        $this->modx->loadClass('reframeLinkPlace', $this->config['modelPath'] . 'reframebrain/');
        $this->modx->loadClass('reframeNotePlace', $this->config['modelPath'] . 'reframebrain/');

        $this->modx->addPackage('reframebrain', $this->config['modelPath']);

        // Additional MIGX properties for EarthBrain class
        $earthbrain->addMigxProperties([
            'reframe_places:reframebrain' => [
                'category' => 'place',
            ],
        ]);
    }

}