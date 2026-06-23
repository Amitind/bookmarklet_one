javascript: (function () {
	let count = 0;

	const allElements = document.querySelectorAll('*');
	for (const el of allElements) {
		const style = window.getComputedStyle(el);
		const position = style.position;

		if (position === 'fixed' || position === 'sticky') {
			const tag = el.tagName.toLowerCase();
			const isHeader = el.closest('header, nav, [role="navigation"]') || tag === 'header' || tag === 'nav';
			const isSmall = el.offsetHeight < window.innerHeight * 0.5;

			if (isHeader || (isSmall && el.getBoundingClientRect().top <= 10)) {
				el.style.setProperty('position', 'static', 'important');
				el.style.setProperty('top', 'auto', 'important');
				el.style.setProperty('z-index', 'auto', 'important');
				count++;
			}
		}
	}

	if (count > 0) {
		alert(count + ' sticky/fixed header' + (count !== 1 ? 's' : '') + ' removed!');
	} else {
		alert('No sticky headers found on this page.');
	}
})();
