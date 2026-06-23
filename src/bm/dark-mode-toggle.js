javascript: (function () {
	const id = 'codebuff-dark-mode-css';
	const existing = document.getElementById(id);
	if (existing) {
		existing.remove();
		document.body.classList.remove('codebuff-dark-active');
		alert('Dark mode OFF — original styles restored.');
		return;
	}

	const css = document.createElement('style');
	css.id = id;
	css.textContent = `
		*, *::before, *::after {
			background-color: #1a1a2e !important;
			color: #e0e0e0 !important;
			border-color: #333 !important;
			box-shadow: none !important;
			text-shadow: none !important;
		}
		img, video, svg, canvas, iframe {
			opacity: 0.85;
			filter: brightness(0.9);
		}
		a { color: #6db3f2 !important; }
		a:hover { color: #9dd3ff !important; }
		input, textarea, select, button {
			background-color: #2a2a3e !important;
			color: #e0e0e0 !important;
			border-color: #555 !important;
		}
	::-webkit-scrollbar { background: #1a1a2e; }
	::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
	`;
	document.head.appendChild(css);
	document.body.classList.add('codebuff-dark-active');
	alert('Dark mode ON — click again to toggle off.');
})();
