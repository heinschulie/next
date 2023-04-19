<script lang="ts">
    export let backgroundColor = "transparent";
</script>

<section style="background-color: {backgroundColor}">
    
    <div class="content">
        <slot name="heading"></slot>  
        <slot name="copy"></slot>
        <slot name="button"></slot>
    </div>
    <div class="illustration">
        <slot name="illustration"></slot>
    </div>

</section>

<style>

    section {
        min-height: var(--section-height);
        padding: 5vh var(--padding);
        
        display: grid;
        place-items: center;
        grid-template-areas: "illustration"
                             "content";
    }
    section div {
        display: grid;
        place-items: center;
    }
    .content {
        grid-area: content;
    }
    .illustration {
        grid-area: illustration;
        min-height: 235px;
        overflow: hidden;
    }

    @media screen and (min-width: 480px) {
        section {
            grid-template-areas: none;
            grid-template-columns: 1fr 1fr;
            gap: var(--padding);
        }
        section div {
            place-items: start;
        }
        .content, .illustration {
            grid-area: auto;
        }
    }

    @media screen and (min-width: 1280px) {
        section {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0;
        }
    }
    
</style>