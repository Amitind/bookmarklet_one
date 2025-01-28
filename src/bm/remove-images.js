(function () {
	const images = [...document.images];
	images.forEach((img) => {
		const altText = document.createTextNode(img.alt);
		img?.parentNode?.replaceChild(altText, img);
	});
})();
