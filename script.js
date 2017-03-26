'use strict';

function detectMobile() {
	if (window.innerWidth < 420) {
		document.getElementsByClassName('wrap')[0].classList.add('mobile');
	} else {
		document.getElementsByClassName('wrap')[0].classList.remove('mobile');
	}
}
detectMobile();
window.addEventListener('resize', detectMobile);

window.addEventListener('load', () => {
	function createCORSRequest(method, url){
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr){
			xhr.open(method, url, true);
		} else if (typeof XDomainRequest != "undefined"){
			xhr = new XDomainRequest();
			xhr.open(method, url);
		} else {
			xhr = null;
		}
		return xhr;
	}

	var request = createCORSRequest("get", "https://raw.githubusercontent.com/BojeongCloud/bojeongcloud.github.io/master/partial/intro.html");
	if (request){
		request.onload = function(){
			var newSection = document.createElement('section');
			newSection.classList.add('loading');
			request.send();

			newSection.innerHTML = request.responseText;

			document.body.appendChild(newSection);
			setTimeout(() => {
				newSection.classList.remove('loading');
			}, 400);
		};
	}
});
