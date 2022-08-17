<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/blog');
		return { props: { posts: await res.json() } };
	}
</script>

<script>
	export let posts;
	console.log(posts);
</script>

<div>
	{#each posts['data'] as post}
		<p>{post.attributes.Title}</p>
		<p>{post.attributes.content}</p>
	{/each}
</div>
