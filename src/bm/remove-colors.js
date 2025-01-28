(function () {
	// The error occurs because document.createStyleSheet() is an old IE-only method
	// that is not standard and no longer supported in modern browsers.
	// Here's the modern approach using standard DOM methods:
	const styles =
		'* { background: white !important; color: black !important } :link, :link * { color: #0000EE !important } :visited, :visited * { color: #551A8B !important }';

	const styleSheet = document.createElement('style');
	styleSheet.textContent = styles;
	document.head.appendChild(styleSheet);
})();
