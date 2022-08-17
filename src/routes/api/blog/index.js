export async function GET({params}){
    const id = params.id;
    const options = {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`
        }
      };
    const response = await fetch(
        'http://localhost:1337/api/posts/?populate[categories][filters][name][$eq]=JavaScript', options
    );
    return {
        status: 200,
        body:   await response.json(),
    }
}