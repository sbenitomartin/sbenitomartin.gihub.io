<script>
	import { blog_title } from '$lib/constants';
	export let data;
</script>

<svelte:head>
	<title>{data.author.name} | {blog_title}</title>
</svelte:head>

<!-- Page Header-->
<header class="masthead" style="background-color:transparent; padding-bottom: 0; background-image: url('');">
	<div class="container position-relative px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div class="page-heading">
					<!-- <h1>{data.author.name}</h1> -->
					<span class="meta">
						<img class="img-fluid rounded-circle" style="max-width: 50%; height: auto;" src="{data.author.image}" alt="Profile picture of the author" />
                		<span class="subheading">Hi, my name is <b>{data.author.name}</b>. {@html data.author.content}</span>
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

			</div>
		</div>
	</div>
</article>


