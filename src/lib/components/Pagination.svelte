<script>
	import Icon from './Icon.svelte';
	
    export let rows;
    export let perPage;
	export let trimmedRows;

    $: totalRows = rows.length 
    $: currentPage = 0
    $: totalPages = Math.ceil(totalRows / perPage) 
    $: start =  currentPage * perPage
    $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1  ;

		$: trimmedRows = rows.slice(start, end + 1);

    $: totalRows, currentPage = 0
    $: currentPage, start, end

</script>

    {#if totalRows && totalRows > perPage}
        <div class="pagination justify-content-center">
            <button class="page-item page-link" on:click={() => currentPage -= 1}
                class:disabled={currentPage === 0 ? true : false} 
                disabled={currentPage === 0 ? true : false} 
                aria-label="left arrow icon" 
                aria-describedby="prev"
                title="Load previous {perPage} rows">

                <Icon direction="s" />
            </button>

            <p>{start + 1} - {end + 1} of {totalRows}</p>
            
            <button class="page-item page-link" on:click={() => currentPage += 1} 
                class:disabled={currentPage === totalPages - 1 ? true : false} 
                disabled={currentPage === totalPages - 1 ? true : false} 
                aria-label="right arrow icon" 
                aria-describedby="next"
                title="Load next {perPage} rows">

                <Icon direction='n' />
            </button>
        </div>
    {/if}
