<script lang="ts">
    import { page } from '$app/stores'
  
    $: {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'G-L07EDRYQHH', {
          page_title: document.title,
          page_path: $page.url.pathname,
        })
      }
    }
  </script>
  
  <svelte:head>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-L07EDRYQHH">
    </script>
    <script>
      window.dataLayer = window.dataLayer || []
  
      function gtag() {
        dataLayer.push(arguments)
      }
  
      gtag('js', new Date())
      gtag('config', 'G-L07EDRYQHH')
    </script>
  </svelte:head>
  