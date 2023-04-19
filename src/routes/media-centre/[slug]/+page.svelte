
<script lang="ts">
	import type { BR_POST } from "$lib/models";

	export let post: BR_POST;
	$: videoUrl = post.ACF.embed ? post.ACF.embed.split("src=\"")[1].split("?")[0] : false; 
</script>

<svelte:head>
	<title>{ post.heading } | BrightRock</title>
</svelte:head>
    
<div class="content">
    <h1 class="heading">{@html post.heading }</h1>
	<p class="context">Posted on <em>{ post.date }</em> by <em>{ post.author }</em></p>
    <div class="illustration">
        <picture class="picture-set">
			<source srcset={ post.illustration } type="image/webp" />
			<img src={ post.illustration } alt={post.heading} />

			<!-- <source srcset={ `https://res.cloudinary.com/demo/image/fetch/${post.illustration}` } type="image/webp" />
			<img src={ `https://res.cloudinary.com/demo/image/fetch/${post.illustration}` } alt={post.heading} /> -->
		</picture>
    </div>
	
    <div class="body">

		{@html post.content }

		{#if videoUrl}
		<div class="video-set">
			<iframe src="{videoUrl}?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		{/if}

	</div>

</div>

<style>
    .heading {
        text-align: center;
    }
	.context {
		text-align: center;
	}
    .illustration {
        padding: var(--padding) 0 0;
    }
    .content {
        padding: var(--padding);
    }
	.illustration img {
		object-fit: cover;
	}

	.video-set {
		margin-top: 10%;;
	}

	:global(.body em) {
		color: initial;
		font-style: italic;
	}

	:global(.body a) {
		color: var(--amber);
	}

	:global(.body ul) { 
		padding-left: var(--padding);
	}
	:global(.body li) { 
		list-style: disc; 
	}

	@media screen and (min-width: 1000px) {
		.content {
			max-width: 1280px;
			margin: 0 auto;
			padding: 0;
		}
		.body {
			padding: var(--padding) calc(var(--padding)*2);
		}
		.illustration {
			height: 75vh;
		}
		.illustration img {
			object-fit: contain;
			object-position: center;
		}
	}
</style>