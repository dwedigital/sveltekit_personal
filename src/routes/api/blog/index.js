export async function GET() {
	const options = {
		headers: {
			Authorization: `Bearer dbd4b3453d217f9ad8738f72f0e520c5fa778b34dc17cf40922c026589c69c5ffd530afc5c696f7bd840f8615b2806ece384163b0cae76ac17054ea49290a6436d4e2788d35984bcc267446a36754ee630d1bf77a9bbe7d679a31cfc615112f6269d6aa7263711cf7a4ef9e92c51a7152444d1c3abd03e33b4da0a83f8d96c71`
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
