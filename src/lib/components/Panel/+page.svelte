<script lang="ts">
    export let backgroundColor = "transparent";
    // export let gridNumber = 2;
</script>

<div class="panel grid-wrapper" style="background-color: {backgroundColor}">
	<div class="grid">
		<div class="section-copy">
			<slot />
		</div>

		<div class="picture-set no_min_height">
            <slot name="illustration" />
		</div>
	</div>
</div>

<style>
    .panel {
        transition: 0.2s;
    }
    .panel.grid-wrapper .grid {
        --gridNumber: 1;
        grid-template-areas: "illustration" 
                             "section-copy";

        place-items: center;

        /* exp */
        /* padding: 0; */
    }
    .section-copy {
        grid-area: section-copy;

        display: grid;
        /* place-items: center; */
        /* text-align: center; */
        text-align: left;

        /* exp */
        /* padding: var(--padding) 0 var(--padding) var(--padding); */
    }
    .picture-set {
        /* width: 100%; */
        grid-area: illustration;
        display: grid;
        place-items: center;
    }

    @media screen and (min-width: 1000px) {
        .panel {
            min-height: calc(100vh - var(--header-height) - var(--flint-login-height));
        }
        .panel.grid-wrapper .grid {
            --gridNumber: 2;
            grid-template-areas: "section-copy illustration";
        }

        .section-copy {
            display: initial;
            place-items: initial;
            text-align: initial;
        }

    }
    @media screen and (min-width: 2560px) {
        .panel {
            min-height: initial;
            padding: var(--padding) 0;
        }
    }
    @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1680px) { 
        .panel {
            min-height: initial;
            padding: var(--padding) 0;
        }
    }

</style>