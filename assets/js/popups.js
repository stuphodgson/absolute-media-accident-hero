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


	// Privacy policy content
	var privacy_policy_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Privacy Policy</p>
		
		<p class="h5">About This Privacy Policy</p>
		<p class="h6">Compensation Gurus is a trading name of Accell Digital Limited, a company registered in England and Wales.</p>
		<p class="h6">Registered Address: 7 Bell Yard, London, WC2A 2JR</p>
		<p class="h6">Company Number: 13539012</p>
		<p class="h6">VAT Number: 389529826</p>
		<p class="h6">ICO Registration Number: ZB239690</p>
		<p class="h6">FCA Firm Reference Number: FRN964366</p>
		<p>This policy outlines how we collect, use, and protect your personal information. Accell Digital is committed to maintaining your privacy and ensuring your data is handled in compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.</p>
		<p class="h5">Who We Are</p>
		<p>Accell Digital Limited is the Data Controller for the purposes of data protection laws. If you have any questions about this policy or your data, please contact us at:</p>
		<p>hello@accelldigital.co.uk</p>
		<p>Accell Digital Ltd, 7 Bell Yard, London, WC2A 2JR</p>

		<p class="h5">Information We Collect</p>
		<p class="h6">We may collect and process the following personal data:</p>
		<div class="basic-list">
			<ul>
				<li>Name</li>
				<li>Date of birth</li>
				<li>Contact details (email, phone number, address)</li>
				<li>Job title and profession</li>
				<li>Demographic information (postcode, preferences, interests)</li>
				<li>IP address and browser information (automatically collected)</li>
				<li>Claim-related data including medical or housing conditions, incident details, supporting evidence (photos/documents)</li>
			</ul>
		</div>

		<p class="h5">How We Use Your Data</p>
		<p class="h6">We use your data to:</p>
		<div class="basic-list">
			<ul>
				<li>Provide and improve our services</li>
				<li>Assess your eligibility for a legal claim</li>
				<li>Match you with an appropriate solicitor or legal provider</li>
				<li>Respond to your enquiries</li>
				<li>Keep internal records</li>
				<li>Send service communications</li>
			</ul>
		</div>
		<p class="h6">With your consent, we may also:</p>
		<div class="basic-list">
			<ul>
				<li>Send you marketing or promotional content about our services or those of trusted third parties (e.g. solicitors)</li>
				<li>Contact you via phone or email about related services</li>
			</ul>
		</div>

		<p class="h5">Legal Basis for Processing</p>
		<p class="h6">We rely on one or more of the following lawful bases:</p>
		<div class="basic-list">
			<ul>
				<li>Consent – when you opt-in to marketing or agree to be contacted by a solicitor</li>
				<li>Performance of a contract – to assess and refer your enquiry or claim</li>
				<li>Legitimate interests – for internal processing and service improvement</li>
				<li>Legal obligation – to comply with applicable laws and regulatory requirements</li>
			</ul>
		</div>

		<p class="h5">Sharing Your Information</p>
		<p class="h6">We may share your data with:</p>
		<div class="basic-list">
			<ul>
				<li>Our panel of third-party solicitors, who will assess your claim and may contact you directly</li>
				<li>IT and CRM providers that help deliver our services</li>
				<li>Payment providers, if necessary for processing transactions</li>
				<li>Regulators or law enforcement, when legally required</li>
			</ul>
		</div>
		<p class="h6">All third-party partners are bound by data protection obligations and will only use your information as instructed by us.</p>

		<p class="h5">Transfers Outside the UK or EEA</p>
		<p>If your data is transferred outside the UK or European Economic Area (EEA), we will ensure it is protected by appropriate safeguards, such as Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner or EU Commission.</p>

		<p class="h5">Data Retention</p>
		<p class="h6">We retain your data only as long as necessary to:</p>
		<div class="basic-list">
			<ul>
				<li>Provide our services</li>
				<li>Fulfil legal and regulatory obligations</li>
				<li>Resolve disputes</li>
			</ul>
		</div>
		<p class="h6">Typically, this is up to 6 years after our relationship ends, unless a longer retention period is required by law.</p>

		<p class="h5">Your Rights</p>
		<p class="h6">You have the right to:</p>
		<div class="basic-list">
			<ul>
				<li>Access the personal data we hold about you</li>
				<li>Correct inaccurate or incomplete data</li>
				<li>Request deletion of your data, where legally applicable</li>
				<li>Restrict or object to our processing</li>
				<li>Transfer your data to another provider</li>
				<li>Withdraw consent at any time (e.g. for marketing)</li>
				<li>Complain to the Information Commissioner’s Office (ICO) at www.ico.org.uk</li>
			</ul>
		</div>
		<p class="h6">To exercise your rights, contact us at hello@accelldigital.co.uk.</p>

		<p class="h5">Marketing and Communications</p>
		<p class="h6">With your consent, we may contact you via:</p>
		<div class="basic-list">
			<ul>
				<li>Email</li>
				<li>SMS</li>
				<li>Telephone</li>
			</ul>
		</div>
		<p class="h6">If you no longer wish to receive marketing, you may:</p>
		<div class="basic-list">
			<ul>
				<li>Click "unsubscribe" in any email</li>
				<li>Contact us at hello@accelldigital.co.uk</li>
			</ul>
		</div>
		<p class="h6">We will never sell your data to third parties.</p>

		<p class="h5">Cookies and Tracking</p>
		<p class="h6">We use cookies and similar technologies to:</p>
		<div class="basic-list">
			<ul>
				<li>Improve your website experience</li>
				<li>Analyse traffic</li>
				<li>Personalise content and ads</li>
			</ul>
		</div>
		<p class="h6">For more detail, please see our Cookie Policy or change your browser settings to manage cookies.</p>

		<p class="h5">Changes to This Policy</p>
		<p class="h6">We may update this policy from time to time. The most recent version will always be available on our website and we encourage you to review it periodically.</p>

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
			<strong>Compensation Gurus</strong><br />
			7 Bell Yard, London WC2A 2JR<br />
			United Kingdom<br />
			Website: [URL]<br />
			Email: [EMAIL]]<br />
			Phone number: 020 7126 8245
		</p>
		<p>This Cookie Policy was synchronised with cookiedatabase.org on 23/01/2023</p>
    `





	// Complaints procedure content
	var complaints_procedure_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Complaints procedure</p>
		<p class="h4 text-weight-600">We believe that if you wish to make a complaint or register a concern you should be able to do that quickly and easily.</p>
		<p>As part of our values we understand that we will make mistakes and we use these to learn and get better at our jobs. Any feedback you provide is welcomed. We take complaints seriously and rely on open and honest communication to ensure that you get your complaint resolved in a satisfactory and timely manner.</p>
		<p class="h5">Purpose</p>
		<p>The purpose of this policy is to ensure that if you wish to complain about the service you receive you should understand how to do so, how quickly your complaint will be investigated and the timescales for receiving a resolution.</p>
		<p class="h5">Informal resolution process</p>
		<p>We are confident that an open and positive discussion will resolve the majority of problems swiftly. If you are dissatisfied with the service you have received, please raise your concerns with the person handling your case first, either by phone or in writing. If necessary, a manager will investigate your complaint and attempt to resolve your complaint.</p>
		<p>If this is not possible, please write to the Accell Digital Limited at:</p>
		<p>
			7 Bell Yard, London WC2A 2JR<br />
			Hello@accelldigital.co.uk<br />
			020 7126 8245
		</p>
		<p class="h5">Formal resolution process</p>
		<p class="h6">Stage one</p>
		<p>Within two working days of receiving your complaint, we will send you a letter acknowledging receipt and providing a copy of this procedure. We will arrange for a thorough investigation of your complaint.</p>
		<p>Within four weeks of the date of the acknowledgement letter, you will receive a detailed written response to your complaint, including any suggestions for resolving the issue.</p>
		<p class="h6">Stage two</p>
		<p>If your complaint remains unresolved, you may report it to Emma Hindz, our Managing Director.</p>
		<p>Emma will review your case and write to you within four weeks of receiving your review request, confirming our final decision on your complaint and explaining our reasoning.</p>
		<p>If your complaint has not been resolved, you may contact the Legal Ombudsman. They will investigate your complaint independently, and their findings will have no affect on how we handle your case. Before accepting a complaint for investigation, the Legal Ombudsman will ensure that you have first attempted to resolve it with us. Any complaint to the Legal Ombudsman must normally be submitted within six months of our final decision on your complaint and no later than six years from the date of the act/omission - or three years from when you should have reasonably understood there was a basis for complaint. The Legal Ombudsman's contact information is as follows:</p>
		<p>PO Box 6806, Wolverhampton, WV1 9WJ. Telephone: 0300 555 0333. Overseas callers should telephone on +44 121 245 3050. Minicom users should contact on 0300 555 1777. Alternatively, you can email them at enquiries@legalombudsman.org.uk. You'll find the further information on the Legal Ombudsman website.</p>
	`





	// Contact us content
	var contact_us_modal_content =
		`
		<div class="logo">
			<img src="assets/img/logo.png" alt="" />
		</div>
		<p class="h2">Contact us</p>
		<p class="h4 text-weight-600">We would love to hear from you. Feel free to reach out using the below details.</p>
		<p>Compensation Gurus is a Trading Name under Accell Digital Limited.</p>
		<div class="basic-list">
			<ul>
				<li><strong>Company Number:</strong> 13539012</li>
				<li><strong>VAT Number:</strong> 389529826</li>
				<li><strong>ICO Number:</strong> ZB239690</li>
				<li><strong>Address:</strong> 7 Bell Yard, London WC2A 2JR</li>
				<li><strong>Hours:</strong> Mon - Fri 9:00AM - 5:00PM</li>
				<li><strong>Telephone number:</strong> 020 7126 8245</li>
				<li><strong>Email address:</strong> hello@compensationgurus.co.uk</li>
			</ul>
		</div>
		<p>You can find all our information on our websites:</p>
		<div class="basic-list">
			<ul>
				<li>compensationgurus.co.uk</li>
				<li>accelldigital.co.uk</li>
			</ul>
		</div>
    `
	$("#privacy_policy_modal div.flex-container div.column").append(privacy_policy_modal_content);
	$("#cookie_policy_modal div.flex-container div.column").append(cookie_policy_modal_content);
	$("#complaints_procedure_modal div.flex-container div.column").append(complaints_procedure_modal_content);
	$("#contact_us_modal div.flex-container div.column").append(contact_us_modal_content);
});