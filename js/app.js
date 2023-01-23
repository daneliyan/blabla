$(document).ready(function () {

	// -------------------- header --------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('header').addClass('active');
		}
		else {
			$('header').removeClass('active');
		}
	});

	// -------------------- Scroll-up -------------------------
	$(".scrollup").on("click", function (event) {
		event.preventDefault();
			top = 0;
		$('body,html').animate({ scrollTop: top }, 800);
	});

	// -------------------- burger --------------------------
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close'),
		body = document.querySelector('body');

	/*===== MENU SHOW =====*/
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			body.classList.add('dis-scroll');
		})
	}

	/*===== MENU HIDDEN =====*/
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			body.classList.remove('dis-scroll');
		})
	}

	/*=============== REMOVE MENU MOBILE ===============*/
	const navLink = document.querySelectorAll('.nav__link')

	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show-menu');
		body.classList.remove('dis-scroll');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));

	// --------------------- Tabs ---------------------------
	var tab = $('#servicesTabs .tabs-items > div');
	tab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#servicesTabs .tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#servicesTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('#servicesTabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	});
	// Отрытие вкладки из хеша URL
	if (window.location.hash) {
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#".window.location.hash).offset().top);
	}

	// -------------------- Acordion -------------------------
	const accordionItems = document.querySelectorAll('.faq__accordion-item')
	accordionItems.forEach((item) => {
		const accordionHeader = item.querySelector('.faq__accordion-header')
		accordionHeader.addEventListener('click', () => {
			const openItem = document.querySelector('.accordion-open')
			toggleItem(item)
			if (openItem && openItem !== item) {
				toggleItem(openItem)
			}
		})
	})
	const toggleItem = (item) => {
		const accordionContent = item.querySelector('.faq__accordion-content')
		if (item.classList.contains('accordion-open')) {
			accordionContent.removeAttribute('style')
			item.classList.remove('accordion-open')
		} else {
			accordionContent.style.height = accordionContent.scrollHeight + 'px'
			item.classList.add('accordion-open')
		}
	}

	// ----------------- onClick Dropdown -------------------
	/*1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун*/
	// const menuBtns = document.querySelectorAll('.cldpd-btn');
	// const drops = document.querySelectorAll('.cldpd-content');
	// menuBtns.forEach(el => {
	// 	el.addEventListener('click', (e) => {
	// 		let currentBtn = e.currentTarget;
	// 		let drop = currentBtn.closest('.cldpd').querySelector('.cldpd-content');
	// 		menuBtns.forEach(el => {
	// 			if (el !== currentBtn) {
	// 				el.classList.remove('cldpd-btn--active');
	// 			}
	// 		});
	// 		drops.forEach(el => {
	// 			if (el !== drop) {
	// 				el.classList.remove('cldpd-content--active');
	// 			}
	// 		});
	// 		drop.classList.toggle('cldpd-content--active');
	// 		currentBtn.classList.toggle('cldpd-btn--active');
	// 	});
	// });
	// document.addEventListener('click', (e) => {
	// 	if (!e.target.closest('.cldpd')) {
	// 		menuBtns.forEach(el => {
	// 			el.classList.remove('cldpd-btn--active');
	// 		});
	// 		drops.forEach(el => {
	// 			el.classList.remove('cldpd-content--active');
	// 		});
	// 	}
	// });

	// -------------------- svg--------------------------
	// function svg() {
	// 	$('img[src$=".svg"]').each(function () {
	// 		var $img = $(this);
	// 		var imgURL = $img.attr('src');
	// 		var attributes = $img.prop('attributes');
	// 		if ($img.hasClass('svg')) {
	// 			$.get(imgURL, function (data) {
	// 				var $svg = jQuery(data).find('svg');
	// 				$svg = $svg.removeAttr('xmlns:a');
	// 				$.each(attributes, function () {
	// 					$svg.attr(this.name, this.value);
	// 				});
	// 				$img.removeClass('svg').replaceWith($svg);
	// 			}, 'xml');
	// 		}
	// 	});
	// }
	// svg();	

	// ----------------- SWIPER ----------------------
	// var swiper = new Swiper(".mySwiper", {
	// 	// Стрелки
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},

	// 	// Пагинация (точки)
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// },

	// 	// Пагинация (динамическая)
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	dynamicBullets: true,
	// 	// },

	// 	// Прогрессбар
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	type: "progressbar",
	// 	// },

	// 	// Пагинация цифрами
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	type: "fraction",
	// 	// },

	// 	// Пагинация цифрами (кастомная)
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	clickable: true,
	// 	// 	renderBullet: function (index, className) {
	// 	// 		return '<span class="' + className + '">' + (index + 1) + "</span>";
	// 	// 	},
	// 	// },

	// 	// Скроллбар
	// 	// scrollbar: {
	// 	// 	el: ".swiper-scrollbar",
	// 	// 	hide: true,
	// 	// },

	// 	// Вертикальный слайдер
	// 	// direction: "vertical",

	// 	// Отступ между слайдов
	// 	// spaceBetween: 30,

	// 	// Количество видимых слайдов
	// 	// slidesPerView: 3,

	// 	// Свободное количество слайдов. Можно использовать в паре с .swiper-slide {width: 80%;}
	// 	// slidesPerView: "auto",

	// 	// Центрирование слайда
	// 	// slidesPerView: 3,
	// 	// centeredSlides: true,

	// 	// Центрирование слайда с автоматическим отображением слайдов.
	// 	// slidesPerView: "auto",
	// 	// centeredSlides: true,

	// 	// cssMode (Вроде плавность пролистывания)
	// 	// cssMode: true,
	// 	// mousewheel: true,
	// 	// keyboard: true,

	// 	// Free Mode (Свободное пролистывание)
	// 	// slidesPerView: 3,
	// 	// spaceBetween: 20,
	// 	// freeMode: true,

	// 	// Grid
	// 	// slidesPerView: 3,
	// 	// grid: {
	// 	// 	rows: 2,
	// 	// },
	// 	// spaceBetween: 30,
	// 	// pagination: {
	// 	// 	el: ".swiper-pagination",
	// 	// 	clickable: true,
	// 	// },

	// 	// Бесконечное пролистывание
	// 	// loop: true,

	// 	// Эффект (один из нескольких)
	// 	// effect: "coverflow",

	// 	// Автоматичское пролистывание
	// 	// autoplay: {
	// 	// 	delay: 2500,
	// 	// 	disableOnInteraction: false,
	// 	// },

	// 	// Галерея

	// });
	// var swiper = new Swiper(".mySwiper1", {
	// 	spaceBetween: 10,
	// 	slidesPerView: 4,
	// 	freeMode: true,
	// 	watchSlidesProgress: true,
	// });
	// var swiper2 = new Swiper(".mySwiper2", {
	// 	spaceBetween: 10,
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// 	thumbs: {
	// 		swiper: swiper,
	// 	},
	// });

	// // Scroll-container
	// var swiperScroll = new Swiper(".scroll-container", {
	// 	direction: "vertical",
	// 	slidesPerView: "auto",
	// 	freeMode: true,
	// 	scrollbar: {
	// 		el: ".swiper-scrollbar",
	// 	},
	// 	mousewheel: true,
	// });

	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	//end
});