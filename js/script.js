var formLink = document.querySelector(".to-form-btn");
var formPopup = document.querySelector(".form-popup");
var formClose = document.querySelectorAll(".modal-close");
var userName = document.querySelector(".form-user-name");
var formSubmit = document.querySelector(".form-popup-form");
var userEmail = document.querySelector(".form-user-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

if (formLink) {
  formLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");

    if (storage) {
      userName.value = storage;
      userEmail.focus();
    } else {
      userName.focus();
    }
  });
}

for (let j = 0; j < formClose.length; j++) {
  formClose[j].addEventListener("click", function(evt) {
    const modal = formClose[j].closest('.modal');
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
  });
}

if (formSubmit) {
  formSubmit.addEventListener("submit", function(evt) {
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      formPopup.classList.remove("modal-error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("modal-error");
    } else {
      localStorage.setItem("name", userName.value);
    }
  });
}

window.addEventListener("keydown", function(evt) {
  var currentModal = document.querySelector(".modal.modal-show");
  if (evt.keyCode === 27) {
    if (currentModal) {
      evt.preventDefault();
      currentModal.classList.remove("modal-show");
      currentModal.classList.remove("modal-error");
    }
  }
});

// Cart popup

var cartLink = document.querySelectorAll(".buy-button");
var cartPopup = document.querySelector(".notification-popup");

for (var i = 0; i < cartLink.length; i++) {
  cartLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

// Map popup

var mapLink = document.querySelector(".to-map-btn");
var mapPopup = document.querySelector(".modal-map");

if (mapLink) {
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

// Services slider

var deliveryBtn = document.querySelector(".delivery-btn");
var guaranteeBtn = document.querySelector(".guarantee-btn");
var creditBtn = document.querySelector(".credit-btn");

var delivery = document.querySelector(".delivery-item");
var guarantee = document.querySelector(".quarantee-item");
var credit = document.querySelector(".credit-item");

if (deliveryBtn) {
  deliveryBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    delivery.classList.add("service-item-current");
    guarantee.classList.remove("service-item-current");
    credit.classList.remove("service-item-current");

    deliveryBtn.classList.add("checked-btn");
    guaranteeBtn.classList.remove("checked-btn");
    creditBtn.classList.remove("checked-btn");
  });
}

if (guaranteeBtn) {
  guaranteeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    delivery.classList.remove("service-item-current");
    guarantee.classList.add("service-item-current");
    credit.classList.remove("service-item-current");

    deliveryBtn.classList.remove("checked-btn");
    guaranteeBtn.classList.add("checked-btn");
    creditBtn.classList.remove("checked-btn");
  });
}

if (creditBtn) {
  creditBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    delivery.classList.remove("service-item-current");
    guarantee.classList.remove("service-item-current");
    credit.classList.add("service-item-current");

    deliveryBtn.classList.remove("checked-btn");
    guaranteeBtn.classList.remove("checked-btn");
    creditBtn.classList.add("checked-btn");
  });
}