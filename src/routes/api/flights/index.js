 
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const response = await fetch(
    'https://europe-west2-vibrant-grammar-254613.cloudfunctions.net/flights'
  );
  const flights = await response.json();
 
  return{
    status: 200,
    body: flights,
  }
}