(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Toggle behavior for navigation / search buttons.
 */
( function ( $ ) {
	var $body = $( 'body' ),
		 $toggle = $( '.js-nav-toggle' ),
		 $toggleitems = $toggle.add( 'nav' ),
		 $searchtoggle = $( '.js-search-toggle' ),
		 $searchitems = $searchtoggle.add( '#quicksearch' );

	// Add aria attributes for control/expanded if JS is available
	$searchtoggle.attr( 'aria-expanded', 'false' ).attr( 'aria-controls', 'quicksearch' );
	$toggle.attr( 'aria-expanded', 'false' ).attr( 'aria-controls', 'primary-nav-menu' );

	$toggle.on( 'click', function ( e ) {
		e.preventDefault();

		if ( $toggle.attr( 'aria-expanded' ) === 'false' ) {
			$toggle.attr( 'aria-expanded', 'true' )
					 .attr( 'aria-label', 'Close menu' );
		} else {
			$toggle.attr( 'aria-expanded', 'false' )
					 .attr( 'aria-label', 'Open menu' );
		}

		$toggleitems.toggleClass( 'is-open' );
		$searchitems.removeClass( 'is-open' );
		$body.toggleClass( 'nav-open' ).removeClass( 'search-open' );
	});

	function toggleSearchPanel( focus ) {
		$toggleitems.removeClass( 'is-open' );

		if( focus === true && ! $( this ).hasClass( 'is-open' ) ){
			setTimeout( function(){
				$( '#q' ).focus();
			}, 100 );
		}

		if ( $searchtoggle.attr( 'aria-expanded' ) === 'false' ) {
			$searchtoggle.attr( 'aria-expanded', 'true' ).attr( 'aria-label', 'Close search' );
		} else {
			$searchtoggle.attr( 'aria-expanded', 'false' ).attr( 'aria-label', 'Open search' );
		}

		$searchitems.toggleClass( 'is-open' );
		$body.toggleClass( 'search-open' ).removeClass( 'nav-open' );
	}

	$searchtoggle.on({
		click: function ( e ) {
			e.preventDefault();
			toggleSearchPanel( true );
		},
		keypress: function ( e ) {
			if ( e.keyCode === 13 ) {
				e.preventDefault();
				toggleSearchPanel( false );
			}
		}
	});

} ( jQuery ) );
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1kZXYvdG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBUb2dnbGUgYmVoYXZpb3IgZm9yIG5hdmlnYXRpb24gLyBzZWFyY2ggYnV0dG9ucy5cbiAqL1xuKCBmdW5jdGlvbiAoICQgKSB7XG5cdHZhciAkYm9keSA9ICQoICdib2R5JyApLFxuXHRcdCAkdG9nZ2xlID0gJCggJy5qcy1uYXYtdG9nZ2xlJyApLFxuXHRcdCAkdG9nZ2xlaXRlbXMgPSAkdG9nZ2xlLmFkZCggJ25hdicgKSxcblx0XHQgJHNlYXJjaHRvZ2dsZSA9ICQoICcuanMtc2VhcmNoLXRvZ2dsZScgKSxcblx0XHQgJHNlYXJjaGl0ZW1zID0gJHNlYXJjaHRvZ2dsZS5hZGQoICcjcXVpY2tzZWFyY2gnICk7XG5cblx0Ly8gQWRkIGFyaWEgYXR0cmlidXRlcyBmb3IgY29udHJvbC9leHBhbmRlZCBpZiBKUyBpcyBhdmFpbGFibGVcblx0JHNlYXJjaHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKS5hdHRyKCAnYXJpYS1jb250cm9scycsICdxdWlja3NlYXJjaCcgKTtcblx0JHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKS5hdHRyKCAnYXJpYS1jb250cm9scycsICdwcmltYXJ5LW5hdi1tZW51JyApO1xuXG5cdCR0b2dnbGUub24oICdjbGljaycsIGZ1bmN0aW9uICggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoICR0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnICkgPT09ICdmYWxzZScgKSB7XG5cdFx0XHQkdG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnIClcblx0XHRcdFx0XHQgLmF0dHIoICdhcmlhLWxhYmVsJywgJ0Nsb3NlIG1lbnUnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnIClcblx0XHRcdFx0XHQgLmF0dHIoICdhcmlhLWxhYmVsJywgJ09wZW4gbWVudScgKTtcblx0XHR9XG5cblx0XHQkdG9nZ2xlaXRlbXMudG9nZ2xlQ2xhc3MoICdpcy1vcGVuJyApO1xuXHRcdCRzZWFyY2hpdGVtcy5yZW1vdmVDbGFzcyggJ2lzLW9wZW4nICk7XG5cdFx0JGJvZHkudG9nZ2xlQ2xhc3MoICduYXYtb3BlbicgKS5yZW1vdmVDbGFzcyggJ3NlYXJjaC1vcGVuJyApO1xuXHR9KTtcblxuXHRmdW5jdGlvbiB0b2dnbGVTZWFyY2hQYW5lbCggZm9jdXMgKSB7XG5cdFx0JHRvZ2dsZWl0ZW1zLnJlbW92ZUNsYXNzKCAnaXMtb3BlbicgKTtcblxuXHRcdGlmKCBmb2N1cyA9PT0gdHJ1ZSAmJiAhICQoIHRoaXMgKS5oYXNDbGFzcyggJ2lzLW9wZW4nICkgKXtcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQoICcjcScgKS5mb2N1cygpO1xuXHRcdFx0fSwgMTAwICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAkc2VhcmNodG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJyApID09PSAnZmFsc2UnICkge1xuXHRcdFx0JHNlYXJjaHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApLmF0dHIoICdhcmlhLWxhYmVsJywgJ0Nsb3NlIHNlYXJjaCcgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNlYXJjaHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKS5hdHRyKCAnYXJpYS1sYWJlbCcsICdPcGVuIHNlYXJjaCcgKTtcblx0XHR9XG5cblx0XHQkc2VhcmNoaXRlbXMudG9nZ2xlQ2xhc3MoICdpcy1vcGVuJyApO1xuXHRcdCRib2R5LnRvZ2dsZUNsYXNzKCAnc2VhcmNoLW9wZW4nICkucmVtb3ZlQ2xhc3MoICduYXYtb3BlbicgKTtcblx0fVxuXG5cdCRzZWFyY2h0b2dnbGUub24oe1xuXHRcdGNsaWNrOiBmdW5jdGlvbiAoIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0b2dnbGVTZWFyY2hQYW5lbCggdHJ1ZSApO1xuXHRcdH0sXG5cdFx0a2V5cHJlc3M6IGZ1bmN0aW9uICggZSApIHtcblx0XHRcdGlmICggZS5rZXlDb2RlID09PSAxMyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0b2dnbGVTZWFyY2hQYW5lbCggZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG59ICggalF1ZXJ5ICkgKTsiXX0=
