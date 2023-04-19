<script>
	
	import Header from '$lib/components/Header/+page.svelte';
	import Footer from '$lib/components/Footer/+page.svelte';
	import Form from '$lib/components/Form/+page.svelte';
	import Flyout from '$lib/components/Flyout/+page.svelte';
	
	let title =  "BrightRock"; // !!($page.stuff as any).meta ? ($page.stuff as any).meta.title : "BrightRock";
	let image =  "https://changeexchange.co.za/assets/lovechange.png"; // !!($page.stuff as any).meta ? ($page.stuff as any).meta.image : "https://changeexchange.co.za/assets/lovechange.png";
	let description =  "Needs-matched insurance that changes as your life changes."; // !!($page.stuff as any).meta ? ($page.stuff as any).meta.description : "Needs-matched insurance that changes as your life changes.";
	let author =  "BrightRock"; // !!($page.stuff as any).meta ? ($page.stuff as any).meta.author : "BrightRock";
	let date =  new Date().toDateString(); // !!($page.stuff as any).meta ? ($page.stuff as any).meta.date : new Date().toDateString();
	let type =  "Article"; // !!($page.stuff as any).meta ? ($page.stuff as any).meta.type : "Article";
	let url =  "https://brightrock.co.za"; // !!($page.stuff as any).meta ? ($page.stuff as any).meta.url : "https://brightrock.co.za";

	import './styles.css';
</script>

<svelte:head>

	<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-M644WT5"></script>
	<script>
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