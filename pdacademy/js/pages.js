'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const preload = document.querySelector('.preload');

    function ready() {
        document.querySelector('body').removeAttribute('style');
        preload.remove();
    }

    window.addEventListener("load", ready);

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

    const pageUp = document.querySelector('.pageup');

    const fadeIn = (el, timeout, opacity, visibility, display) => {
        el.style.opacity = opacity || 1;
        el.style.visibility = visibility || 'visible';
        el.style.display = display || 'block';
        el.style.transition = `all ${timeout}ms`;
    };

    const fadeOut = (el, timeout, opacity, visibility) => {
        el.style.opacity = opacity || 0;
        el.style.visibility = visibility || 'hidden';
        el.style.transition = `all ${timeout}ms`;
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

    function videoHeight(classTrigger) {
        const sectionVideo = document.querySelector(classTrigger);
        if (sectionVideo) {
            const videoBlock = sectionVideo.querySelector('iframe');
            const widthVideoBlock = window.getComputedStyle(videoBlock, null).getPropertyValue('width');
            const heightVideoBlock = Math.round(+(widthVideoBlock.slice(0, -2)) * 0.5625);
            sectionVideo.style.height = `${heightVideoBlock}px`;
        }
    }
    videoHeight('.curs__video')
})