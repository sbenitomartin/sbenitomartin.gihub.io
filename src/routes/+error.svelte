<script>
	import { blog_title } from '$lib/constants';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error | {blog_title}</title>
</svelte:head>

<h1>{$page.status} {$page.error.message}</h1>
<span style="font-size: 10em">
	
</span>