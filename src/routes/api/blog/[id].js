export async function GET({ params }) {
	console.log();
	const id = params.id;
	const options = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`
		}
	};
	const response = await fetch(
		`http://localhost:1337/api/posts/${id}?populate=categories`,
		options
	);
	return {
		status: 200,
		body: await response.json()
	};
}
