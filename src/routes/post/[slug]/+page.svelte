<script>
	import { blog_title } from '$lib/constants';
	export let data;
</script>

<svelte:head>
	<title>{data.post.title} | {blog_title}</title>
</svelte:head>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
