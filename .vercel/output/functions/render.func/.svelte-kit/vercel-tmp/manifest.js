export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-d444aa27.js","imports":["_app/immutable/start-d444aa27.js","_app/immutable/chunks/index-15bb7596.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "airport",
				pattern: /^\/airport\/?$/,
				names: [],
				types: [],
				path: "/airport",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/flights",
				pattern: /^\/api\/flights\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/flights/index.js')
			},
			{
				type: 'endpoint',
				id: "api/blog",
				pattern: /^\/api\/blog\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/blog/index.js')
			},
			{
				type: 'endpoint',
				id: "api/blog/[id]",
				pattern: /^\/api\/blog\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				load: () => import('../output/server/entries/endpoints/api/blog/_id_.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
