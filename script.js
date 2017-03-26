var newStyle = document.createElement('link');
newStyle.rel = 'stylesheet';

if (screen.availWidth < 500) {
	newStyle.href = 'css/mobile.css';
} else {
	newStyle.href = 'css/desktop.css';
}

document.body.insertBefore(newStyle, document.body.firstChild);