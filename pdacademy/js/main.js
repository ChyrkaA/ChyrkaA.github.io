'use strict';

import Swiper from './swiper-bundle.min.js'

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
                this.nextElementSibling.style.maxHeight = '450px';
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

    const offlineBtn = document.querySelector('.offline__descr_btn');
    const modal = document.querySelector('#modal-offline');
    const modalThanks = document.querySelector('#modal-thanks');
    const overlay = document.querySelector('.overlay');
    const closeModal = document.querySelectorAll('.modal__close');
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
        openModal(modal);
    });

    function closeModals(trigger) {
        fadeOut(overlay, 300, 0, 'hidden');
        fadeOut(trigger, 300, 0, 'hidden');
        body.style.marginRight = 0;
        body.style.overflowY = 'scroll';
    }

    function openModal(trigger) {
        fadeIn(overlay, 300, 1, 'visible');
        fadeIn(trigger, 300, 1, 'visible');
        body.style.marginRight = `${scroll}px`;
        body.style.overflowY = 'hidden';
    }

    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            if (closeBtn.closest('#modal-offline')) {
                closeModals(modal);
            } else {
                closeModals(modalThanks);
            }

        })
    })


    $('form').submit(function (e) { //обращение ко всем формам "form". Если нужна конкретная форма, обращаемся через ее класс или идентификатор. submit - когда все условия выполнены, тогда функция выполняется
        e.preventDefault(); //стандартное действие браузера отменяется (в данном случае, отмена перезагрузки страницы)

        // if (!$(this).valid()) { //Если наша форма не прошла валидацию то выполнение кода прекращается
        //     return;
        // }

        $.ajax({ //метод для отправки данных на сервер
            type: "POST", //указываем, что мы хотим сделать с данными, получить, или отправить. В данном случае, отправить
            url: "mailer/smart.php", //указываем путь к обработчику отправки данных
            data: $(this).serialize() //Данные, которые отправляем на сервер. Сейчас работаем с тем, с что есть в данной форме, через this. serialize подготовка перед отправкой на сервер
        }).done(function () { //если сервер принял данные, выполнена операция успешно, то дальше выполняем следующую функцию
            $(this).find("input").val(""); //внутри формы, с которой работаем, находим все значения input и очищаем их значения методом .val("")

            closeModals(modal);
            openModal(modalThanks);

            setTimeout(() => {
                closeModals(modalThanks);
            }, 5000);

            $('form').trigger('reset'); //все формы на сайте должны очиститься методом .trigger('reset')
        });
        return false;
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
    videoHeight('.about__video')
    videoHeight('.curs__video')

})