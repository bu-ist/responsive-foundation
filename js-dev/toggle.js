/**
 * Toggle behavior for navigation / search buttons.
 */
( function ( $ ) {
	var $toggle = $( '.js-nav-toggle' );

	$toggle.on( 'click', function ( e ) {
		e.preventDefault();
		$toggle.toggleClass( 'is-open' );
		$searchitems.removeClass( 'is-open' );
		$( 'body' ).toggleClass( 'nav-open' ).removeClass( 'search-open' );
	});

	var $searchtoggle = $( 'js-search-toggle' );
	var $searchitems = $searchtoggle.add( '#quicksearch' );

	$searchtoggle.on( 'click', function ( e ) {
		e.preventDefault();
		$toggle.removeClass( 'is-open' );

		if( ! $( this ).hasClass( 'is-open' ) ){
			setTimeout(function(){
				$( '#q' ).focus();
			}, 100 );
		}

		$searchitems.toggleClass( 'is-open' );
		$( 'body' ).toggleClass( 'search-open' ).removeClass('nav-open');
	});
} ( jQuery ) );