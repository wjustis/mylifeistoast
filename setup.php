<?php

$JFRAME_SETTINGS = [

	'mysql-host'	=> 'localhost',
	'mysql-user'	=> 'blog',
	'mysql-pass'	=> 'MDvaCTJcfVsAa26yt3fz',
	'mysql-db'		=> 'blog',

	'path'			=> dirname( __FILE__ ).'/',
	'path-css'		=> 'public/assets/css/',
	'path-img'		=> 'public/assets/img/',
	'path-js'		=> 'public/assets/js/',

	'path-url'		=> 'mylifeistoast.com/',
	'path-url-sub'	=> '',
	'path-url-css'	=> 'assets/css/',
	'path-url-img'	=> 'assets/img/',
	'path-url-js'	=> 'assets/js/',

	'path-lib'		=> 'script/lib/',
	'path-headers'	=> 'script/headers/',
	'path-pages'	=> 'script/pages/',
	'path-partials'	=> 'script/partials/',
	'path-footers'	=> 'script/footers/',

	'page-default'	=> 'index',
	'page-error'	=> 'error',
	'title-core'	=> 'My Life is Toast',
	'title-sep1'	=> ' &nbsp;&raquo;&nbsp; ',
	'title-sep2'	=> ' &nbsp;&nbsp;&bull;&nbsp;&nbsp; ',

	'timezone'		=> 'America/Denver',
	'debug'			=> true,

];

require_once( "jframe/jframe.php" );

?>
