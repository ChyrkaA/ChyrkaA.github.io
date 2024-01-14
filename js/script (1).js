//jQuery
$(document).on('ready', function () {

	// $('.modal__close').on('click', function () {
	// 	$('.overlay, #thanks').fadeOut();
	// });

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && ($('#thanks').css('display') === 'block')) {
			$('.overlay, #consultation, #order, #thanks').fadeOut();
			console.log('1');
		}
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				surname: "required",
				phone: {
					required: true,
					minlength: 10
				},
				email: {
					required: true,
					email: true
				},
				checkbox: "required",
			},
			messages: {
				name: "Введіть Ваше імя",
				surname: "Введіть Ваше прізвище",
				phone: {
					required: "Введіть Ваш номер телефону",
					minlength: "Зразок: +380ххххххххх (10 цифр)"
				},
				email: {
					required: "Введіть Ваш e-mail",
					email: "Зразок: name@domain.com"
				},
				checkbox: "Потрібно погодитись з політикою конфіденційності",
			}
		});
	}
	validateForms('#connect-form');
	$('input[name=phone]').mask("+38 (999) 999-9999").on('click', function () {
		if ($(this).val() === '+38 (___) ___-____') { //перемещаем принудительно курсор на начало ввода номера
			$(this).get(0).setSelectionRange(5, 5);
		}
	});
});


//js
window.addEventListener('DOMContentLoaded', () => {

	const preload = document.querySelector('.bckg'),
		resume = document.querySelector('.resume'),
		promo = document.querySelector('.promo'),
		portfolio = document.querySelector('.portfolio'),

		user = detect.parse(navigator.userAgent), //подключаемый модуль, для определения браузера устройства

		menu = document.querySelector('.menu'),
		overlay = document.querySelectorAll('.portfolio__overlay'),
		top1 = document.querySelectorAll('.portfolio__descr'),
		btn = document.querySelectorAll('.portfolio__link'),
		hamburger = document.querySelector('.hamburger'),

		arrows = document.querySelector('.promo__arrows'),
		pageUp = document.querySelector('.pageup');

	const form = document.querySelector('#connect-form');
	const modalThanksOverlay = document.querySelector('.overlay');
	const modalThanks = document.querySelector('#thanks');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		if (!this.checkValidity()) {
			return;
		}

		fetch('mailer/smart.php', {
				method: 'POST',
				body: new FormData(this)
			})
			.then(function (response) {
				if (response.ok) {
					form.querySelectorAll('input').forEach(input => {
						input.value = '';
					});
					fadeIn(modalThanks, 1000);
					fadeIn(modalThanksOverlay, 1000);
					form.reset();
				}
			})
			.catch(error => {
				console.log('Error:', error);
			});

		return false;
	});

	const fadeIn = (el, timeout, opacity, visibility, display) => {
		el.style.opacity = opacity || 1;
		el.style.display = display || 'block';
		el.style.visibility = visibility || 'visible';
		el.style.transition = `all ${timeout}ms`;
	};

	const fadeOut = (el, timeout, opacity, visibility) => {
		el.style.opacity = opacity || 0;
		el.style.visibility = visibility || 'hidden';
		el.style.transition = `all ${timeout}ms`;
	};

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 300) {
			fadeOut(arrows, 1000);
		} else {
			fadeIn(arrows, 1000);
		}
		if (window.scrollY >= 800) {
			fadeIn(pageUp, 1000, 0.7);
		} else {
			fadeOut(pageUp, 1000, 0);
		}
	});


	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Safari|Chrome Mobile/i.test(user.browser.name)) { //проверка регулярными выражениями на название браузера
		promo.style.backgroundAttachment = "scroll";
		resume.style.backgroundAttachment = "scroll";
		portfolio.style.backgroundAttachment = "scroll";

	}

	function ready() {
		document.body.style.overflow = '';
		preload.remove();
	}

	window.addEventListener("load", ready);

	function toggleMenuClass(action) {
		menu.classList[action]('active');
		hamburger.classList[action]('hide');
	}

	document.body.addEventListener('click', (e) => {
		if (e.target.closest('.hamburger')) {
			toggleMenuClass('add');
		}
		if (e.target.closest('.menu__close') || e.target.closest('.menu__overlay') || e.target.closest('.menu__item')) {
			toggleMenuClass('remove');
		}
		if (e.target.closest('.modal__close')) {
			fadeOut(modalThanks, 1000, 0);
			fadeOut(modalThanksOverlay, 1000, 0);
		}
	});

	function togglePortfolioClass(target, event, action) {
		target.forEach((item, i) => {
			item.addEventListener(event, () => {
				overlay[i].classList[action]('opacity');
				top1[i].classList[action]('top');
				btn[i].classList[action]('hide');
			});
		});
	}

	togglePortfolioClass(overlay, 'mouseover', 'add');
	togglePortfolioClass(overlay, 'mouseout', 'remove');
	togglePortfolioClass(btn, 'mouseover', 'add');
	togglePortfolioClass(btn, 'mouseout', 'remove');

	function onDisplay(entry) {
		entry.forEach(function (change) {
			if (change.isIntersecting) {
				change.target.classList.add('Delay');
			} else {
				change.target.classList.remove('Delay');
			}
		});
	}
	const elements = document.querySelectorAll('.animate');
	const options = {
		threshold: [0.2]
	};
	const observer = new IntersectionObserver(onDisplay, options);
	for (let elm of elements) {
		observer.observe(elm);
	}
});