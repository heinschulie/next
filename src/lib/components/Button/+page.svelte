<script lang="ts">
    export let href = ""
    export let backgroundColor = "var(--amber)";
    export let type: "submit" | "button" | "reset" | null | undefined = "button";
</script>

<button {type} style="background-color: {backgroundColor}">
    <a data-sveltekit-preload-data="tap" {href}>
        <slot>Find out more</slot>   
    </a>
</button>

<style>
    button { 
        width: fit-content;
        color: var(--white);
        padding: 15px;
        border-radius: 25px;
        font-weight: bold;

        display: flex;
        place-items: center;
    }
</style>