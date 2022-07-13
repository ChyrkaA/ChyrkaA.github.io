$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  	.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  	.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	      	});


	function toggleSlide(item){
		$(item).each(function(i){
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});	
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//modal

	$('[data-modal=consultation]').on('click', function() {  //используя дата атрибут кнопки. нажимаем на кнопку
		$('.overlay, #consultation').fadeIn();                   //(блок overlay и блок с уникальным идентификатором consultation).показывается
	});
	
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	$('.button_mini').each(function(i) {	//обрабатываем кнопку с классом button_mini. с порядковым номером на карточке (i)
		$(this).on('click', function() {	//когда на этой кнопке кликаем вызывается функция
			$('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());	//в блок с уникальным идентификатором order.вставляем текст(который берется с класса .catalog-item__subtitle.с порядковым номером i)
			$('.overlay, #order').fadeIn(); //показываем все, что в классе .overlay и в уникальном идентификаторе #order
		});
	});
	
	//отслеживаем действие по нажатию клавиши
	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && ($('#order').css('display')==='block' ||  $('#consultation').css('display')==='block' || $('#thanks').css('display')==='block')) { // Если нажатая клавиша - это Escape и открыто одно из окон с идентификатором #oreder #consultation (проверяедся display: block, то выполняется условие)
			$('.overlay, #consultation, #order, #thanks').fadeOut(); // закрывается класс overlay, класс с идентификаторами #consultation, #order, #thanks
			console.log('1');
		}
	});
	
	//валидация форм https://jqueryvalidation.org/
	function validateForms(form){
		$(form).validate({
			rules: {
				name: "required",
				number: {
					required: true,
					minlength: 10
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите Ваше имя",
				number: {
					required: "Пожалуйста, введите Ваше номер телефона",
					minlength: "Введите номер телефона в формате 0ххххххххх (10 цифр)"
				},
				email: {
					required: "Пожалуйста, введите Ваш e-mail",
					email: "Ваш e-mail должен быть в формате name@domain.com"
				}
			}
		});
	}
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	//маска ввода номера на сайте с плагином jquery.maskedinput.min.js
	$('input[name=number]').mask("+38 (999) 999-9999").on('click', function () {
		if ($(this).val() === '+38 (___) ___-____') { //перемещаем принудительно курсор на начало ввода номера
		    $(this).get(0).setSelectionRange(5, 5);
		}
	});

	$('form').submit(function(e){	//обращение ко всем формам "form". Если нужна конкретная форма, обращаемся через ее класс или идентификатор. submit - когда все условия выполнены, тогда функция выполняется
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

			$('#consultation, #order').fadeOut(); //окна с идентификатором consultation и order закрываются
			$('.overlay, #thanks').fadeIn(); ////после этого, окна с идентификатором thanks и классом overlay открываются

			$('form').trigger('reset');	//все формы на сайте должны очиститься методом .trigger('reset')
		});
		return false;
	});

	//плавная прокрутка вверх
	$(window).scroll(function() {	//обрабатываем окно браузера
		if ($(this).scrollTop()>800){	//если страница опустилась ниже на 800 единиц
			$('.pageup').fadeIn();	//то появляется кнопка прокрутки вверх
		}else{	//если не прокручена страница на 800 единиц
			$('.pageup').fadeOut();	//то кнопка скрывается
		}
	});

	new WOW().init();

});