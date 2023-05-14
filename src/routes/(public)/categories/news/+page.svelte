<script lang="ts">
	import type { PageServerData } from './$types';
	import Card from '$lib/components/Card/+page.svelte';
	export let data: PageServerData;  
</script>

<svelte:head>
	<title>News | BrightRock</title>
</svelte:head>

<div class="category_content">
	<h1 class="heading">Here's the latest news about BrightRock</h1>
</div>

<div class="grid">
	{#each data.posts as post, idx}
		<Card { ...post } href={ `/media-centre/${post.slug}` } imageLoading={idx === 0 ? 'priority' : 'lazy'}/>
	{/each}
</div>
