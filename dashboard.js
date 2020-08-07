const tables = document.querySelectorAll( '.table_element' );
const tablesArray = Array.from( tables );

tablesArray.map( table => {
	table.parentElement.parentElement.parentElement.classList.add( 'show' )
});