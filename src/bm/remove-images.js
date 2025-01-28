(function () {
	var images, img, altText;
	images = [...document.images];
	for (var i = 0; i < images.length; ++i) {
		img = images[i];
		altText = document.createTextNode(img.alt);
		img?.parentNode?.replaceChild(altText, img);
	}
})();
