<script lang="ts">
	/* eslint-disable */
	import { page } from '$app/stores';
	import { analyticsStore } from '$lib/stores/analyticsStore';
    import { dev } from '$app/environment';

    // Si se modifica hay que modificar tambien abajo
    var MEASUREMENT_ID = 'G-YFHP5VJQV3';

	$: {
		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag('config', MEASUREMENT_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
	// subscribe to store and see if there is any event in store(array) then run that event
	analyticsStore.subscribe((queue) => {
		let next = queue && queue.length && queue.shift();
		let retries = 3;
		let previousExecutedOperationId;
		while (next) {
			const { type, event, data, id } = next;
			if (!type || !event || !data || !id) {
				console.log('Incorrect analytics event data');
				next = queue.shift();
				continue;
			}
			// if current id is not equal to previous id then reassign retries to 3
			if (id && id !== previousExecutedOperationId) retries = 3;
			previousExecutedOperationId = id;
			// @ts-ignore
			if (typeof gtag !== 'undefined') {
				// @ts-ignore
				gtag(type, event, data);
				console.log('event created with data', next);
			} else {
				// gtag not found, retry till retries become 0
				if (retries > 0) {
					retries--;
					continue;
				} else {
					console.log('Analytics event failed to reach server with: ', next);
				}
			}
			next = queue.shift();
		}
	});
</script>
  



<svelte:head>
	{#if !dev}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id={MEASUREMENT_ID}"></script>
		<script>
			try {
				if (typeof window !== 'undefined' && window) {
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag('js', new Date());
					// Si se modifica hay que modificar tambien arriba
					gtag('config', 'G-YFHP5VJQV3');
				}
				// console.log('Google analytics setup successfull');
			} catch (err) {
				console.log('Error setting up google analytics ', err);
			}
		</script>
	{/if}
</svelte:head>
