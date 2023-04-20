<script lang="ts">
	import Panel from '$lib/components/Panel/+page.svelte';
	import ResponsiveVideo from '$lib/components/ResponsiveVideo/+page.svelte';
	$: dynamicColor = "var(--dark-amber)"; 
	$: dynamicColorA = "var(--offWhite)"; 
</script>

<svelte:head>
	<title>Life assistance business | BrightRock</title>
</svelte:head>

<Panel backgroundColor="{ dynamicColor }">
	<h1 class="heading">Funeral offering</h1>
	<p>BrightRock offers funeral parlours a comprehensive solution for their insurance administration, underwriting and compliance needs. BrightRock underwrites independently-owned large and medium-sized funeral parlour businesses. We pride ourselves on our needs-matched service offering, which provides each parlour a hands-on, personal experience.</p>
	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993074/corporate_site/LifeAssistance_Page_v3qjxs.mp4" range={200} on:colorMatched={(evt) => dynamicColor = evt.detail} />
</Panel>

<Panel backgroundColor="{ dynamicColorA }">
	<h1 class="heading">Our partnership approach</h1>
	<p>We focus on offering support to our funeral parlour partners, enabling them to expand their financial services offerings and build customer loyalty and retention.</p>
	<p>With BrightRock’s needs-matched partnership approach, you can enjoy the peace of mind of a fully insured funeral assistance offering with outstanding compliance and administrative support. Our experienced team of compliance, service, marketing and administrative specialists can oﬀer you a range of support services. This includes everything from compliant documentation and record-keeping to support for your clients when they claim against their funeral cover.</p>
	<p>In keeping with our philosophy of co-creating solutions to meet specific needs, we work with our partners to tailor the oﬀer to match their business’s unique needs.</p>
	
	<!-- <video slot="illustration" autoplay loop muted playsinline >
		<source src="https://res.cloudinary.com/iamme/video/upload/v1648803520/brightrock/PartnershipOpproach_Page.mp4" type="video/mp4" >
	</video> -->

	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993071/corporate_site/PartnershipOpproach_Page_jy92ja.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" aspect_ratio={1.4} range={240} on:colorMatched={(evt) => dynamicColorA = evt.detail} />

</Panel>

<Panel backgroundColor="var(--dark-amber)">
	<h1 class="heading">Our underwriting services</h1>
	<h2 class="subheading">BrightRock provides your intermediaries and funeral service providers with:</h2>
	<p class="withDecoration"><strong>A unique needs-matched fee structure, tailored to your business’s needs:</strong> We understand that each intermediary and funeral service provider is different. Our unique, dynamic underwriting model takes your business needs into account and gives you credit for the money you’ve already invested;</p>
	<p class="withDecoration"><strong>Personalised service with full access to our leadership team:</strong> You’ll have direct access to our leadership team. Your account manager will not only provide you with quality service, but keep you up to speed on the latest industry developments relevant to your business;</p>
	<p class="withDecoration"><strong>Compliant documentation, for you and your clients’ needs:</strong> BrightRock offers intermediaries and funeral providers a fully-compliant, transparent contract. We’ll also help you with the structure of your member contract to ensure compliance and transparency.</p>
	<p class="withDecoration"><strong>Comprehensive record-keeping, administration and client services solutions:</strong> As a fully licensed ﬁnancial services provider, BrightRock makes use of best-practice administrative and records systems to ensure your members’ information is safely stored and easy to retrieve. Our experienced administrative and client services team is fully trained to oﬀer you and your members support on every aspect – from signing up for cover to managing claims.</p>
	
	<div slot="illustration" class="picture-set">
		<picture>
			<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995288/corporate_site/underwriting_du3dhw.webp" type="image/webp" />
			<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995288/corporate_site/underwriting_du3dhw.png" alt="Graph showing cover gains." />
		</picture>
	</div>

</Panel>

<style>
	.subheading {
		padding-bottom: var(--fontSize);
	}
	.withDecoration::before{
		top: calc(var(--fontSize)/-2);
	}
</style>