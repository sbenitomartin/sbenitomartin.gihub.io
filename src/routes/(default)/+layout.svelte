<script>
	import { base } from '$app/paths';
	import Footer from '$lib/components/Footer.svelte';
	import Subscribers from '$lib/components/Subscribers.svelte';

	function switchTheme(cookie = true) {
		var theme = '';
		var dark = document.body.classList.contains('dark');
		if (dark === false) {
			theme = 'dark';
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			theme = 'light';
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}

		if (cookie) {
			const one_year = 60 * 60 * 24 * 365;
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
		}
	}
</script>

<!-- <nav>
	<a href="{base}/">home</a>
	<a href="{base}/blog">posts list</a>
</nav> -->

<!-- <nav class="navbar navbar-expand-lg shadow-none navbar-light" id="mainNav">
	<div class="container px-4 px-lg-5">
		<a class="navbar-brand" href="{base}/">aaa</a>
		<button
			class="navbar-toggler collapsed"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarResponsive"
			aria-controls="navbarResponsive"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<i class="fas fa-bars" />
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ms-auto py-4 py-lg-0">
				<li class="nav-item">
					<a class="nav-link px-lg-3 py-3 py-lg-4" href="{base}/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-lg-3 py-3 py-lg-4" href="{base}/contact">Contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav> -->

<div class="">
	<!-- <a rel="nav_custom_sm" style="top: 1.5rem; right: 1.5rem; display: none;"> ︎ </a> -->

	<div class="ms-auto py-1 px-2 nav-custom d-block d-sm-none" style="font-size: 1.10rem;">
		<button
			class="nav-custom nav-icon-custom navbar-toggler collapsed d-sm-none"
			style="font-size: 2.50rem; right: 0; top: 0;"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarResponsive"
			aria-controls="navbarResponsive"
			aria-expanded="false"
			aria-label="Toggle navigation"><i class="fas fa-plus" /></button
		>
	</div>

	<div class="d-block d-sm-none">
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<div class="nav_custom_sm">
				<div class="page-link" data-link-pid="19794400" data-prevtype="">
					<a class="nav-link-custom" href="{base}/">Home</a>
				</div>
				<div class="page-link" data-link-pid="18415401" data-prevtype="">
					<a class="nav-link-custom" href="{base}/about">About</a>
				</div>
				<div class="page-link" data-link-pid="15819705" data-prevtype="">
					<a class="nav-link-custom" href="{base}/contact">Contact</a>
				</div>
				<div class="page-link" data-link-pid="15819705" data-prevtype="">
					<button
						class="nav-custom nav-icon-custom"
						style="font-size: 2.50rem;"
						on:click={() => switchTheme()}><i class="fas fa-circle-half-stroke" /></button
					>
				</div>

				<button
					class="close nav-custom nav-icon-custom navbar-toggler"
					style="font-size: 2.50rem;"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"><i class="fas fa-xmark" /></button
				>
			</div>
		</div>
	</div>
</div>

<nav>
	<div class="ms-auto py-1 px-2 nav-custom d-none d-sm-block">
		<b><a class="nav-link-custom" href="{base}/">Home</a></b> |
		<i><a class="nav-link-custom" href="{base}/about">About</a></i>
		| <a class="nav-link-custom" href="{base}/contact">Contact</a>
		<button class="nav-custom nav-icon-custom" on:click={() => switchTheme()}
			><i class="fas fa-circle-half-stroke" /></button
		>
	</div>

	<!-- OLD SM NAV remove d-none to show-->
	<div
		class="ms-auto py-1 px-2 nav-custom d-block d-sm-none d-none"
		style="font-size: 1.10rem; text-align: center;"
	>
		<b><a class="nav-link-custom" href="{base}/">Home</a></b> |
		<i><a class="nav-link-custom" href="{base}/about">About</a></i>
		| <a class="nav-link-custom" href="{base}/contact">Contact</a>
		<button
			class="nav-custom nav-icon-custom"
			style="font-size: 1.10rem;"
			on:click={() => switchTheme()}><i class="fas fa-circle-half-stroke" /></button
		>
	</div>
</nav>

<slot />

<Footer />

<Subscribers />
