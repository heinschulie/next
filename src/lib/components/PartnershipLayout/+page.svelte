<script context="module" lang="ts">
	import { dev } from "$app/environment";
	export const hydrate = dev;
</script>
<script lang="ts">
	import Button from "../Button/+page.svelte";
	import Card from "../Card/+page.svelte";
	export let illustration = "";
	export let illustrationAlt = ""
	export let heading = "";
	export let excerpt = "";
	export let backgroundColor = "var(--offWhite)";
</script>

<section style="background-color: {backgroundColor}">
    
    <div class="banner">
        <picture>
			<source srcset={`../${illustration}.webp`} type="image/webp" />
			<img loading="lazy" src={`../${illustration}.png`} alt={illustrationAlt} />
		</picture>
    </div>

	<div class="content">
		<h1 class="heading">{heading}</h1>
		<p class="copy">{excerpt}</p>
		<Button href="">Read more</Button>
	</div>
	

	<!-- <div class="grid">

		<Card 
			backgroundColor="var(--white)" 
			heading="Rugby" 
			excerpt="In rugby, and in life, the unpredictable is always just a play away, challenging even the best skill and preparation. A lucky bounce of the ball can swing the momentum of the game – for or against you."
			illustration="../rugby.webp"
			illustrationBackup="../rugby.png"
			illustrationAlt="Rugby players."
			buttonCopy="Learn more"
		/>

		<Card 
			backgroundColor="var(--white)" 
			heading="Ruda Talks Change" 
			excerpt="Acclaimed journalist Ruda Landman conducts regular interviews on the Change Exchange with well-known and inﬂuential South Africans about the Change Moments in their lives."
			illustration="../../ruda.webp"
			illustrationBackup="../../ruda.png"
			illustrationAlt="Ruda in studio."
			buttonCopy="Learn more"
		/>

		<Card 
			backgroundColor="var(--white)" 
			heading="The Dan Nicholl Show" 
			excerpt="The Dan Nicholl Show tells entertaining stories, visits exotic locations, and introduces us to inspiring South Africans. "
			illustration="../../dannicholl.webp"
			illustrationBackup="../../dannicholl.png"
			illustrationAlt="Dan Nicholl in studio."
			buttonCopy="Learn more"
		/>

		<Card 
			backgroundColor="var(--white)" 
			heading="Chatting Change" 
			excerpt="Chatting Change is a conversation with people from all walks of life, focusing on topics and themes that can help people navigate through life’s big Change Moments by imparting knowledge, having a laugh, and sharing insightful content."
			illustration="../chatting_change.webp"
			illustrationBackup="../chatting_change.png"
			illustrationAlt="Chatting Change in studio."
			buttonCopy="Learn more"
		/>

	</div> -->
    
</section>

<style>

    section {
		/* margin-bottom: var(--padding); */
		
        display: grid;
        align-items: center;
		grid-template-rows: auto 1fr;
    }
	.banner img {
		object-fit: contain;
	}
	.content {
        /* padding: 5vh var(--padding); */
		padding: 5vh 0 calc(var(--padding)*2);
		display: grid;
		gap: 15px;
	}
	.heading {
		padding-top: var(--localPadding);
	}
    .copy {
		padding-bottom: var(--localPadding);
	}

</style>
