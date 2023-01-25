(function () {
	function callback() {
		alert('test!');
	}
	var s = document.createElement('script');
	s.src = 'https://www.yourjs.com/bookmarklet/';
	if (s.addEventListener) {
		s.addEventListener('load', callback, false);
	} else if (s.readyState) {
		s.onreadystatechange = callback;
	}
	document.body.appendChild(s);
})();
