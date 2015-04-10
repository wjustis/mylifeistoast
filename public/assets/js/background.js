/******************************************************************************
* will@jawdev.com
* mylifeistoast
* github.com/wjustis/mylifeistoast
* /public/assets/js/background.js
******************************************************************************/

function BackgroundCanvasEl( x, y, r, a ) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.a = a;
};

function BackgroundCanvas( dom_id ) {

	var self = this;
	var m_canvas = JDOM.el( dom_id );
	var m_ctx = m_canvas.getContext( '2d' );
	var m_width = 0;
	var m_height = 0;
	var i = 0;

	var m_elements = [];
	var x, y, r, a;
	for( i = 0; i < this.COUNT; i++ ) {
		x = Math.random();
		y = this.MIN_Y+Math.random()*( this.MAX_Y-this.MIN_Y );
		r = this.MIN_R+Math.random()*( this.MAX_R-this.MIN_R );
		a = this.MIN_A+Math.random()*( this.MAX_A-this.MIN_A );
		m_elements.push( new BackgroundCanvasEl( x, y, r, a ) );
	}
	
	this.resize = function() {
		m_width = m_canvas.offsetWidth;
		m_height = m_canvas.offsetHeight;
		m_canvas.width = m_width;
		m_canvas.height = m_height;
		this.render();
	};

	this.clear = function() {
		m_ctx.clearRect( 0, 0, m_width, m_height );
	};

	this.render = function() {
		var el;
		var pi2 = 2*Math.PI;
		for( i = 0; i < this.COUNT; i++ ) {
			el = m_elements[i];
			m_ctx.beginPath();
			m_ctx.arc( el.x*m_width, el.y*m_height, el.r, 0, pi2 );
			m_ctx.fillStyle = "rgba("+this.RGB+","+el.a+")";
			m_ctx.fill();
		}
	};

	J( window ).listen( 'resize', function() { self.resize(); } );
	this.resize();

};

BackgroundCanvas.prototype.COUNT	= 50;
BackgroundCanvas.prototype.RGB		= '204,0,0';
BackgroundCanvas.prototype.MIN_Y	= 0.2;
BackgroundCanvas.prototype.MAX_Y	= 0.9;
BackgroundCanvas.prototype.MIN_R	= 20;
BackgroundCanvas.prototype.MAX_R	= 150;
BackgroundCanvas.prototype.MIN_A	= 0.1;
BackgroundCanvas.prototype.MAX_A	= 0.3;

var g_background_canvas = null;
J( window ).listen( 'load', function() {
	g_background_canvas = new BackgroundCanvas( 'background' );
} );
