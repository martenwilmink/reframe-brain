<?php
/**
 * @package ReframeBrain
 */
$xpdo_meta_map['reframeNotePlace']= array (
  'package' => 'reframebrain',
  'version' => '1.1',
  'extends' => 'earthNote',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
  ),
  'fieldMeta' => 
  array (
  ),
  'aggregates' => 
  array (
    'Place' => 
    array (
      'class' => 'reframePlace',
      'local' => 'parent_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
