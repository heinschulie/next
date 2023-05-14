<script lang="ts">

	import searchdata from '$lib/services/search.json'; 
	import Card from '$lib/components/Card/+page.svelte';
	
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
<div class="grid">
	{#each results.slice(0,100) as post, idx}
		<Card { ...post } href={ `/media-centre/${post.slug}` } imageLoading={idx === 0 ? 'priority' : 'lazy'}/>
	{/each}
</div>
<div class="links">
	{#each results.slice(20) as post}
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