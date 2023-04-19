<script lang="ts">
    export let backgroundColor = "var(--offWhite)";
</script>

<section class="silo" style="background-color: {backgroundColor}">
    
    <div class="illustration">
        <slot name="illustration"></slot>
    </div>
    <slot name="heading"></slot>    
    <slot name="copy"></slot>
    <slot name="button"></slot>
   
</section>

<style>
    section {
        width: 100%;
        display: grid;
        align-items: start;
        justify-items: center;
    }
    .illustration {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    @media screen and (min-width: 1000px) {
        section {
            grid-template-rows: minmax(150px, 50%) min-content auto 50px;
        }
    }
    @media screen and (min-width: 2560px) {
        section {
            grid-template-rows: initial;
        }
    }
    @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1680px) { 
        section {
            grid-template-rows: initial;
        }
    }
    
</style>