'use strict';
window.addEventListener('DOMContentLoaded', () => {        
//jQery

        $('.distrib__slider').slick({
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 5,
                dots: true,
                variableWidth:true,
                prevArrow: $('.distrib__prev_btn'),
                nextArrow: $('.distrib__next_btn'),
                responsive: [{
                                breakpoint: 768,
                                settings: {
                                        arrows: false,
                                        centerMode: true,
                                        centerPadding: '40px',
                                        slidesToShow: 3
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        arrows: false,
                                        centerMode: true,
                                        centerPadding: '40px',
                                        slidesToShow: 1
                                }
                        }
                ]
        });

//js

        const tabParent = document.querySelector('.catalog__tabs');
        const tab = document.querySelectorAll('.catalog__tab');
        const content = document.querySelectorAll('.catalog__content');
        const tabTitle = document.querySelectorAll('.catalog__tab-title');
        
        function hideTabContent() {
                content.forEach(item => {
                        item.classList.remove('catalog__content_active');
                });
                tab.forEach(item => {
                        item.classList.remove('catalog__tab_active');
                });
        }
        
        function showTabContent(i = 0) {
                content[i].classList.add('catalog__content_active');
                tab[i].classList.add('catalog__tab_active');
        }
        
        hideTabContent();
        showTabContent();
        
        tabParent.addEventListener('click', (event) => {
                const target = event.target;
                if (target && target.classList.contains('catalog__tab-title')) {
                        tabTitle.forEach((item, i) => {
                                if (target == item) {
                                        hideTabContent();
                                        showTabContent(i);                                        
                                }
                        });
                }
        });

        const pageUp = document.querySelector('.fa-w-16'); 
        window.addEventListener('scroll', ()=>{
                if (window.scrollY > 800){
                        pageUp.classList.remove('hide');
                }
                else{
                        pageUp.classList.add('hide');
                }
        });
        const arrows = document.querySelector('.promo__arrows'); 
        window.addEventListener('scroll', ()=>{
                if (window.scrollY > 100){
                        arrows.classList.add('hide');
                }
                else{
                        arrows.classList.remove('hide');
                }
        }); 
        
        const menuColor = document.querySelector('.menu');
        const menuWrapper = document.querySelector('.menu__wrapper');
        window.addEventListener('scroll', ()=>{
                if (window.scrollY > 50){
                        menuColor.style.cssText = `
                                background-color: rgba(67, 138, 40, 0.7);
                                transform: translateY(-70px);
                        `;
                        menuWrapper.style.cssText = `                        
                                transform: translateY(35px);
                        `;
                }
                else{
                        menuColor.style.cssText = ``;
                        menuWrapper.style.cssText = ``;
                }
        }); 
        const logo = document.querySelector('.menu__logo_img');
        window.addEventListener('scroll', ()=>{
                if (window.scrollY > 50){
                        logo.style.cssText = `
                        opacity: 0;
                `;
                }
                else{
                        logo.style.cssText = `
                        opacity: 1;
                `;
                }
        }); 
        
});

