<script lang="ts">

	import Analytics from '$lib/components/AnalyticsAlt/+page.svelte';	
	import Header from '$lib/components/Header/+page.svelte';
	import Footer from '$lib/components/Footer/+page.svelte';
	import Form from '$lib/components/Form/+page.svelte';
	import Flyout from '$lib/components/Flyout/+page.svelte';
	
    import { page } from '$app/stores';
	const livePage = $page; 

	$: title = !!livePage.data.meta ? livePage.data.meta.title?.replace(/<p>/g, '').replace(/<\/p>/g, '') : "BrightRock";
	$: image = !!livePage.data.meta ? livePage.data.meta.image?.replace(/<p>/g, '').replace(/<\/p>/g, '') : "https://changeexchange.co.za/assets/lovechange.png";
	$: description = !!livePage.data.meta ? livePage.data.meta.description?.replace(/<p>/g, '').replace(/<\/p>/g, '') : "Needs-matched insurance that changes as your life changes.";
	$: author = !!livePage.data.meta ? livePage.data.meta.author?.replace(/<p>/g, '').replace(/<\/p>/g, '') : "BrightRock";
	$: date = !!livePage.data.meta ? livePage.data.meta.date?.replace(/<p>/g, '').replace(/<\/p>/g, '') : new Date().toDateString();
	$: type = !!livePage.data.meta ? livePage.data.meta.type?.replace(/<p>/g, '').replace(/<\/p>/g, '') : "Article";
	$: url = !!livePage.data.meta ? livePage.data.meta.url?.replace(/<p>/g, '').replace(/<\/p>/g, '') : "https://brightrock.co.za";

	import '../styles.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
		
</script>

<svelte:head>

	<title>{ title }</title>
	<meta property="og:determiner" content="The">
	<meta property="og:site_name" content={title}>

	<meta property="og:title" content="{ title }">
	<meta property="og:image" content="{ image }">
	<meta property="og:description" content="{ description }">
	<meta property="og:type" content="{ type }">
	<meta property="og:url" content="{ url }">
	
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:site" content="@BrightRockZA">
	<meta property="twitter:creator" content="@BrightRockZA">
	<meta property="twitter:title" content={title}>
	<meta name="twitter:image:src" content="{ image }" />
	
	<link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&amp;display=swap">

</svelte:head>

<!-- <Analytics siteUrl="https://spiffy-sprinkles-88adaf.netlify.app" /> -->
<Header />
<main>
	<slot />
	<Form />
	<Footer></Footer>
	<Flyout />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		padding-top: calc(var(--header-height) + var(--flint-login-height));
	}
</style>