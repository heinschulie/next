<script lang="ts">
	import type { PageServerData } from './$types';
	import CardList from '$lib/components/CardList/+page.svelte';
	export let data: PageServerData;  
	
	$: year = null; 
	$: currentData = data.posts.filter(post => !year || year === "Select year" || post.date.includes(`${+year - 2000}`));
</script>

<svelte:head>
	<title>Media centre | BrightRock</title>
</svelte:head>

<div class="media_wrapper">

	

	<div class="hello">
		<h3>Categories</h3>
		<a href="/categories/news">News</a>
		<a href="/categories/just-for-you">Just for you</a>
		<a href="/categories/press-releases">Press releases</a>
		<h3>Archives</h3>
		<select
            name="year"
            class="form-control"
            aria-required="true"
            aria-invalid="false"
			bind:value={year}>
            <option value=""> Select year </option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
	</div>

	<div class="card_list">
		<CardList {currentData} initiallyShowTillIndexOnDesktop={3} gridNumber={3} />
	</div>
</div>

<style>
	
	
	.card_list {
		grid-area: cardList;
	}
	.hello {
		grid-area: hello;
		width: 100%;
		padding: var(--padding) calc(var(--padding) / 2);
		order: -1;
	}
	.hello a {
		display: block;
	}
	.form-control {
        border: 2px solid #F2F2F2;
		border-radius: 10px;
		padding-left: var(--padding);
	}

	@media screen and (min-width: 480px) {
		.media_wrapper {
			display: grid;
			grid-template-columns: 1fr 25%;
			grid-template-areas: "cardList hello";
		}
		.hello {
			width: 100%;
			padding: var(--padding) calc(var(--padding) / 2);
			order: 1;
		}
		.form-control {
			padding-left: calc(var(--padding) / 4);
		}
	}

</style>
  