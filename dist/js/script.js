'use strict';

var watchButton = document.querySelector('.watch__button');
var popup = document.querySelector('.popup');
var popupForm = popup.querySelector('.popup__form');
var popupClose = popup.querySelector('.popup__close');
var popupCheck = popup.querySelector('.popup__checkbox');
var popupSubmit = popup.querySelector('.popup__submit');
var popupSubmitActiveColor = '#559100';
var popupSubmitInactiveColor = '#90ae66';
var blackBackground = document.querySelector('.black-bg');

var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.nav-toggle');

function showPopup () {
  popup.classList.add('popup__opened');
  blackBackground.classList.add('black-bg--opened');
};

function closePopup () {
  popup.classList.remove('popup__opened');
  blackBackground.classList.remove('black-bg--opened');
}

watchButton.addEventListener('click', showPopup);
popupClose.addEventListener('click', closePopup);
blackBackground.addEventListener('click', closePopup);

// Checks if checkbox in popup is pressed
// if yes - submit is light green and enabled
popupCheck.addEventListener('change', function () {
  if (popupCheck.checked) {
    popupSubmit.classList.add('popup__submit--active');
    popupSubmit.disabled = false;
  } else {
    popupSubmit.classList.remove('popup__submit--active');
    popupSubmit.disabled = true;
  }
});

// Submitting form of popup closes popup
// and disables checkbox
popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (popupCheck.checked) {
    closePopup();
    popupCheck.checked = false;
  }
});

// When hamburger is pressed - menu openes
var onNavTogglePress = function () {
  if (navToggle.classList.contains('nav-toggle--closed')) {
    mainNav.classList.add('main-nav--opened');
    navToggle.classList.remove('nav-toggle--closed');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    navToggle.classList.remove('nav-toggle--opened');
    navToggle.classList.add('nav-toggle--closed');
  }
};

navToggle.addEventListener('click', function () {
  onNavTogglePress();
});
