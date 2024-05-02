<?php
/**
 * Merge JSON configurations for GPM into single config file.
 *
 * It uses the script from EarthBrain, to avoid duplicate code.
 */

include_once 'merge-json.config.php';
include_once MODX_BASE_PATH . 'packages/earthbrain/_build/merge-json.php';

return true;