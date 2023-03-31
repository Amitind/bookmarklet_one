function bmdata() {
	return {
		bm_txt: 'alert(location.hostname)',
		bm_label: 'Bookmarklet',
		generated_bm: ' ',
        show_bm: true,
        toggle_bm: function () { this.show_bm = !this.show_bm; },
        // removenewlines: function (str) { return str.replace(/(\r\n|\n|\r)/gm, ''); },
		generate_bm() {
			return 'javascript:(()=>{' + encodeURIComponent(this.bm_txt) + '})();';
		},
	};
}

window.bmdata = bmdata;
