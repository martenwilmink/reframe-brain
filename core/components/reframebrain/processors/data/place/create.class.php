<?php
class reframePlaceCreateProcessor extends modObjectCreateProcessor {
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

    public function afterSave()
    {
        $placeAddress = $this->getProperty('placeAddress');
        $placeLocation = $this->getProperty('placeLocation');
        $personData = $this->getProperty('personData');
        $personAddress = $this->getProperty('personAddress');
        $personLocation = $this->getProperty('personLocation');

        $placeID = $this->object->get('id');

        // Add person, if no existing data was found
//        if ($personData['new'] && !$this->getProperty('createdby'))
//        {
//            // Add address and location to array
//            $personData['personAddress'] = $personAddress;
//            $personData['personLocation'] = $personLocation;
//
//            $response = $this->modx->runProcessor('data/person/create', $personData, $this->earthProcessorProps);
//            if ($response->isError()) {
//                $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
//                return false;
//            }
//            $person = $response->getObject();
//
//            // Set createdby in other objects
//            $placeAddress['createdby'] = $person['id'];
//            $placeLocation['createdby'] = $person['id'];
//
//            // And this object too
//            $this->object->set('createdby', $person['id']);
//        }

        // Save address
        $response = $this->modx->runProcessor('data/address/create', $placeAddress, $this->earthProcessorProps);
        if ($response->isError()) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
            return false;
        }
        $address = $response->getObject();

        // Save location
        $response = $this->modx->runProcessor('data/location/create', $placeLocation, $this->earthProcessorProps);
        if ($response->isError()) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
            return false;
        }
        $location = $response->getObject();
        
        // Save images
        if ($this->getProperty('images'))
        {
            // Create destination folder
            $destPath = 'uploads/img/place/' . $placeID . '/';
            $this->romanesco->runCommand(['mkdir', MODX_BASE_PATH . $destPath]);

            // Image paths are provided as space-separated list
            $images = explode(' ', $this->getProperty('images'));
            $i = 0;

            foreach ($images as $image) {
                $srcPath = str_replace('/assets/../', '', $image);
                $i++;

                // Move image
                $this->romanesco->runCommand(['mv', MODX_BASE_PATH . $srcPath, MODX_BASE_PATH . $destPath]);

                // Create image object
                $imgData = [
                    'class_key' => 'reframeImagePlace',
                    'parent_id' => $placeID,
                    'img' => '',
                    'title' => $this->getProperty('title') . " - $i",
                    'path' => $destPath . basename($srcPath),
                    'createdon' => $this->getProperty('createdon'),
                    'createdby' => $this->getProperty('createdby'),
                ];

                $response = $this->modx->runProcessor('data/image/create', $imgData, $this->earthProcessorProps);
                if ($response->isError()) {
                    $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
                    return false;
                }
                $image = $response->getObject();

                // Set first image as cover image
                if ($i == 1) {
                    $this->object->set('image_id', $image['id']);
                }
            }
        }

        // Save links
        if ($this->getProperty('links'))
        {
            $links = explode("\n", $this->getProperty('links'));
            $links = array_unique($links);
            $links = array_filter($links);
            $i = 0;

            foreach ($links as $link) {
                $linkData = [
                    'class_key' => 'reframeLinkPlace',
                    'parent_id' => $placeID,
                    'url' => $link,
                    'createdon' => $this->getProperty('createdon'),
                    'createdby' => $this->getProperty('createdby'),
                    'pos' => $i++,
                ];

                $response = $this->modx->runProcessor('data/link/create', $linkData, $this->earthProcessorProps);
                if ($response->isError()) {
                    $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
                    return false;
                }
            }
        }

        // Save original message
        if ($this->getProperty('description'))
        {
            $content = $this->modx->getChunk('htmlOriginalMessage', [
                'title' => $this->getProperty('title'),
                'description' => $this->getProperty('description'),
            ]);

            $noteData = [
                'class_key' => 'reframeNotePlace',
                'parent_id' => $placeID,
                'title' => 'Original message',
                'content' => $content,
                'createdon' => $this->getProperty('createdon'),
                'createdby' => $this->getProperty('createdby'),
            ];

            $response = $this->modx->runProcessor('data/note/create', $noteData, $this->earthProcessorProps);
            if ($response->isError()) {
                $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
                return false;
            }
        }

        // Save story details
        if ($this->getProperty('stories') && $this->getProperty('story-details'))
        {
            $noteData = [
                'class_key' => 'reframeNotePlace',
                'parent_id' => $placeID,
                'title' => 'Story details',
                'content' => $this->getProperty('story-details'),
                'createdon' => $this->getProperty('createdon'),
                'createdby' => $this->getProperty('createdby'),
            ];

            $response = $this->modx->runProcessor('data/note/create', $noteData, $this->earthProcessorProps);
            if ($response->isError()) {
                $this->modx->log(modX::LOG_LEVEL_ERROR, $response->getMessage());
                return false;
            }
        }

        // Link place to story
        if ($this->getProperty('story_id')) {
            $placeStoryData = [
                'story_id' => $this->getProperty('story_id'),
                'place_id' => $placeID,
            ];

            $placeStory = $this->modx->newObject('reframeStoryPlace');
            $placeStory->fromArray($placeStoryData);
            $placeStory->save();
        }

        // Update place
        // Todo: not sure if person_id should be the same as the mapper here
        $this->object->set('address_id', $address['id']);
        $this->object->set('location_id', $location['id']);
        $this->object->set('person_id', $person['id'] ?? $this->getProperty('createdby'));
        $this->object->save();

        return parent::afterSave();
    }
}
return 'reframePlaceCreateProcessor';