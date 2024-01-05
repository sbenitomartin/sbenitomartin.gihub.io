<script>
	import { blog_title } from '$lib/constants';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Error | {blog_title}</title>
</svelte:head>

<header class="masthead" style="background-color:#212529;"> 
	<div class="container position-relative px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div class="page-heading">
					<h1>Error {$page.status}</h1>
					<span class="subheading">{$page.error.message}</span>
					<p></p>
					<span class="subheading">Return to <a class="link-light link-underlined" href="{base}/">home</a></span>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- Post Content-->
<article class="mb-4">
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				
			</div>
		</div>
	</div>
</article>
