<script>
	import { posts } from '$lib/posts';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import {page} from '$app/stores'

	function redirect() {
		let items = posts.filter((post) => post.visible == true).map((post) => {
			return {
				slug: post.slug
			}
		})

		let _subPaths = $page.url.pathname.split('/')
		let _slug = _subPaths[_subPaths.length-1]
		let _filtered = items.filter((post) => post.slug !== _slug)
		let randomPostSlug = _filtered[Math.floor(Math.random()*_filtered.length)].slug

		if (browser) { 
    		// window.location.href = base + "/blog/" + randomPostSlug
			goto(base + "/blog/" + randomPostSlug);
		}
	}

	// TODO should be able to know which page we are and show differents elements on the footer
	// Don't show "all posts" if we ar on the lists
	// If we are on a post, "random" should not include the same, and it should also show "Next" and "Previous"
	// (Previous | Random | Next | Subscribe)
</script>

<!-- Footer -->
<footer>
	<!-- class="border-top" -->
	<!-- Remove d-none class to show -->
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<ul class="list-group list-group-horizontal-sm text-center justify-content-center">
					<li class="list-inline-item">
						<a class="link-underlined" style="font-size: 0.95rem;" href="" on:click={redirect}>Read a random post</a>
					</li>
					<li class="list-inline-item">
						•
					</li>
					{#if $page.url.pathname !== '/blog'}
						<li class="list-inline-item">
							<a class="link-underlined" style="font-size: 0.95rem;" href="{base}/blog">See all posts</a>
						</li>
						<li class="list-inline-item">
							•
						</li>
					{/if}
					<li class="list-inline-item">
						<a class="link-underlined" style="font-size: 0.95rem;" href="#subscribeModal" data-toggle="modal" data-target="#subscribeModal">Be notified of new posts</a>
					</li>

					<!-- <li class="list-inline-item">
						<a href="https://www.instagram.com/sergi0bm/" target="_blank">
							<span class="fa-stack fa-lg">
								<i class="fas fa-circle fa-stack-2x" />
								<i class="fab fa-instagram fa-stack-1x fa-inverse" />
							</span>
						</a>
					</li> -->

				<!-- <div class="small text-center fst-italic">
					Thanks for reading
				</div> -->
			</div>
		</div>
	</div>
</footer>