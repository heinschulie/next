
<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Search from '../icons/Search/+page.svelte';
	import Key from '../icons/Key/+page.svelte';
	import Logo from '../Logo/+page.svelte';
	import Chevron from '../icons/Chevron/+page.svelte';
	
	let checked: boolean; 

	afterNavigate(({ from, to }) => checked = false); 

</script>

<div class="flint_login">
	<Key />
	<a href="https://iris.brightrock.co.za/">Login to Flint</a>
</div>
<header>
	
	<a class="logo" href="/">
		<!-- <Logo width={75} fill="var(--color-foreground)" /> -->
		<Logo width={100} fill="var(--color-foreground)" />
	</a>

	<input type="checkbox" id="nav-check" bind:checked={ checked }>
	<div class="nav-btn">
		<label for="nav-check">
		<span></span>
		<span></span>
		<span></span>
		</label>
	</div>

	<nav class="nav-links">
		<ul>
			<li>
				<a name="#">
					What we offer
					<span class="chevron">
						<Chevron rotation={270}/>
					</span>
				</a>
				<ul class="sub-menu">
					<li class:active={$page.url.pathname === '/individual-life-cover'}><a data-sveltekit-preload-data="tap" href="/individual-life-cover">Individual life cover</a></li>
					<li class:active={$page.url.pathname === '/group-risk-cover'}><a data-sveltekit-preload-data="tap" href="/group-risk-cover">Group risk cover</a></li>
					<li class:active={$page.url.pathname === '/funeral-offering'}><a data-sveltekit-preload-data="tap" href="/funeral-offering">Funeral offering</a></li>
				</ul>
			</li>
			
			<li class="no-children" class:active={$page.url.pathname === '/about'}><a data-sveltekit-preload-data="tap" href="/about">Our story so far</a></li>
			
			<li class="no-children" class:active={$page.url.pathname === '/partnerships'}>
				<a href="/rugby-partnerships">
					Rugby partnerships 
					<!-- <span class="chevron">
						<Chevron rotation={270}/>
					</span> -->
				</a>
				<!-- <ul class="sub-menu">
					<li class:active={$page.url.pathname === '/partnerships/rugby'}><a data-sveltekit-preload-data="tap" href="/partnerships/rugby">Rugby</a></li>
					<li class:active={$page.url.pathname === '/partnerships/dan-nicholl'}><a data-sveltekit-preload-data="tap" href="/partnerships/dan-nicholl">The Dan Nicholl Show</a></li>
					<li class:active={$page.url.pathname === '/partnerships/ruda-talks-change'}><a data-sveltekit-preload-data="tap" href="/partnerships/ruda-talks-change">Ruda Talks Change</a></li>
					<li class:active={$page.url.pathname === '/partnerships/chatting-change'}><a data-sveltekit-preload-data="tap" href="/partnerships/chatting-change">Chatting Change @ Our Kitchen Table</a></li>
					<li class:active={$page.url.pathname === '/partnerships/biz-news'}><a data-sveltekit-preload-data="tap" href="/partnerships/biz-news">BizNews</a></li>
				</ul> -->
			</li>
			
			
			<li class="no-children" class:active={$page.url.pathname === '/categories/just-for-you'}><a data-sveltekit-preload-data="tap" href="/categories/just-for-you">Just for you</a></li>
			<li class="no-children" class:active={$page.url.pathname === '/contact'}><a data-sveltekit-preload-data="tap" href="/contact">Contact us</a></li>
	
		</ul>
	</nav>

	<a class="search-icon" data-sveltekit-preload-data="tap" href="/search">
		<Search />
	</a>

</header>

