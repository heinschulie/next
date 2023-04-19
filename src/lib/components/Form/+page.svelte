<script lang="ts">
    import ResponsiveVideo from "../ResponsiveVideo/+page.svelte";
	export let backgroundColor = 'var(--color-background-alternate)';
 
    let firstNameInput = "";
    let lastNameInput = "";
    let cityInput = "";
    let provinceInput = ""; 
    let emailInput = "";
    let mobileInput = "";
    var emailFilter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    $: isEmail = String(emailInput).search(emailFilter) !== -1;
    $: isMobile = Array.from(mobileInput).filter(letr => letr !== ' ').length === 10 && 
        (mobileInput.includes('08') || mobileInput.includes('07') || mobileInput.includes('06'));
    $: isValid = !!firstNameInput && !!lastNameInput && !!cityInput && !!provinceInput && isEmail && isMobile;  

</script>

<div class="grid-wrapper" style="background-color: {backgroundColor}">
    
    <section class="form-section grid">
    
        <div class="information">
            <h1 class="heading">Sign me up</h1>
            <h2 class="subheading">Speak to your adviser, or sign up to have one contact you</h2>
            <p>Fill in your details, and we’ll have an accredited financial adviser contact you.</p>
    
            <!-- <div class="picture-set no_min_height">
                <video autoplay loop muted playsinline>
                    <source src="https://res.cloudinary.com/iamme/image/upload/v1652886550/brightrock/Bottom_Signup_AllPAges.mp4" type="video/mp4" >
                </video>
            </div> -->
            <div class="picture-set no_min_height">
                <ResponsiveVideo src="https://res.cloudinary.com/iamme/image/upload/v1652886550/brightrock/Bottom_Signup_AllPAges.mp4" aspect_ratio={0.99} range={220} on:colorMatched={(evt) => backgroundColor = evt.detail} />
            </div>
        </div>
        <!-- {firstNameInput}/{lastNameInput}/{cityInput} -->
        <form name="contact_br" method="post" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact_br" />
            <input type="text" name="bot-field" style="position: absolute; left: -10000px;" />
            <input
                type="text"
                name="main_first-name"
                bind:value={firstNameInput}
                size="40"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="First name..."
            />
            <input
                type="text"
                name="main_last-name"
                bind:value={lastNameInput}
                size="40"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Last name..."
            />
            <input
                type="text"
                name="main_city"
                bind:value={cityInput}
                size="40"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="City/Town..."
            />
            <select
                name="main_province"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                bind:value={provinceInput}>
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
            <input
                type="email"
                name="main_email"
                size="40"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                bind:value={emailInput}
                placeholder="Email address..."
            />
            <input
                type="tel"
                name="main_cell_number"
                bind:value={mobileInput}
                size="40"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Cell number..."
            />
            <!-- <textarea
                    name="main_message"
                    cols="40"
                    rows="10"
                    class="form-control text-input double"
                    aria-invalid="false"
                    placeholder="Your message..."
            /> -->
            <div class="button_wrapper">
                <button class="br_button" class:disabled={!isValid} disabled={!isValid}>
                    Submit
                    <!-- { isMobile } -->
                </button>
            </div>
    
        </form>
    </section>
</div>

<style>
    .disabled {
        opacity: .5;
    }
    @media screen and (min-width: 2560px) {
       .grid-wrapper {
           padding-top: var(--padding);
           padding-bottom: var(--padding);
       }
   }
   @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1680px) { 
        .grid-wrapper {
           padding-top: var(--padding);
           padding-bottom: var(--padding);
        }
   }
</style>
