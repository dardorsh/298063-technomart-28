
/*
	Callback function that is called immediately after JivoChat is loaded
*/

let button = document.querySelector('.chat-btn');

function jivo_onLoadCallback(){
	// Create a DIV element for the label

	button.addEventListener('click', (e) => {
		e.preventDefault();
		jivo_api.open();
	});
};
