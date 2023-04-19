<script lang="ts">
    import Button from "../Button/+page.svelte";
    
    export let illustration = "";
    export let illustrationAlt = ""
    export let heading = "";
    export let largeFormat = false;
    export let excerpt = "";
    export let href = "";
    export let buttonCopy = "Read now";
    export let truncate = true; 

    $: imgType = illustration.includes('.jpg') ? 'jpg' : 'png'; 
    $: srcsetUrl = illustration.replace(`.${imgType}`, '');
    $: srcset = `
        ${srcsetUrl}-1600x1000.${imgType} 1600w, 
        ${srcsetUrl}-1366x854.${imgType} 1366w, 
        ${srcsetUrl}-1024x640.${imgType} 1024w, 
        ${srcsetUrl}-640x400.${imgType} 640w, 
        ${srcsetUrl}-320x200.${imgType} 320w,
        ${illustration}
    `;

    let sizes = `
        '(min-width: 480px) 33.3vw,' + 
        '(min-width: 1000px) 25vw,' + 
        '(min-width: 1280px) 20vw,' + 
        '100vw'
    `;

</script>

<a class="small" { href }>
    <article class="card" class:largeFormat>

        <div class="illustration">
            <picture>
                <source srcset={ illustration } type="image/webp" />
                <img loading="lazy" src={ illustration } alt={illustrationAlt} />
            </picture>
        </div>
        
        <div class="card_content">
    
            <h1 class="card_heading">{@html heading}</h1>

            <p class="card_copy" class:truncate>
            {@html excerpt}
            </p>

            {#if !largeFormat}
            <button class="card-button" type="button">
                <Button { href } >{buttonCopy}</Button>
            </button>
            {/if}

        </div>
    </article>
</a>


<style>

    h1, p {
        margin: 0;
        padding: 0;
    }

    .card {
        height: 100%;
        border: 2px solid #F2F2F2;
        border-radius: 8px;
        overflow: hidden;	

        display: grid;
        align-items: center;
        grid-template-rows: auto 1fr;
        position: relative;
    }
    /* .card img {
        aspect-ratio: 16/12;
    } */

    .illustration {
        width: 100%;
        overflow: hidden;
    }
    .illustration img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: var(--border_radius) var(--border_radius) 0 0;
        aspect-ratio: 16/9;
    }

    .small {
        height: 100%;
    }

    .card_content {
        --heading_padding: var(--padding);
        --heading_line_height: 20px;
        --heading_line_clamp: 3;
        --heading_height: calc( var(--heading_line_height)*var(--heading_line_clamp) + var(--heading_padding) );
        --line_height: 20px;

        height: 100%;
        padding: calc(var(--padding) / 2);
        
        display: grid;
        grid-template-rows: minmax(calc(var(--line_height)*3),auto) 1fr auto auto;
        gap: 15px;
    }

    .card_copy {
        
        display: -webkit-box;

        --line_height: 22px;
        --line_clamp: 3;
        padding: var(--localPadding) 0;
        font-size: 15px;
        line-height: var(--line_height);
        font-weight: var(--font_weight_lighter);
        /* height: calc(var(--line_height)*var(--line_clamp) + 5px);
        overflow: hidden;

        -webkit-line-clamp: var(--line_clamp);
        -webkit-box-orient: vertical;  */
        
    }
    .truncate {
        height: calc(var(--line_height)*var(--line_clamp) + 5px);
        overflow: hidden;

        -webkit-line-clamp: var(--line_clamp);
        -webkit-box-orient: vertical; 
    }
    
    .card_heading {
        font-size: 15px;
        line-height: var(--heading_line_height);
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: var(--heading_line_clamp);
        -webkit-box-orient: vertical;
    }
    
    @media screen and (min-width: 480px) {
        .card_content {
            padding: calc(var(--padding) / 4) calc(var(--padding) / 4);
        }

        .largeFormat h1{
            --heading_line_height: 30px;
            font-size: 25px;
        }
    }

</style>
        













<!-- <script lang="ts">
    import Button from "./Button.svelte";
    
    export let illustration = "";
    export let illustrationBackup = "";
    export let illustrationAlt = ""
    export let heading = "";
    export let excerpt = "";
    export let href = "";
    export let buttonCopy = "Read now";

</script>

<a class="small" { href }>
    <article class="card">

       <div class="illustration">
            <picture>
                <source srcset={ illustration } type="image/webp" />
                <img loading="lazy" src={ illustration } alt={illustrationAlt} />
            </picture>
        </div>
        
       <div class="card_content">
  
           <h1 class="card_heading">{@html heading}</h1>

           <p class="card_copy">
            {@html excerpt}
           </p>

           <button class="card-button" type="button">
                <Button { href } >{buttonCopy}</Button>
           </button>

       </div>
   </article>
</a>


<style>

    h1, p {
        margin: 0;
        padding: 0;
    }

    .card {
        height: 100%;
        border: 2px solid #F2F2F2;
        border-radius: 8px;
        overflow: hidden;	

        display: grid;
        align-items: center;
        grid-template-rows: auto 1fr;
        position: relative;
    }
    .card img {
        aspect-ratio: 16/12;
    }

    .illustration {
        width: 100%;
        overflow: hidden;
    }
    .illustration img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: var(--border_radius) var(--border_radius) 0 0;
    }

    .small {
        height: 100%;
    }

    .card_content {
        --heading_padding: var(--padding);
        --heading_line_height: 20px;
        --heading_line_clamp: 3;
        --heading_height: calc( var(--heading_line_height)*var(--heading_line_clamp) + var(--heading_padding) );
        --line_height: 20px;

        height: 100%;
        padding: calc(var(--padding) / 2);
        
        display: grid;
        grid-template-rows: minmax(calc(var(--line_height)*3),auto) 1fr auto auto;
        gap: 15px;
    }

    .card_copy {
        
        display: -webkit-box;

        --line_height: 22px;
        --line_clamp: 3;
        padding: var(--localPadding) 0;
        font-size: 15px;
        line-height: var(--line_height);
        font-weight: var(--font_weight_lighter);
        height: calc(var(--line_height)*var(--line_clamp) + 5px);
        overflow: hidden;

        -webkit-line-clamp: var(--line_clamp);
        -webkit-box-orient: vertical; 
        
    }
    
    .card_heading {
        font-size: 15px;
        line-height: var(--heading_line_height);
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: var(--heading_line_clamp);
        -webkit-box-orient: vertical;
    }
    
    @media screen and (min-width: 480px) {
        .card_content {
            padding: calc(var(--padding) / 4) calc(var(--padding) / 4);
        }
    }

</style> -->
