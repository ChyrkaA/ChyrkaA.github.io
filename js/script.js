//jQuery
$(document).on('ready', function(){        
        
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
});


//js
window.addEventListener('DOMContentLoaded', () => {

	const preload = document.querySelector('.bckg'),
		resume = document.querySelector('.resume'),
		promo = document.querySelector('.promo'),
		portfolio = document.querySelector('.portfolio'),
		
		user = detect.parse(navigator.userAgent),	//подключаемый модуль, для определения браузера устройства
		
		menu = document.querySelector('.menu'),
		overlay = document.querySelectorAll('.portfolio__overlay'),
		top1 = document.querySelectorAll('.portfolio__descr'),
		btn = document.querySelectorAll('.portfolio__link'),
		hamburger = document.querySelector('.hamburger'),

		arrows = document.querySelector('.promo__arrows'),
		pageUp = document.querySelector('.pageup');
		// menuItem = document.querySelectorAll('.menu__item');

	const fadeIn = (el, timeout, opacity, display) => {
		el.style.opacity = opacity || 1;
		el.style.display = display || 'block';
		el.style.transition = `opacity ${timeout}ms`;
	};

	const fadeOut = (el, timeout, opacity) => {
		el.style.opacity = opacity || 0;
		el.style.transition = `opacity ${timeout}ms`;
	};

	window.addEventListener('scroll',()=>{	
		if (scrollY>=300){
			fadeOut(arrows, 1000);
		} else {
			fadeIn(arrows, 1000);
		}
		if (scrollY>=800){
			fadeIn(pageUp, 1000, 0.7);
		} else {
			fadeOut(pageUp, 1000, 0);
		}
	})


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

	function toggleMenuClass(action){
		menu.classList[action]('active');
		hamburger.classList[action]('hide');
	}
	
	document.body.addEventListener('click', (e)=>{
		if (e.target.closest('.hamburger')) {
			toggleMenuClass('add');
			// menu.classList['add']('active');
			// hamburger.classList['add']('hide');
		} 
		if (e.target.closest('.menu__close') || e.target.closest('.menu__overlay') || e.target.closest('.menu__item')) {
			toggleMenuClass('remove')
			// menu.classList.remove('active');
			// hamburger.classList.remove('hide');
		}
	})

	// const percent = document.querySelectorAll('.skills__header_percent'),
	// 	lines = document.querySelectorAll('.skills__progress_yellow');
	// percent.forEach((item, i) =>{
	// 	lines[i].style.width = item.innerHTML;  //innerHTML достает значение с элемента страницы
	// });

	// function targetMouseToggle(action, item, i){
	// 	if(action === 'mouseover'){
	// 		item.addEventListener(action, () => {
	// 			overlay[i].classList.add('opacity');
	// 			top1[i].classList.add('top');
	// 			btn[i].classList.add('hide');
	// 		});
	// 	} else if (action === 'mouseout'){
	// 		item.addEventListener('mouseout', () => {
	// 			overlay[i].classList.remove('opacity');
	// 			top1[i].classList.remove('top');
	// 			btn[i].classList.remove('hide');
	// 		});   
	// 	}
	// }

	// function targetAction(target){
	// 	target.forEach((item, i) =>{
	// 		targetMouseToggle('mouseover', item, i);
	// 		targetMouseToggle('mouseout', item, i);    
	// 	});
	// }
	// targetAction(overlay);
	// targetAction(btn);

	function togglePortfolioClass(target, event, action){
		target.forEach((item, i) =>{
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

	// overlay.forEach((item, i) =>{
	// 	item.addEventListener('mouseover', function() {
	// 		overlay[i].classList.add('opacity');
	// 		top1[i].classList.add('top');
	// 		btn[i].classList.add('hide');
	// 	});
	// 	item.addEventListener('mouseout', function() {
	// 		overlay[i].classList.remove('opacity');
	// 		top1[i].classList.remove('top');
	// 		btn[i].classList.remove('hide');
	// 	});       
	// });
	// btn.forEach((item, i) =>{
	// 	item.addEventListener('mouseover', function() {
	// 		overlay[i].classList.add('opacity');
	// 		top1[i].classList.add('top');
	// 		btn[i].classList.add('hide');
	// 	});
	// 	item.addEventListener('mouseout', function() {
	// 		overlay[i].classList.remove('opacity');
	// 		top1[i].classList.remove('top');
	// 		btn[i].classList.remove('hide');
	// 	});	
	// });

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
	// const linksParent = document.querySelector('.contacts__social');
	// const links = document.querySelectorAll('.contacts__link');

	// function coloredLink(i){
	// 	links[i].classList.remove('greyscale');
	// }
	// function greyLink(){
	// 	links.forEach(item=>{
	// 		item.classList.add('greyscale');
	// 	})
	// }

	// function removeGreyLink(){
	// 	links.forEach(item => {
	// 		item.classList.remove('greyscale');
	// 	})
	// }

	// linksParent.addEventListener('mouseover', (e)=>{
	// 	const target = e.target;
	// 	if(target && (target.classList.contains('contacts__social') || target.classList.contains('contacts__link'))){
	// 		greyLink()
	// 		console.log('in');
	// 	}	
	// 	if(target && target.classList.contains('contacts__link')) {
	// 		links.forEach((item, i)=>{
	// 			if(target==item){
	// 				coloredLink(i);
	// 			}
	// 		})
	// 	} 		
	// });
	// linksParent.addEventListener('mouseout', (e)=>{
	// 	const target = e.target;
	// 	if(target && (!target.classList.contains('contacts__link') && !target.classList.contains('linkImg'))){			
	// 		removeGreyLink();
	// 	} else {
	// 		console.log('out')
	// 	}
	// });
})