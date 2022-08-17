import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge:false,
			split:true,
		}),
	},
	preprocess: [preprocess({
		postcss: true,

	})]
};

export default config;
