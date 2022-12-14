var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require('../../_app/immutable/chunks/index-511472e1.js');
const app = '';
const flowbite = '';
const _layout = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
	return `<nav class="${'bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'}"><div class="${'container flex flex-wrap justify-between items-center mx-auto'}"><a href="${'#'}" class="${'flex items-center'}"><img src="${'https://flowbite.com/docs/images/logo.svg'}" class="${'mr-3 h-6 sm:h-10'}" alt="${'Flowbite Logo'}">
		  <span class="${'self-center text-xl font-semibold whitespace-nowrap dark:text-white'}">Flowbite</span></a>
	  <button data-collapse-toggle="${'mobile-menu'}" type="${'button'}" class="${'inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500'}" aria-controls="${'mobile-menu-2'}" aria-expanded="${'false'}"><span class="${'sr-only'}">Open main menu</span>
		<svg class="${'w-6 h-6'}" aria-hidden="${'true'}" fill="${'currentColor'}" viewBox="${'0 0 20 20'}" xmlns="${'http://www.w3.org/2000/svg'}"><path fill-rule="${'evenodd'}" d="${'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'}" clip-rule="${'evenodd'}"></path></svg></button>
	  <div class="${'hidden w-full md:block md:w-auto'}" id="${'mobile-menu'}"><ul class="${'flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'}"><li><a href="${'/'}" class="${'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent'}" aria-current="${'page'}">Home</a></li>
		  <li><button id="${'dropdownNavbarLink'}" data-dropdown-toggle="${'dropdownNavbar'}" class="${'flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'}">Projects <svg class="${'ml-1 w-5 h-5'}" aria-hidden="${'true'}" fill="${'currentColor'}" viewBox="${'0 0 20 20'}" xmlns="${'http://www.w3.org/2000/svg'}"><path fill-rule="${'evenodd'}" d="${'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'}" clip-rule="${'evenodd'}"></path></svg></button>
			  
			  <div id="${'dropdownNavbar'}" class="${'hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'}"><ul class="${'py-1 text-sm text-gray-700 dark:text-gray-400'}" aria-labelledby="${'dropdownLargeButton'}"><li>
					  <a sveltekit:prefetch href="${'/airport'}" class="${'block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}">Airport Arrivals</a></li></ul></div></li>
		  <li><a href="${'/about'}" class="${'block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}">About</a></li></ul></div></div></nav>


<main class="${'flex justify-center mt-24'}"><div class="${'container flex justify-center w-full my-10'}">${
		slots.default ? slots.default({}) : ``
	}</div></main>

<footer>DWE Digital</footer>`;
});
