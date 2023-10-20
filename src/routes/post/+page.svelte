<script>
    import { base } from '$app/paths';
	export let data;
</script>

<h1>post</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="{base}/post/{slug}">{title}</a></li>
	{/each}
</ul>
