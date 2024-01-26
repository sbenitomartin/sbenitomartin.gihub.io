<script>
	import { blog_title } from '$lib/constants';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>{blog_title}</title>
	<meta
		name="description"
		content="This blog is a personal project that tries to be a place to put a little bit of our souls and get away from the immediacy that surround us nowadays."
	/>
</svelte:head>

<!-- Main Content-->
<div class="container mt-5 px-5">
	<div class="row justify-content-center px-0 px-sm-2 px-md-4">
		<div class="col-md-10 col-lg-8 col-xl-7 px-0 px-sm-0 px-md-3 px-lg-5">
			<div class="row justify-content-center">
				<video class="img-fluid" style="width:80%;" autoplay loop muted><source src="{base}/video/sergio_kid.mp4" type="video/mp4" /></video>
			</div>
			<div class="row mt-2">
				<p style='font-size: 0.90rem; padding-left: 20%; padding-right: 10%;'>Me paso el día pensando en cosas. Me vienen a la cabeza pensamientos e imágenes, o más que imágenes, sensaciones parecidas al tacto, a un primer plano, a un frame de una película, durante un segundo, y después un fundido a negro.<br><br>Las imágenes se suelen repetir con frecuencia, con pequeñas variaciones, o desde un plano distinto.</p>
			</div>
		</div>
	</div>
</div>
