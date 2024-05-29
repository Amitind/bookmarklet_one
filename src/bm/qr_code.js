(function () {
	var url =
		'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' +
		encodeURIComponent(window.location.href);
	var w = open(
		url,
		'w',
		'location=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width=500,height=500,modal=yes,dependent=yes'
	);
	// if (w) {
	// 	setTimeout('w.focus()', 1000);
	// } else {
	// 	location = url;
	// }
})();
