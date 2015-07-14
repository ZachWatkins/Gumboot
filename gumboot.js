/*! Gumboot - v1.0.0 - 2015-07-12
* jQuery plugin that extracts key:value pairs from an element and attaches it to said element as a javascript object.
* Copyright 2015 Zach Watkins; Licensed MIT */
;( function( $ ){
	
	$.fn.gumboot = function( options ) {
		
		var settings = $.extend( {
			selector: ".data", separator: ":"
		}, $.fn.gumboot.defaults, options );
		
		// Global variables
		length = this.length;
		
		// Execute and return for chaining
		return this.each( function( index ) {
			
			var data = {},
				$item = $( this );

			$item.find( settings.selector ).each( function() {
				
				var pair = this.innerHTML.trim().split( settings.separator );
				data[ pair[ 0 ].trim() ] = pair[ 1 ].trim();
			} );

			$item.data( "gumboot", data );

			if ( $.isFunction( settings.callback ) ) {
				settings.callback.call( this, settings, index, length );
			}
		} );
	};
	
} )( jQuery );
