<script lang="ts">
    import { browser } from "$app/environment";
    import { onDestroy, onMount, createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    export let src = "";
    export let placeholder = "";
    export let range = 130;
    export let aspect_ratio = 1.5;

    let width: number; 
    let height: number;

    let enableCanvas = false; 
    let canvas: HTMLCanvasElement; 
	let ctx: CanvasRenderingContext2D | null; 

	let video: any; 
	let requestId: number;
	let matchedColor: string;

    $: if(matchedColor) {
        dispatch('colorMatched', matchedColor);
        enableCanvas = true; 
    }

	onMount(() => {
		
        const drawingLoop = () => {
            requestId = window.requestAnimationFrame(drawingLoop)
            ctx?.drawImage(video, 0, 0, height/aspect_ratio, height);
        }
        
        if(canvas) {
            // Note --> https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
            ctx = canvas?.getContext("2d", { alpha: false });
            drawingLoop();
            const interval = setInterval(() => {
                if(!!matchedColor) {
                    clearInterval(interval);
                }
                let p = ctx?.getImageData(0, 0, 8, 8).data || [];
                if(p[60] > range) {
                    matchedColor = `rgb(${p[60]}, ${p[61]}, ${p[62]})`;
                }
            }, 16);
        }

	})

    onDestroy(() => !!browser && window.cancelAnimationFrame(requestId));

</script>

<div class="video_container" class:landscape={aspect_ratio < 1} class:enableCanvas bind:clientWidth={width} bind:clientHeight={height}>
    <canvas bind:this={canvas} width="{height/aspect_ratio}px" height="{height}px"></canvas>
    <video id="video" autoplay loop muted playsinline {placeholder} crossorigin="anonymous" bind:this={video}>
        <source {src} type="video/mp4" >
    </video>
</div>

<style>
    /* https://css-tricks.com/positioning-overlay-content-with-css-grid/ */
    .video_container {
        /* --aspectRatio: 1.5; */
        display: grid;
        grid-template: "container";
        grid-template-rows: 100%;
        /* height: 100%; */
        /* aspect-ratio: var(--aspectRatio); */
        width: 100%;
	    max-height: 60vh;
        z-index: 0;
    }
    .landscape {
        aspect-ratio: 1.35;
    }
    .video_container > * {
        grid-area: container;
    }
    canvas {
        opacity: 0;
        transition: opacity .2s ease-in-out 0.1s;
        z-index: 1;
        place-self: center;
    }
    video {
        opacity: 0;
    }
    .enableCanvas canvas {
        display: block;
        opacity: 1;
    }

</style>
