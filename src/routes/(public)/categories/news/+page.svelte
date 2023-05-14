<script lang="ts">
	import type { PageServerData } from './$types';
	import CardList from '$lib/components/CardList/+page.svelte';
	export let data: PageServerData;  
</script>

<svelte:head>
	<title>News | BrightRock</title>
</svelte:head>

<div class="category_content">
	<h1 class="heading">Here's the latest news about BrightRock</h1>
</div>

<CardList currentData={data.posts} initiallyShowTillIndexOnDesktop={4} gridNumber={4} />
