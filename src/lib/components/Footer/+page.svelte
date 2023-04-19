<script lang="ts">
	import { page } from '$app/stores';
    import Logo from '../Logo/+page.svelte';
    import Mail from '../social/Mail/+page.svelte';
    import Phone from '../social/Phone/+page.svelte';
    import Pin from '../social/Pin/+page.svelte';
</script>

<div class="grid-wrapper" style="background-color: var(--color-foreground);">
    
    <footer class="grid">
    
        <div class="footer-section two desktop-info">
    
            <div class="logo">
                <Logo fill="var(--color-background)"></Logo>
            </div>

            <ul>
                <li>
                    <a class="icon-button" href="">
                        <Phone fill={'var(--amber)'} width={100}/>
                        0860 00 77 44
                    </a>
                </li>
                <li>
                    <a class="icon-button" href="">
                        <Mail fill={'var(--amber)'} width={100}/>
                        service@brightrock.co.za
                    </a>
                </li>
                <li>
                    <a class="icon-button" href="">
                        <Pin fill={'var(--amber)'} width={100}/>
                        165 West Street, Sandton, Gauteng, South Africa
                    </a>
                </li>
            </ul>
    
        </div>
    
        <div class="footer-section two desktop-info">
    
            <h3 class="desktop-info">Links</h3>
    
            <ul>
                <li class="list-button" class:active={$page.url.pathname === '/'}><a data-sveltekit-preload-data="tap" href="/">Home</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/about'}><a data-sveltekit-preload-data="tap" href="/about">Our story so far</a></li>

                <li class="list-button" class:active={$page.url.pathname === '/individual-life-cover'}><a data-sveltekit-preload-data="tap" href="/individual-life-cover">Individual life cover</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/group-risk-cover'}><a data-sveltekit-preload-data="tap" href="/group-risk-cover">Group risk cover</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/funeral-offering'}><a data-sveltekit-preload-data="tap" href="/funeral-offering">Funeral offering</a></li>

                <li class="list-button"><a data-sveltekit-preload-data="tap" target="_blank" href="https://changeexchange.co.za/">Change Exchange</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/categories/just-for-you'}><a data-sveltekit-preload-data="tap" href="/categories/just-for-you">Just for you</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/media-centre'}><a data-sveltekit-preload-data="tap" href="/media-centre">Media centre</a></li>
                <li class="list-button"><a data-sveltekit-preload-data="tap" target="_blank" href="https://brightrock.readz.com/thecomet-june2022">The Comet newsletter</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/work-for-us'}><a data-sveltekit-preload-data="tap" href="/work-for-us">Work for us</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/contact'}><a data-sveltekit-preload-data="tap" href="/contact">Contact Us</a></li>
            </ul>
    
        </div>
    
        <div>
            <h3 class="desktop-info">Terms of service</h3>
            <ul>
                <li class="list-button" class:active={$page.url.pathname === '/tos'}><a data-sveltekit-preload-data="tap" href="/tos">Terms of use</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/pp'}><a data-sveltekit-preload-data="tap" href="/pp">Privacy policy</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/fais'}><a data-sveltekit-preload-data="tap" href="/fais">FAIS compliance</a></li>
                <li class="list-button" class:active={$page.url.pathname === '/accessibility'}><a data-sveltekit-preload-data="tap" href="/accessibility">Accessibility policy</a></li>
                <li class="list-button"><a href="https://www.brightrock.co.za/wp-content/uploads/2022/01/Conflict-of-interest-management-policy2022.pdf" target="_blank">Conflict of interest management policy</a></li>
            </ul>

            <h3 class="desktop-info">Financial Advisers</h3>
            <ul>
                <li><a href="https://iris.brightrock.co.za/" target="_blank">Login to Flint</a></li>
            </ul>

            <h3 class="desktop-info">Covid-19</h3>
            <ul>
                <li><a href="https://sacoronavirus.co.za/" target="_blank">Covid-19 Govt Portal</a></li>
            </ul>
    
        </div>

        <div class="footer-section four mobile-info">
    
            <h3>Follow us</h3>
    
            <ul class="social-buttons">
                <li>
                    <a class="icon-button" href="https://www.facebook.com/BrightRockZA/" target="_blank" rel="noopener">
                        Facebook
                    </a>
                </li>
                <li>
                    <a class="icon-button" href="https://www.instagram.com/explore/tags/brightrock/?hl=en" target="_blank" rel="noopener">
                        Instagram
                    </a>
                </li>
                <li>
                    <a class="icon-button" href="https://twitter.com/BrightRockZA" target="_blank" rel="noopener">
                        Twitter
                    </a>
                </li>
                <li>
                    <a class="icon-button" href="https://za.linkedin.com/company/brightrockza" target="_blank" rel="noopener">
                        LinkedIn
                    </a>
                </li>
            </ul>
    
        </div>
    
        <div class="image-column">
        
            <div class="picture-set no_min_height">
                <picture>
                    <source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995955/corporate_site/lovechange_j5hiqg.webp" type="image/webp" />
                    <img loading="lazy" src="https://res.cloudinary.com/brightrock/image/upload/v1662995955/corporate_site/lovechange_j5hiqg.png" alt="Love Change!" />
                </picture>
            </div>
    
            <a class="picture-set no_min_height" href="https://www.hellopeter.com/brightrock" target="_blank">
                <picture>
                    <source srcset="https://res.cloudinary.com/brightrock/image/upload/v1662995825/corporate_site/hellopeter_dq7gid.svg" type="image/webp" />
                    <img loading="lazy" src="https://res.cloudinary.com/brightrock/image/upload/v1662995825/corporate_site/hellopeter_dq7gid.svg" alt="Hello Peter!" />
                </picture>
            </a>
    
        </div>
    
        <p class="fine-print">BrightRock Life Ltd is a licensed financial services provider and life insurer. Company registration no: 1996/014618/06, FSP 11643. All rights reserved. Terms and conditions apply.</p>
    
    </footer>
</div>

<style>

    footer {
        color: var(--color-background);
    }

    .logo {
        width: 50%;
    }
    a, li, p {
        color: var(--offWhite); 
    }

    li, p {
        padding: 2.5px 0;
    }

    li a.icon-button {
        display: grid;
        grid-template-columns: 10% 1fr;
        gap: 5%;
        align-items: center;
        justify-items: left;
    }

    h3 {
        color: var(--amber); 
    }

    .footer-section {
        color: var(--offWhite);
    }

    .fine-print {
        font-size: 10px;
        text-align: center;
    }

    .image-column {
        display: grid;
    }

    @media screen and (min-width: 480px) {

        .grid {
            --gridNumber: 1
        }
        
    }
    @media screen and (min-width: 1000px) {
        footer {
            place-items: start;
        }
        footer .logo, 
        footer .fine-print {
            grid-column: 1 / 6;
            width: 100%;
        }
        footer .logo {
            width: 80%;
        }

        footer h3:first-child {
            margin-top: 0;
        }
    }
    @media screen and (min-width: 2560px) {
        li a.icon-button {
            grid-template-columns: 5% 1fr;
        }
        .grid-wrapper {
            padding-top: var(--padding);
            padding-bottom: var(--padding);
        }
    }
    @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1680px) { 
        li a.icon-button {
            grid-template-columns: 5% 1fr;
        }
        .grid-wrapper {
            padding-top: var(--padding);
            padding-bottom: var(--padding);
        }
    }

</style>