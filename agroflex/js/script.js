'use strict';

//jQery
$(document).ready(function () {   
        $('.distrib__wrapper').click(function () {
                $(this).attr('tabindex', 1).focus();
                $(this).toggleClass('distrib__wrapper_active');
                $(this).find('.distrib__list').slideToggle(500);
        });
        $('.distrib__region').click(function () {
                $('.distrib__cross').toggleClass('distrib__cross_active');
        });        
        $('.distrib__wrapper').focusout(function () {
                $('.distrib__cross').removeClass('distrib__cross_active');
                $(this).removeClass('distrib__wrapper_active');
                $(this).find('.distrib__list').slideUp(500);
        });
        $('.distrib__item').click(function () {
                $('.distrib__cross').remove();
                $(this).parents('.distrib__wrapper').find('.distrib__region').text($(this).text()).after(function() {
                        return '<div class="distrib__cross">'+'<span>'+'</span>'+'<span>'+'</span>'+'</div>';
                });
                $('.distrib__cross').removeClass('distrib__cross_active');             
        });      
});

window.addEventListener('DOMContentLoaded', () => {        
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

        const region = document.querySelectorAll('.distrib__item');
        const contact = document.querySelectorAll('.distrib__contact');
        const regionParent = document.querySelector('.distrib__list');
        const contacts = document.querySelector('.distrib__contacts');

        function hideRegionContacts() {  
                contact.forEach(item => {
                        item.classList.remove('distrib__contacts_active');
                });
                contacts.classList.add('hide');
        }
        
        function showRegionContacts(i) {
                contacts.classList.remove('hide');
                contact[i].classList.add('distrib__contacts_active');
        }
        
        hideRegionContacts();
        
        regionParent.addEventListener('click', (event) => {
                const target = event.target;
                if (target && target.classList.contains('distrib__item')) {
                        region.forEach((item, i) => {
                                if (target == item) {
                                        hideRegionContacts();
                                        showRegionContacts(i);                                        
                                }
                        });
                }
        });

});