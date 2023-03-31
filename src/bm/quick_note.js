// window.open('data:text/html,' + encodeURIComponent('<html contenteditable></html>'));

(function () {
	let tab = window.open('about:blank', '_blank');
	tab.document.write('Enter your note here.');
	tab.document.title = 'Quick Note';
	tab.document.documentElement.setAttribute('contenteditable', '');
	tab.document.close(); // to finish loading the page
})();
