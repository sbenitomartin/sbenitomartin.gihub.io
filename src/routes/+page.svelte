<script>
	import { blog_title } from '$lib/constants';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	export let data;

	function redirect() {
		if (browser) { 
    		window.location.href = base + "/post/" + data.slug
		}
	}

	if (browser) { 
    		window.location.href = base + "/blog"
		}
</script>

<svelte:head>
	<title>{blog_title}</title>
</svelte:head>

<!-- Main Content-->
<div class="container px-4 px-lg-5">
	<div class="row gx-4 gx-lg-5 justify-content-center">
		<div class="col-md-10 col-lg-8 col-xl-7">

			<!-- Page Header-->
			<header class="d-none d-sm-block" style="margin-bottom: 7rem;">	
			</header>
			<header class="d-block d-sm-none" style="margin-bottom: 4rem;">	
			</header>
			
			<!-- <div class="container px-4 px-lg-5">
				<div class="row gx-4 gx-lg-5 justify-content-center">
					<div class="col-md-10 col-lg-8 col-xl-7">
						<ul class="list-inline text-center">
							<button class="btn btn-light" on:click={redirect}>Random post</button>
							<a href="{base}/blog">
								<button class="btn btn-light">All posts</button>
							</a>
						</ul>
					</div>
				</div>
			</div> -->
			
		</div>
	</div>
</div>
