<script lang="ts">
    import IntersectionObserver from '$lib/components/IntersectionObserver/+page.svelte';
    import Card from '$lib/components/Card/+page.svelte';
	import type { BR_POST } from '$lib/models';

    export let currentData: BR_POST[] = []; 
    export let initiallyShowTillIndexOnDesktop = 4;
    export let gridNumber = 4; 

    let intersecting1 = false;
    let node1: HTMLElement;

    let intersecting2 = false;
    let node2: HTMLElement;

    $: mobileFirst = currentData.slice(0, 1);
    $: mobileRest = currentData.slice(1); 

    $: desktopFirst = currentData.slice(0, initiallyShowTillIndexOnDesktop);
    $: desktopRest = currentData.slice(initiallyShowTillIndexOnDesktop); 
</script>

<span class="mobile_only">

    <IntersectionObserver 
        element={node1} 
        once={true}
        intersecting={false}
        rootMargin="0px"
        root={undefined}
        entry={undefined}
        observer={undefined}
        on:intersect={ (e) => intersecting1 = true }>

            <div class="grid pull_bottom_up" style="--gridNumber: {gridNumber}">
                {#each mobileFirst as post}
                <Card {...post} href={ `/media-centre/${post.slug}` } imageLoading='priority' />
                {/each}
            </div>
            <div class="grid" style="--gridNumber: {gridNumber}" bind:this={node1}>
                {#if intersecting1}
                    {#each mobileRest as post}
                        <Card { ...post } href={ `/media-centre/${post.slug}` } imageLoading='lazy' />
                    {/each}
                
                {/if}
            </div>

    </IntersectionObserver>
</span>

<span class="desktop_only">

    <IntersectionObserver 
        element={node2} 
        once={true}
        intersecting={false}
        rootMargin="0px"
        root={undefined}
        entry={undefined}
        observer={undefined}
        on:intersect={ (e) => intersecting2 = true }>
    
        <div class="grid pull_bottom_up" style="--gridNumber: {gridNumber}">
            {#each desktopFirst as post}
            <Card {...post} href={ `/media-centre/${post.slug}` } imageLoading='priority' />
            {/each}
        </div>
        <div class="grid" style="--gridNumber: {gridNumber}" bind:this={node2}>
            {#if intersecting2}
                {#each desktopRest as post}
                    <Card { ...post } href={ `/media-centre/${post.slug}` } imageLoading='lazy' />
                {/each}
            
            {/if}
        </div>

    </IntersectionObserver>
    
</span>

<style>
    .grid {
       grid-template-columns: 1fr;
        height: auto;
    }
    .pull_bottom_up{
        margin-bottom: calc(-1*var(--padding));
    }

    @media screen and (min-width: 480px) {
       .grid {
            --gridNumber: 2;
            grid-template-columns: repeat(var(--gridNumber), 1fr);
       }
    }
</style>