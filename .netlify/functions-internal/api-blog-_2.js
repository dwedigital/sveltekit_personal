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
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: 'api/blog/[id]',
				pattern: /^\/api\/blog\/([^/]+?)\/?$/,
				names: ['id'],
				types: [null],
				load: () =>
					Promise.resolve().then(() => require('../server/entries/endpoints/api/blog/_id_.js'))
			}
		],
		matchers: async () => {
			return {};
		}
	}
});
