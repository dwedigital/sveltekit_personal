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
	default: () => Blog,
	load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require('../../../_app/immutable/chunks/index-511472e1.js');
async function load({ fetch }) {
	const res = await fetch('/api/blog');
	return { props: { posts: await res.json() } };
}
const Blog = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
	let { posts } = $$props;
	console.log(posts);
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	return `<div>${(0, import_index_511472e1.b)(posts['data'], (post) => {
		return `<p>${(0, import_index_511472e1.e)(post.attributes.Title)}</p>
        <p>${(0, import_index_511472e1.e)(post.attributes.content)}</p>`;
	})}</div>`;
});
