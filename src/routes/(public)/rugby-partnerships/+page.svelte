<script lang="ts">
	import type { PageServerData } from './$types';
	import CardList from '$lib/components/CardList/+page.svelte';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>Rugby Partnerships | BrightRock</title>
</svelte:head>

<div class="hero">
    <picture class="desktop_only">
        <source srcset="/rugby_partnerships.png" type="image/webp" />
        <img src="/rugby_partnerships.png" alt="Graph showing cover gains." />
    </picture>
    <picture class="mobile_only">
        <source srcset="/rugby_partnerships_mobile.png" type="image/webp" />
        <img src="/rugby_partnerships_mobile.png" alt="Graph showing cover gains." />
    </picture>
    <p><strong>Play the bounce. Play the moment. #LoveChange</strong></p>
    <p>In rugby, and in life, the unpredictable is always just a play away, challenging even the best skill and preparation. A lucky bounce of the ball can swing the momentum of the game – for or against you. And the outcome is determined by how you respond to these game-changing situations. At BrightRock, we believe we should embrace them – and find the opportunities Change presents!In rugby, and in life, the unpredictable is always just a play away, challenging even the best skill and preparation. A lucky bounce of the ball can swing the momentum of the game – for or against you. And the outcome is determined by how you respond to these game-changing situations. At BrightRock, we believe we should embrace them – and find the opportunities Change presents!</p>
</div>

<CardList currentData={data.posts} initiallyShowTillIndexOnDesktop={3} gridNumber={3} />

<style>

    .hero {
        width: 100%;
        padding: 0 var(--padding);
        /* margin: 0 auto; */
        display: grid;
    }
    .hero img {
        width: 100%;
        aspect-ratio: 16/10;
    }

    .grid {
        --gridNumber: 1;
    }
    /* .desktop_only {
        display: none;
    } */
    @media screen and (min-width: 480px) {
       .grid {
            --gridNumber: 2;
       }
    }
    @media screen and (min-width: 750px) {
       .grid {
            --gridNumber: 2;
       }
    }
    @media screen and (min-width: 1000px) {
       .grid {
            --gridNumber: 3;
       }
       .desktop_only {
            display: initial;
        }
        .mobile_only {
            display: none;
        }
        .hero img {
            width: 100%;
            aspect-ratio: 16/5;
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