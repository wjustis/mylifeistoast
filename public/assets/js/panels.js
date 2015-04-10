/******************************************************************************
* will@jawdev.com
* mylifeistoast
* github.com/wjustis/mylifeistoast
* /public/assets/js/panels.js
******************************************************************************/

function PanelFuncs() {
	this.comments = null;
	this.comments_showing = false;
	this.nav = null;
	this.nav_showing = false;
};
var Panels = new PanelFuncs();

PanelFuncs.prototype.init = function() {
	this.comments = J( 'panel_left' );
	this.nav = J( 'panel_right' );
	J( 'button_nav' ).listen( 'click', function() { Panels.toggleNav(); } );
};

PanelFuncs.prototype.toggleNav = function() {
	if( this.nav_showing ) this.nav.attr( 'class', 'inactive' );
	else this.nav.attr( 'class', 'active' );
	this.nav_showing = !this.nav_showing;
};

J( window ).listen( "load", function() {
	Panels.init();
} );
