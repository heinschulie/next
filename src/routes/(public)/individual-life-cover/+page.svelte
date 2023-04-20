<script lang="ts">
	import Button from '$lib/components/Button/+page.svelte';
	import Panel from '$lib/components/Panel/+page.svelte';
	import ResponsiveVideo from '$lib/components/ResponsiveVideo/+page.svelte';

	$: dynamicColor1 = "var(--green)"; 
	$: dynamicColor2 = "var(--green)"; 
	$: dynamicColor3 = "var(--green)"; 

	$: dynamicColorA = "var(--color-background)";
	$: dynamicColorB = "var(--color-background)";

</script>

<svelte:head>
	<title>Individual life cover | BrightRock</title>
</svelte:head>

<Panel backgroundColor="{ dynamicColor1 }">
	<h1 class="heading">Individual life cover</h1>
	<p>Our world-first needs-matched individual life insurance is made just for you, and changes with you as your life changes. You and your financial adviser can
		co-create the best protection solution for you for your long-, medium-,
		and short-term needs – because your needs are unique. And because our life cover matches your needs from the start, there’s no waste – it’s cost-efficient and sustainable.</p>
	
	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993070/corporate_site/individual_life_cfvpzb.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" range={130} on:colorMatched={(evt) => dynamicColor1 = evt.detail} />

</Panel>

<Panel backgroundColor="{ dynamicColorA }">
	<h1 class="heading">More cover for your money</h1>
	<p>Every premium rand you spend with us works so much harder for you. We make sure you pay just for the cover you need – that’s how we’re able to give you around 40% more cover today for the same premium.</p>
	<Button></Button>

	<!-- <video slot="illustration" autoplay loop muted playsinline >
		<source src="https://res.cloudinary.com/iamme/image/upload/v1652886221/brightrock/MoreCoverForMoney_Page.mp4" type="video/mp4" >
	</video> -->
	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/image/upload/v1662994698/corporate_site/MoreCoverForMoney_Page_k8b79s.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" range={240} on:colorMatched={(evt) => dynamicColorA = evt.detail} />

</Panel>

<Panel backgroundColor="{ dynamicColor2 }">
	<h1 class="heading">Your unique BrightRock policy</h1>
	<p>With BrightRock, you decide exactly how to cover your different financial needs if you were to get ill, suﬀer an injury or die. With us, you can get temporary expenses, permanent expenses, additional expense needs and death cover.</p>
	<h2 class="subheading">For your different needs, you can choose:</h2>
	<!-- <p class="withDecoration">Whether you want your cover to pay out as a lump-sum, a regular monthly payment, or a combination of both</p>
	<p class="withDecoration">How your cover should grow and change to keep meeting your needs over time</p>
	<p class="withDecoration">The most appropriate duration for your cover and</p>
	<p class="withDecoration">You can change your cover when your needs change.</p> -->

	<div class="withDecoration">
		<p>Whether you want your cover to pay out as a lump-sum, a regular monthly payment, or a combination of both</p>
	</div>
	<div class="withDecoration">
		<p>How your cover should grow and change to keep meeting your needs over time</p>
	</div>
	<div class="withDecoration">
		<p>The most appropriate duration for your cover and</p>
	</div>
	<div class="withDecoration">
		<p>You can change your cover when your needs change.</p>
	</div>
	
	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993071/corporate_site/YourUniquePolicy_Page_jhseyw.mp4" aspect_ratio={1.4} range={130} on:colorMatched={(evt) => dynamicColor2 = evt.detail} />

</Panel>


<div class="grid-wrapper" style="background-color: { dynamicColorB }">
	<section class="grid feature" style="--gridNumber: 1;">
		<div class="picture-set no_min_height">
	
			<!-- <video autoplay loop muted playsinline >
				<source src="https://res.cloudinary.com/iamme/video/upload/v1652423382/brightrock/FeaturesWithBrightRock_Page.mp4" type="video/mp4" >
			</video> -->
			<!-- <ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/iamme/video/upload/v1652423382/brightrock/FeaturesWithBrightRock_Page.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" aspect_ratio={0.6} range={240} on:colorMatched={(evt) => dynamicColorB = evt.detail} /> -->
			<img src="https://res.cloudinary.com/brightrock/image/upload/v1662994358/corporate_site/cover-graph_gswihf.png" alt="graph showing how premiums go change as your life changes" />
		</div>
		<h1 class="heading centered">Features you get only with BrightRock</h1>
		<p>What’s more, we have features that are built into standard BrightRock policies (at no extra cost) that allow you to change your policy when your needs change:</p>
	
		<section class="columns">
			<p class="withDecoration">Our <strong>cover conversion facility</strong> gives qualifying clients the flexibility to redirect premiums for cover they no longer need to other financial needs and insurance events after they’ve had their BrightRock cover for three years or more – free of medical underwriting (to a maximum of R10 million). If you’ve claimed from your life insurance policy, this could affect what cover you can buy using this facility, but you can always use death cover premiums to buy more death cover, even if you’ve claimed;</p>
			<p class="withDecoration">The <strong>extra cover buy-up facility</strong> gives qualifying clients the ability to buy more cover with no medical underwriting (to a maximum of R10 million, depending on the cover they already have) when their needs change. If you’ve claimed from your life insurance policy, this could affect what cover you can buy using this facility;</p>
			<p class="withDecoration">With the <strong>yearly secured cover facility</strong>, qualifying clients have an annual opportunity to buy cover to the value of the lump-sum amount by which their income protection death cover has reduced during that year, with no underwriting.</p>
		</section>
	
	</section>
</div>

<Panel backgroundColor="{ dynamicColor3 }">
	<h1 class="heading">Unrivalled protection and flexibility when you claim</h1>
	<h2 class="subheading">Objective clinical criteria</h2>
	<p>We use objective medical criteria based on clinical best practice guidelines to assess claims. We’ve also added the Personal Job Fitness Test and Job Fitness Test to ensure you can get the beneﬁt, where appropriate, of a pay-out based on your inability to work should your illness or injury not meet the medical criteria. With us, you have greater choice and flexibility for you – and above all, greater certainty that we’ll pay your valid claims.</p>
	<h2 class="subheading">Claim-stage choice</h2>
	<p>With BrightRock, you can choose how you want to receive your pay-out at claim stage for most of your needs, giving you the best of both worlds. You have the option, if you choose a lump-sum for your income protection needs, to change your initial choice of a lump-sum pay-out to a regular monthly pay-out at claim stage, based on their prognosis and circumstances at the time of claim. You can also choose to receive your temporary expenses pay-outs, for clinical conditions that have stated pay-out periods, as a lump-sum (or a combination of a lump-sum and recurring pay-out). We also oﬀer a choice of a lump-sum and recurring payments under our additional expense needs cover for serious illnesses and injuries.</p>
	
	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993074/corporate_site/UnrivalledProtection_Flex_Page_hcdbxj.mp4" aspect_ratio={1.4} range={130} on:colorMatched={(evt) => dynamicColor3 = evt.detail} />
	
</Panel>

<style>
	.feature {
		padding: var(--padding);
	}
	.feature .picture-set{
		width: 80%;
		margin: 0 auto;
	}
	.feature .columns {
		padding: 0;
	}

	div.withDecoration {
		padding-bottom: 0;
		display: flex;
    	align-items: center;
	}
	.withDecoration p {
		height: 40px;
		display: flex;
    	align-items: center;
	}
</style>
