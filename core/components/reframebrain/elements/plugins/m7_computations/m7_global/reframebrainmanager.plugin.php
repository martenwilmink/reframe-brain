<?php
/**
 * ReframeBrainManager
 *
 * Small tweaks to the MODX backend, to enhance the Reframe experience.
 *
 * @var modX $modx
 * @var modManagerController $controller
 *
 * @package reframebrain
 */

if (!class_exists(\Wa72\HtmlPageDom\HtmlPageCrawler::class)) {
    $modx->log(modX::LOG_LEVEL_ERROR, '[HtmlPageDom] Class not found!');
    return;
}

use \Wa72\HtmlPageDom\HtmlPageCrawler;

$modx->controller->addLexiconTopic('reframebrain:manager');

switch ($modx->event->name) {
    case 'OnManagerPageAfterRender':
        // Abort if not editing a resource
        if (!($modx->resource instanceof modResource)) break;

        // Get processed output of resource
        $output = $modx->controller->content;

        // Feed output to HtmlPageDom
        $dom = new HtmlPageCrawler($output);

        // Target StoryMap pages specifically
        if ($modx->resource->get('template') == 100002)
        {
            $dom->filter('head')
                ->append($modx->getChunk('mgrStoryMapUI')
            );
        }

        $controller->content = $dom->saveHTML();

        break;
}

return;