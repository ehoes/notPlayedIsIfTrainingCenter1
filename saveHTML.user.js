// ==UserScript==
// @name myUserJS
// @description Мой самый первый юзерскрипт 
// @author Ehoes
// @license MIT
// @version 1.0
// @include https://profidigital.1c.ru/*
// ==/UserScript==
// [1] Оборачиваем скрипт в замыкание, для кроссбраузерности (opera, ie)
(function (window, undefined) {  // [2] нормализуем window
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }
    // В юзерскрипты можно вставлять практически любые javascript-библиотеки.
    // Код библиотеки копируется прямо в юзерскрипт.
    // При подключении библиотеки нужно передать w в качестве параметра окна window
    // Пример: подключение jquery.min.js
    // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);

    // [3] не запускаем скрипт во фреймах
    // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
    if (w.self != w.top) {
        return;
    }
    // [4] дополнительная проверка наряду с @include
    if (/https:\/\/profidigital.1c.ru/.test(w.location.href)) {
        //Ниже идёт непосредственно код скрипта
		
		'use strict';
		setInterval(() => {
		let b = w.document.querySelector('body');
		let c = w.document.querySelector('div#x-auto-0');
		let p = w.document.querySelector('p#exoID');
		if (p === null) {
			p = w.document.createElement('p');
			p.setAttribute( 'id', 'exoID');
			b.insertBefore(p, c);
		}
		let element = w.document.querySelector('iframe.gwt-Frame.x-component');
		if (element != null){
			let attrValue = element.getAttribute('src');
			let h = w.document.querySelector('div.toolbarAsHeaderForDlrList.x-component').innerHTML;
			if (attrValue.endsWith(".htm")||attrValue.endsWith(".html")) {
				let addrHTML = '<a target = "_blank" href="' + w.document.location.origin + '/' + attrValue + '">' + h + '</a>';
				p.innerHTML = addrHTML;			
			} else if (attrValue.endsWith(".mp4")) {
				w.document.querySelectorAll('iframe').forEach( item => {
					NL = item.contentWindow.document.body.querySelectorAll('video>source');
					if (NL.lenght = 1) {
						if (NL[0] != undefined) {
							p.innerHTML = '<a target = "_blank" href="' + NL[0].src + '">' + h + '</a>';;
						}
					}
				});
			}
		}
		}, 2000);
    }
})(window);