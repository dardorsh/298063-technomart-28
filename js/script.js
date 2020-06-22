var formLink = document.querySelector(".to-form-btn");
var formPopup = document.querySelector(".form-popup");
var formClose = formPopup.querySelector(".modal-close");
var userName = formPopup.querySelector(".form-user-name");
var formForm = formPopup.querySelector(".form-popup-form");
var userEmail = formPopup.querySelector(".form-user-email");

var isStorageSupport = true;
var storage = ""; 

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");

    if (storage) {
        userName.value = storage;
        userEmail.focus ();
    } else {
        userName.focus();
    }
});

formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    formPopup.classList.remove("modal-error");
});

formForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        formPopup.offsetWidth = formPopup.offsetWidth;
        formPopup.classList.add("modal-error");
    } else {
        localStorage.setItem("name", userName.value);
    }
});

window.addEventListener ("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (formPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            formPopup.classList.remove("modal-show");
            formPopup.classList.remove("modal-error");
        }
    }
});

var cartLink = document.querySelectorAll(".buy-button");
var cartPopup = document.querySelector(".notification-popup");
var cartClose = cartPopup.querySelector(".modal-close");

for (var i=0; i < cartLink.length; i++) 
    cartLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });


cartPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

window.addEventListener ("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
            cartPopup.classList.remove("modal-error");
        }
    }
});