<?php
class reframePlaceUpdateProcessor extends modObjectUpdateProcessor {
    public $classKey = 'reframePlace';
    public $languageTopics = array('reframebrain:default');

    /** @var EarthBrain $earthbrain */
    public $earthbrain;

    /** @var ReframeBrain $reframebrain */
    public $reframebrain;
    
    /** @var Romanesco $romanesco */
    public $romanesco;

    private array $earthProcessorProps;
    private array $reframeProcessorProps;

    public function initialize()
    {
        $corePath = $this->modx->getOption('earthbrain.core_path', null, $this->modx->getOption('core_path') . 'components/earthbrain/');
        $this->earthbrain = $this->modx->getService('earthbrain','EarthBrain',$corePath . 'model/earthbrain/',array('core_path' => $corePath));
        $corePath = $this->modx->getOption('reframebrain.core_path', null, $this->modx->getOption('core_path') . 'components/reframebrain/');
        $this->reframebrain = $this->modx->getService('reframebrain','ReframeBrain',$corePath . 'model/reframebrain/',array('core_path' => $corePath));
        $corePath = $this->modx->getOption('romanescobackyard.core_path', null, $this->modx->getOption('core_path') . 'components/romanescobackyard/');
        $this->romanesco = $this->modx->getService('romanesco','Romanesco',$corePath . 'model/romanescobackyard/',array('core_path' => $corePath));

        $this->earthProcessorProps = ['processors_path' => $this->earthbrain->config['processorsPath']];
        $this->reframeProcessorProps = ['processors_path' => $this->reframebrain->config['processorsPath']];

        return parent::initialize();
    }

    public function beforeSet()
    {
        $placeAddress = $this->getProperty('placeAddress');
        $placeLocation = $this->getProperty('placeLocation');

        // Save address
        $response = $this->modx->runProcessor('data/address/update', $placeAddress, $this->earthProcessorProps);
        if ($response->isError()) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
            return false;
        }
        $address = $response->getObject();

        // Save location
        $response = $this->modx->runProcessor('data/location/update', $placeLocation, $this->earthProcessorProps);
        if ($response->isError()) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
            return false;
        }
        $location = $response->getObject();

        $this->object->set('address_id', $address['id']);
        $this->object->set('location_id', $location['id']);

        return parent::beforeSet();
    }
}
return 'reframePlaceUpdateProcessor';