/**
 * Toggle behavior for navigation / search buttons.
 *
 * @package ResponsiveFoundation
 */

import $ from 'jquery';

export function toggle() {
	const $body = $( 'body' );

	const $toggle = $( '.js-nav-toggle' );

	const $toggleAriaLabelWhenOpen = $toggle.children('.nav-toggle-label-open').text();

	const $toggleAriaLabelWhenClosed = $toggle.children('.nav-toggle-label-closed').text();

	const $toggleitems = $toggle.add( 'nav' );

	const $searchtoggle = $( '.js-search-toggle' );

	const $searchitems = $searchtoggle.add( '#quicksearch' );

	// Add aria attributes for control/expanded if JS is available
	$searchtoggle
		.attr( 'aria-expanded', 'false' )
		.attr( 'aria-controls', 'quicksearch' );
	$toggle
		.attr( 'aria-expanded', 'false' )
		.attr( 'aria-controls', 'primary-nav-menu' );

	$toggle.on( 'click', ( e ) => {
		e.preventDefault();

		if ( $toggle.attr( 'aria-expanded' ) === 'false' ) {
			$toggle.attr( 'aria-expanded', 'true' ).attr( 'aria-label', $toggleAriaLabelWhenOpen );
		} else {
			$toggle.attr( 'aria-expanded', 'false' ).attr( 'aria-label', $toggleAriaLabelWhenClosed );
		}

		$toggleitems.toggleClass( 'is-open' );
		$searchitems.removeClass( 'is-open' );
		$body.toggleClass( 'nav-open' ).removeClass( 'search-open' );
	} );

	function toggleSearchPanel( focus ) {
		$toggleitems.removeClass( 'is-open' );

		if ( focus === true && ! $( this ).hasClass( 'is-open' ) ) {
			setTimeout( () => {
				$( '#q' ).focus();
			}, 100 );
		}

		if ( $searchtoggle.attr( 'aria-expanded' ) === 'false' ) {
			$searchtoggle
				.attr( 'aria-expanded', 'true' )
				.attr( 'aria-label', 'Close search' );
		} else {
			$searchtoggle
				.attr( 'aria-expanded', 'false' )
				.attr( 'aria-label', 'Open search' );
		}

		$searchitems.toggleClass( 'is-open' );
		$body.toggleClass( 'search-open' ).removeClass( 'nav-open' );
	}

	$searchtoggle.on( {
		click( e ) {
			e.preventDefault();
			toggleSearchPanel( true );
		},
		keypress( e ) {
			if ( e.keyCode === 13 ) {
				e.preventDefault();
				toggleSearchPanel( false );
			}
		},
	} );
}
