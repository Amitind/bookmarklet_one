/**
 * Toggle element visibility
 * @param {string} id - **"#id"** or **".class"** of element to toggle
 * @returns {void}
 * @example toggleElement("#id"), toggleElement(".class")
 */

function toggleElement(id) {
  let menu = document.querySelector(id);
  menu.classList.toggle("hidden");
}
window.toggleElement = toggleElement;
