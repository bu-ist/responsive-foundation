window.onload = function () {
	const tables = document.querySelectorAll( '.table_element' );
	console.log(tables);
	const tablesArray = Array.from( tables );

	tablesArray.map( table => {
		table.parentElement.parentElement.parentElement.classList.add( 'show' )
	});
};