<style>
	
	header {
		width: 100%;
		height: var(--header-height);
		margin-top: var(--flint-login-height);
		padding: 0 15px;
		position: fixed; 
		background-color: var(--color-background);
		z-index: 2; 

		display: grid;
		grid-template-columns: auto 1fr;
		grid-auto-flow: column;
		align-items: center;
		justify-items: center;

		grid-template-areas: "logo search menu";
	}
	.logo {
		grid-area: logo;
	}
	.flint_login {
		position: fixed; 
    	z-index: 2;
		top: 0;
		padding: 0 15px;
		width: 100%;
    	height: var(--flint-login-height);
		color: var(--color-background);
		background-color: var(--color-foreground);
		justify-self: start;
		
		grid-column: 1 / 3;

		display: grid;
		grid-template-columns: 25px 1fr;
		align-items: center;
		gap: 10px;

	}

	nav {
		width: 80%;
		height: calc(100vh - var(--header-height) - var(--flint-login-height));
		position: absolute;
		top: var(--header-height);
		right: 0;
		background-color: var(--color-background);

		transition: 0.3s ease-in-out;

		--shadow-color: hsla(var(--black-hue), var(--black-sat), var(--black-lit), 0.2);
		box-shadow: -5px 5px 8px 0px var(--shadow-color);
		-webkit-box-shadow: -5px 5px 8px 0px var(--shadow-color);
		-moz-box-shadow: -5px 5px 8px 0px var(--shadow-color);
		
		display: grid;
		justify-self: center;
		align-self: center;
		overflow: hidden;
	}

	nav a {
		width: 100%;
		height: 100%;
		min-height: 50px;

		padding-left: var(--padding);
		color: var(--color-foreground);

		font-weight: 700;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
		
		/* text-transform: capitalize; */
		
		display: grid;
		grid-auto-flow: column;
		align-content: center;
	}

	.nav-btn {
		grid-area: menu;
		justify-self: right;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		min-height: 3em;
	}

	li {
		position: relative;
		text-align: left;
	}

	li .sub-menu {
		width: 100%;
		left: 0;
		padding-left: var(--padding);
    	z-index: 1;
		border-radius: 0;
	}
	
	li .sub-menu a {
		color: var(--color-foreground-alternate);
		border-bottom: 1px solid var(--color-background-alternate); 
		font-size: small;
	}

	a:hover, nav:hover {
		color: var(--amber);
	}

	header .nav-btn label span {
		display: block;
		height: 10px;
		width: 25px;
		border-top: 3px solid #eee;
	}
	header #nav-check {
		position: absolute;
		top: -10000px;
	}
	header .nav-btn label:hover, header #nav-check:checked ~ .nav-btn label {
		background-color: rgb(9, 14, 90);
	}
	
	header #nav-check:not(:checked) ~ nav {
		right: -100%;
	}

	header #nav-check:checked ~ nav {
		right: 0;
		overflow-y: auto;
	}

	.search-icon {
		grid-area: search; 
		width: 25px;
		place-content: center;
		justify-self: right;
		margin-right: 15px;
	}

	.chevron {
		width: 10px;
		margin-left: 15px;
		display: grid;
		place-items: center;
		place-content: center;
	}


	@media screen and (min-width: 480px) {
		nav {
			width: 40%;
		}
		li .sub-menu {
			padding: 0;
		}
		li .sub-menu a {
			justify-items: start;
		}
	}
	@media screen and (min-width: 1000px) {
		header {
			width: 100%;
			padding: 0 15px;
			position: fixed; 
			background-color: var(--color-background);
			z-index: 2; 

			display: grid;
			/* grid-template-columns: auto 1fr auto; */

			grid-template-columns: 15% 1fr auto;

			grid-auto-flow: column;
			align-items: center;
			justify-items: center;

			grid-template-areas: "logo . search";

		}

		.logo {
			justify-self: start;
		}

		nav {
			width: initial;
			height: var(--header-height) !important;
			background-color: var(--color-background);
			position: initial;
			
			--shadow-color: none;
			box-shadow: none;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			
			display: grid;
			justify-self: center;
			align-self: center;
			overflow: visible;
		}

		nav a {
			
			width: 100%;
			height: 100%;
			min-height: 40px;
			padding-left: 0;

			color: var(--color-foreground);
			font-weight: normal;
			letter-spacing: 10%;
			text-decoration: none;
			text-align: left;
			/* text-transform: capitalize; */
			transition: color 0.2s linear;
			
			display: flex;
			align-items: center;
			justify-content: center;
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			min-height: 3em;

			display: grid;
			grid-auto-columns: 1fr;
			grid-auto-flow: column;
			justify-content: center;
			align-items: center;
		}

		li {
			position: relative;
			height: 100%;
			padding: 0 5px;
		}

		li:hover {
			color: var(--color-background);
			background-color: var(--color-foreground);
		}

		li:hover a {
			color: var(--color-background);
		}

		:global(li:hover svg) {
			stroke: var(--white);
		}

		.no-children:hover {
			border-radius: 0 0 25px 25px;
		}

		li .sub-menu {
			width: 100%;
			left: 0;
			padding: 0;
			z-index: 1;
			background-color: var(--color-foreground-alternate);
			border-radius: 0 0 25px 25px;
			position: absolute;

			display: none;

		}

		li:hover .sub-menu {
			display: grid;
    		grid-auto-flow: row;
			grid-auto-flow: row;
		}

		.sub-menu:hover {
			display: grid;
		}

		.sub-menu li:last-child {
			border-radius: 0 0 25px 25px;
		}

		li .sub-menu a {
			color: var(--color-background);
			border-bottom: none;
			justify-content: start;
		}

		li a:hover {
			color: var(--amber);
		}
		:global(li a:hover svg) {
			stroke: var(--amber);
		}

		ul.sub-menu li {
			padding: 10px;
		}

		a:hover, nav:hover {
			color: var(--amber);
		}

		#nav-check, .nav-btn {
			display: none;
		}

		.search-icon {
			margin-right: 0;
		}

	}
	
</style>




