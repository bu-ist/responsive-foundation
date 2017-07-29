/**
 * Toggle behavior for navigation / search buttons.
 */
( function ( $ ) {
	var $body = $( 'body' ),
		 $toggle = $( '.js-nav-toggle' ),
		 $toggleitems = $toggle.add( 'nav' ),
		 $searchtoggle = $( '.js-search-toggle' ),
		 $searchitems = $searchtoggle.add( '#quicksearch' );

	$searchtoggle.attr( 'aria-expanded', 'false' )
					 .attr( 'aria-controls', 'quicksearch' );

	$toggle.on( 'click', function ( e ) {
		e.preventDefault();
		$toggleitems.toggleClass( 'is-open' );
		$searchitems.removeClass( 'is-open' );
		$body.toggleClass( 'nav-open' ).removeClass( 'search-open' );
	});

	function toggleSearchPanel( focus ) {
		$toggleitems.removeClass( 'is-open' );

		if( focus === true && ! $( this ).hasClass( 'is-open' ) ){
			setTimeout(function(){
				$( '#q' ).focus();
			}, 100 );
		}

		if ( $searchtoggle.attr( 'aria-expanded' ) === 'false' ) {
			$searchtoggle.attr( 'aria-expanded', 'true' );
		} else {
			$searchtoggle.attr( 'aria-expanded', 'false' );
		}

		$searchitems.toggleClass( 'is-open' );
		$body.toggleClass( 'search-open' ).removeClass( 'nav-open' );
	}

	$searchtoggle.on({
		click: function (e) {
			e.preventDefault();
			toggleSearchPanel( true );
		},
		keypress: function (e) {
			if ( e.keyCode == 13 ) {
				e.preventDefault();
				toggleSearchPanel( false );
			}
		}
	});

} ( jQuery ) );