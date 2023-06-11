'use strict';

import Swiper from './swiper-bundle.min.js'

window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelectorAll('.menu__item_link');

    menuBtn.forEach(item => {
        item.onmousemove = (e) => {
            item.onclick = () => {
                let circle = document.createElement('div');
                circle.classList.add('click');
                circle.style.left = (e.clientX - item.offsetLeft - 705) + 'px';
                circle.style.top = (e.clientY - item.offsetTop) + 'px';
                item.appendChild(circle);

                setTimeout(() => {
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

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

    const btns = document.querySelectorAll('.curses__accordion_heading');

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            // hideContent();
            const line1 = this.querySelector('.line1');
            const line2 = this.querySelector('.line2');
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            line1.classList.toggle('active_line1');
            line2.classList.toggle('active_line2');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = '400px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    // function hideContent() {
    //     btns.forEach(btn => {
    //         btn.classList.remove('active-style');
    //         btn.nextElementSibling.classList.remove('active-content');
    //         btn.nextElementSibling.style.maxHeight = '0px';
    //     });
    // }

    const pageUp = document.querySelector('.pageup');

    const fadeIn = (el, timeout, opacity, visibility, display) => {
        el.style.opacity = opacity || 1;
        el.style.visibility = visibility || 'visible';
        el.style.display = display || 'block';
        el.style.transition = `opacity ${timeout}ms`;
    };

    const fadeOut = (el, timeout, opacity, visibility) => {
        el.style.opacity = opacity || 0;
        el.style.visibility = visibility || 'hidden';
        el.style.transition = `opacity ${timeout}ms`;
    };

    const logo = document.querySelector('.menu__logo');
    const menuWrapper = document.querySelector('.menu__wrapper');

    window.addEventListener('scroll', () => {

        if (scrollY >= 800) {
            fadeIn(pageUp, 1000, 0.7);
        } else {
            fadeOut(pageUp, 1000, 0);
        }

        if (scrollY >= 200) {
            logo.classList.remove('bigLogo');
            menuWrapper.classList.remove('flex-end');
        } else {
            logo.classList.add('bigLogo');
            menuWrapper.classList.add('flex-end');
        }

    });

    const offlineBtn = document.querySelector('.offline__descr_btn');
    const modal = document.querySelector('#modal-offline');
    const modalThanks = document.querySelector('#modal-thanks');
    const overlay = document.querySelector('.overlay');
    const closeModal = document.querySelector('.modal__close');
    const body = document.querySelector('body');
    const scroll = calcScroll();

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.hidden = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    };

    offlineBtn.addEventListener('click', () => {
        fadeIn(overlay, 300, 1, 'visible');
        fadeIn(modal, 300, 1, 'visible');
        body.style.marginRight = `${scroll}px`;
        body.style.overflowY = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        fadeOut(overlay, 300, 0, 'hidden');
        fadeOut(modal, 300, 0, 'hidden');
        body.style.marginRight = 0;
        body.style.overflowY = 'scroll';
    })

})