//jQuery
$(document).ready(function(){
        $(window).scroll(function() {	//обрабатываем окно браузера
                if ($(this).scrollTop()>300){	//если страница опустилась ниже на 800 единиц
                        $('.promo__arrows').fadeOut();	//то появляется кнопка прокрутки вверх
                }else{	//если не прокручена страница на 300 единиц
                        $('.promo__arrows').fadeIn();	//то кнопка скрывается
                }
        });   
        
        
        $('.modal__close').on('click', function(){
                $('.overlay, #thanks').fadeOut();
        });

        document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && ($('#thanks').css('display')==='block')) { 
			$('.overlay, #consultation, #order, #thanks').fadeOut();
			console.log('1');
		}
	});

        function validateForms(form){
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

        $('#connect-form').submit(function(e){	//обращение ко всем формам "form". Если нужна конкретная форма, обращаемся через ее класс или идентификатор. submit - когда все условия выполнены, тогда функция выполняется
		e.preventDefault();	//стандартное действие браузера отменяется (в данном случае, отмена перезагрузки страницы)

		if (!$(this).valid()){	//Если наша форма не прошла валидацию то выполнение кода прекращается
			return;
		}

		$.ajax({	//метод для отправки данных на сервер
			type: "POST",	//указываем, что мы хотим сделать с данными, получить, или отправить. В данном случае, отправить
			url: "mailer/smart.php",	//указываем путь к обработчику отправки данных
			data: $(this).serialize()	//Данные, которые отправляем на сервер. Сейчас работаем с тем, с что есть в данной форме, через this. serialize подготовка перед отправкой на сервер
		}).done(function(){	//если сервер принял данные, выполнена операция успешно, то дальше выполняем следующую функцию
			$(this).find("input").val("");	//внутри формы, с которой работаем, находим все значения input и очищаем их значения методом .val("")

			$('.overlay, #thanks').fadeIn(); ////после этого, окна с идентификатором thanks и классом overlay открываются

			$('form').trigger('reset');	//все формы на сайте должны очиститься методом .trigger('reset')
		});
		return false;
	});

	$(window).scroll(function() {	//обрабатываем окно браузера
		if ($(this).scrollTop()>800){	//если страница опустилась ниже на 800 единиц
			$('.pageup').fadeIn();	//то появляется кнопка прокрутки вверх
		}else{	//если не прокручена страница на 800 единиц
			$('.pageup').fadeOut();	//то кнопка скрывается
		}
	});

	//отслеживание прокрутки и анимация при видимости блока
/* 	const block_show = null;
 
	function scrollTracking(){
		const wt = $(window).scrollTop();
		const wh = $(window).height();
		const et = $('#uber').offset().top;
		const eh = $('#uber').outerHeight();
	
		if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
			if (block_show == null || block_show == false) {
				$('#uber').addClass('animate__animated animate__fadeIn wow ');
				console.log('Блок active в области видимости');
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				$('#uber').removeClass('animate__animated animate__fadeIn wow animate__');
			console.log('Блок active скрыт');
			}
			block_show = false;
		}
	}
	
	$(window).scroll(function(){
		scrollTracking();
	});
	
	$(document).ready(function(){ 
		scrollTracking();
	});
 */
});


//js
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
        menu.classList.add('active');
        hamburger.classList.add('hide');
});

close.addEventListener('click', function() {
        menu.classList.remove('active');
        hamburger.classList.remove('hide');
});

const percent = document.querySelectorAll('.skills__header_percent'),
        lines = document.querySelectorAll('.skills__progress_yellow');
percent.forEach((item, i) =>{
        lines[i].style.width = item.innerHTML;  //innerHTML достает значение с элемента страницы
});



//отслеживание поклассово, найдя i-тый класс, другому i-му классу добавляется класс top, btn, opacity
const overlay = document.querySelectorAll('.portfolio__overlay'),
        top1 = document.querySelectorAll('.portfolio__descr'),
        btn = document.querySelectorAll('.portfolio__link');

overlay.forEach((item, i) =>{
        overlay[i].addEventListener('mouseover', function() {
                overlay[i].classList.add('opacity');
                top1[i].classList.add('top');
                btn[i].classList.add('hide');
        });
        overlay[i].addEventListener('mouseout', function() {
                overlay[i].classList.remove('opacity');
                top1[i].classList.remove('top');
                btn[i].classList.remove('hide');
        });       
});
btn.forEach((item, i) =>{
        btn[i].addEventListener('mouseover', function() {
                overlay[i].classList.add('opacity');
                top1[i].classList.add('top');
                btn[i].classList.add('hide');
        });
        btn[i].addEventListener('mouseout', function() {
                overlay[i].classList.remove('opacity');
                top1[i].classList.remove('top');
                btn[i].classList.remove('hide');
        });	
});
new WOW().init();

