/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-printer' : '&#x22;',
			'icon-bookmark' : '&#x25;',
			'icon-rocket' : '&#x27;',
			'icon-paper' : '&#x28;',
			'icon-clock' : '&#x29;',
			'icon-search' : '&#x2b;',
			'icon-key' : '&#x2c;',
			'icon-puzzle' : '&#x2d;',
			'icon-clipboard' : '&#x2e;',
			'icon-bookmark-2' : '&#x2f;',
			'icon-cancel' : '&#x30;',
			'icon-calendar-alt-fill' : '&#x24;',
			'icon-user' : '&#x23;',
			'icon-settings' : '&#x21;',
			'icon-feather' : '&#x26;',
			'icon-leaf' : '&#x2a;',
			'icon-palette' : '&#x32;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};