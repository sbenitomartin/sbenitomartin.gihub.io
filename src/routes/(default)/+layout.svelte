<script>
	import { base } from '$app/paths';
	import Footer from '$lib/components/Footer.svelte';
	import Subscribers from '$lib/components/Subscribers.svelte';
	import { page } from '$app/stores'

	let nav_custom_sm_close_hidden = false;

	function switchTheme(cookie = true) {
		let theme = '';
		let dark = document.body.classList.contains('dark');
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

	function bodyNoScroll() {
		let body_no_scroll = document.body.classList.contains('body_no_scroll');
		if (body_no_scroll === false) {
			document.body.classList.add('body_no_scroll');
		} else {
			document.body.classList.remove('body_no_scroll');
		}
	}


	function dispatchResize () {
		// @ts-ignore
		document.getElementById('navbarResponsive').classList.remove('show');
		nav_custom_sm_close_hidden = false;
	}
</script>

<svelte:window on:resize={dispatchResize} />

<!-- SM NAV -->
<nav>
	<div class="d-block d-sm-none">
		<div style="top :5px; right: 5px; position: fixed; z-index: 1030;">
			<button
				class:invisible={nav_custom_sm_close_hidden}
				on:click="{() => nav_custom_sm_close_hidden = !nav_custom_sm_close_hidden}"
				on:click={() => bodyNoScroll()}
				class="nav_custom_sm_open nav-custom nav-icon-custom navbar-toggler collapsed d-sm-none"
				style="font-size: 2.50rem; right: 0; top: 0;"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"><i class="fas fa-plus" /></button
			>
		</div>

		<div class="collapse navbar-collapse" id="navbarResponsive" style="position: fixed; z-index: 1030;">
			<div class="nav_custom_sm">
				{#if $page.url.pathname !== '/'}
				<div>
					<a class="nav-link-custom" href="{base}/">Home</a>
				</div>
				{/if}
				{#if $page.url.pathname !== '/blog'}
				<div>
					<a class="nav-link-custom" href="{base}/blog">List</a>
				</div>
				{/if}
				<div>
					<a class="nav-link-custom" href="{base}/about">About</a>
				</div>
				<div>
					<a class="nav-link-custom" href="{base}/contact">Contact</a>
				</div>
				<div>
					<button
						class="nav-custom nav-icon-custom"
						style="font-size: 2.50rem;"
						on:click={() => switchTheme()}><i class="fas fa-circle-half-stroke" /></button
					>
				</div>

				<button
					on:click="{() => nav_custom_sm_close_hidden = !nav_custom_sm_close_hidden}"
					on:click={() => bodyNoScroll()}
					class="nav_custom_sm_close nav-custom nav-icon-custom navbar-toggler collapsed"
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
</nav>

<!-- DEFAULT NAV -->
<nav>
	<div class="ms-auto py-1 px-2 nav-custom d-none d-sm-block">
		{#if $page.url.pathname !== '/'}
		<b><a class="nav-link-custom" href="{base}/">Home</a></b> |
		{/if}
		{#if $page.url.pathname !== '/blog'}
		<b><a class="nav-link-custom" href="{base}/blog">List</a></b> |
		{/if}
		<i><a class="nav-link-custom" href="{base}/about">About</a></i>
		| <a class="nav-link-custom" href="{base}/contact">Contact</a>
		<button class="nav-custom nav-icon-custom" on:click={() => switchTheme()}
			><i class="fas fa-circle-half-stroke" /></button
		>
	</div>
</nav>

<slot />

<Footer />

<Subscribers />
