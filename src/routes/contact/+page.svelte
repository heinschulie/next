<script>
	import Panel from '$lib/components/Panel/+page.svelte';
	import ResponsiveVideo from '$lib/components/ResponsiveVideo/+page.svelte';
	$: dynamicColor1 = "var(--white)";
</script>

<svelte:head>
	<title>Contact us | BrightRock</title>
</svelte:head>

<Panel backgroundColor="{ dynamicColor1 }">
	<h1 class="heading">Contact us</h1>
	<p>Feel free to contact us if you have any queries:</p>
		<p><strong>Details:</strong></p>
		<p>Tel: 0860 00 77 44</p>
		<p>Email: service@brightrock.co.za</p>

		<p><strong>Our head office:</strong></p>
		<p>BrightRock</p>
		<p>165 West Street, Sandton, Gauteng</p>

		<p><strong>Postal address:</strong></p>
		<p>Postnet Suite 280, Private Bag X30500, Houghton</p>
		<p>Gauteng</p>
		<p>2041</p>

		<p><strong>Media contact:</strong></p>
		<p>0860 00 7744</p>
		<p><a href="mailto:media@brightrock.co.za">media@brightrock.co.za</a></p>
	
	<!-- <video slot="illustration" autoplay loop muted playsinline >
		<source src="https://res.cloudinary.com/iamme/video/upload/v1648803516/brightrock/ContactUs_Page.mp4" type="video/mp4" >
	</video> -->

	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993068/corporate_site/ContactUs_Page_cuc0fu.mp4" aspect_ratio={0.99} range={240} on:colorMatched={(evt) => dynamicColor1 = evt.detail} />

</Panel>

