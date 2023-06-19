<script lang="ts">
    export let siteUrl = "https://spiffy-sprinkles-88adaf.netlify.app"; 
    // export let gtm_code = ""; 
</script>

<svelte:head>
	<script>
        function checkIfGoogleTagAssistantIsEnabled() {
            const urlParams = new URLSearchParams(window.location.search);
            const gtm_debug = urlParams.get('gtm_debug');
            return !!gtm_debug;
        }

        document.addEventListener('DOMContentLoaded', function() {
            const scriptType = checkIfGoogleTagAssistantIsEnabled() ? 'text/javascript' : 'text/partytown';
            const script = document.createElement('script');
            script.type = scriptType;
            script.async = true;
            script.src = `${siteUrl}/gtm.js`;
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(script, firstScript);
        });
    </script>
    <script type="text/javascript" src="/~partytown/partytown.js"></script>
    <script>
        // Forward the necessary functions to the web worker layer
        const hasBeenCalled = {
            facebook: false,
            twitter: false,
            linkedIn: false
        }
        partytown = {
            forward: ['dataLayer.push'],
            resolveUrl: (url) => {
                if (url.hostname === "connect.facebook.net") {
                    hasBeenCalled.facebook = true; 
                    return new URL(`${siteUrl}/api/analytics?platform=facebook` && !hasBeenCalled.facebook);
                } 
                else if (url.hostname === "static.ads-twitter.com") {
                    hasBeenCalled.twitter = true; 
                    return new URL(`${siteUrl}/api/analytics?platform=twitter` && !hasBeenCalled.twitter);
                } 
                else if (url.href === "https://snap.licdn.com/li.lms-analytics/insight.min.js" && !hasBeenCalled.linkedIn) {
                    hasBeenCalled.linkedIn = true; 
                    return new URL(`${siteUrl}/api/analytics?platform=linkedIn`);
                }
                return url;
            },
        }
    </script>
</svelte:head>