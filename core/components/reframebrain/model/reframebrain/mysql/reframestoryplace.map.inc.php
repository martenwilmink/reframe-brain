<?php
/**
 * @package ReframeBrain
 */
$xpdo_meta_map['reframeStoryPlace']= array (
  'package' => 'reframebrain',
  'version' => '1.1',
  'table' => 'reframebrain_stories_places',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'story_id' => 0,
    'place_id' => 0,
  ),
  'fieldMeta' => 
  array (
    'story_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
    'place_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
  ),
  'indexes' => 
  array (
    'story_place' => 
    array (
      'alias' => 'story_place',
      'primary' => false,
      'unique' => true,
      'type' => 'BTREE',
      'columns' => 
      array (
        'story_id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
        'place_id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'aggregates' => 
  array (
    'Story' => 
    array (
      'class' => 'reframeStory',
      'local' => 'story_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Place' => 
    array (
      'class' => 'reframePlace',
      'local' => 'place_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
