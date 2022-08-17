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
	GET: () => GET
});
module.exports = __toCommonJS(stdin_exports);
async function GET({ params }) {
	params.id;
	const options = {
		headers: {
			Authorization: `Bearer ${'dbd4b3453d217f9ad8738f72f0e520c5fa778b34dc17cf40922c026589c69c5ffd530afc5c696f7bd840f8615b2806ece384163b0cae76ac17054ea49290a6436d4e2788d35984bcc267446a36754ee630d1bf77a9bbe7d679a31cfc615112f6269d6aa7263711cf7a4ef9e92c51a7152444d1c3abd03e33b4da0a83f8d96c71'}`
		}
	};
	const response = await fetch(
		'http://localhost:1337/api/posts/?populate[categories][filters][name][$eq]=JavaScript',
		options
	);
	return {
		status: 200,
		body: await response.json()
	};
}
