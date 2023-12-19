function ShowJobInfo(element) {
    let elementID = element.id;
    let stringWithoutDash = elementID.replace(/-/g, '');
    let stringWithoutLowercase = stringWithoutDash.replace(/[a-z]/g, '');
    let value = element.getAttribute('data-value');
    let JobSelected = document.getElementById("Job-Selected");
    let DepartmentDivisionSelected = document.getElementById("Department-Division-Selected");
    let DescriptionSelected = document.getElementById("Description-Selected");
    let KeyResponsibilitiesSelected = document.getElementById("Key-Responsibilities-Selected");
    let KRS = `Key-Responsibilities-${stringWithoutLowercase}`;
    const JobAbout = document.getElementById("Job-About");
    JobAbout.scrollIntoView();
    JobSelected.innerHTML = `<span class='focused job-desc' aria-describedby="${elementID}"></span>`;
    DepartmentDivisionSelected.innerHTML = `<span class='focused job-desc' aria-describedby="${value}"></span>`;
    DescriptionSelected.innerHTML = `<span id="${stringWithoutLowercase}"></span>`;
    KeyResponsibilitiesSelected.innerHTML = `<ul id="${KRS}"></ul>`;
    updateContent();
}

document.getElementById('Job-Select').addEventListener('change', function () {
    //^ This event listener is fired when the user selects a job or a new jon.
    //! Basically if the user interacts with the select element,
    //! All the code below will be executed,
    //! depending on the conditionals

    //* Initialize the variables
    let selectedOption = this.options[this.selectedIndex];
    //^ This var is the option in the select element
    //* which has been selected by the user
    let selectedText = selectedOption.id;
    //^ Fetch ID of the selected option
    //! Mainly for changing locale
    let selectedCategory = selectedOption.parentElement.id;
    //^ Fetch id of the selected option's group
    //! Mainly for the conditionals
    let optgroup = selectedOption.closest("optgroup");
    //^ Fetch id of the selected option's group
    //! Mainly for changing locale
    let footer = document.getElementById("footer");
    //^ Fetch id of the footer
    //! Mainly for changing position so the
    //! Page looks better/smoother
    let fileInputLabel = document.getElementById("fileInputLabel");
    let pdfViewer = document.getElementById('pdfViewer');
    let jobvalue = document.getElementById("job-value");
    let jobdesc = document.getElementById('job-desc');
    let jobform = document.getElementById("Job-Form");
    //^ Fetch id of currently hidden elements
    //! Will be revealed later
    let desc = "<span id='Job-Description'></span><br><span class='focused job-desc'>";
    //^ Create text element
    //! Will display job description based on the selected job
    //! Text is blank and will be filled according to the selected
    //! language of the user
    fileInputLabel.style.display = "block";
    this.style.top = "auto";
    //^ Reveal the file input label

    //* Conditional statements to set job description based on the selected job
    if (selectedCategory === 'Upper-Management' && selectedText === 'Chief-Financial-Officer') {
        jobdesc.innerHTML = desc + "<span id='CFO'></span>" + "</span>";
        //^ innerHTML of the job description will be set
        //* to in this case, CFO. Left empty and will be
        //* filled according to the selected language of the user
        show();
        //^ Show hidden elements
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
        //^ If the user selects "Select a Job:", this will
        //* Hide everything and revert to the page's default
        //* appearance
    }

    jobvalue.innerHTML = "<span id='Selected-Job'></span><br><span class='focused job-desc'>" + selectedOption.label.replace(/-/g, ' ') + "</span><br><span id='Department-Division'></span><br><span class='focused job-desc'>" + optgroup.label + "</span>";
    //^ Update job value
    updateContent();
    //^ Update locale information

    //* Function to hide specific elements
    function hide() {
        document.getElementById("Job-Select").style.top = "50%";
        jobvalue.style.display = "none";
        fileInputLabel.style.display = "none";
        pdfViewer.style.display = "none";
        jobdesc.style.display = "none";
        jobform.style.display = "none";
        footer.classList.add("absolute-footer");
    }

    //* Function to show specific elements
    function show() {
        jobvalue.style.display = "block";
        jobdesc.style.display = "block";
        jobform.style.display = "flex";
        footer.classList.remove("absolute-footer");
    }
});


document.getElementById('pdfInput').addEventListener('change', function (event) {
    //^ Event listener for the 'pdfInput' element

    const fileInput = event.target;
    const file = fileInput.files[0];
    //^ using const so vars will NEVER be redeclared

    //* Check if the selected file is a valid PDF
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        //^ Handle PDF file display
        document.getElementById('submit-resume').style.display = "block";
        document.getElementById('pdfViewer').style.display = "block";
        document.getElementById("fileInputLabel").style.display = "none";
        document.getElementById("Job-Select").disabled = true;

        //* Read PDF file and display in the viewer
        reader.onload = function (e) {
            pdfViewer.src = e.target.result;
        };

        reader.readAsDataURL(file);
        //^ Read file and display it as such

    } else {
        //* if user didn't select a PDF file, this will run
        let msg = [`
                    <p id='pdf-file-error'>Please select a valid PDF file:</p>
                `]

        window.toast({
            message: msg,
            btnmsg: "OK",
        })
    }
});

//* Function to send an email based on the user's selected job and form input
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

    //* Check if either option is not selected
    //* Send confirmation email
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
        //* Send rejection email
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

    //* Function to display a confirmation toast
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

    //* Function to display an error toast
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
//^ Initialize Email.js
