<script lang="ts">
	// import { browser } from '$app/env';
	// export const hydrate = true;
	// export const router = browser;
	// export const prerender = true;

	import Panel from '$lib/components/Panel/+page.svelte';  
</script>

<svelte:head>
	<title>Work for us</title>
</svelte:head>

<Panel>

	<h1 class="heading"><em>Work</em> for us</h1>
	<p>Do you want to be a member of the BrightRock team? We’re hiring, especially in our administrative and IT areas. At BrightRock, we hold ourselves to the highest standards and put passion, integrity and quality into everything we do. We believe in teamwork and collaboration – putting our heads together to set ourselves ambitious challenges. But we also believe in the different perspectives that individuals bring. So, ours is a space where you also have the freedom to work alone and to see your own contribution make an impact.</p>
	<p class="pull-out">“Ours is a space where you also have the freedom to work alone and to see your own contribution make an impact.”</p>
	
	<h2 class="subheading">With us, you’ll have excellent scope for future growth </h2>
	<p>We offer every member of our team a chance to share in the special rewards that come with building a growing business. BrightRock offers a competitive pay-package and, as a growing player in a major financial services sector, excellent scope for future growth. But here’s a health warning: ours is an adrenaline-fuelled workplace that will always demand your best performance. So, if you’re great at what you do, fill in the form and upload your CV.</p>

	<video slot="illustration" autoplay loop muted playsinline >
		<source src="https://res.cloudinary.com/iamme/video/upload/v1654611145/brightrock/welcome.mp4" type="video/mp4" >
	</video>

</Panel>

<section class="form-section grid">
    
	<div class="information">
		<h1 class="heading">Let's chat</h1>
		<h2 class="subheading">Fill in the needed details and let's get talking</h2>
	</div>

	<!-- <form method="POST" data-netlify="true" name="workforus_br" netlify-honeypot="wfu_bot-field"> -->
	<!-- <form method="POST" name="workforus_br">
		<input type="hidden" name="wfu_bot-field" value="workforus_br" /> -->

	<form name="workforus_br" method="post" data-netlify="true" netlify-honeypot="bot-field" enctype="multipart/form-data">
		<input type="hidden" name="form-name" value="workforus_br" />
		<input type="text" name="bot-field" style="position: absolute; left: -10000px;" />
		<input
			type="text"
			name="wfu_first-name"
			value=""
			size="40"
			class="form-control"
			aria-required="true"
			aria-invalid="false"
			placeholder="First name..."
		/>
		<input
			type="text"
			name="wfu_last-name"
			value=""
			size="40"
			class="form-control"
			aria-required="true"
			aria-invalid="false"
			placeholder="Last name..."
		/>
		<input
			type="text"
			name="wfu_city"
			value=""
			size="40"
			class="form-control"
			aria-required="true"
			aria-invalid="false"
			placeholder="City/Town..."
		/>
		<input
			type="email"
			name="wfu_email"
			value=""
			size="40"
			class="form-control"
			aria-required="true"
			aria-invalid="false"
			placeholder="Email address..."
		/>
		<input
			type="tel"
			name="wfu_cell_number"
			value=""
			size="40"
			class="form-control"
			aria-required="true"
			aria-invalid="false"
			placeholder="Cell number..."
		/>
		
		<!-- look away! -->
		<div></div>

		<select
			name="wfu_province"
			class="form-control"
			aria-required="true"
			aria-invalid="false">
			<option value="">-- Type of role you're interested in --</option>
			<option value="Call centre">Call centre</option>
			<option value="Servicing and administration">Servicing and administration</option>
			<option value="Systems and IT">Systems and IT</option>
			<option value="Marketing and brand">Marketing and brand</option>
			<option value="Sales and distribution">Sales and distribution</option>
			<option value="Actuarial and product">Actuarial and product</option>
			<option value="HR training and development">HR training and development</option>
			<option value="Other">Other</option>
		</select>

		<select
			name="wfu_years_experience"
			class="form-control"
			aria-required="true"
			aria-invalid="false">
			<option value="">-- Years of experience --</option>
			<option value="No experience (never worked)">No experience (never worked)</option>
			<option value="No experience (student)">No experience (student)</option>
			<option value="Less than one year">Less than one year</option>
			<option value="1 - 2 years">1 - 2 years</option>
			<option value="2 - 5 years">2 - 5 years</option>
			<option value="5 - 10 years">5 - 10 years</option>
			<option value="More than 10 years">More than 10 years</option>
		</select>

		<select
			name="wfu_qualifications"
			class="form-control"
			aria-required="true"
			aria-invalid="false">
			<option value="">-- Qualifications --</option>
			<option value="Grade 12">Grade 12</option>
			<option value="Certificate">Certificate</option>
			<option value="Diploma">Diploma</option>
			<option value="Degree">Degree</option>
			<option value="Honours">Honours</option>
			<option value="Masters">Masters</option>
			<option value="Doctorate">Doctorate</option>
		</select>
		
		<div class="filewrap">
			<input
				type="file"
				name="wfu_cv"
				accept="application/pdf"
				value=""
				class="form-control"
				placeholder="Upload your CV"
			/>
			<label class="upload_label" for="wfu_cv">Upload CV</label>
		</div>

		<!-- <textarea
				name="wfu_message"
				cols="40"
				rows="10"
				class="form-control text-input double"
				aria-invalid="false"
				placeholder="Your message..."
		/> -->
		<div class="button_wrapper">
			<button class="br_button">Submit</button>
		</div>

	</form>
</section>

<style>
	.pull-out {
        padding: 5vh var(--padding);
		font-size: 2em;
		color: var(--amber);
	}
	.filewrap{
		margin: 5px;
		position: relative;
		color: var(--white);
        padding: 15px;
        border-radius: 25px;

        display: flex;
        place-items: center;
		background-color: var(--green);
	}
	.upload_label {
		width: 100%;
    	text-align: center;
	}

	input[type="file"]{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
		opacity:0;
		cursor:pointer;
	}
</style>