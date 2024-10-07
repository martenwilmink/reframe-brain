<?php
/**
 * @package ReframeBrain
 */
$xpdo_meta_map['reframePlace']= array (
  'package' => 'reframebrain',
  'version' => '1.1',
  'table' => 'reframe_places',
  'extends' => 'xPDOSimpleObject',
  'inherit' => 'single',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'address_id' => NULL,
    'location_id' => NULL,
    'image_id' => NULL,
    'title' => '',
    'description' => '',
    'createdon' => 0,
    'createdby' => 0,
    'editedon' => 0,
    'editedby' => 0,
    'published' => 1,
    'deleted' => 0,
  ),
  'fieldMeta' => 
  array (
    'address_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
    ),
    'location_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
    ),
    'image_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'attributes' => 'unsigned',
      'phptype' => 'integer',
      'null' => true,
    ),
    'title' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '191',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'description' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'createdon' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'createdby' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
    'editedon' => 
    array (
      'dbtype' => 'int',
      'precision' => '20',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 0,
    ),
    'editedby' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
    'published' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'attributes' => 'unsigned',
      'phptype' => 'boolean',
      'null' => false,
      'default' => 1,
    ),
    'deleted' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'attributes' => 'unsigned',
      'phptype' => 'boolean',
      'null' => false,
      'default' => 0,
    ),
  ),
  'fieldAliases' => 
  array (
    'public' => 'published',
  ),
  'indexes' => 
  array (
    'address_id' => 
    array (
      'alias' => 'address_id',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'address_id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => true,
        ),
      ),
    ),
    'location_id' => 
    array (
      'alias' => 'location_id',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'location_id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => true,
        ),
      ),
    ),
    'createdby' => 
    array (
      'alias' => 'createdby',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'createdby' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
    'published' => 
    array (
      'alias' => 'published',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'published' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'composites' => 
  array (
    'Stories' => 
    array (
      'class' => 'reframeStoryPlace',
      'local' => 'id',
      'foreign' => 'place_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Image' => 
    array (
      'class' => 'reframeImagePlace',
      'local' => 'image_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Images' => 
    array (
      'class' => 'reframeImagePlace',
      'local' => 'id',
      'foreign' => 'parent_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Links' => 
    array (
      'class' => 'reframeLinkPlace',
      'local' => 'id',
      'foreign' => 'parent_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Notes' => 
    array (
      'class' => 'reframeNotePlace',
      'local' => 'id',
      'foreign' => 'parent_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Address' => 
    array (
      'class' => 'earthAddress',
      'local' => 'address_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'Location' => 
    array (
      'class' => 'earthLocation',
      'local' => 'location_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
  'aggregates' => 
  array (
    'CreatedBy' => 
    array (
      'class' => 'modUser',
      'local' => 'createdby',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
    'EditedBy' => 
    array (
      'class' => 'modUser',
      'local' => 'editedby',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
