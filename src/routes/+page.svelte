<script>
	import { blog_title } from '$lib/constants';
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>{blog_title}</title>
</svelte:head>

<!-- Main Content-->
<div class="container px-4 px-lg-5">
	<div class="row gx-4 gx-lg-5 justify-content-center">
		<div class="col-md-10 col-lg-8 col-xl-7">
			<!-- Page Header-->
			<header class="masthead" style="background-color:transparent; padding-bottom: 0; margin-bottom: -2rem; background-image: url('');">
				
			</header>
			<!-- Posts list-->
			<div id="post-list"></div>
				{#each data.posts as { slug, title, subtitle, author, authorSlug, date }}
					<!-- Post preview-->
					<div class="post-preview">
						<a href="{base}/post/{slug}">
							<h2 class="post-title">{title}</h2>
							<h3 class="post-subtitle">{subtitle}</h3>
						</a>
						<p class="post-meta">Posted by <a class="link-light link-underlined" href="{base}/author/{authorSlug}">{author}</a> on {date}</p>
					</div>
					<!-- Divider-->
					<hr class="my-4" />
				{/each}
			<!-- Pager-->
			<nav>
				<ul id="pagination-list" class="pagination pagination-dark justify-content-center"></ul>
			</nav>
		</div>
	</div>
</div>

<!-- <ul>
	{#each data.summaries as { slug, title }}
		<li><a href="{base}/post/{slug}">{title}</a></li>
	{/each}
</ul> -->

