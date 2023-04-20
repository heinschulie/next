
<script context="module">
    import Card from '$lib/components/Card/+page.svelte';
</script>

<svelte:head>
	<title>Partnerships | BrightRock</title>
</svelte:head>

<div class="grid">
  
    <Card
        heading="The DHL Stormers and DHL Western Province"
        excerpt="In rugby, and in life, the unpredictable is always just a play away, challenging even the best skill and preparation. A lucky bounce of the ball can swing the momentum of the game – for or against you. And the outcome is determined by how you respond to these game-changing situations. At BrightRock, we believe we should embrace them – and find the opportunities Change presents!

        That’s why BrightRock is the proud associate sponsor to the DHL Stormers and DHL Western Province rugby teams."
        illustration="https://res.cloudinary.com/brightrock/image/upload/v1662995549/corporate_site/stormers_cbphkx.png"
        illustrationAlt="Dan Nicholl in studio."
        largeFormat={true}
        truncate={false}
    />

    <Card
        heading="The Vodacom Bulls"
        excerpt="We’re proud to have the backs of the Vodacom Blue Bulls, one of South Africa’s most successful and beloved rugby franchises, as they help us spread our Love Change message. Just like life, rugby’s an unpredictable game – a lucky bounce of the ball can swing the game for or against you. Loving Change means embracing these game-changing moments and the opportunities they bring. BrightRock and the Bulls share the belief that, with skill and practice, it’s possible to become fitter and more adept at playing the game and learning to love change. We’re excited to be playing the bounce with them."
        illustration="https://res.cloudinary.com/brightrock/image/upload/v1662995560/corporate_site/bulls_grk6jn.png"
        illustrationAlt="Dan Nicholl in studio."
        largeFormat={true}
        truncate={false}
    />
    <Card
        heading="The Dan Nicholl Show"
        excerpt="The Dan Nicholl Show tells entertaining stories, visits exotic locations, and introduces us to inspiring South Africans. It’s a premium celebrity and sport-focused talk show, which debuted in 2015 and remains a perennial favourite for SuperSport viewers across Africa. And it’s made just for you by BrightRock, the ﬁrst ever needs-matched life insurance that changes as your life changes."
        illustration="https://res.cloudinary.com/brightrock/image/upload/v1662995627/corporate_site/dan_tejjls.png"
        illustrationAlt="Dan Nicholl in studio."
        largeFormat={true}
        truncate={false}
    />
    
    <Card
        heading="BizNews"
        excerpt="Every year, BrightRock partners with BizNews to bring you coverage from the World Economic Forum (WEF) Annual Meeting — one of the most prestigious and influential events on the global calendar. Because we Love Change, we are excited to help illuminate the Big Changes that shape the world we live in. Veteran business journalist Alec Hogg and his team provide insightful reports from the WEF discussions to help South Africans get to grips with the key global macroeconomic, social and political changes and the local developments that are likely to ﬂow from them."
        illustration="https://res.cloudinary.com/brightrock/image/upload/v1662995659/corporate_site/biznews_uzgmgz.png"
        illustrationAlt="BizNews in studio."
        largeFormat={true}
        truncate={false}
    />
    
    <Card
        heading="Ruda Talks Change"
        excerpt="Acclaimed journalist Ruda Landman conducts regular interviews on the Change Exchange with well-known and inﬂuential South Africans about the Change Moments in their lives. Her inspiring and sensitive conversations provide unique insights into their lives, their loves and their careers – and how they’ve embraced life’s big Change Moments."
        illustration="https://res.cloudinary.com/brightrock/image/upload/v1662995627/corporate_site/ruda_wjvdjn.png"
        illustrationAlt="Ruda in studio."
        largeFormat={true}
        truncate={false}
    />

</div>

<style>

    .grid {
        --gridNumber: 1;
    }
    @media screen and (min-width: 480px) {
       .grid {
            --gridNumber: 2;
       }
    }
    @media screen and (min-width: 1000px) {
       .grid {
            --gridNumber: 3;
       }
    }
</style>

<!-- <script context="module">
    import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Partnerships</title>
</svelte:head>

<div class="partnership_wrapper">
  
    <Card
        heading="The Dan Nicholl Show"
        excerpt="The Dan Nicholl Show tells entertaining stories, visits exotic locations, and introduces us to inspiring South Africans. It’s a premium celebrity and sport-focused talk show, which debuted in 2015 and remains a perennial favourite for SuperSport viewers across Africa. And it’s made just for you by BrightRock, the ﬁrst ever needs-matched life insurance that changes as your life changes."
        illustration="https://res.cloudinary.com/iamme/image/upload/v1654605886/brightrock/dannicholl.png"
        illustrationAlt="Dan Nicholl in studio."
        largeFormat={true}
    />
    
    <Card
        heading="Chatting Change"
        excerpt="Hosted by Rami Chuene and Nhlakanipho Manqele, Chatting Change is a dynamic and entertaining 20-minute conversation, available in a video and podcast format on the Change Exchange. Chatting Change is a conversation with people from all walks of life, focusing on topics and themes that can help people navigate through life’s big Change Moments by imparting knowledge, having a laugh, and sharing insightful content."
        illustration="https://res.cloudinary.com/iamme/image/upload/v1654605886/brightrock/chatting_change.png"
        illustrationAlt="Chatting Change in studio."
        largeFormat={true}
    />
    
    <Card
        heading="Ruda Talks Change"
        excerpt="Acclaimed journalist Ruda Landman conducts regular interviews on the Change Exchange with well-known and inﬂuential South Africans about the Change Moments in their lives. Her inspiring and sensitive conversations provides unique insights into their lives, their loves and their careers – and how they’ve embraced life’s big Change Moments."
        illustration="../../../ruda.png"
        illustrationAlt="Ruda in studio."
        largeFormat={true}
    />
    
    <Card
        heading="BizNews"
        excerpt="Every year, BrightRock partners with BizNews to bring you coverage from the World Economic Forum (WEF) Annual Meeting — one of the most prestigious and influential events on the global calendar. Because we Love Change, we are excited to help illuminate the Big Changes that shape the world we live in. Veteran business journalist Alec Hogg and his team provide insightful reports from the WEF discussions to help South Africans get to grips with the key global macroeconomic, social and political changes and the local developments that are likely to ﬂow from them."
        illustration="../../../biz_news.png"
        illustrationAlt="BizNews in studio."
        largeFormat={true}
    />
</div>

<style>
    .partnership_wrapper {
        padding: var(--padding);

        display: grid; 
        grid-template-columns: 1fr 1fr;
    }
</style> -->