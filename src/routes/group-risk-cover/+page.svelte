<script lang="ts">
	import Panel from '$lib/components/Panel/+page.svelte';
	import ResponsiveVideo from '$lib/components/ResponsiveVideo/+page.svelte';
	$: dynamicColor1 = "var(--amber)";
	$: dynamicColor2 = "var(--offWhite)"; 
</script>

<svelte:head>
	<title>Group risk cover | BrightRock</title>
</svelte:head>

<Panel backgroundColor="{ dynamicColor1 }">
	<h1 class="heading">Group risk cover</h1>
	<p>BrightRock’s unique group risk solution can oﬀer your employees cover that meets their individual needs. Thanks to our needs-matched approach, we provide employers and employees with cost-efficient cover that truly meets their needs, and provides greater certainty and flexibility, now and in the future. The result is group risk benefits that better suit the demands of a 21st century workforce.</p>
	<!-- <ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/iamme/video/upload/v1654944104/brightrock/UnrivalledProtection_Flex_Page.mp4" aspect_ratio={1.4} range={130} on:colorMatched={(evt) => dynamicColor1 = evt.detail} /> -->
		<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993072/corporate_site/GroupRisk_Page_dqfb1a.mp4" aspect_ratio={1.4} range={130} on:colorMatched={(evt) => dynamicColor1 = evt.detail} /> 
</Panel>

<Panel backgroundColor="{ dynamicColor2 }">
	<h1 class="heading">Unrivalled claims certainty</h1>
	<h2 class="subheading">We believe your employees deserve certainty when they claim, that’s why we’ve introduced these market-leading features:</h2>
	<p class="withDecoration">BrightRock is the first insurer to cover an objective list of deﬁned clinical conditions for temporary and permanent disability, as well as pay out if they can’t do their job. If an employee gets sick or disabled and their condition meets our criteria, they can claim. It’s that simple –no vague, subjective occupational criteria.</p>
	<p class="withDecoration">Once we approve a permanent disability claim, your employee’s pay-outs are guaranteed. We never reassess. And nor will we reduce their pay-out if they are able to earn some income after being disabled. This means there’s no need to keep proving the employee’s disability every year. So, you have certainty and there’s no admin hassle.</p>
	<p class="withDecoration">If you’ve chosen to cater for your employees’ income protection needs on permanent disability through cover that pays out a lump-sum, the claimant can choose between a regular monthly pay-out or a lump-sum – or a combination of the two – at claim stage.</p>
	<p class="withDecoration">Trauma IQ is a market-ﬁrst beneﬁt, exclusive to BrightRock, and is automatically included with group life and critical illness cover. It can pay your employees out if they’re injured in an accident, to help with extra expenses, allowing you to oﬀer valuable support to your employees and their families when they need it.</p>
	
	<!-- <video slot="illustration" autoplay loop muted playsinline >
		<source src="https://res.cloudinary.com/iamme/video/upload/v1648803516/brightrock/ClaimsCertainty_Page.mp4" type="video/mp4" >
	</video> -->
	<ResponsiveVideo slot="illustration" src="https://res.cloudinary.com/brightrock/video/upload/v1662993068/corporate_site/ClaimsCertainty_Page_edr3u8.mp4" placeholder="https://res.cloudinary.com/iamme/image/upload/v1653891902/brightrock/IndividualLife_placeholder2.jpg" range={240} on:colorMatched={(evt) => dynamicColor2 = evt.detail} />
</Panel>

<Panel backgroundColor="var(--amber)">
	<h1 class="heading">More cover, for the same premium</h1>
	<p>Most group risk cover oﬀers the same multiple of salary – for example, three times annual – to all employees in the group. But, younger employees have many more future pay cheques to cover relative to employees nearer retirement age. BrightRock can cover the same proportion of pay cheques for all employees on the scheme – let’s say, 20% of their future pay cheques. This means everyone in the scheme has the same level of cover relative to their future income need. And it’s more eﬃcient, so you can get up to 30% more cover for the whole scheme – for the same premium! With BrightRock, the choice is yours. You decide whether you want to cover a multiple of salary or a proportion of future pay cheques for your employees.</p>
	
	<div slot="illustration" class="picture-set">
		<picture>
			<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995111/corporate_site/same_premium_krar7l.webp" type="image/webp" />
			<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995111/corporate_site/same_premium_krar7l.png" alt="Graph showing cover gains." />
		</picture>
	</div>
</Panel>

<Panel backgroundColor="var(--green)">
	<h1 class="heading">And added flexibility for your employees</h1>
	<p>As an employer, you may want to give your employees the flexibility to change their group risk cover to better suit their personal financial plan. Only with BrightRock’s extra cover buy-up can they double their cover – free of underwriting – up to the scheme’s free cover limit.</p>
	<p>And when they leave the scheme, they can keep their cover by converting their group risk policy to an individual life policy.</p>
	
	<div slot="illustration" class="picture-set">
		<picture>
			<source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995160/corporate_site/gap-graph-2048x1185_oq2lai.webp" type="image/webp" />
			<img src="https://res.cloudinary.com/brightrock/image/upload/v1662995160/corporate_site/gap-graph-2048x1185_oq2lai.png" alt="Graph showing cover gains." />
		</picture>
	</div>
</Panel>

<style>
	.withDecoration::before{
		top: calc(var(--fontSize)/-2);
	}
</style>