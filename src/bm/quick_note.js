// window.open('data:text/html,' + encodeURIComponent('<html contenteditable></html>'));
(function () {
	// window.open() can return null if popup is blocked by browser
	let tab = window.open('about:blank', '_blank');
	if (!tab) {
		alert(
			'Please allow popups for this site to use the Quick Note feature'
		);
		return;
	}

	tab.document.write('Enter your note here.');
	tab.document.title = 'Quick Note';
	tab.document.documentElement.setAttribute('contenteditable', '');
	tab.document.close(); // to finish loading the page
})();
