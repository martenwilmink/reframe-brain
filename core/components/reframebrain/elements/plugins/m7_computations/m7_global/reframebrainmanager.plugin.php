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
    case 'OnManagerPageBeforeRender':

        break;

    case 'OnManagerPageAfterRender':
        // Get processed output of resource
        $output = $modx->controller->content;

        // Feed output to HtmlPageDom
        $dom = new HtmlPageCrawler($output);

        // Do your thing
        $dom->filter('head')
            ->append($modx->getChunk('mgrStoryMapUI')
        );

        $controller->content = $dom->saveHTML();

        break;
}

return;