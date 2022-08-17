import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			edge:false,
			exterbal:[],
			split:false,
		})
	},
	preprocess: [preprocess({
		postcss: true,

	})]
};

export default config;
