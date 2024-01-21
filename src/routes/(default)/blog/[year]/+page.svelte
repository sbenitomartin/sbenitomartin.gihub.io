<script>
	import { blog_title } from '$lib/constants';
	import { base } from '$app/paths';
	import { stringToDate } from '$lib/utils';
	export let data;

	import Pagination from '$lib/components/Pagination.svelte';
	let postsPerPage = 4;
	let values = data.posts.slice(0, postsPerPage);
</script>

<svelte:head>
	<title>{blog_title}</title>
	<meta name="description" content="{data.posts.length} post to show on this blog in {data.year}.">
</svelte:head>

<!-- Page Header-->
<header class="masthead" style="background-color:transparent; padding-bottom: 0; background-image: url('');  margin-top: 0; padding-top: 6rem;">
	<div class="container position-relative px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div class="post-heading">
					{#if data.year}<h1>Posts in {data.year}</h1>{/if}
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Main Content-->
<div class="container px-4 px-lg-5">
	<div class="row gx-4 gx-lg-5 justify-content-center">
		<div class="col-md-10 col-lg-8 col-xl-7">
			<!-- Page Header-->
			<!-- <header class="masthead" style="background-color:transparent; padding-bottom: 0; margin-bottom: -8rem; background-image: url('');">	
			</header> -->

			<!-- <header class="d-none d-sm-block" style="margin-bottom: 7rem;">	
			</header>

			<header class="d-block d-sm-none" style="margin-bottom: 4rem;">	
			</header> -->
				
			<!-- Posts list-->
			<div id="post-list">
				{#if (values.length) < 1 && data.year}
					<p>No posts for this year</p>
				{:else}
					{#each values as { slug, title, subtitle, author, authorSlug, date, preview }, i}
						<!-- Post preview-->
						<div class="post-preview">
							<a href="{base}/blog/{slug}">
								<h2 class="post-title">{title}</h2>
								<!-- <h3 class="post-subtitle">{subtitle}</h3> -->
								<div>{@html preview}</div>
							</a>
							<!-- <p class="post-meta">Posted by <a class="link-underlined" href="{base}/author/{authorSlug}">{author}</a> on {stringToDate(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p> -->
							<p class="post-meta">Posted on {stringToDate(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
						</div>
						{#if i < (values.length-1)}
						<!-- Divider-->
						<hr class="my-4" />
						{/if}
					{/each}
				{/if}
			</div>
			
			<!-- Pager-->
			<Pagination rows={data.posts} perPage={postsPerPage} bind:trimmedRows={values} />
		</div>
	</div>
</div>