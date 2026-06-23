javascript: (function () {
	const title = document.title.trim() || 'Untitled Page';
	const url = window.location.href;
	const markdown = '[' + title + '](' + url + ')';

	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(markdown).then(function () {
			alert('Markdown link copied!\n\n' + markdown);
		}).catch(function () {
			fallbackCopy(markdown);
		});
	} else {
		fallbackCopy(markdown);
	}

	function fallbackCopy(text) {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.style.position = 'fixed';
		textarea.style.opacity = '0';
		document.body.appendChild(textarea);
		textarea.select();
		try {
			document.execCommand('copy');
			alert('Markdown link copied!\n\n' + text);
		} catch (e) {
			alert('Failed to copy. Here is your link:\n\n' + text);
		}
		document.body.removeChild(textarea);
	}
})();
