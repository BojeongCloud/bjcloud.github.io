'use strict';

var maxMobileWidth = 480;

function detectMobile() {
	if (window.innerWidth < maxMobileWidth) {
		document.getElementsByClassName('wrap')[0].classList.add('mobile');
	} else {
		document.getElementsByClassName('wrap')[0].classList.remove('mobile');
	}
}
detectMobile();
window.addEventListener('resize', detectMobile);
