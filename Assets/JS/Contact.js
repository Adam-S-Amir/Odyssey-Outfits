function sendEmail() {
    let formname = document.getElementById("contact-name").value;
    let formemail = document.getElementById("contact-email").value;
    let formmessage = document.getElementById("contact-message").value;

    //* Check if either option is not selected
    //* Send confirmation email
    emailjs.send("service_swxg0ob", "template_8goq7zi", {
        from_name: formname,
        from_email: formemail,
        message: `${formmessage}`,
    }).then(function (response) {
        confirmation();
        console.log("Email sent successfully:", response);
    }, function (error) {
        emailError();
        console.error("Email failed to send:", error);
    });
}

//* Function to display a confirmation toast
function confirmation() {
    let msg = [`
            <h1 id='inquiry-sent'>Inquiry Sent!</h1>
            <p id='received-inquiry'>Thank you for submitting your inquiry! We have received it successfully. Kindly anticipate an email notification regarding the status of your inquiry.</p>
        `]

    window.toast({
        message: msg,
        btnmsg: "OK",
        action: () => location.reload(),
    })
}

//* Function to display an error toast
function emailError() {
    let msg = [`
            <h1 id='inquiry-not-sent'>Inquiry Not Sent!</h1>
            <p id='not-received-inquiry'>Thank you for submitting your inquiry! It seems that we had an error sending the confirmation email, please try again soon.</p>
        `]

    window.toast({
        message: msg,
        btnmsg: "OK",
        action: () => location.reload(),
    })
}
emailjs.init("pNW2vDHr-8gYtWcXy");