(function () {
	const archiveUrl = 'http://web.archive.org/web/*/';
	const currentUrl = encodeURI(window.location.href);
	window.location.href = archiveUrl + currentUrl;
})();
