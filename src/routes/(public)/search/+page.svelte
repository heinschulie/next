<script lang="ts">

	import searchdata from '$lib/services/search.json'; 
	import CardList from '$lib/components/CardList/+page.svelte';
	
	// let searchDATA = JSON.parse(searchdata); 
	const highlightSearchTerms = false; 

	const highlight = ( sentence: string, text: string ) => 
		sentence.split(' ')
				.map(word => {
					return (word.toLowerCase().includes(text) || text.toLowerCase().includes(word)) ? `<em>${word}</em>` : word
				})
				.join(' '); 
	
    $: results = [] as any[]; 
	$: text = '';
	$: if(text && text.length > 2) {
        results = [];
        results = searchdata.
			filter(item => {
				return item.searchString.toLowerCase().includes(text.toLowerCase());
			})
			// optional highlighting 
			.map(post => {

				if(!highlightSearchTerms) {
					return post; 
				}

				let { heading, author, excerpt } = post; 
				heading = highlight( heading, text ); 
				author = highlight( author, text ); 
				excerpt = highlight( excerpt, text ); 
				return { ...post, heading, author, excerpt };
			})
	} else {
        results = searchdata;
    }

</script>

<svelte:head>
	<title>BrightRock | The needs-matched money company | Search</title>
</svelte:head>

<input class="search_input" placeholder="Type to start searching..." bind:value={text} >
<CardList currentData={results} initiallyShowTillIndexOnDesktop={4} gridNumber={4} />
<div class="links">
	{#each results as post}
		<a href={ `/media-centre/${post.slug}` }>{ post.slug }</a>
	{/each}
</div>

<style>
	input {
		height: 50px;
		margin: var(--padding) var(--padding) 0;
		padding: 0 calc(var(--padding) / 2);

		border-radius: 10px;
	}
	.links {
		height: 0;
		position: absolute;
		top: -100000px;
	}
</style>