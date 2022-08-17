async function GET({ url }) {
	const response = await fetch(
		'https://europe-west2-vibrant-grammar-254613.cloudfunctions.net/flights'
	);
	return {
		status: 200,
		body: await response.json()
	};
}
export { GET };
