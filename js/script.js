'use strict';

var watchButton = document.querySelector('.watch__button');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close');
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

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('nav-toggle--closed')) {
    mainNav.classList.add('main-nav--opened');
    navToggle.classList.remove('nav-toggle--closed');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    navToggle.classList.remove('nav-toggle--opened');
    navToggle.classList.add('nav-toggle--closed');
  }
});
