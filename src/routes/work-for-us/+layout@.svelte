<script lang="ts">
	import Header from '$lib/components/Header/+page.svelte';
	import Footer from '$lib/components/Footer/+page.svelte';
	import Flyout from '$lib/components/Flyout/+page.svelte';
	import '../styles.css';
</script>
<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&amp;display=swap" rel="stylesheet">
</svelte:head>

<Header />
<main>
	<slot />
    
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
