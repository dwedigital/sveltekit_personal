const { init } = require('../serverless.js');

exports.handler = init({
	appDir: '_app',
	assets: new Set(['favicon.png']),
	mimeTypes: { '.png': 'image/png' },
	_: {
		entry: {
			file: '_app/immutable/start-fad56dff.js',
			imports: ['_app/immutable/start-fad56dff.js', '_app/immutable/chunks/index-15bb7596.js'],
			stylesheets: []
		},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: 'blog',
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: '/blog',
				shadow: null,
				a: [0, 2],
				b: [1]
			}
		],
		matchers: async () => {
			return {};
		}
	}
});
