window.onload = function () {
	const tables = document.querySelectorAll( '.table_element' );
	const tablesArray = Array.from( tables );

	tablesArray.map( table => {
		table.parentElement.parentElement.parentElement.classList.add( 'show' )
	});

	const titles = document.querySelectorAll( '.section_title' );
	const titlesArray = Array.from( titles );

	titlesArray.map( title => {
		let classFromTitle = title.innerText.replace(/[^\w\s]/gi, '').replace(/\s/g, "-").toLowerCase();
		title.classList.add( classFromTitle );
	} );
};