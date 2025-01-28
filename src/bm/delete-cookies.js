(function () {
	// Get all cookies and split them into an array
	const cookies = document.cookie.split('; ');

	// Function to delete a cookie
	function deleteCookie(name, domain, path) {
		document.cookie =
			name +
			'=; domain=' +
			domain +
			'; path=' +
			path +
			'; expires=Thu, 01 Jan 1970 00:00:00 GMT';
	}

	// Get the current host (domain)
	let domain = location.host;

	// Loop through all possible domain levels
	while (domain) {
		// Try with and without leading dot in domain
		for (let sliceIndex = 0; sliceIndex < 2; ++sliceIndex) {
			// Get the current path
			let path = location.pathname;

			// Loop through all possible path combinations
			while (path) {
				// Process each cookie
				for (let i = 0; i < cookies.length; i++) {
					const cookie = cookies[i];
					if (cookie) {
						const cookieName = cookie.split('=')[0];
						// Delete cookie by setting expired date
						deleteCookie(
							cookieName,
							sliceIndex === 0 ? domain : '.' + domain,
							path
						);
					}
				}
				// Get next path level up
				path = path.substring(0, path.lastIndexOf('/'));
			}
		}
		// Get next domain level up
		domain = domain.split('.').slice(1).join('.');
	}
})();
