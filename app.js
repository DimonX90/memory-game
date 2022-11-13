"use strict"

let nonActive = 0;
const win = document.querySelector('.win');
const playAgain = document.querySelector('.again');
const wrapperBloks = document.querySelector('.wrapper-bloks')
const play = document.querySelector('.start');



const ids = ['facebook', 'facebook', 'twitter', 'twitter', 'viber', 'viber', 'instagramm', 'instagramm', 'telegramm', 'telegramm', 'whatsup', 'whatsup', 'pinterest', 'pinterest', 'tiktok', 'tiktok']

play.addEventListener('click', function () {
	shuffle(ids);
	addBlocks(ids);
	let btns = document.querySelectorAll('.item');
	for (let i = 0; btns.length > i; i++) {
		btns[i].classList.add('_show');
	}
	play.style.pointerEvents = "none";
	play.style.opacity = "0";
	playGame(btns);
});

playAgain.addEventListener('click', function () {
	wrapperBloks.innerHTML = '';
	win.classList.remove('_active')
	shuffle(ids);
	addBlocks(ids);
	let btns = document.querySelectorAll('.item');
	for (let i = 0; btns.length > i; i++) {
		btns[i].classList.add('_show');
	}
	play.style.pointerEvents = "none";
	play.style.opacity = "0";
	playGame(btns);
})
function playGame(btns) {
	for (let i = 0; btns.length > i; i++) {
		btns[i].addEventListener('click', function (e) {
			if (!btns[i].classList.contains('_active')) {
				btns[i].classList.add('_active');
			}
			chek(btns, i);
			if (nonActive == btns.length) {
				win.classList.add('_active')
			}
		})
	}
}


function chek(btns, i) {
	btns.forEach(function (item) {
		if (item != btns[i] && item.id == btns[i].id && item.classList.contains('_active')) {
			item.style.pointerEvents = "none";
			item.style.opacity = "0.5";
			btns[i].style.pointerEvents = "none"
			btns[i].style.opacity = "0.5";
			item.classList.add('_noneactive');
			btns[i].classList.add('_noneactive');
			nonActive = nonActive + 2;
		} else {
			if (item != btns[i] && item.classList.contains('_active') && btns[i].classList.contains('_active')) {
				//btns[i].classList.remove('_active');
				item.classList.remove('_active');
			}
		}
	})
}
//Перемешать массив
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}


function addBlocks(ids) {
	ids.forEach(function (item) {
		let template = `<a href="#" id="${item}" class="item"></a>`
		wrapperBloks.insertAdjacentHTML('beforeEnd', template);
	})
}


