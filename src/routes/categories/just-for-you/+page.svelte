
<script lang="ts">
	import type { PageServerData } from './$types';
	import Card from '$lib/components/Card/+page.svelte';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>Just for you | BrightRock</title>
</svelte:head>

<div class="category_content">
	<h1 class="heading">Let’s get smart about your money</h1>
	<p class="copy">Because we #LoveChange, at BrightRock, we want to help you make money decisions that reflect your life, your changing needs, and all the things that are important to you. Read our latest educational content below to help you learn more about money, life insurance and navigating life’s big change moments.</p>
</div>

<div class="grid">
	{#each data.posts as post}
		<Card { ...post } href={ `/media-centre/${post.slug}` } />
	{/each}
</div>
