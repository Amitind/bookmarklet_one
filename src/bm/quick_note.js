// window.open('data:text/html,' + encodeURIComponent('<html contenteditable></html>'));

(function () {
	let tab = window.open('about:blank', '_blank');
	tab.document.write('Quick Note'); // where 'html' is a variable containing your HTML
	tab.document.title = 'Quick Note';
	tab.document.documentElement.setAttribute('contenteditable', '');
	tab.document.close(); // to finish loading the page
})();
