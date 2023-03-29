/** Queries an element from parent element
 * @param {string} selector - **#id** or  **.class** selector to be used to query the element
 * @param {element} parentElement - default is **document.body** - parent element from which element will be queried
 * @returns {element} - element
 * @example - querySelector('#id1', parentElement)
 */

function querySelector(selector, parentElement = document.body) {
	return parentElement.querySelector(selector);
}

/**
 * Toggle Class in element
 * @param {string} id - **"#id"** or **".class"** of element to toggle
 * @param {string} className - class to be toggled, default is **hidden**
 * @returns {void}
 * @example toggleElement("#id"), toggleElement(".class")
 */

function toggleClass(id, className = 'hidden') {
	querySelector(id).classList.toggle(className);
}

// attach functon to window object

window.toggleElement = toggleClass;

