<script>
	import { blog_title } from '$lib/constants';
	import { stringToDate } from '$lib/utils';
	import SubscribersLink from '$lib/components/SubscribersLink.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} | {blog_title}</title>
	<meta name="description" content="{data.description}">
</svelte:head>

<!-- Post Header-->
<header class="masthead" style="background-color:transparent; padding-bottom: 0; background-image: url('');  margin-top: 0; padding-top: 6rem;">
	<div class="container position-relative px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div class="post-heading">
					<h1>{data.title}</h1>
					<span class="meta">
						<!-- <p class="post-meta">Posted by <a class="link-underlined" href="{base}/author/{data.authorSlug}">{data.author}</a> on {stringToDate(data.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p> -->
						<p class="post-meta">{stringToDate(data.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
				<div>{@html data.content}</div>
			</div>
		</div>
	</div>
</article>

<!-- <SubscribersLink /> -->


