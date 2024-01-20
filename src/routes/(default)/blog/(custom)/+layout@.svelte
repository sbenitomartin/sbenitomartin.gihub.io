<script>
	import Subscribers from '$lib/components/Subscribers.svelte';
</script>

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
