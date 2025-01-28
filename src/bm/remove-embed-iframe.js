(function () {
	// Find and remove all embed and iframe elements
	const embeds = document.querySelectorAll('embed, iframe');

	if (embeds.length === 0) {
		alert('No embeds or iframes found on this page');
		return;
	}

	embeds.forEach((element) => {
		element.remove();
	});

	alert(`Removed ${embeds.length} embed/iframe elements from the page`);
})();
