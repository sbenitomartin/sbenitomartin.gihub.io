<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error | Mejillón Gacela</title>
</svelte:head>

<h1>{$page.status} {$page.error.message}</h1>
<span style="font-size: 10em">
	
</span>