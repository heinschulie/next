<script lang="ts">
	import { onMount } from 'svelte';
  	import { partytownSnippet } from '@builder.io/partytown/integration'

	import Analytics from '$lib/components/Analytics/+page.svelte'

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

	// --> spiffy sprinkles : GTM-MN78JMW 
	// --> cs  				: GTM-M644WT5
	let scriptEl: any;
	onMount(
		() => {
			if (scriptEl) {
				scriptEl.textContent = partytownSnippet()
			}
		}
	)
		
</script>

<Analytics />

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