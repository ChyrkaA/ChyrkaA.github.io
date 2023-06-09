'use strict';

import Swiper from './swiper-bundle.min.js'

window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelectorAll('.menu__item_link');

    menuBtn.forEach(item => {
        item.onmousemove = (e) => {
            item.onclick = () => {
                let circle = document.createElement('div');
                circle.classList.add('click');
                circle.style.left = (e.clientX - item.offsetLeft) + 'px';
                circle.style.top = (e.clientY - item.offsetTop) + 'px';
                item.appendChild(circle);

                let timer = setTimeout(() => {
                    circle.remove()
                }, 1000)
            }
        }
    })

    const swiper = new Swiper('.swiper', {
        spaceBetween: 40,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

    const btns = document.querySelectorAll('.curses__accordion_heading');
    const close = document.querySelectorAll('.curses__accordion_close')

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            hideContent();
            this.classList.add('active-style');
            this.nextElementSibling.classList.add('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = '400px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    close.forEach(item => {
        item.addEventListener('click', hideContent);
    })

    function hideContent() {
        btns.forEach(btn => {
            btn.classList.remove('active-style');
            btn.nextElementSibling.classList.remove('active-content');
            btn.nextElementSibling.style.maxHeight = '0px';
        });
    }

    const pageUp = document.querySelector('.pageup');

    const fadeIn = (el, timeout, opacity, display) => {
        el.style.opacity = opacity || 1;
        el.style.display = display || 'block';
        el.style.transition = `opacity ${timeout}ms`;
    };

    const fadeOut = (el, timeout, opacity) => {
        el.style.opacity = opacity || 0;
        el.style.transition = `opacity ${timeout}ms`;
    };


    window.addEventListener('scroll', () => {

        if (scrollY >= 800) {
            fadeIn(pageUp, 1000, 0.7);
        } else {
            fadeOut(pageUp, 1000, 0);
        }
    })
})