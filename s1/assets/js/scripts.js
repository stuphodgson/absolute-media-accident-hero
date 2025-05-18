$(document).ready(function () {
	// Initialize validation flags
	$('input[name="validate_telephone_number"]').val('false');
	$('input[name="validate_email_address"]').val('false');
	
	// Add click handler for email validation on submit button
	$('#submit-button').click(function(e) {
		// Get the email value
		var email = $('input[name="email_address"]').val();
		
		// Only validate if email has a value
		if (email && email.length > 2) {
			// Prevent default form submission until validation completes
			e.preventDefault();
			
			// Set flag to indicate validation was triggered by submit button
			window.emailValidationTriggeredBySubmit = true;
			
			// Show loading indicator if needed
			// $('.email-validating').show();
			
			// Call the email validation function
			cleanse_email_address(email);
		}
	});

	// Viewport bubbles
	if (window.location.href.indexOf('localhost') > -1) {
		$('span.viewport').css('display', 'block');
	} else {
		$('span.viewport').css('display', 'none');
	}

	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if(results){
		return results[1] || 0;
		}
	}



	// Smooth scroll
	var anchor_link = $('html, body');
	$('a[href^="#"]').click(function () {
		anchor_link.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 30
		}, 600);
		return false;
	});





	// Remove enter
	$(window).keydown(function (event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});





	// Replace +44
	function cleanNumber(telNumber) {
		if (telNumber.length > 4) {
			telNumber = telNumber.replace(/\D/g, '');
			if (telNumber.startsWith('44')) {
				telNumber = telNumber.replace(/^.{2}/g, '0');
			} else if (telNumber.startsWith('0044')) {
				telNumber = telNumber.replace(/^.{4}/g, '0');
			}
		}
		return telNumber
	}
	$('input[name="telephone_number"]').blur(function () {
		$(this).val(cleanNumber($(this).val()))
	});
	const affid = $.urlParam('affid');
	if(affid) {
		$('input[name="affid"]').val(affid);
	} else {
		$('input[name="affid"]').val('direct');
	}

	const campaign = $.urlParam('campaign');
	if(campaign) {
		$('input[name="campaign"]').val(campaign);
	}
	const transaction_id = $.urlParam('transaction_id');
    if(transaction_id) {
        $('input[name=transaction_id]').val(transaction_id);
    }
	
	$('form').on('submit', function(event) {
		const test = $.urlParam('test');
		window.location=`thank-you.html`
		return false;
		if(test) {
			var submitUrl = 'http://127.0.0.1:3000/leads/new'
		} else {
			var submitUrl = 'https://leads.accelldigital.co.uk/leads/new-lp-lead'
		}
		var formValues = $('form').serializeArray();
		const json = {};
		  $.each(formValues, function () {
			json[this.name] = this.value || "";
		  });
		event.preventDefault();
		$.ajax({
			url: submitUrl,
			type: 'POST',
			data: json,
			headers: {
				
			},
			success: function(result) {
				console.log(result)
				if(result.message == 'OK') {
					window.location=`thank-you.html?id=${result.id}`
				}
			}
		});
	})

	
	// Time of day
	var thehours = new Date().getHours();
	var themessage;
	var morning = ('morning');
	var afternoon = ('afternoon');
	var evening = ('evening');
	if (thehours >= 0 && thehours < 12) {
		themessage = morning;
	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;
	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}
	$('.greeting').append(themessage);





	// Basic accordion
	$('.accordion-tab').click(function () {
		$(this).next().toggle();
		$('.accordion-content').not($(this).next()).hide();
		$(this).toggleClass('active');
		$('.accordion-tab').not($(this)).removeClass('active');
	});





	function letters_only(name) {
		var formatted_name = name.replace(/[^a-z-]/gi, '');
		var capitalise_name = formatted_name.charAt(0).toUpperCase() + formatted_name.slice(1);
		return capitalise_name;
	}
	$('input[name="fname"]').keyup(function () {
		$('input[name="fname"]').val(letters_only($(this).val()));
		$('.fname_pull').text(letters_only($(this).val()));
	});
	$('input[name="lname"]').keyup(function () {
		$('input[name="lname"]').val(letters_only($(this).val()));
	});





	// Accident type variable
	$('input[name="accident_type"]').click(function () {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('html, body').animate({
				scrollTop: $('input[name="accident_type"]').closest('.field').next('.field').offset().top - 120
			}, 400);
		}
		if ($('#accident_type_1').is(':checked')) {
			// Work accident
			$('.accident_variable').text('accident at work');
		} else if ($('#accident_type_2').is(':checked')) {
			// Road accident
			$('.accident_variable').text('road accident');
		} else if ($('#accident_type_3').is(':checked')) {
			// Slip, trip or fall
			$('.accident_variable').text('slip, trip or fall');
		} else if ($('#accident_type_4').is(':checked')) {
			// Medical negligence
			$('.accident_variable').text('medical negligence');
		}
	});




	// Add event listeners for radio buttons
	$('input[name="accident_time"]').change(function() {
		var thisInput = $(this);
		var thisField = thisInput.closest('.field');
		
		// Check if the selected value is valid (less than 2.5 years ago)
		if ($(this).val() == 1) {
			// Valid answer
			thisField.removeClass('field-error');
			thisField.find('.error').hide();
			validate_all_fields();
		} else {
			// Invalid answer - show error
			thisField.addClass('field-error');
			thisField.find('.error').show();
			submit_not_valid();
		}
	});
	
	$('input[name="accident_type"]').change(function() {
		var thisField = $(this).closest('.field');
		thisField.removeClass('field-error');
		thisField.find('.error').hide();
		validate_all_fields();
	});
	
	$('input[name="accident_medical_attention"]').change(function() {
		var thisInput = $(this);
		var thisField = thisInput.closest('.field');
		
		// Check if the selected value is valid (received medical attention)
		if ($(this).val() == 'true') {
			// Valid answer
			thisField.removeClass('field-error');
			thisField.find('.error').hide();
			validate_all_fields();
		} else {
			// Invalid answer - show error
			thisField.addClass('field-error');
			thisField.find('.error').show();
			submit_not_valid();
		}
	});
	
	// Legacy form questions code for multi-step form
	$('#step_1 input').click(function () {
		var thisInput = $(this);
		var thisField = thisInput.closest('.field');

		// If this field already has an error and inputs are disabled, do nothing.
		if (thisField.hasClass('has-error')) {
			return false;
		}

		$(this).closest('.step').find('.loading-step').show();
		var a = $(this).val()
		setTimeout(function () {
			if (a == 1) {
				// Correct answer
				thisField.removeClass('has-error'); // Remove error class if previously set (e.g., during validation)
				thisField.find('.error').hide(); // Hide error message
				show_step_2();
			} else {
				// Incorrect answer
				thisInput.closest('.step').find('.loading-step').hide();
				var errorField = $('input[name="accident_time"]').closest('.field');
				errorField.find('.error').show();
				errorField.addClass('has-error'); // Add a class to mark the field
				// Disable all radio buttons within this specific field
				errorField.find('input[type="radio"]').prop('disabled', true);
				return false;
			}
		}, 600);
	});
	$('#step_2 input').click(function () {
		var thisInput = $(this);
		var thisField = thisInput.closest('.field');
		var stepElement = thisInput.closest('.step');
		var medicalAttentionField = $('input[name="accident_medical_attention"]').closest('.field');

		// First, check if the specific field clicked is already disabled. If so, do nothing.
		if (thisField.hasClass('has-error') && thisField.find('input[type="radio"]').prop('disabled')) {
			return false; // Stop if this field is locked
		}

		// --- Let the click register visually ---
		// Now, check the overall state AFTER the click might have changed the selection.

		// Check if ALL required fields in this step have a selection
		var all_required_filled = true;
		stepElement.find('.required').each(function () {
			// If any required field doesn't have a checked input within it...
			if ($(this).find('input:checked').length === 0) {
				all_required_filled = false;
				return false; // Exit the .each() loop early
			}
            // If a field was previously marked with an error (e.g. the medical one)
            // but is now being clicked with a valid value (although this condition won't be met for medical)
            // or if any other required field is clicked, ensure its error is hidden.
            // We handle the specific medical error logic below.
            if (!$(this).is(medicalAttentionField)) {
                $(this).removeClass('has-error').find('.error').hide();
            }
		});

		// If all required fields are now filled...
		if (all_required_filled) {
            stepElement.find('.loading-step').show(); // Show loading as we are processing the final state

			// Check the medical attention field specifically
			if ($('#accident_medical_attention_1').is(':checked')) {
				// CORRECT answer for medical attention
				medicalAttentionField.removeClass('has-error').find('.error').hide(); // Ensure no error shown

				// Proceed to next step after a delay
				setTimeout(function () {
					show_step_4();
				}, 600);
			} else {
				// INCORRECT answer for medical attention
				stepElement.find('.loading-step').hide(); // Hide loading

                // Show error and disable only the medical attention field
				medicalAttentionField.find('.error').show();
				medicalAttentionField.addClass('has-error');
				medicalAttentionField.find('input[type="radio"]').prop('disabled', true);
                // No need to return false, the field is now disabled.
			}
		} else {
			// Not all required fields are filled yet.
            stepElement.find('.loading-step').hide(); // Ensure loading is hidden
			// Do nothing else, allow the user to continue filling out the step.
		}
	});
	$('#step_2 .previous').click(function () {
		show_step_1();
	});
	$('#step_3 input').click(function () {
		$(this).closest('.step').find('.loading-step').show();
		setTimeout(function () {
			show_step_4();
		}, 600);
	});
	$('#step_3 .previous').click(function () {
		show_step_2();
	});
	$('#step_4 .previous').click(function () {
		show_step_3();
	});
	$('.submit').click(function () {
		$('#step_4 .loading-step').show();
		setTimeout(function () {
			$('#step_4 .loading-step').hide();
		}, 3500);
	});




	// Form functions
	function show_step_1() {
		$('.step').hide();
		$('#step_1').show();
		$('.form_hide').show();
		$('.loading-step').hide();
		scroll_to_top();
	}
	function show_step_2() {
		$('.step').hide();
		$('#step_2').show();
		$('.form_hide').hide();
		$('.loading-step').hide();
		setTimeout(function () {
			$('#step_2 .progress-bar div').css('width', '50%');
		}, 60);
		scroll_to_top();
	}
	function show_step_3() {
		$('.step').hide();
		$('#step_3').show();
		$('.loading-step').hide();
		setTimeout(function () {
			$('#step_3 .progress-bar div').css('width', '75%');
		}, 60);
		scroll_to_top();
	}
	function show_step_4() {
		$('.step').hide();
		$('#step_4').show();
		$('.loading-step').hide();
		$('#step_4 .claim_amount').text('');
		if ($('#injury_type_1').is(':checked')) {
			// Head
			$('.injury_variable').text('your head');
			localStorage.setItem('injury_variable', 'your head');
			$('#step_4 .claim_amount_1').text('403990');
			$('#step_4 .claim_amount_2').text('403990');
			localStorage.setItem('claim_amount', '403990');
		} else if ($('#injury_type_2').is(':checked')) {
			// Upper body
			$('.injury_variable').text('your upper body');
			localStorage.setItem('injury_variable', 'your upper body');
			$('#step_4 .claim_amount_1').text('160980');
			$('#step_4 .claim_amount_2').text('160980');
			localStorage.setItem('claim_amount', '160980');
		} else if ($('#injury_type_3').is(':checked')) {
			// Lower body
			$('.injury_variable').text('your lower body');
			localStorage.setItem('injury_variable', 'your lower body');
			$('#step_4 .claim_amount_1').text('282010');
			$('#step_4 .claim_amount_2').text('282010');
			localStorage.setItem('claim_amount', '282010');
		} else if ($('#injury_type_4').is(':checked')) {
			// Internal organs
			$('.injury_variable').text('your internal organs');
			localStorage.setItem('injury_variable', 'your internal organs');
			$('#step_4 .claim_amount_1').text('160980');
			$('#step_4 .claim_amount_2').text('160980');
			localStorage.setItem('claim_amount', '160980');
		} else if ($('#injury_type_5').is(':checked')) {
			// Multiple body parts
			$('.injury_variable').text('multiple parts of your body');
			localStorage.setItem('injury_variable', 'multiple parts of your body');
			$('#step_4 .claim_amount_1').text('403990');
			$('#step_4 .claim_amount_2').text('403990');
			localStorage.setItem('claim_amount', '403990');
		} else if ($('#injury_type_6').is(':checked')) {
			// Psychological damage
			$('.injury_variable').text('psychological damage');
			localStorage.setItem('injury_variable', 'psychological damage');
			$('#step_4 .claim_amount_1').text('403990');
			$('#step_4 .claim_amount_2').text('403990');
			localStorage.setItem('claim_amount', '403990');
		}
		scroll_to_top();
	}
	// Validate all form fields
	var form_valid = false;
	function validate_all_fields() {
		console.log('Validate All Fields');
		
		// Check if accident time is valid (less than 2.5 years ago)
		var validAccidentTime = $('input[name="accident_time"]:checked').length > 0 && 
							  $('input[name="accident_time"]:checked').val() == 1;
		
		// Check if accident type is selected
		var validAccidentType = $('input[name="accident_type"]:checked').length > 0;
		
		// Check if medical attention is valid (received medical attention)
		var validMedicalAttention = $('input[name="accident_medical_attention"]:checked').length > 0 && 
								$('input[name="accident_medical_attention"]:checked').val() == 'true';
		
		// Check personal details
		var validTitle = $('select[name="title"]').val() ? true : false;
		var validFirstName = $('input[name="fname"]').val().length > 1;
		var validLastName = $('input[name="lname"]').val().length > 1;
		
		// Check contact details with validation flags
		var validPhone = $('input[name="telephone_number"]').val().length > 10 && 
						$('input[name="validate_telephone_number"]').val() == 'true';
		
		var validEmail = $('input[name="email_address"]').val().length > 2 && 
					   $('input[name="validate_email_address"]').val() == 'true';
		
		// Log validation status for debugging
		console.log('Validation Status:', {
			accidentTime: validAccidentTime,
			accidentType: validAccidentType,
			medicalAttention: validMedicalAttention,
			title: validTitle,
			firstName: validFirstName,
			lastName: validLastName,
			phone: validPhone,
			email: validEmail
		});
		
		// Enable submit button if all fields are valid
		if (validAccidentTime && 
			validAccidentType && 
			validMedicalAttention && 
			validTitle && 
			validFirstName && 
			validLastName && 
			validPhone && 
			validEmail) {
			submit_valid();
		} else {
			submit_not_valid();
		}
	}
	// Title
	$('select[name="title"]').change(function () {
		if ($('select[name="title"]').val()) {
			$('select[name="title"]').closest('.field').removeClass('field-error');
			$('select[name="title"]').closest('.field').find('.error').hide();
			validate_all_fields();
		}
	});
	// First name
	$('input[name="fname"]').on('input focusout', function () {
		if ($('input[name="fname"]').val().length > 1) {
			$('input[name="fname"]').closest('.field').removeClass('field-error');
			$('input[name="fname"]').closest('.field').find('.error').hide();
			validate_all_fields();
		} else if ($(this).is(':focus') === false) { // Only show error if not focused
			$('input[name="fname"]').closest('.field').addClass('field-error');
			$('input[name="fname"]').closest('.field').find('.error').show();
			scroll_to_first_error();
			submit_not_valid();
		}
	});
	// Last name
	$('input[name="lname"]').on('input focusout', function () {
		if ($('input[name="lname"]').val().length > 1) {
			$('input[name="lname"]').closest('.field').removeClass('field-error');
			$('input[name="lname"]').closest('.field').find('.error').hide();
			validate_all_fields();
		} else if ($(this).is(':focus') === false) { // Only show error if not focused
			$('input[name="lname"]').closest('.field').addClass('field-error');
			$('input[name="lname"]').closest('.field').find('.error').show();
			scroll_to_first_error();
			submit_not_valid();
		}
	});
	// telephone_number
	$('input[name="telephone_number"]').on('input focusout', function () {
		if ($('input[name="telephone_number"]').val().length > 10) {
			$('input[name="telephone_number"]').closest('.field').removeClass('field-error');
			$('input[name="telephone_number"]').closest('.field').find('.error').hide();
			$('input[name="validate_telephone_number"]').val('true'); // Set to true for validation
			validate_all_fields();
		} else if ($(this).is(':focus') === false) { // Only show error if not focused
			$('input[name="telephone_number"]').closest('.field').addClass('field-error');
			$('input[name="telephone_number"]').closest('.field').find('.error').show();
			$('input[name="validate_telephone_number"]').val('');
			scroll_to_first_error();
			submit_not_valid();
		}
	});
	// Email address
	$('input[name="email_address"]').on('input focusout', function () {
		var email_validation_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if ($('input[name="email_address"]').val().length > 2) {
			if (email_validation_regex.test($(this).val())) {
				$('input[name="email_address"]').closest('.field').removeClass('field-error');
				$('input[name="email_address"]').closest('.field').find('.error').hide();
				$('input[name="validate_email_address"]').val('true'); // Set to true for validation
				validate_all_fields();
			} else if ($(this).is(':focus') === false) { // Only show error if not focused
				$('input[name="email_address"]').closest('.field').addClass('field-error');
				$('input[name="email_address"]').closest('.field').find('.error').show();
				$('input[name="validate_email_address"]').val('');
				scroll_to_first_error();
				submit_not_valid();
			}
		} else if ($(this).is(':focus') === false) { // Only show error if not focused
			$('input[name="email_address"]').closest('.field').addClass('field-error');
			$('input[name="email_address"]').closest('.field').find('.error').show();
			$('input[name="validate_email_address"]').val('');
			scroll_to_first_error();
			submit_not_valid();
		}
	});
	// Cleanse telephone number
	function cleanse_telephone_number(telephoneNumber) {
		$('input[name="validate_telephone_number"]').val('');
		var phonevalidation = new data8.phonevalidation();
		phonevalidation.isvalid(
			telephoneNumber,
			'GB',
			[
				new data8.option('RequiredCountry', ''),
				new data8.option('AllowedPrefixes', ''),
				new data8.option('BarredPrefixes', ''),
				new data8.option('TreatUnavailableMobileAsInvalid', 'false'),
				new data8.option('ExcludeUnlikelyNumbers', 'false'),
				new data8.option('DefaultFormatType', 'National'),
				new data8.option('DifferentFormatCountries', '44'),
				new data8.option('DifferentFormatType', 'National'),
				new data8.option('UseLocalFormatting', 'true'),
				new data8.option('EndUserIPAddress', '')
			],
			show_cleansed_telephone_number
		);
	}
	function show_cleansed_telephone_number(result) {
		console.log('Telephone Number', result);
		if (result.Status.Success === false) {
			$('input[name="telephone_number"]').closest('.field').addClass('field-error');
			$('input[name="telephone_number"]').closest('.field').find('.error').show();
			$('input[name="validate_telephone_number"]').val('');
			scroll_to_first_error();
			submit_not_valid();
			return false;
		}
		if (result.Result.ValidationResult === 'Invalid') {
			$('input[name="telephone_number"]').closest('.field').addClass('field-error');
			$('input[name="telephone_number"]').closest('.field').find('.error').show();
			$('input[name="validate_telephone_number"]').val('');
			scroll_to_first_error();
			submit_not_valid();
		} else {
			$('input[name="validate_telephone_number"]').val('true');
			step_4_validate_all();
		}
	}
	// Cleanse email address function
	function cleanse_email_address(email) {
		$('input[name="validate_email_address"]').val('');
		console.log('Validating email:', email);
		
		// Send POST request to validate email
		$.ajax({
			url: 'https://mortgagedealswitcher.co.uk/checkEmail', // Replace with your actual validation endpoint
			type: 'POST',
			dataType: 'json',
			data: { v: email },
			success: function(response) {
				show_cleansed_email_address(response);
			},
			error: function(xhr, status, error) {
				console.error('Email validation error:', error);
				// If validation service fails, fall back to regex validation
				var email_validation_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (email_validation_regex.test(email)) {
					$('input[name="validate_email_address"]').val('true');
					validate_all_fields();
				} else {
					$('input[name="validate_email_address"]').val('');
					$('input[name="email_address"]').closest('.field').addClass('field-error');
					$('input[name="email_address"]').closest('.field').find('.error').show();
					scroll_to_first_error();
					submit_not_valid();
				}
			}
		});
	}
	function show_cleansed_email_address(result) {
		console.log('Email Address', result);
		// Hide any loading indicators
		// $('.email-validating').hide();
		
		// Assuming the API returns isValid and suggestedEmail fields
		if (result.isValid === false) {
			$('input[name="email_address"]').closest('.field').addClass('field-error');
			$('input[name="email_address"]').closest('.field').find('.error').show();
			$('input[name="validate_email_address"]').val('');
			scroll_to_first_error();
			submit_not_valid();
			
			// If there's a suggested email correction
			if (result.suggestedEmail) {
				$('input[name="email_address"]').closest('.field').find('.error').hide();
				$('input[name="email_address"]').closest('.field').find('.email_validation_error').show();
				$('input[name="email_address"]').closest('.field').find('.email_validation_error .suggested_fix_conditional').show();
				$('input[name="email_address"]').closest('.field').find('.email_validation_error .suggested_fix_apply').show();
				
				// Display suggestion message
				$('.email_validation_error .suggested_fix').text(result.message || 'Did you mean ' + result.suggestedEmail + '?');
				
				// Handle click on suggested fix
				$('.email_validation_error .suggested_fix_apply').click(function () {
					$('input[name="email_address"]').closest('.field').removeClass('field-error');
					$('input[name="email_address"]').closest('.field').find('.email_validation_error').hide();
					$('input[name="email_address"]').val(result.suggestedEmail);
					$('input[name="validate_email_address"]').val('true');
					step_4_validate_all();
				});
			} else {
				$('input[name="email_address"]').closest('.field').find('.email_validation_error').hide();
				$('input[name="email_address"]').closest('.field').find('.email_validation_error .suggested_fix_conditional').hide();
				$('input[name="email_address"]').closest('.field').find('.email_validation_error .suggested_fix_apply').hide();
				
				// Display error message if provided
				if (result.message) {
					$('.email_validation_error .suggested_fix').text(result.message);
				}
			}
		} else {
			$('input[name="validate_email_address"]').val('true');
			step_4_validate_all();
			
			// Email is valid, proceed with form submission if it was triggered by submit button
			if (window.emailValidationTriggeredBySubmit) {
				window.emailValidationTriggeredBySubmit = false;
				
				// If form is valid, submit it
				if (form_valid) {
					// Trigger the form submission
					$('form').submit();
				}
			}
		}
	}
	function submit_valid() {
		// Store first name for display if needed
		if ($('input[name="fname"]').val()) {
			localStorage.setItem('fname', $('input[name="fname"]').val());
		}
		
		// Set form valid flag
		form_valid = true;
		
		// Enable and style the submit button
		$('#submit-button').prop('disabled', false);
		$('#submit-button').css('opacity', '1');
		$('#submit-button').css('cursor', 'pointer');
		
		// For legacy multi-step form
		$('#step_4 .loading-step').hide();
		$('.form-valid').removeClass('hide');
		$('.form-invalid').addClass('hide');
		$('.claim_amount_3').text(localStorage.getItem('claim_amount'));
		$('.submit').prop('disabled', false);
		
		console.log('Form is valid - submit button enabled');
	}
	
	function submit_not_valid() {
		// Set form valid flag
		form_valid = false;
		step_4_valid = false;
		
		// Disable and style the submit button
		$('#submit-button').prop('disabled', true);
		$('#submit-button').css('opacity', '0.5');
		$('#submit-button').css('cursor', 'not-allowed');
		
		// For legacy multi-step form
		$('#step_4 .loading-step').hide();
		$('.form-valid').addClass('hide');
		$('.form-invalid').removeClass('hide');
		$('.claim_amount_3').text('');
		$('.submit').prop('disabled', true);
		
		console.log('Form is not valid - submit button disabled');
	}
	function scroll_to_first_error() {
		$('html, body').animate({
			scrollTop: $('.field-error').first().offset().top - 120
		}, 0);
	}
	function scroll_to_top() {
		$('html, body').animate({
			scrollTop: $('#reset').offset().top - 0
		}, 600);
	}
});