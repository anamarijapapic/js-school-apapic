( function () {

	$( '.js-navigation-menu ul li' ).on( 'click', function( e ) {
		e.preventDefault();

		const section = document.querySelector( this.firstChild.getAttribute( 'href' ) );

		window.scrollTo( {
			top: section.offsetTop,
			behavior: 'smooth',
		} );
	} );

	$( window ).on( 'scroll', function() {
		const navigationMenuSections = document.querySelectorAll( '.js-navigation-menu ul li' );

		navigationMenuSections.forEach( function( el ) {
			const section = document.querySelector( el.firstChild.getAttribute( 'href' ) );

			const fromTop = $( document ).scrollTop();

			if ( section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop ) {
				$( el ).addClass( 'active' );
			} else {
				$( el ).removeClass( 'active' );
			}
		} );
	} );

} ) ();
