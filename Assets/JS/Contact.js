// Function to handle sending email
function sendEmail() {
    // Get values from the form inputs
    let formname = document.getElementById("contact-name").value;
    let formemail = document.getElementById("contact-email").value;
    let formmessage = document.getElementById("contact-message").value;

    // Send email using EmailJS library
    emailjs.send("service_swxg0ob", "template_8goq7zi", {
        from_name: formname,
        from_email: formemail,
        message: `${formmessage}`,
    }).then(function (response) {
        // Display confirmation on successful email send
        confirmation();
        console.log("Email sent successfully:", response);
    }, function (error) {
        // Display error message on failed email send
        emailError();
        console.error("Email failed to send:", error);
    });
}

// Function to display a confirmation toast
function confirmation() {
    // HTML content for the confirmation message
    let msg = [`
            <h1 id='inquiry-sent'>Inquiry Sent!</h1>
            <p id='received-inquiry'>Thank you for submitting your inquiry! We have received it successfully. Kindly anticipate an email notification regarding the status of your inquiry.</p>
        `];

    // Display toast with confirmation message and reload action
    window.toast({
        message: msg,
        btnmsg: "OK",
        action: () => location.reload(),
    });
}

// Function to display an error toast
function emailError() {
    // HTML content for the error message
    let msg = [`
            <h1 id='inquiry-not-sent'>Inquiry Not Sent!</h1>
            <p id='not-received-inquiry'>Thank you for submitting your inquiry! It seems that we had an error sending the confirmation email, please try again soon.</p>
        `];

    // Display toast with error message and reload action
    window.toast({
        message: msg,
        btnmsg: "OK",
        action: () => location.reload(),
    });
}

// Initialize EmailJS library with API key
emailjs.init("pNW2vDHr-8gYtWcXy");