// Получаем нужный элемент
const promo = document.querySelector('.promo__smooth');
const photo = document.querySelector('.about__photo');
const descr = document.querySelector('.about__descr');
const items = document.querySelector('.about__items');
const titleSection = document.querySelector('.title__section_title');
const subtitleSection = document.querySelector('.title__section_subtitle');
const divider = document.querySelector('.divider');
const resume = document.querySelector('.resume__wrapper');
const skillsTitle = document.querySelector('.skills__title_animation');
const skillsSubtitle = document.querySelector('.skills__subtitle_animation');
const skillsDivider = document.querySelector('.skills__divider_animation');
const skillsHtml5 = document.querySelector('.skills__item_html5');
const skillsCss3 = document.querySelector('.skills__item_css3');
const skillsJs = document.querySelector('.skills__item_js');
const skillsJquery = document.querySelector('.skills__item_jquery');
const skillsReact = document.querySelector('.skills__item_react');
const skillsNode = document.querySelector('.skills__item_node');
const skillsMongo = document.querySelector('.skills__item_mongo');
const skillsWordpress = document.querySelector('.skills__item_wordpress');
const skillsApp = document.querySelector('.skills__item2_app');
const skillsData = document.querySelector('.skills__item2_data');
const skillsCreative = document.querySelector('.skills__item2_creative');
const skillsDesign = document.querySelector('.skills__item2_design');
const skillsSite = document.querySelector('.skills__item2_site');
const skillsSoftskills = document.querySelector('.skills__item2_softskills');
const portfolioTitle = document.querySelector('.portfolio__title_animation');
const portfolioSubtitle = document.querySelector('.portfolio__subtitle_animation');
const portfolioDivider = document.querySelector('.portfolio__divider_animation');
const portfolioSmooth = document.querySelector('.portfolio__smooth');
const wordpress = document.querySelector('#wordpress');
const uber = document.querySelector('#uber');
const pulse = document.querySelector('#pulse');
const contactsPhoto = document.querySelector('.contacts__photo');
const contactsDescr = document.querySelector('.contacts__descr');
const contactsDescr1 = document.querySelector('.contacts__descr1');
const footer = document.querySelector('.end__wrapper');

const Visible = function (target) {
  // Все позиции элемента
	const targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		left: window.pageXOffset + target.getBoundingClientRect().left,
		right: window.pageXOffset + target.getBoundingClientRect().right,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
		},
	// Получаем позиции окна
		windowPosition = {
			top: window.pageYOffset,
			left: window.pageXOffset,
			right: window.pageXOffset + document.documentElement.clientWidth,
			bottom: window.pageYOffset + document.documentElement.clientHeight
		};

		if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
		targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
		targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
		targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
		// Если элемент полностью видно, то запускаем следующий код
			console.clear();
			//добавляем аттрибут
			//target.setAttribute('data-wow-delay', "1s");
			//добавляем классы
			target.classList.add('animate__animated');
			target.classList.add('animate__fadeIn');
			target.classList.add('wow');
			target.removeAttribute("style"); //удаляем аттрибуты style
			console.log('Вы видите элемент :)');
		} else {
		// Если элемент не видно, то запускаем этот код
			console.clear();
			//удаляем классы			
			target.classList.remove('animate__animated');
			target.classList.remove('animate__fadeIn');
			target.classList.remove('wow');			
			target.classList.remove('animate__');
			target.classList.remove('animated');
		};
	};

	// Запускаем функцию при прокрутке страницы
	window.addEventListener('scroll', function() {
	Visible (promo);
	Visible (promo);
	Visible (photo);
	Visible (descr);
	Visible (items);
	Visible (titleSection);
	Visible (subtitleSection);
	Visible (divider);
	Visible (resume);
	Visible (skillsHtml5);
	Visible (skillsCss3);
	Visible (skillsJs);
	Visible (skillsReact);
	Visible (skillsNode);
	Visible (skillsMongo);
	Visible (skillsJquery);
	Visible (skillsWordpress);	
	Visible (portfolioSmooth);
	Visible (portfolioTitle);
	Visible (portfolioSubtitle);
	Visible (portfolioDivider);
	Visible (wordpress);
	Visible (uber);
	Visible (pulse);
	Visible (contactsPhoto);
	Visible (contactsDescr);
	Visible (contactsDescr1);
	Visible (footer);
	Visible (skillsTitle);
	Visible (skillsSubtitle);
	Visible (skillsDivider);
	Visible (skillsSite);
	Visible (skillsApp);
	Visible (skillsData);
	Visible (skillsCreative);
	Visible (skillsDesign);
	Visible (skillsSoftskills);
	});
	// А также запустим функцию сразу. А то вдруг, элемент изначально видно
	Visible (promo);
	Visible (promo);
	Visible (photo);
	Visible (descr);
	Visible (items);
	Visible (titleSection);
	Visible (subtitleSection);
	Visible (divider);
	Visible (resume);
	Visible (skillsHtml5);
	Visible (skillsCss3);
	Visible (skillsJs);
	Visible (skillsReact);
	Visible (skillsNode);
	Visible (skillsMongo);
	Visible (skillsJquery);
	Visible (skillsWordpress);	
	Visible (portfolioSmooth);
	Visible (portfolioTitle);
	Visible (portfolioSubtitle);
	Visible (portfolioDivider);
	Visible (wordpress);
	Visible (uber);
	Visible (pulse);
	Visible (contactsPhoto);
	Visible (contactsDescr);
	Visible (contactsDescr1);
	Visible (footer);
	Visible (skillsTitle);
	Visible (skillsSubtitle);
	Visible (skillsDivider);
	Visible (skillsSite);
	Visible (skillsApp);
	Visible (skillsData);
	Visible (skillsCreative);
	Visible (skillsDesign);
	Visible (skillsSoftskills);