/******************************************************************************
* will@jawdev.com
* mylifeistoast
* github.com/wjustis/mylifeistoast
* /public/assets/js/j.js
******************************************************************************/

function JDomFuncs() {}
var JDOM = new JDomFuncs();
JDomFuncs.prototype.el = function( ref ) {
	if( typeof ref === "string" ) return document.getElementById( ref );
	else return ref;
};

function JEL( node ) {
	this.node = JDOM.el( node );
};
function J( node ) { return new JEL( node ); }

JEL.prototype.listen = function( name, callback ) {
	var self = this;
	if( this.node.attachEvent ) this.node.attachEvent( 'on'+name, function() { callback.call( self.node ); } );
	else if( this.node.addEventListener ) this.node.addEventListener( name, callback, false );
	return this;
};

JEL.prototype.attr = function( key, val ) {
	if( !this.node.hasAttribute ) return false;
	else if( val ) {
		this.node.setAttribute( key, val );
		return this;
	} else if( !this.node.hasAttribute( key ) ) return false;
	else return this.node.getAttribute( key );
};

JEL.prototype.remove = function() {
	this.node.parentNode.removeChild( this.node );
	return this;
};
