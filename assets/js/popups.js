$(document).ready(function () {
	// Add this function to get URL parameters
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

	// Add this section to check for modal parameter on page load
	var pageParam = getUrlParameter('page');
	if (pageParam) {
		switch(pageParam.toLowerCase()) {
			case 'privacy':
				$('#privacy_policy_modal').show();
				$('body').addClass('disable-scroll');
				break;
			case 'cookie':
				$('#cookie_policy_modal').show();
				$('body').addClass('disable-scroll');
				break;
			case 'complaints':
				$('#complaints_procedure_modal').show();
				$('body').addClass('disable-scroll');
				break;
			case 'contact':
				$('#contact_us_modal').show();
				$('body').addClass('disable-scroll');
				break;
			case 'fees':
				$('#fees_modal').show();
				$('body').addClass('disable-scroll');
				break;
		}
	}

	// Legal documents triggers
	$('.modal .close').click(function () {
		$('.modal').hide();
		$('body').removeClass('disable-scroll');
	});
	$('.privacy_policy_modal').click(function () {
		$('#privacy_policy_modal').show();
		$('body').addClass('disable-scroll');
	});
	$('.cookie_policy_modal').click(function () {
		$('#cookie_policy_modal').show();
		$('body').addClass('disable-scroll');
	});
	$('.complaints_procedure_modal').click(function () {
		$('#complaints_procedure_modal').show();
		$('body').addClass('disable-scroll');
	});
	$('.contact_us_modal').click(function () {
		$('#contact_us_modal').show();
		$('body').addClass('disable-scroll');
	});
	$('.fees_modal').click(function () {
		$('#fees_modal').show();
		$('body').addClass('disable-scroll');
	});

	// Privacy policy content
	var privacy_policy_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Privacy Policy</p>
		
		<h4>Welcome to Clear Law LLP's privacy notice. </h4>
							<p>Clear Law LLP respects your privacy and is committed to protecting your personal data. This privacy notice will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
							<ol>
								<li>IMPORTANT INFORMATION AND WHO WE ARE</li>
								<li>THE DATA WE COLLECT ABOUT YOU</li>
								<li>HOW IS YOUR PERSONAL DATA COLLECTED</li>
								<li>HOW WE USE YOUR PERSONAL DATA</li>
								<li>DISCLOSURES OF YOUR PERSONAL DATA</li>
								<li>INTERNATIONAL TRANSFERS</li>
								<li>DATA SECURITY</li>
								<li>DATA RETENTION</li>
								<li>YOUR LEGAL RIGHTS</li>
								<li>GLOSSARY</li>
							</ol>
							<ol>
								<li>
									<p>Important information and who we are</p>
									<p class="font-weight-bold">Purpose of this privacy notice</p>
									<p>This privacy notice aims to give you information on how Clear Law LLP collects and processes your personal data through your use of this website, including any data you may provide through this website when you complete an enquiry form, and when you engage our services.</p>
									<p>It is important that you read this privacy notice together with any other privacy notice or fair processing notice we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy notice supplements the other notices and is not intended to override them.</p>
									<h4>Controller</h4>
									<p>Clear Law LLP is the controller and responsible for your personal data (collectively referred to as "Clear Legal", "we", "us" or "our" in this privacy notice).</p>
									<p>We have appointed a data protection officer (DPO) who is responsible for overseeing questions in relation to this privacy notice. If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact the DPO using the details set out below.</p>
									<h4>Contact details</h4>
									<p>Our full details are:</p>
									<p>Full name of legal entity:	Clear Law LLP
			Name or title of DPO:		Andrew Kwan
			Email address:		hello@clearlawonline.co.uk
			Postal address: 		Units 115-119 Timber Wharf
							42-50 Worsley Street
							Manchester
							M15 4LD</p>
									<p>You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.</p>
									<p class="font-weight-bold">Changes to the privacy notice and your duty to inform us of changes</p>
									<p>This version was last updated on 22 May 2018 and historic versions can be obtained by contacting us.</p>
									<p>It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.</p>
									<h4>Third-party links</h4>
									<p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.</p>
								</li>
								<li>
									<p>The data we collect about you</p>
									<p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
									<p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
									<ul>
										<li>Identity Data includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
										<li>Contact Data includes address, email address and telephone numbers.</li>
										<li>Financial Data includes bank account and payment card details.</li>
										<li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
										<li>Usage Data includes information about how you use our website and services.</li>
										<li>Marketing and Communications Data includes your preferences in receiving marketing from us.</li>
									</ul>
									<p>We also collect, use and share <span class="font-weight-bold">Aggregated Data</span> such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy notice.</p>
									<p>We do not collect any <span class="font-weight-bold">Special Categories of Personal Data</span> about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.</p>
									<p class="font-weight-bold">If you fail to provide personal data</p>
									<p>Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.</p>
								</li>
								<li>
									<p>How is your personal data collected?</p>
									<p>We use different methods to collect data from and about you including through:</p>
									<ul>
										<li>Direct interactions. You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
											<ul>
												<li>apply for our products or services;</li>
												<li>request marketing to be sent to you;</li>
												<li>engage our services, or</li>
												<li>give us feedback.</li>
											</ul>
										</li>
										<li><span class="font-weight-bold">Automated technologies or interactions.</span> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our cookie policy.</li>
										<li><span class="font-weight-bold">Third parties or publicly available sources.</span> We may receive personal data about you from various third parties and public sources as set out below: 
											<ul>
												<li>Technical Data from the following parties:</li>
												<li>(a)	analytics providers such as Google based outside the EU; </li>
												<li>(b)	advertising networks based inside and outside the EU; and</li>
												<li>(c)	search information providers based inside and outside the EU.</li>
											</ul>	
										</li>
										<li>Identity and Contact Data from data brokers or aggregators based inside and outside the EU.</li>
										<li>Identity and Contact Data from publicly availably sources such as Companies House and the Electoral Register based inside the EU.</li>
									</ul>
								</li>
								<li>
									<p>How we use your personal data</p>
									<p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
									<ul>
										<li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
										<li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
										<li>Where we need to comply with a legal or regulatory obligation.</li>
										<p>To find out more about the types of lawful basis that we will rely on to process your personal data, please refer to the Glossary section.</p>
										<p>Generally we do not rely on consent as a legal basis for processing your personal data other than in relation to sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>
										<p class="font-weight-bold">Purposes for which we will use your personal data</p>
										<p>We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.</p>
										<p>Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below. </p>
										<table class="table">
											<tbody><tr>
												<th>Purpose/Activity</th>
												<th>Type of data</th>
												<th>Lawful basis for processing including basis of legitimate interest</th>
											</tr>
											<tr>
												<td>To register you as a new customer</td>
												<td>(a) Identity 
			(b) Contact</td>
												<td>Performance of a contract with you</td>
											</tr>
											<tr>
												<td>To process and deliver your order including:
			(a) Manage payments, fees and charges
			(b) Collect and recover money owed to us</td>
												<td>(a) Identity 
			(b) Contact 
			(c) Financial 
			(d) Transaction 
			(e) Marketing and Communications</td>
												<td>(a) Performance of a contract with you 
			(b) Necessary for our legitimate interests (to recover debts due to us)</td>
											</tr>
											<tr>
												<td>To manage our relationship with you which will include:
			(a) Notifying you about changes to our terms or privacy policy
			(b) Asking you to leave a review or take a survey</td>
												<td>(a) Identity 
			(b) Contact 
			(c) Profile 
			(d) Marketing and Communications</td>
												<td>(a) Performance of a contract with you 
			(b) Necessary to comply with a legal obligation
			(c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)</td>
											</tr>
											<tr>
												<td>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</td>
												<td>(a) Identity
			(b) Contact
			(c) Technical</td>
												<td>(a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)
			(b) Necessary to comply with a legal obligation</td>
											</tr>
											<tr>
												<td>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</td>
												<td>(a) Technical 
			(b) Usage</td>
												<td>	Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)</td>
											</tr>
											<tr>
												<td>To make suggestions and recommendations to you about goods or services that may be of interest to you</td>
												<td>(a) Identity 
			(b) Contact 
			(c) Technical 
			(d) Usage 
			(e) Profile </td>
												<td>Necessary for our legitimate interests (to develop our products/services and grow our business)</td>
											</tr>
										</tbody></table>
									</ul>
									<h4 class="font-weight-bold">Marketing</h4>
									<p>We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.</p>
									<h4>Promotional material from us </h4>
									<p>We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what services we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).</p>
									<p>You will receive marketing communications from us if you have requested information from us or purchased services from us and you have not opted out of receiving that marketing.</p>
									<h4>Third-party marketing </h4>
									<p>We will get your express opt-in consent before we share your personal data with any company outside the Clear Law LLP group of companies for marketing purposes.</p>
									<h4>Opting out</h4>
									<p>You can ask us or third parties to stop sending you marketing messages at any by contacting us at any time.</p>
									<p>Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a service purchase, service experience or other transactions.</p>
									<h4>Cookies</h4>
									<p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see our Cookie Policy.</p>
									<h4>Change of purpose </h4>
									<p>We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us. </p>
									<p>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.</p>
									<p>Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.</p>
								</li>
								<li>
									<p>Disclosures of your personal data</p>
									<p>We may have to share your personal data with the parties set out below for the purposes set out in the table in paragraph 4 above.</p>
									<ul>
										<li>Internal Third Parties as set out in the Glossary</li>
										<li>External Third Parties as set out in the Glossary.</li>
										<li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy notice. </li>
									</ul>
									<p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>
								</li>
								<li>
									<p class="font-weight-bold">International transfers</p>
									<p>Many of our external third parties are based outside the European Economic Area (EEA) so their processing of your personal data will involve a transfer of data outside the EEA.</p>
									<p>Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented: </p>
									<ul>
										<li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission. For further details, see European Commission: Adequacy of the protection of personal data in non-EU countries.</li>
										<li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe. For further details, see European Commission: Model contracts for the transfer of personal data to third countries. </li>
										<li>Where we use providers based in the US, we may transfer data to them if they are part of the Privacy Shield which requires them to provide similar protection to personal data shared between the Europe and the US. For further details, see European Commission: EU-US Privacy Shield.</li>
									</ul>
									<p>Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the EEA. </p>
								</li>
								<li>
									<p class="font-weight-bold">Data security</p>
									<p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality. </p>
									<p>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
								</li>
								<li>
									<p class="font-weight-bold">Data retention</p>
									<p class="font-weight-bold">How long will you use my personal data for?</p>
									<p>By law we have to keep basic information about our clients (including Contact, Identity, Financial and Transaction Data) for six years after they cease being clients for tax purposes.</p>
									<p>In some circumstances you can ask us to delete your data: see Request erasure below for further information.</p>
									<p>In some circumstances we may anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes in which case we may use this information indefinitely without further notice to you. </p>
								</li>
								<li>
									<p class="font-weight-bold">Your legal rights</p>
									<p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. Please go to the Glossary section to find out more about these rights. </p>
									<p>If you wish to exercise any of the rights set out in the Glossary, please contact us. </p>
									<h4>No fee usually required</h4>
									<p>You will not have to pay a fee to access your personal data (or to exercise any of the other rights); however, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we may refuse to comply with your request in these circumstances.</p>
									<h4>What we may need from you</h4>
									<p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p>
									<h4>Time limit to respond</h4>
									<p>We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated. </p>
								</li>
								<li>
									<p class="font-weight-bold">Glossary</p>
									<h4>LAWFUL BASIS</h4>
									<p><span class="font-weight-bold">Legitimate Interest</span> means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us</p>
									<p><span class="font-weight-bold">Performance of Contract</span> means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.</p>
									<p><span class="font-weight-bold">Comply with a legal or regulatory obligation</span> means processing your personal data where it is necessary for compliance with a legal or regulatory obligation that we are subject to.</p>
									<h4>THIRD PARTIES</h4>
									<p>External Third Parties means:</p>
									<ul>
										<li>Service providers acting as processors based in the United Kingdom who provide IT and system administration services.</li>
										<li>Professional advisers acting as processors or joint controllers including other lawyers, bankers, auditors and insurers based in the UK who provide consultancy, banking, legal, insurance and accounting services.</li>
										<li>HM Revenue &amp; Customs, regulators and other authorities acting as processors or joint controllers based in the United Kingdom who require reporting of processing activities in certain circumstances. </li>
										<li>Clear Legal Marketing Limited and their agents to provide initial assessment services.</li>
									</ul>
									<h4>YOUR LEGAL RIGHTS</h4>
									<p>You have the right to:</p>
									<p><span class="font-weight-bold">Request access</span> to your personal data (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</p>
									<p><span class="font-weight-bold">Request correction</span> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p>
									<p><span class="font-weight-bold">Request erasure</span> of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</p>
									<p><span class="font-weight-bold">Object to processing</span> of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</p>
									<p><span class="font-weight-bold">Request restriction of processing</span> of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data's accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</p>
									<p><span class="font-weight-bold">Request the transfer</span> of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</p>
									<p><span class="font-weight-bold">Withdraw consent at any time</span> where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</p>
								</li>
							</ol>
    `

	var our_fees_content =
		`
			<div class="logo">
				<img src="assets/img/logo.png" alt="" />
			</div>
			<p class='h2'>Our Fees and Services Information</p>
			<p>Civil Litigation</p>
			<p>We act on behalf of individuals looking to recover compensation for losses they have incurred due to another individual’s or company’s negligence. More specifically this relates to the following claim types:-</p>
			<ul>
				<li>Personal Injury (including Clinical Negligence & Industrial Disease)</li>
				<li>Housing Disrepair</li>
			</ul>
			<p>If you instruct us and we agree to act for you under a Conditional Fee Agreement, you will be liable for our fees in the event you successfully win your case or in the unlikely event you materially breach the terms of the agreement. </p>
			<p class="font-weight-bold">Fees You Will be Liable for under a No-win-no-Fee Agreement</p>

			<table class="table">
			<tr>
				<td>Costs you are liable to pay if you win your case or if you breach your Agreement with Us</td>
				<td>Cost</td>
			</tr>
			<tr>
				<td>Our success fee</td>
				<td>This is our reward for success and it is not calculated by reference to the risks of the claim but is what we need to set it at in order to make claims of this type commercially viable for us. The success fee cannot be recovered from your opponent and you will be liable to pay it in full up to a maximum of 25% of the damages you are awarded, for general damages and past losses.</td>
			</tr>
			<tr>
				<td>Our legal fees</td>
				<td>These are calculated on an hourly rate basis and you can expect to recover the majority of our legal fees from your opponent. You will be liable to pay any shortfall up to an overall cap of 25% of all of your damages.</td>
			</tr>
			<tr>
				<td>Any expenses (disbursements) spent on your behalf, eg court fees or expert fees</td>
				<td>Generally, you can expect to recover the majority or all of your disbursements from your opponent (including the recoverable element of any After the Event Insurance Premium in a Clinical Negligence claim). You will be liable to pay any shortfall up to an overall cap of 25% of all of your damages<br/>Certain factors can reduce the amount of disbursements you recover from your opponent, usually in complex matters. We will advise you if and when such factors arise.<br/>Please see the section below regarding after-the-event costs insurance, which is treated differently.</td>
			</tr>
			<tr>
				<td>After the Event Insurance Premium</td>
				<td>If you do not have suitable insurance in place to cover the risks of losing your case or if we are unable to obtain indemnity from such insurance on your behalf, we may recommend alternative cover to you. We only recommend insurance cover provided by companies with whom we have made contractual arrangements. We do not conduct an analysis of the insurance market.<br/>In the event that you win you will have to pay for the unrecoverable insurance policy at the end of your case from your compensation in addition to any contribution to success fee and any shortfall in fees or disbursements.</td>
			</tr>
			<tr>
				<td>The fees of any barrister we instruct on your behalf</td>
				<td>Generally, we will try to instruct a barrister on a no-win-no-fee basis. If so, we will advise you at the time what fees you will be liable to pay the barrister.<br/></td>
			</tr>
			<p class="font-weight-bold">How long will it take?</p>
			<p>An average case can take between 12 and 48 months. However, the time that your case might take will depend on a number of factors, including:</p>
			<ul>
				<li>The type of claim</li>
				<li>The nature and severity of your injuries</li>
				<li>Whether your case involves multiple parties or complicated legal issues</li>
				<li>The volume and quality of evidence required to support your claim</li>
				<li>Whether your case goes to trial or is settled outside of court</li>
			</ul>

			<p class="font-weight-bold">What work would you be doing for me?</p>
			<p>Whilst every case is different, here is an example of the key stages of most claims. Some stages may switch position, and some stages may or may not be required depending on the circumstances of the case. </p>
			
			<table class="table">
			<tr>
				<td>Stage 1</td>
				<td>Initial Case Review and advice on merits</td>
			</tr>
			<tr>
				<td>Stage 2</td>
				<td>Obtain Medical Evidence. For example, reviewing your medical records and assessment by a relevant independent medical professional</td>
			</tr>
			<tr>
				<td>Stage 3</td>
				<td>Letter of Claim sent to opponent</td>
			</tr>
			<tr>
				<td>Stage 4</td>
				<td>Review and advice on Opponent’s response</td>
			</tr>
			<tr>
				<td>Stage 5</td>
				<td>Proceedings Issued</td>
			</tr>
			<tr>
				<td>Stage 6</td>
				<td>Case heard at trial (in minority of cases)</td>
			</tr>
			<tr>
				<td>Stage 7</td>
				<td>Settlement Negotiations</td>
			</tr>
			<tr>
				<td>Stage 8</td>
				<td>Compensation Received</td>
			</tr>
			</table>

			<p class="font-weight-bold">Cancellation</p>
			<p>If you wish to cancel this contract you can do so within 14 days at no cost. Just let us know.</p>
			<p>If you cancel our service after 14 days and after we submit your claim you will be liable to pay our fees. </p>

		`



	// Cookie policy
	var cookie_policy_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Cookie Policy (EU)</p>
		<p class="h4 text-weight-600">This Cookie Policy was last updated on 23/01/2023 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland</p>
		<p class="h5">1. Introduction</p>
		<p>Our website, [URL] (hereinafter: 'the website') uses cookies and other related technologies (for convenience all technologies are referred to as 'cookies'). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>
		<p class="h5">2. What are cookies?</p>
		<p>A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>
		<p class="h5">3. What are scripts?</p>
		<p>A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>
		<p class="h5">4. What is a web beacon?</p>
		<p>A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.</p>
		<p class="h5">5. Cookies</p>
		<p class="h6">5.1 Technical or functional cookies</p>
		<p>Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.</p>
		<p class="h6">5.2 Marketing/Tracking cookies</p>
		<p>Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.</p>
		<p class="h6">5.3 Social media</p>
		<p>On our website, we have included content from Facebook and TikTok to promote web pages (e.g. “like”, “pin”) or share (e.g. “tweet”) on social networks like Facebook and TikTok. This content is embedded with code derived from Facebook and TikTok and places cookies. This content might store and process certain information for personalised advertising.</p>
		<p>Please read the privacy statement of these social networks (which can change regularly) to read what they do with your (personal) data which they process using these cookies. The data that is retrieved is anonymised as much as possible. Facebook and TikTok are located in the United States.</p>
		<p class="h5">6. Placed cookies</p>
		<p class="h5">7. Consent</p>
		<p>When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on "Save preferences", you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.</p>
		<p class="h6">7.1 Manage your consent settings</p>
		<p class="h5">8. Enabling/disabling and deleting cookies</p>
		<p>You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.</p>
		<p>Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our websites again.</p>
		<p class="h5">9. Your rights with respect to personal data</p>
		<p>You have the following rights with respect to your personal data:</p>
		<div class="basic-list">
			<ul>
				<li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
				<li>Right of access: You have the right to access your personal data that is known to us.</li>
				<li>Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
				<li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
				<li>Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
				<li>Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
			</ul>
		</div>
		<p>To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).</p>
		<p class="h5">10. Contact details</p>
		<p>For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>
		<p>
			<strong>Clear Law LLP</strong><br />
			Units 115-119 Timber Wharf, 42-50 Worsley Street<br />
			Manchester<br />
			M15 4LD<br />
			Website: https://clearlawonline.co.uk<br />
			Email: enquiries@clearlawonline.co.uk<br />
			Phone number: 0161 873 2740
		</p>
		
    `





	// Complaints procedure content
	var complaints_procedure_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Complaints procedure</p>
		<p>We are committed to high quality advice and client care. We would hope you will not have cause to complain, but we know that we may not always be perfect, and if you are unhappy about any aspect of the service you have received or about the bill, we hope that you will be able to resolve it with your fee earner.</p>
		<p>If your complaint is about a bill, you can apply to the court for an assessment of the bill. If all or part of the bill remains unpaid, we are entitled to charge interest. Of course, as we are acting for you on the basis of the agreement we signed, you will not receive a bill as long as you comply with that agreement.</p>
		<h4>How To Complain</h4>
		<p>We appreciate that you may not feel comfortable resolving a complaint with your file handler, or that you may feel that your complaint has not been resolved properly. If that is the case, you are entitled at any time to complain to our client care manager, Darren Gray.</p>
		<p>If you want to contact Darren, you can write to him, or email him at&nbsp;<a href="mailto:darren.gray@clearcommercial.co.uk">darren.gray@clearcommercial.co.uk</a>&nbsp;&nbsp;&nbsp;</p>
		<p>Darren will handle your complaint fairly and in confidence. He will acknowledge receipt of your complaint within 2 days of receiving it, and our aim is to resolve all complaints as soon as possible and in any event within 40 working days maximum period allowed by the Legal Ombudsman.</p>
		<p>If you are sending your complaint to us, please ensure that:</p>
						<ul>
							<li>You provide enough information for us to positively identify you on our systems</li>
							<li>You provide details of your complaint</li>
						</ul>
						<p>We would also find it useful if you could provide the following, however this is optional and we will still investigate your complaint without it:</p>
						<ul>
							<li>Additional information around your complaint that you think will help us in our investigation.</li>
							<li>An indication of what you would like us to do to put things right for you. We cannot guarantee that we will do this, but sometimes it can help us resolve things much quicker if we know what you would like us to do.</li>
						</ul>
						<h4>What do to if we cannot resolve your complaint</h4>
						<h5>Legal Ombudsman</h5>
						<p>If Darren is unable to resolve your complaint to your satisfaction, you have a right to complain to the Legal Ombudsman. They will look at your complaint independently and it will not affect how we handle your case.</p>
						<p>Before accepting a complaint for investigation, the Legal Ombudsman will check that you have tried to resolve your complaint with us first. If you have, then you must take your complaint to the Legal Ombudsman:</p>
						<ul>
							<li>Within six months of receiving a final response to your complaint</li>
						</ul>
						<p>and</p>
						<ul>
							<li>No more than one year from the date of act/omission; or</li>
							<li>No more than one year from when you should reasonably have known there was cause for complaint.</li>
						</ul>
						<p>If you would like more information about the Legal Ombudsman, please contact them.</p>
						<h4>Contact details</h4>
						<p>Website:&nbsp;<a href="http://www.legalombudsman.org.uk/">www.legalombudsman.org.uk</a></p>
						<p>Phone: 0300 555 0333 between 9am to 5pm Monday to Friday</p>
						<p>Email:&nbsp;<a href="mailto:enquiries@legalombudsman.org.uk">enquiries@legalombudsman.org.uk</a></p>
						<p>Address: Legal Ombudsman, PO Box 6167, Slough. SL1 0EH</p>
						<p>Alternatively, if you have engaged with us online, you may wish to use the Consumer Online Dispute Resolution platform which is available here:</p>
						<p><a href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage" target="_blank">https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage</a></p>
						<h4>Accepting complaints from prospective clients</h4>
						<p>The Legal Ombudsman will now accept complaints from prospective clients where a person has unreasonably been refused a service, or has persistently or unreasonably been offered a service that they do not want.</p>
						<p>In the first case, the complainant will have to produce prima facie evidence that there was no legitimate reason for the refusal to provide the service, and there has been a financial loss or that they have been unreasonably inconvenienced by the refusal. Legitimate reasons for refusing to provide a service include lack of expertise or concerns about money laundering.</p>
						<h4>What to do if you are unhappy with our behaviour</h4>
						<p>The Solicitors Regulation Authority can help if you are concerned about our behaviour. This could be for things like dishonesty, taking or losing your money or treating you unfairly because of your age, a disability or other characteristic.</p>
						<p>Visit their website to see how you can raise your concerns with the Solicitors Regulation Authority.</p>
						<p>Website:&nbsp;<a href="https://www.sra.org.uk/consumers/problems/report-solicitor" target="_blank">https://www.sra.org.uk/consumers/problems/report-solicitor</a></p>
					</div>
	`





	// Contact us content
	var contact_us_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Contact us</p>
		<p class="h4 text-weight-600">We would love to hear from you. Feel free to reach out using the below details.</p>
		<p>Clear Law LLP.</p>
		<div class="basic-list">
			<ul>
				<li><strong>Company Number:</strong> 0C308339</li>
				<li><strong>ICO Number:</strong> Z8717981</li>
				<li><strong>Address:</strong> Units 115-119 Timber Wharf, 42-50 Worsley Street, Manchester, M15 4LD</li>
				<li><strong>Hours:</strong> Mon - Fri 9:00AM - 5:00PM</li>
				<li><strong>Telephone number:</strong> 0161 873 2740</li>
				<li><strong>Email address:</strong> sales.leads@clearlawonline.co.uk</li>
			</ul>
		</div>
		
		
    `
	$("#privacy_policy_modal div.flex-container div.column").append(privacy_policy_modal_content);
	$("#cookie_policy_modal div.flex-container div.column").append(cookie_policy_modal_content);
	$("#complaints_procedure_modal div.flex-container div.column").append(complaints_procedure_modal_content);
	$("#contact_us_modal div.flex-container div.column").append(contact_us_modal_content);
	$("#fees_modal div.flex-container div.column").append(our_fees_content);
});