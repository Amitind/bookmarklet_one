javascript: (function () {
	const cookies = document.cookie.split(';');
	let count = 0;

	for (let cookie of cookies) {
		const eqPos = cookie.indexOf('=');
		const name =
			eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

		// Delete cookie with all common paths and domains
		document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
		document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
		document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;

		count++;
	}

	// More informative message
	alert(
		`${count} cookie${count !== 1 ? 's' : ''} ${
			count !== 1 ? 'have' : 'has'
		} been deleted from ${window.location.hostname}`
	);
})();
