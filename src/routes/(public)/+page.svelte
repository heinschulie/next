<script lang="ts">

	import type { PageServerData } from './$types';
	
	import Button from '$lib/components/Button/+page.svelte';
	import Panel from '$lib/components/Panel/+page.svelte';
	import Silo from '$lib/components/Silo/+page.svelte';

	import CardList from '$lib/components/CardList/+page.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver/+page.svelte';
	
	// Note: --> the use of fade caused a pretty sinister routing bug that would place the 
	// new pages html below the current pages html. Also seemed to have a 'stacking' effect
	// where the further down in the page the link was (and therefore behind more 'transitions')
	// the worse the lag 
	// import { fade } from "svelte/transition";
	
	import ResponsiveVideo from '$lib/components/ResponsiveVideo/+page.svelte';
	// import Modal from '$lib/components/Modal/+page.svelte';

	export let data: PageServerData;  
  	// let fadeInMs = 800;
	
	let node1: HTMLElement;
	let node2: HTMLElement;
	let node3: HTMLElement;
	let node4: HTMLElement;

	let intersecting1 = false;
	// let intersecting2 = false;
	// let intersecting3 = false;
	// let intersecting4 = false;

	$: dynamicColor1 = "var(--color-background)";
	$: dynamicColor2 = "var(--color-background)";
	$: dynamicColor3 = "var(--color-background)";
	$: dynamicColor4 = "var(--color-background)";

	let showVideo = false;
</script>

<svelte:head>
	<title>BrightRock | The needs-matched money company | Home</title>
</svelte:head>

<Panel>
	<h1 class="heading">Welcome to BrightRock, the <em>needs-matched</em> money company</h1>
	<p>When you think about your money, you’re actually thinking about your life. About the people you love and the things you want to do. And about life’s big Change Moments – like when you land that job, make a home, tie the knot or start a family.</p>
	<p>At BrightRock, we want to help you make money decisions that reflect your life, your changing needs, and all the things that are really important to you.</p>
	<Button href="/about">Our story so far</Button>

		<!-- <ResponsiveVideo 
		slot="illustration" 
		src="https://res.cloudinary.com/brightrock/video/upload/v1662993070/corporate_site/welcome_tkgilv.mp4" 
		placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" 
		aspect_ratio={0.75} 
		range={220} 
		on:colorMatched={(evt) => dynamicColor1 = evt.detail} /> -->

		<button slot="illustration" class="picture-set video" on:click={() => showVideo = true}>
			<picture>
				<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1665382912/cxc/CXC_illustrations_for_new_NMMC_mbfgkn.webp" type="image/webp" />
				<img src="https://res.cloudinary.com/brightrock/image/upload/v1665382912/cxc/CXC_illustrations_for_new_NMMC_mbfgkn.png" alt="Graph showing cover gains." />
			</picture>
		</button>

</Panel>

