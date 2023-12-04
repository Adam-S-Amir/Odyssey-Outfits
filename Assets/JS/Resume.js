document.getElementById('Job-Select').addEventListener('change', function () {
    let selectedOption = this.options[this.selectedIndex];
    let selectedText = selectedOption.id;
    let selectedCategory = selectedOption.parentElement.id;
    const optgroup = selectedOption.closest("optgroup");

    let fileInputLabel = document.getElementById("fileInputLabel");
    let pdfViewer = document.getElementById('pdfViewer');
    let jobvalue = document.getElementById("job-value");
    let jobdesc = document.getElementById('job-desc');
    let jobform = document.getElementById("Job-Form");
    let desc = "<span id='Job-Description'></span><br><span class='focused job-desc'>";
    fileInputLabel.style.display = "block";
    if (selectedCategory === 'Upper-Management' && selectedText === 'Chief-Financial-Officer') {
        jobdesc.innerHTML = desc + "<span id='CFO'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Upper-Management' && selectedText === 'Chief-Executive-Officer') {
        jobdesc.innerHTML = desc + "<span id='CEO'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Upper-Management' && selectedText === 'Chief-Operating-Officer') {
        jobdesc.innerHTML = desc + "<span id='COO'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Lower-Management' && selectedText === 'Human-Resources') {
        jobdesc.innerHTML = desc + "<span id='HR'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Lower-Management' && selectedText === 'Regional-Manager') {
        jobdesc.innerHTML = desc + "<span id='RM'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Lower-Management' && selectedText === 'Office-Manager') {
        jobdesc.innerHTML = desc + "<span id='OM'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Sales-Department' && selectedText === 'Regional-Sales-Director') {
        jobdesc.innerHTML = desc + "<span id='RSD'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Sales-Department' && selectedText === 'Account-Executive') {
        jobdesc.innerHTML = desc + "<span id='AE'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Sales-Department' && selectedText === 'Salesman') {
        jobdesc.innerHTML = desc + "<span id='SM'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Financial-Department' && selectedText === 'Regional-Financial-Director') {
        jobdesc.innerHTML = desc + "<span id='RFD'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Financial-Department' && selectedText === 'Payroll-Administrator') {
        jobdesc.innerHTML = desc + "<span id='PA'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'Financial-Department' && selectedText === 'Financial-Analyst') {
        jobdesc.innerHTML = desc + "<span id='FA'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'IT-Department' && selectedText === 'Fullstack-Developer') {
        jobdesc.innerHTML = desc + "<span id='FD'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'IT-Department' && selectedText === 'Network-Administrator') {
        jobdesc.innerHTML = desc + "<span id='NA'></span>" + "</span>";
        show();
    } else if (selectedCategory === 'IT-Department' && selectedText === 'Help-Desk-Administrator') {
        jobdesc.innerHTML = desc + "<span id='HDA'></span>" + "</span>";
        show();
    } else {
        hide();
    }
    jobvalue.innerHTML = "<span id='Selected-Job'></span><br><span class='focused job-desc'>" + selectedOption.label.replace(/-/g, ' ') + "</span><br><span id='Department-Division'></span><br><span class='focused job-desc'>" + optgroup.label + "</span>";
    updateContent();

    function hide() {
        jobvalue.style.display = "none";
        fileInputLabel.style.display = "none";
        pdfViewer.style.display = "none";
        jobdesc.style.display = "none";
        jobform.style.display = "none"
    }

    function show() {
        jobvalue.style.display = "block";
        jobdesc.style.display = "block";
        jobform.style.display = "flex"
    }
});

document.getElementById('pdfInput').addEventListener('change', function (event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        document.getElementById('submit-resume').style.display = "block";
        document.getElementById('pdfViewer').style.display = "block";
        document.getElementById("fileInputLabel").style.display = "none";
        document.getElementById("Job-Select").disabled = true;
        reader.onload = function (e) {
            pdfViewer.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid PDF file.');
    }
});

function sendEmail() {
    let jobselect = document.getElementById("Job-Select");
    let selectedOption = jobselect.options[jobselect.selectedIndex];
    let selectedText = selectedOption.textContent;
    let selectedCategory = selectedOption.parentElement.label;
    let formname = document.getElementById("form-name").value;
    let formlname = document.getElementById("form-lname").value;
    let formemail = document.getElementById("form-email").value;
    var legalSelect = document.getElementById("form-legal");
    var educationSelect = document.getElementById("form-education");

    // Check if either option is not selected
    if (legalSelect.value === "No" || educationSelect.value === "No") {
        emailjs.send("service_swxg0ob", "template_yskewix", {
            to_name: `${formname} ${formlname}`,
            to_email: formemail,
            message: `
                Thank you for completing the application for the position of ${selectedText} in the ${selectedCategory} division at Odyssey Outfits!
                It seems you do not meet the qualifications needed to complete the application for the position of ${selectedText} in the ${selectedCategory} division.
                Unfortunately, we will not be able to review your application further.
            `,
        }).then(function (response) {
            confirmation();
            console.log("Email sent successfully:", response);
        }, function (error) {
            emailError();
            console.error("Email failed to send:", error);
        });
    } else {
        emailjs.send("service_swxg0ob", "template_yskewix", {
            to_name: `${formname} ${formlname}`,
            to_email: formemail,
            message: `
                Thank you for completing the application for the position of ${selectedText} in the ${selectedCategory} division at Odyssey Outfits!
                We will stay in touch with you as we review your application further.
            `,
        }).then(function (response) {
            confirmation();
            console.log("Email sent successfully:", response);
        }, function (error) {
            emailError();
            console.error("Email failed to send:", error);
        });
    }

    function confirmation() {
        let msg = [`
                    <h1 id='application-sent'>Application Sent!</h1>
                    <p id='received-application'>Thank you for submitting your application! We have received it successfully. Kindly anticipate an email notification regarding the status of your application as we progress through our thorough review process. We appreciate your patience and look forward to the possibility of working together.</p>
                `]

        window.toast({
            message: msg,
            btnmsg: "OK",
            action: () => location.reload(),
        })
    }

    function emailError() {
        let msg = [`
                    <h1 id='application-not-sent'>Application Not Sent!</h1>
                    <p id='not-received-application'>Thank you for submitting your application! It seems that we had an error sending the confirmation email, please try again soon.</p>
                `]

        window.toast({
            message: msg,
            btnmsg: "OK",
            action: () => location.reload(),
        })
    }

}
emailjs.init("pNW2vDHr-8gYtWcXy");
