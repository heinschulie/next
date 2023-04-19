<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

    import { partytownSnippet } from '@builder.io/partytown/integration';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Form from '$lib/components/Form.svelte';
	import Flyout from '$lib/components/Flyout.svelte';
	import '../app.css';
	let title = !!($page.stuff as any).meta ? ($page.stuff as any).meta.title : "BrightRock";
	let image = !!($page.stuff as any).meta ? ($page.stuff as any).meta.image : "https://changeexchange.co.za/assets/lovechange.png";
	let description = !!($page.stuff as any).meta ? ($page.stuff as any).meta.description : "Needs-matched insurance that changes as your life changes.";
	let author = !!($page.stuff as any).meta ? ($page.stuff as any).meta.author : "BrightRock";
	let date = !!($page.stuff as any).meta ? ($page.stuff as any).meta.date : new Date().toDateString();
	let type = !!($page.stuff as any).meta ? ($page.stuff as any).meta.type : "Article";
	let url = !!($page.stuff as any).meta ? ($page.stuff as any).meta.url : "https://brightrock.co.za";

    // Add the Partytown script to the DOM head
    let scriptEl
    onMount(
        () =>
            scriptEl &&
            (scriptEl.textContent = partytownSnippet())
    )

</script>
<svelte:head>

	<!-- Config options -->
	<script>
		// Forward the necessary functions
		// to the web worker layer
		partytown = {
			forward: ['dataLayer.push']
		}
	</script>

	<!-- `partytownSnippet` is inserted here -->
	<script bind:this={scriptEl}></script>

	<script
        type="text/partytown"
        src="https://www.googletagmanager.com/gtag/js?id=GTM-M644WT5"></script>
    <script type="text/partytown">
        window.dataLayer = window.dataLayer || []

        function gtag() {
            dataLayer.push(arguments)
        }

        gtag('js', new Date())
        gtag('config', 'GTM-M644WT5', {
            page_path: window.location.pathname
        })
    </script>

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
	
	<link async defer href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&amp;display=swap" rel="stylesheet">

</svelte:head>

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

	/* @media 
	(-webkit-min-device-pixel-ratio: 2) and (min-width: 1680px) 
	{ 
		main {
			background-color: red;
		}
	} */

</style>

<!-- temporary testing Netlify build hook -->
<!-- https://api.netlify.com/build_hooks/6226ffc3c22eb06218793242 -->