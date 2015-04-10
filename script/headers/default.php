<?php
/******************************************************************************
* will@jawdev.com
* mylifeistoast
* github.com/wjustis/mylifeistoast
* /script/headers/default.php
******************************************************************************/

JPage::addCss( 'fonts' );
JPage::addCss( 'common' );
JPage::addCss( 'main' );
JPage::addJs( 'j' );
JPage::addJs( 'background' );
JPage::addJs( 'panels' );

?><!DOCTYPE html>
<html>
<head>
	<title><?=JPage::buildTitle();?></title>
	<link rel='stylesheet' type='text/css' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />
<?=JPage::buildCssJs();?>
</head>
<body>
<canvas id='background'></canvas>
<div id='panels'>
	<div id='panel_left'>
	</div>
	<div id='panel_center'>
		<div id='buttons'>
			<button type='button' id='button_prev' class='ion-arrow-left-b' title='Previous Post'></button>
			<button type='button' id='button_nav' class='ion-navicon' title='Navigation'></button>
			<button type='button' id='button_next' class='ion-arrow-right-b' title='Next Post'></button>
			<button type='button' id='button_comment' class='ion-chatbubbles' title='Comments'></button>
		</div>
<article id='article'>
test
