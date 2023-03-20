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
});


//js
window.addEventListener('DOMContentLoaded', () => {

	const preload = document.querySelector('.bckg');
	const resume = document.querySelector('.resume');
	const promo = document.querySelector('.promo');
	const portfolio = document.querySelector('.portfolio')
	const user = detect.parse(navigator.userAgent);	//подключаемый модуль, для определения браузера устройства

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Safari|Chrome Mobile/i.test(user.browser.name)) {	//проверка регулярными выражениями на название браузера
		promo.style.backgroundAttachment = "scroll";
		resume.style.backgroundAttachment = "scroll";
		portfolio.style.backgroundAttachment = "scroll";

    	}

	function ready(){		
		document.body.style.overflow = '';
		preload.remove();
	}

	window.addEventListener("load", ready);

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



	//отслеживание поклассово, найдя i-тый класс, другому i-му классу добавляется класс top, btn, opacity и др
	const overlay = document.querySelectorAll('.portfolio__overlay'),
		top1 = document.querySelectorAll('.portfolio__descr'),
		btn = document.querySelectorAll('.portfolio__link'),
		menuItem = document.querySelectorAll('.menu__item');

	menuItem.forEach((item, i) =>{
		menuItem[i].addEventListener('click', function() {
			menu.classList.remove('active');
			hamburger.classList.remove('hide');
		});
	});

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

	function onDisplay(entry) {
		entry.forEach(function(change) {
			if (change.isIntersecting) {
				change.target.classList.add('Delay');
			}else change.target.classList.remove('Delay');
		});
	}
	const elements = document.querySelectorAll('.animate');
	const options = {threshold: [0.2]};
	const observer = new IntersectionObserver(onDisplay, options);
	for (let elm of elements) {
		observer.observe(elm);
	}
})