<script>
	import { blog_title } from '$lib/constants';
	import { base } from '$app/paths';
	import { stringToDate } from '$lib/utils';
	export let data;

	import Pagination from '$lib/components/Pagination.svelte';
	let postsPerPage = 3;
	let values = data.posts.slice(0, postsPerPage);
</script>

<svelte:head>
	<title>{blog_title}</title>
</svelte:head>

<!-- Main Content-->
<div class="container px-4 px-lg-5">
	<div class="row gx-4 gx-lg-5 justify-content-center">
		<div class="col-md-10 col-lg-8 col-xl-7">
			<!-- Page Header-->
			<!-- <header class="masthead" style="background-color:transparent; padding-bottom: 0; margin-bottom: -8rem; background-image: url('');">	
			</header> -->

			<header style="margin-bottom: 8rem;">	
			</header>
			
			<!-- Posts list-->
			<div id="post-list">
				{#each values as { slug, title, subtitle, author, authorSlug, date }, i}
					<!-- Post preview-->
					<div class="post-preview">
						<a href="{base}/post/{slug}">
							<h2 class="post-title">{title}</h2>
							<h3 class="post-subtitle">{subtitle}</h3>
						</a>
						<!-- <p class="post-meta">Posted by <a class="link-light link-underlined" href="{base}/author/{authorSlug}">{author}</a> on {stringToDate(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p> -->
						<p class="post-meta">Posted on {stringToDate(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
					</div>
					{#if i < (values.length-1)}
					<!-- Divider-->
					<hr class="my-4" />
					{/if}
				{/each}
			</div>
			
			<!-- Pager-->
			<Pagination rows={data.posts} perPage={postsPerPage} bind:trimmedRows={values} />
		</div>
	</div>
</div>

<!-- <ul>
	{#each data.summaries as { slug, title }}
		<li><a href="{base}/post/{slug}">{title}</a></li>
	{/each}
</ul> -->