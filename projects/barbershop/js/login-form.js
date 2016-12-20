var popup = document.querySelector('.modal-content');
var loginLink = document.querySelector('.login');
var close = document.querySelector('.modal-content-close');
var form = popup.querySelector('form');
var loginInput = popup.querySelector('input[name=login]');
var passwordInput = popup.querySelector('input[name=password]');
var storage = localStorage.getItem('login');


loginLink.addEventListener("click", function(event) {

    event.preventDefault();
    popup.classList.add('modal-content-show');

    if (storage) {
    	loginInput.value = storage;
    	passwordInput.focus();
    } else {
    	loginInput.focus();
    }

    if ( popup.classList.contains('modal-error') ) {
    	popup.classList.remove('modal-error');
    }

});

close.addEventListener("click", function(event) {

	event.preventDefault();
	popup.classList.remove('modal-content-show');

});

form.addEventListener("submit", function(event) {

	if( !( loginInput.value && passwordInput.value ) ) {
		event.preventDefault();
		popup.classList.add('modal-error');
	} else {
		localStorage.setItem('login', loginInput.value);
	}

});

window.addEventListener("keydown", function(event) {

	if ( event.keyCode == 27 ) {
		if ( popup.classList.contains('modal-content-show') ) {
			popup.classList.remove('modal-content-show');
		}
	}
	
});