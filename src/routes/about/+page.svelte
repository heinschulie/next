<script>
	import Panel from '$lib/components/Panel/+page.svelte';
	import ResponsiveVideo from '$lib/components/ResponsiveVideo/+page.svelte';
	import Silo from '$lib/components/Silo/+page.svelte';

	$: dynamicColor1 = "var(--offWhite)"; 

</script>

<svelte:head>
	<title>Our story so far | BrightRock</title>
</svelte:head>

<Panel backgroundColor={ dynamicColor1 }>
	<h1 class="heading">Our <em>story</em> so far</h1>
	
	<p>We started BrightRock around a dining room table in 2011, because we wanted to change the way financial services products work to better meet people’s needs.</p>
	<p><strong>Your money, the needs-matched way</strong></p>
	<p>When we got together around that dining room table, we asked each other: why do people have to think about, and talk about, their money in separate conversations? Conversations that are distinct from the ones they’re having about their lives and their needs, with the people they love.</p>
	<p><strong>At BrightRock, we believe no-one knows your money better than you.</strong></p>
	<p>That’s because there’s no-one who knows what you want, and what you need, better than you. And we also know that your life keeps changing. So we create financial products that meet your needs today, and keep changing and adapting to change with you as your life changes.</p>
	<p><strong>We believe in the power of good financial advice.</strong></p>
	<p>Our financial products are designed to empower you and your financial adviser to co-create the best money solutions, just for you.</p>
	
	<!-- <div slot="illustration" class="picture-set">
		<picture>
			<video autoplay loop muted playsinline>
				<source src="https://res.cloudinary.com/iamme/video/upload/v1648803518/brightrock/OurStorySoFar_Page.mp4" type="video/mp4" >
			</video>
		</picture>
	</div> -->

	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662995386/corporate_site/OurStorySoFar_Page_uqsd2z.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" aspect_ratio={0.99} range={130} on:colorMatched={(evt) => dynamicColor1 = evt.detail} />

</Panel>

<section class="silo_container" style="background-color: var(--color-background-alternate);">
	<h1 class="heading" style="padding: var(--padding) 0 0 var(--padding);">Our <em>founders</em></h1>
	<section class="columns">
		<Silo>
			<span slot="illustration">
				<div class="picture-set">
					<picture>
						<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995422/corporate_site/Schalk-Malan-CEO-1_d9kzkp.webp" type="image/webp" />
						<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995422/corporate_site/Schalk-Malan-CEO-1_d9kzkp.png" alt="Love Change!" />
					</picture>
				</div>
			</span>
			<span class="silo-heading" slot="heading">
				<h1 class="heading">Schalk Malan</h1>
				<h2 class="subheading">CEO</h2>
			</span>
			<span slot="copy">
				<p>Schalk, a qualiﬁed actuary, is the main architect behind our needs-matched life insurance. He has worked in the financial services industry for over 15 years. He’s regularly invited to speak internationally about BrightRock’s unique, human-centric product design.</p>
			</span>
		</Silo>
		<Silo>
			<span slot="illustration">
				<div class="picture-set">
					<picture>
						<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995420/corporate_site/Sean-Hanlon_Executive-Director_outymj.webp" type="image/webp" />
						<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995420/corporate_site/Sean-Hanlon_Executive-Director_outymj.png" alt="Love Change!" />
					</picture>
				</div>
			</span>
			<span class="silo-heading" slot="heading">
				<h1 class="heading">Sean Hanlon</h1>
				<h2 class="subheading">Executive Director</h2>
			</span>
			<span slot="copy">
				<p>Sean heads up BrightRock’s distribution across all our product lines. He’s worked in senior positions in ﬁnancial services for close to 30 years, having set up and run distribution for major life insurance operations in South Africa and the United Kingdom.</p>
			</span>
		</Silo>
		<Silo>
			<span slot="illustration">
				<div class="picture-set">
					<picture>
						<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995422/corporate_site/Suzanne-Stevens-Deputy-CEO_wzdv28.webp" type="image/webp" />
						<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995422/corporate_site/Suzanne-Stevens-Deputy-CEO_wzdv28.png" alt="Love Change!" />
					</picture>
				</div>
			</span>
			<span class="silo-heading" slot="heading">
				<h1 class="heading">Suzanne Stevens</h1>
				<h2 class="subheading">Deputy CEO</h2>
			</span>
			<span slot="copy">
				<p>Suzanne has over 25 years of experience in ﬁnancial services and heads up BrightRock’s marketing, communication and brand delivery teams, as well as our HR and training functions. Suzanne serves on several boards.</p>
			</span>
		</Silo>
	</section>
</section>

<section class="silo_container">
	<h1 class="heading" style="padding: var(--padding) 0 0 var(--padding);">Our <em>backers</em></h1>
	<section class="backers">
		<div class="picture-set no_min_height sanlampic">
			<picture>
				<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995487/corporate_site/sanlam_wtodp6.webp" type="image/webp" />
				<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995487/corporate_site/sanlam_wtodp6.jpg" alt="Love Change!" />
			</picture>
		</div>
		<p class="sanlamcopy">Sanlam is our majority shareholder – a leading ﬁnancial services group listed on the Johannesburg and Namibian Stock Exchanges. <a href="https://www.sanlam.co.za"><em>Visit their site</em></a></p>
		<div class="picture-set no_min_height lombardpic">
			<picture>
				<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995487/corporate_site/lombard_gzaur3.webp" type="image/webp" />
				<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995487/corporate_site/lombard_gzaur3.jpg" alt="Love Change!" />
			</picture>
		</div>
		<p class="lombardcopy">We’re also backed by the Lombard insurance group, a leader in specialist risk insurance. <a href="https://www.lombardins.com"><em>Visit their site</em></a></p>
	</section>
</section>

<style>
	.silo-heading {
		width: 100%;
	}
	.silo-heading h1, .silo-heading .subheading {
		width: 100%;
		text-align: left;
	}

	/* .picture-set.sponsors {
		max-height: 90vh;
	} */

	.backers {
		padding: 0 var(--padding) var(--padding);
	}
	

	@media screen and (min-width: 1000px) {
        .backers {
			display: grid;
			column-gap: var(--padding);
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
			
			grid-template-areas: "sanlampic lombardpic" "sanlamcopy lombardcopy";
		}    
		.sanlampic {
			grid-area: sanlampic; 
		}
		.sanlamcopy {
			grid-area: sanlamcopy; 
		}
		.lombardpic {
			grid-area: lombardpic; 
		}
		.lombardcopy {
			grid-area: lombardcopy; 
		}
		
    }

</style>
