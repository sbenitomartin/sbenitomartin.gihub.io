<script>
	import { blog_title } from '$lib/constants';
	export let data;
</script>

<svelte:head>
	<title>{data.post.title} | {blog_title}</title>
</svelte:head>

<!-- Page Header-->
<header class="masthead" style="background-color:transparent; padding-bottom: 0; background-image: url('');">
	<div class="container position-relative px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div class="post-heading">
					<h1>{data.post.title}</h1>
					<span class="meta">
						Posted by XXX, on YYY
					</span>
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
				<div>{@html data.post.content}</div>
			</div>
		</div>
	</div>
</article>


