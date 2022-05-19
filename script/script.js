'use strict';
window.addEventListener('DOMContentLoaded',() => {
    // BURGER MENU 
    const headerBurger = document.querySelector('.header__burger'),
          headerBurgerMenu = document.querySelector('.header-burger__menu');

    function BurgerButton(button){
        button.addEventListener('click',() => {
            BurgerMenu(headerBurgerMenu);       
        });
    }
    function BurgerMenu(burgerMenu){
        burgerMenu.classList.toggle('header-burger__menu-active');
    }
    BurgerButton(headerBurger);
    // TABS (SWIPE)
    const pointsButton = document.querySelectorAll('.points__item'),
          reviewsItem = document.querySelectorAll('.reviews-item');
    function HideReviewsItem(){
        reviewsItem.forEach(item => {
            item.classList.remove('reviews-item__active');
        });
    }
    function ShowReviewsItem(i = 0){
        reviewsItem[i].classList.add('reviews-item__active');
    }
    function isPointsButtonActive(i = 0){
        pointsButton.forEach(item => {
            item.classList.remove('points__item-active');
        });
        pointsButton[i].classList.add('points__item-active');
    }
    HideReviewsItem();
    ShowReviewsItem();

    pointsButton.forEach((item,i) => {
        item.addEventListener('click',event => {
            // let target = event.target;
            isPointsButtonActive(i);
            HideReviewsItem();
            ShowReviewsItem(i);
        });
    });
    
});

