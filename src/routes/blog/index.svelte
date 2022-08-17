<script context="module">
	export async function load({ fetch }) {
		const res = await fetch("/api/blog");
		return { props: { posts: await res.json()} };
	}
</script>

<script>
    
    export let posts;
    console.log(posts)
    const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`
</script>

<div>
    {#each posts['data'] as post }
        <p>{post.attributes.Title}</p>
        <p>{post.attributes.content}</p>
        
    {/each}
</div>