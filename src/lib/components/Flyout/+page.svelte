<script type="ts">
    let open = false; 
</script>

<section class="flyout_wrapper" class:open={open}>
    <button class="flyout_button" on:click={() => open = !open}>Request a callback</button>

    <div class="information">
		<h1 class="heading">Want us to get in touch?</h1>
        <p>Fill in your details, and we’ll call you.</p>
	</div>

    <!-- <form method="POST" data-netlify="true" name="callback_br" netlify-honeypot="callback_bot-field"> -->
    <!-- <form method="POST" name="callback_br">
        <input type="hidden" name="callback_bot-field" value="callback_br" /> -->

    <form name="callback_br" method="post" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="callback_br" />
        <input type="text" name="bot-field" style="position: absolute; left: -10000px;" />
        <input
            type="text"
            name="callback_first-name"
            value=""
            size="40"
            class="form-control"
            aria-required="true"
            aria-invalid="false"
            placeholder="First name..."
        />
        <input
            type="text"
            name="callback_last-name"
            value=""
            size="40"
            class="form-control"
            aria-required="true"
            aria-invalid="false"
            placeholder="Last name..."
        />
        <input
            type="tel"
            name="callback_cell_number"
            value=""
            size="40"
            class="form-control"
            aria-required="true"
            aria-invalid="false"
            placeholder="Cell number..."
        />
        <select
            name="callback_province"
            class="form-control"
            aria-required="true"
            aria-invalid="false">
            <option value="">-- Choose province --</option>
            <option value="Western Cape">Western Cape</option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Northern Cape">Northern Cape</option>
            <option value="Gauteng">Gauteng</option>
            <option value="North West Provice">North West Provice</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="Kwazulu-Natal">Kwazulu-Natal</option>
            <option value="Free State">Free State</option>
            <option value="Limpopo">Limpopo</option>>
        </select>

        <div class="button_wrapper">
            <button class="br_button" style="--background_color: var(--color-foreground-alternate)">Send</button>
        </div>

    </form>
</section>

<style>

    section {
        padding: calc(var(--padding)/3);
        color: var(--color-foreground);
		display: grid;
		align-items: start;
		justify-items: center;
	}

    form {
        width: 100%;
        height: 100%;
        display: grid;
        /* Look away! */
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto auto auto 1fr; 
    }

    .information h1, 
    .information p {
        text-align: left;
    }
	.form-control {
        width: 100%;
        border: none;
        color: var(--color-foreground);
        background-color: transparent;
        height: 60px;
        border-bottom: solid 1px darkgray;
    }
    .form-control::placeholder {
        color: var(--color-foreground-alternate);
    }
    .button_wrapper {
        margin: 15px auto;
    }

    .flyout_wrapper {
        
        position: fixed;
        bottom: -120vw;
        left: 50%;
        
        transform: translateX(-50%);

        width: 90vw;
        height: 120vw; 

        background-color: var(--amber);
        transition: 0.3s ease-in-out;
    }

    .flyout_button {
        position: absolute;
        right: 0;
        height: 40px;
        margin-top: -40px;
        color: var(--color-background);
        background-color: var(--color-foreground-alternate);
        border-radius: 5px 5px 0 0;
        padding: 15px;
        display: grid;
        place-content: center;
    }

    .open {
        bottom: 0vw;
    }
    

    @media screen and (min-width: 480px) {
        .flyout_wrapper {

            bottom: initial;
            left: initial;    
            transform: initial;

            width: 30%;
            height: initial;
            aspect-ratio: 1;
            top: calc( var(--header-height) + var(--flint-login-height) );
            
            right: 0;
            left: initial;
            transform: translateX(100%);
        }
        .flyout_button {
            right: 100%;
            /* width: fit-content; */
            width: max-content;
            transform: rotate(-90deg);
            transform-origin: right bottom;
        }

        .open {
            transform: translateX(0);
        }
        
    }
</style>