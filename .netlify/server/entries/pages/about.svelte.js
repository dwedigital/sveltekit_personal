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
	default: () => About,
	prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require('../../_app/immutable/chunks/index-511472e1.js');
const prerender = true;
const About = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
	return `


${(($$result.head += `${(($$result.title = `<title>About</title>`), '')}`), '')}
<div class="${'main_container'}"><section><div class="${'px-20'}"><h2 class="${'text-6xl font-bold mb-6'}">I&#39;m Dave Edwards \u{1F596}</h2>
         <div class="${''}"><p>Software Engineer and a Technical Writer with a solid     
               background in Computer Science, I&#39;m passionate about making 
               the web accessible for everyone. I design and develop visually compell                ing applications with user-friendly interaction that drive business g                owth and improve user experience. When I&#39;m not solving problems,
               I love to create technical content for engineers and tech 
               startups across the globe.
             </p>
             <p>Creating magic daily on the internet. You can send me
                an email at <span class="${'info-text'}">adeneyeabiodun@gmail.com</span></p></div></div></section></div>`;
});
