'use strict';

// div#menu-wrapper
// var menuWrapper = document.getElementById('menu-wrapper');

// a#menu
var menu = document.getElementById('menu');

// ul#menu-list
var menuList = document.getElementById('menu-list');

// Click Menu to open/close menu-list
Rx.Observable.fromEvent(menu, 'click').map(function () {
  menuList.classList.toggle('menu-list-open');
}).subscribe();

// Close menu-list on menu-wrapper mouseleave
Rx.Observable.fromEvent(menuList, 'mouseleave').map(function (e) {
  menuList.classList.remove('menu-list-open');
}).subscribe();