{#if showVideo}
<button class="modal" on:click={() => showVideo = false}>
	<iframe src="https://www.youtube.com/embed/N5w0W1Dvw7s?controls=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</button>
{/if}

<IntersectionObserver 
	element={node1} 
	once={true}
	intersecting={false}
	rootMargin="0px"
	root={undefined}
	entry={undefined}
	observer={undefined}
	on:intersect={ (e) => intersecting1 = true }>

	<div class="intersection_wrapper" bind:this={node1}>
		{#if intersecting1}

		<section class="silo_container" style="background-color: hsla(300, 4%, 95%, 1);">
		

			<h1 class="centered heading">What we offer</h1>
			<p class="centered padded">Our needs-matched financial services products can precisely match your needs, through every step of your personal money journey.</p>
			
			<div class="columns">
				<Silo>
					<span slot="illustration">
						<div class="picture-set no_min_height">
							<!-- <video loading="lazy" autoplay loop muted playsinline>
								<source src="https://res.cloudinary.com/iamme/image/upload/v1652424988/brightrock/WhatWeOffer_IndividualLife.mp4" type="video/mp4" >
							</video> -->
	
							<video autoplay loop muted playsinline>
								<source src="https://res.cloudinary.com/brightrock/image/upload/v1662993920/corporate_site/WhatWeOffer_IndividualLife_vl9iyp.mp4" type="video/mp4" >
							</video>
							
						</div>
					</span>
					<span slot="heading">
						<h2 class="subheading">Individual life cover</h2>
					</span>
					<span slot="copy">
						<p>Our needs-matched life insurance is a world first. It’s made just for you at the start, and changes as your life changes, giving you the protection you need every step of the way. And it gives you more cover for your money: You can get up to 40% more cover for the same premium.</p>
					</span>
					<span slot="button">
						<Button href="/individual-life-cover" backgroundColor="var(--green)"></Button>
					</span>
				</Silo>
				<Silo>
					<span slot="illustration">
						<div class="picture-set no_min_height">
							<video autoplay loop muted playsinline >
								<source src="https://res.cloudinary.com/brightrock/video/upload/v1662993071/corporate_site/WhatWeOffer_GroupRisk_dyibcu.mp4" type="video/mp4" >
							</video>
						</div>
					</span>
					<span slot="heading">
						<h2 class="subheading">Group risk cover</h2>
					</span>
					<span slot="copy">
						<p>Our unique group risk cover offers employers a unique insurance solution that keeps up with members’ changing financial needs. Members get unrivalled claims certainty with the most objective, comprehensive claims definitions. And their cover’s more flexible too.</p>
					</span>
					<span slot="button">
						<Button href="/group-risk-cover"></Button>
					</span>
				</Silo>
				<Silo>
					<span slot="illustration">
						<div class="picture-set no_min_height">
							<video autoplay loop muted playsinline >
								<source src="https://res.cloudinary.com/brightrock/image/upload/v1662994129/corporate_site/WhatWeOffer_Funeral_edkoqw.mp4" type="video/mp4" >
							</video>
						</div>
					</span>
					<span slot="heading">
						<h2 class="subheading">Funeral offering</h2>
					</span>
					<span slot="copy">
						<p>We partner with large funeral parlours to meet all their underwriting, and compliance needs. We pride ourselves on our needs-matched service offering, which provides each parlour a hands-on, personal experience.</p>
					</span>
					<span slot="button">
						<Button href="/funeral-offering" backgroundColor="var(--dark-amber)"></Button>
					</span>
				</Silo>
			</div>
		</section>

		<Panel backgroundColor={ dynamicColor2 }>
	
			<h1 bind:this={node2} class="heading">The Change Exchange</h1>
			<h2 class="subheading">Tips and tools to help you navigate life’s big Change Moments.</h2>
			<p>We're here to help you with life's biggest Change Moments. How? By sharing other people's inspiring change stories, helpful tools and apps, and expert opinions that matter.</p>
			<Button href="https://changeexchange.co.za">Go to the Change Exchange</Button>
	
			<picture slot="illustration">
				<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662993836/corporate_site/CXC_illustrations_for_new_sections-03_bqxhcs.webp" type="image/webp" />
				<img loading="lazy" src="https://res.cloudinary.com/brightrock/image/upload/v1662993836/corporate_site/CXC_illustrations_for_new_sections-03_bqxhcs.png" alt="Family standing at the crossroads" />
			</picture> 
		</Panel>
	
		<Panel backgroundColor={ dynamicColor3 }>
			<h1 bind:this={node3} class="heading">BrightRock partnerships</h1>
			<p>At BrightRock, we’re all about loving Change and playing the bounce. Whether it’s on the rugby ﬁeld, in broadcast and digital spaces, or even around the dinner table – we’re ready to support, recognise and embrace change.</p>
			<Button href="/rugby-partnerships"></Button>
			
			<span slot="illustration">
	
				<ResponsiveVideo src="https://res.cloudinary.com/brightrock/video/upload/v1662994209/corporate_site/BrightRock_Sponsorships_tnshoh.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" aspect_ratio={1.4} range={220} on:colorMatched={(evt) => dynamicColor3 = evt.detail} />
	
			</span>	
		</Panel>
	
	
		<div bind:this={node4} class="padded">
			<h1 class="heading">Media centre</h1>
			<p>Because we #LoveChange, BrightRock aims to change the financial services industry for good. To see what’s new in our business and our industry, read the latest BrightRock media coverage and press releases below:</p>
			<Button href="/media-centre"></Button>
			
			<CardList currentData={data.posts.slice(0,4)} initiallyShowTillIndexOnDesktop={4} />

		</div>


		{/if}
	</div>
	
	
</IntersectionObserver>

<style>

	.intersection_wrapper {
		min-height: 100px;		
	}
	.video:hover {
		cursor: pointer;
	}
	iframe{
		/* --width: 100%; */
		/* min-width: 560px; */
		aspect-ratio: 16 / 9;
		/* height: 100%; */
		width: 80%;
		border-radius: 10px;
	}
	.modal {
		position: fixed;
		width: 100%;
		inset: 0;
		z-index: 2; 
		background-color: rgba(0,0,0,0.3);
		
		display: grid; 
		place-items: center;
	}

	.silo_container {
		padding: var(--padding) 0;
	}
	.padded {
		padding: 0 var(--padding);
	}
	@media screen and (min-width: 2560px) {
		.silo_container {
			padding: var(--padding);
		}
	}
	@media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1680px) { 
		.silo_container {
			padding: var(--padding);
		}
	}
</style>