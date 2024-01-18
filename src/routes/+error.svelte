<script>
	import { blog_title } from '$lib/constants';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	// Retrocompatibility because posts used to be under /post instead of /blog
	// Moved to app.html just after body tag because it is much faster
	// if(browser) {
	// 	let _pathname = window.location.pathname;
	// 	let _baseAndPost = base + '/post/';
	// 	if(_pathname.startsWith(_baseAndPost)) {
	// 		let _slug = _pathname.slice(_baseAndPost.length)
	// 		goto(base + '/blog/' + _slug);
	// 	}
	// }
</script>

<svelte:head>
	<title>Error | {blog_title}</title>
	<!-- <meta name="description" content=""> -->
</svelte:head>

<header class="masthead"> 
	<div class="container position-relative px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div class="page-heading">
					<h1>Error {$page.status}</h1>
					<!-- <span class="subheading">{$page.error.message}</span> -->
					<p></p>
					<span class="subheading">Return to <a class="link-underlined" href="{base}/">home</a></span>
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
