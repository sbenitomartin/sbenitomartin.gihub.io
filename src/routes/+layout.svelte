<script>
	import { blog_title } from '$lib/constants';
	import { base } from '$app/paths';
	import Subscribers from '$lib/components/Subscribers.svelte';
	import { onMount } from 'svelte';

	/**
	 * @param {string} name
	 */
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	onMount(() => {
		const saved_theme = getCookie("theme");

		if (saved_theme && saved_theme === 'light') {
			document.body.classList.add('light');
		} else {
			document.body.classList.add('dark');
		}

		document.body.classList.remove('notheme');
	});

	function switchTheme(cookie = true) {
		console.log(cookie);
		var theme = '';
		var dark = document.body.classList.contains("dark");
		if (dark === false) {
			console.log("a");
			theme = 'dark';
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			console.log("b");
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
	<a href="{base}/post">posts list</a>
</nav> -->

<!-- <nav class="navbar navbar-expand-lg shadow-none navbar-light" id="mainNav">
	<div class="container px-4 px-lg-5">
		<a class="navbar-brand" href="{base}/">{blog_title}</a>
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

<nav>
	<div class="ms-auto py-1 px-2 nav-custom d-none d-sm-block">
		<b><a class="nav-link-custom" href="{base}/">Home</a></b> | <i><a class="nav-link-custom" href="{base}/about">About</a></i> | <a class="nav-link-custom" href="{base}/contact">Contact</a> <button class="nav-custom nav-icon-custom" on:click={() => switchTheme()} ><i class="fas fa-circle-half-stroke" /></button>
	</div>
	<div class="ms-auto py-1 px-2 nav-custom d-block d-sm-none" style="font-size: 1.10rem; text-align: center;">
		<b><a class="nav-link-custom" href="{base}/">Home</a></b> | <i><a class="nav-link-custom" href="{base}/about">About</a></i> | <a class="nav-link-custom" href="{base}/contact">Contact</a> <button class="nav-custom nav-icon-custom" style="font-size: 1.10rem;" on:click={() => switchTheme()} ><i class="fas fa-circle-half-stroke" /></button>
	</div>
</nav>

<slot />

<!-- Footer -->
<footer>
	<!-- class="border-top" -->
	<!-- Remove d-none class to show -->
	<div class="container px-4 px-lg-5 d-none">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<ul class="list-inline text-center">
					<!-- <Subscribers/> -->

					<!-- <li class="list-inline-item">
						<a href="https://www.instagram.com/sergi0bm/" target="_blank">
							<span class="fa-stack fa-lg">
								<i class="fas fa-circle fa-stack-2x" />
								<i class="fab fa-instagram fa-stack-1x fa-inverse" />
							</span>
						</a>
					</li> -->
				</ul>
				<!-- <div class="small text-center fst-italic">
					Thanks for reading
				</div> -->
			</div>
		</div>
	</div>
</footer>

<Subscribers/>
