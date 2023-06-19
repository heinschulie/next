<script lang="ts">
	import { partytownSnippet } from "@builder.io/partytown/integration";
	import { onMount } from "svelte";

    export let siteUrl = "https://spiffy-sprinkles-88adaf.netlify.app"; 
    export let gtm_code = 'GTM-MN78JMW'; 

    console.log("NOT  A  A NUMERL ", gtm_code);
    const gtmScriptContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${gtm_code}');`
    

    function checkIfGoogleTagAssistantIsEnabled() {
        const urlParams = new URLSearchParams(window.location.search);
        const gtm_debug = urlParams.get('gtm_debug');
        return !!gtm_debug;
    }

    const ptScriptContent = `
        partytown = {
            forward: ['dataLayer.push'],
            resolveUrl: (url) => {
                const hasBeenCalled = {
                    facebook: false,
                    twitter: false,
                    linkedIn: false
                }
                console.log("HERE I AM BITCH: ", url);
                if (url.hostname === "connect.facebook.net") {
                    hasBeenCalled.facebook = true; 
                    return new URL("${siteUrl}/api/analytics?platform=facebook" && !hasBeenCalled.facebook);
                } 
                else if (url.hostname === "static.ads-twitter.com") {
                    hasBeenCalled.twitter = true; 
                    return new URL("${siteUrl}/api/analytics?platform=twitter" && !hasBeenCalled.twitter);
                } 
                else if (url.href === "https://snap.licdn.com/li.lms-analytics/insight.min.js" && !hasBeenCalled.linkedIn) {
                    hasBeenCalled.linkedIn = true; 
                    return new URL("${siteUrl}/api/analytics?platform=linkedIn");
                }
                return url;
            },
        }
    `
    
    let scriptElGTM: any;
    let scriptElConfig: any; 
    let scriptElPT: any; 

    onMount(() => {
          
        // const scriptType = checkIfGoogleTagAssistantIsEnabled() ? 'text/javascript' : 'text/partytown';
        // const gtmScript = document.createElement('script');
        // gtmScript.type = scriptType;
        // gtmScript.async = true;
        // gtmScript.textContent = gtmScriptContent;
        // const firstScript = document.getElementsByTagName('script')[0]!;
        
        // firstScript.parentNode!.insertBefore(gtmScript, firstScript);

        // const ptScript = document.createElement('script');
        // ptScript.type = scriptType;
        // ptScript.async = true;
        // ptScript.textContent = ptScriptContent;

        // firstScript.parentNode!.insertBefore(ptScript, firstScript);
    
        if (scriptElGTM) {
            const scriptType = checkIfGoogleTagAssistantIsEnabled() ? 'text/javascript' : 'text/partytown';
            scriptElGTM.type = scriptType;
            scriptElGTM.async = true;
            scriptElGTM.textContent = gtmScriptContent;

            console.log("HERE WE ARE: ", scriptElGTM); 
        }

        if (scriptElConfig) {
            scriptElConfig.type = 'text/javascript';
            scriptElConfig.async = true;
            scriptElConfig.textContent = ptScriptContent;
        }

        if (scriptElPT) {
            scriptElPT.textContent = partytownSnippet()
            // scriptElPT.src = "/~partytown/partytown.js"; 
        }
      
    })

</script>

<svelte:head>

    <script type='text/partytown' bind:this={scriptElGTM}></script>
    <script type='text/partytown' bind:this={scriptElConfig}></script>
    <script bind:this={scriptElPT}></script>
    <!-- <script type="text/javascript" src="/~partytown/partytown.js"></script> -->
</svelte:head>





