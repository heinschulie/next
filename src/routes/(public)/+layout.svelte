<script lang="ts">
	import { onMount } from 'svelte';
  	import { partytownSnippet } from '@builder.io/partytown/integration'

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
	import { browser } from '$app/environment';

		const gtag = `
		window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', 'GTM-M644WT5', {
			page_path: window.location.pathname
		})
		`;
		const googletagmanager = `https://www.googletagmanager.com/gtag/js?id=GTM-M644WT5`;

		let scriptEl: any;
		onMount(
			() => {
				if (scriptEl) {
					scriptEl.textContent = partytownSnippet()
				}
			}
		)
		
</script>

<svelte:head>

	<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-M644WT5"></script>
	<script>
		window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', 'GTM-M644WT5', {
			page_path: window.location.pathname
		})
	</script> -->

	<script>
		// Config options
		partytown = {
		  forward: ['dataLayer.push'],
		  resolveUrl: (url) => {
			const baseUrl = 'https://spiffy-sprinkles-88adaf.netlify.app'
			const siteUrl = `${baseUrl}/proxytown`; 
	
			if (url.hostname === 'www.googletagmanager.com') {
			  const proxyUrl = new URL(`${siteUrl}/gtm`)
	
			  const gtmId = new URL(url).searchParams.get('id')
			  gtmId && proxyUrl.searchParams.append('id', gtmId)
	
			  return proxyUrl
			} else if (
			  url.hostname === 'www.google-analytics.com'
			) {
			  const proxyUrl = new URL(`${siteUrl}/ga`)
	
			  return proxyUrl
			}
	
			return url
		  }
		}
	  </script>
	  <!-- Insert `partytownSnippet` here -->
	<script bind:this={scriptEl}>
	console.log("hello this is schulie reporting to you live from the browser. 0");
	</script>
	
	  <!-- GTM script + config -->
	  <script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=GTM-M644WT5">
		
		console.log("hello this is schulie reporting to you live from the browser. 1")

	</script>
	  <script type="text/partytown">

		window.dataLayer = window.dataLayer || [];

		console.log("hello this is schulie reporting to you live from the browser. 2");

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
	
	<link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&amp;display=swap">

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
</style>