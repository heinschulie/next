<script>
    export let rotation = 0;
</script>

<svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 7 11" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style="transform: rotate({rotation}deg);">
    <path d="M5.75 0.75L1.25 5.25L5.75 9.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<style>
    svg {
        transition: 0.4s;
        stroke: black;
    }
</style>
    