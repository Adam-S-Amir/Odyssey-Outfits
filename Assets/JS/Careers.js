// Defining variables
let job;
let division;
// This function will display the selected job information on the careers page.
function ShowJobInfo(element) {
    // Defining variables taking IDs, replacing IDs, and parsing the information from an element.
    let elementID = element.id;
    let JobWithoutDash = elementID.replace(/-/g, '');
    let JobWithSpace = elementID.replace(/-/g, ' ');
    let stringWithoutLowercase = JobWithoutDash.replace(/[a-z]/g, '');
    let value = element.getAttribute('data-value');
    let valueWithSpace = value.replace(/-/g, ' ');
    let jobWithoutDash = elementID.replace(/-/g, ' ');
    let DivisionWithoutDash = value.replace(/-/g, ' ');
    let KRS = `Key-Responsibilities-${stringWithoutLowercase}`;
    let JobAboutInner = document.getElementById("Job-About-Inner");
    let JAB = [`
        <h1 id="Selected-Job" aria-label="Selected Job">Selected Job:</h1>
        <span class='focused job-desc' aria-label="${JobWithSpace}" describedby="${elementID}"></span>
        <h1 id="Department-Division" aria-label="Department/Division">Department/Division:</h1>
        <span class='focused job-desc' aria-label="${valueWithSpace}" describedby="${value}"></span>
        <h1 id="Job-Description" aria-label="${JobWithSpace} Job Description">Job Description:</h1>
        <span id="${stringWithoutLowercase}"></span>
        <h1 id="Key-Responsibilities" aria-label="Key Responsibilities">Key Responsibilities:</h1>
        <ul id="${KRS}"></ul>
        <button id="Apply-Now" aria-label="Apply Now" onclick="ApplyNow()">Apply Now</button>
    `];
    job = jobWithoutDash;
    division = DivisionWithoutDash;
    JobAboutInner.innerHTML = JAB;
    const JobAbout = document.getElementById("Job-About");
    JobAbout.scrollIntoView();
    updateContent();
}
// This function creates the job application form after you clicked apply now for a job.
function ApplyNow() {
    let JobContainer = document.getElementById("Job-Container");
    let JobForm = [`
        <section id="Job-Overlay">
            <div class="container">
                <div class="overlay" id="Job-Form">
                    <form>
                        <label for="form-name" id="label-form-name" aria-label="First Name">First Name:</label>
                        <input type="text" id="form-name" name="form-name" required aria-label="Input First Name">
                        <label for="form-lname" id="label-form-lname" aria-label="Last Name">Last Name:</label>
                        <input type="text" id="form-lname" name="form-lname" required aria-label="Input Last Name">
                        <label for="form-email" id="label-form-email" aria-label="Email">Email:</label>
                        <input type="email" id="form-email" name="form-email" required aria-label="Input Email">
                        <label for="form-phone" id="label-form-phone" aria-label="Phone Number">Phone Number:</label>
                        <input type="tel" id="form-phone" name="form-phone" required aria-label="Input Phone Number">
                        <label for="form-linkedin" id="label-form-linkedin" aria-label="Linkedin">Linkedin:</label>
                        <input type="url" id="form-linkedin" name="form-linkedin" required aria-label="Input Linkedin">
                        <label for="form-address" id="label-form-address" aria-label="Current Address">Current Address:</label>
                        <input type="text" id="form-address" name="form-address" required aria-label="Input Current Address">
                        <label for="form-legal" id="label-form-legal" aria-label="Are you legally authorized to work in the United
                        States?">Are you legally authorized to work in the United
                            States?</label>
                        <select id="form-legal" required>
                            <option></option>
                            <option id="form-yes" aria-label="Yes">Yes</option>
                            <option id="form-no" aria-label="No">No</option>
                        </select>
                        <label for="form-education" id="label-form-education" aria-label="Have you completed the following level of
                        education: Bachelor's Degree?">Have you completed the following level of
                            education: Bachelor's Degree?</label>
                        <select id="form-education" required>
                            <option></option>
                            <option id="form-yes-2" aria-label="Yes">Yes</option>
                            <option id="form-no-2" aria-label="No">No</option>
                        </select>
                        <div class="submit-div">
                            <label for="pdfInput" id="fileInputLabel" aria-label="Upload Your Résumé">Upload&nbsp;Your Résumé</label>
                            <input type="file" id="pdfInput" accept=".pdf">
                        </div>
                    </form>
                </div>
                <section id="pdf-viewer">
                    <div class="container">
                        <iframe id="pdfViewer" width="100%" height="500"></iframe>
                        <button type="submit" id="submit-resume" onclick="sendEmail()" aria-label="Submit Your Application">Submit Your Application</button>
                    </div>
                </section>
            </div>
        </section>
    `];
    // Variables for the job container.
    JobContainer.removeAttribute("id");
    JobContainer.innerHTML = JobForm;
    document.getElementById('pdfInput').addEventListener('change', function (event) {
        const pdfViewer = document.getElementById('pdfViewer')
        const fileInput = event.target;
        const file = fileInput.files[0];
        // if element pdfViewer does not exist, the following runs
        if (!pdfViewer) {
            document.getElementById('submit-resume').style.display = "block";
        } else if (pdfViewer) {
            // Checks if uploaded file is a PDF otherwise display error.
            if (file && file.type === 'application/pdf') {
                const reader = new FileReader();
                pdfViewer.style.display = 'block';
                reader.onload = function (e) {
                    pdfViewer.src = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                let msg = [`
                <p id='pdf-file-error' aria-label="Please select a valid PDF file:">Please select a valid PDF file:</p>
            `]
                window.toast({
                    message: msg,
                    btnmsg: "OK",
                })
            }
        }
    });
    document.getElementById("submit-resume").scrollIntoView({
        behavior: 'smooth'
    });
    // updates the information content of the page.
    // updateContent();
    // auto scrolls to the top of the page.
    scrollToTop()
    // formats the page properly if it's a mobile user
    CareerApply();
}

function sendEmail() {
    // variables to find name, email, and other information provided.
    let formname = document.getElementById("form-name").value;
    let formlname = document.getElementById("form-lname").value;
    let formemail = document.getElementById("form-email").value;
    var legalSelect = document.getElementById("form-legal");
    var educationSelect = document.getElementById("form-education");
    /* Checks if you have the required qualifications for the application.
        If you dont, say you don't meet the requirements.
        If you do, it says we will be in touch.
    */
    if (legalSelect.value === "No" || educationSelect.value === "No") {
        emailjs.send("service_swxg0ob", "template_yskewix", {
            to_name: `${formname} ${formlname}`,
            to_email: formemail,
            message: `
                Thank you for completing the application for the position of ${job} in the ${division} division at Odyssey Outfits!
                It seems you do not meet the qualifications needed to complete the application for this position.
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
                Thank you for completing the application for the position of ${job} in the ${division} division at Odyssey Outfits!
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
    // confirmation on submitting your application.
    function confirmation() {
        let msg = [`
            <h1 id='application-sent' aria-label="Application Sent!">Application Sent!</h1>
            <p id='received-application' aria-label="Thank you for submitting your application!">Thank you for submitting your application! We have received it successfully. Kindly anticipate an email notification regarding the status of your application as we progress through our thorough review process. We appreciate your patience and look forward to the possibility of working together.</p>
        `]
        // sends toast message to confirm application.
        window.toast({
            message: msg,
            btnmsg: "OK",
            action: () => location.reload(),
        })
    }
    // sends an error if your application was not sent.
    function emailError() {
        let msg = [`
            <h1 id='application-not-sent' aria-label="Application Not Sent!">Application Not Sent!</h1>
            <p id='not-received-application' aria-label="Thank you for submitting your application!">Thank you for submitting your application! It seems that we had an error sending the confirmation email, please try again soon.</p>
        `]
        // sends toast message to confirm.
        window.toast({
            message: msg,
            btnmsg: "OK",
            action: () => location.reload(),
        })
    }

}
// Initialize EmailJS library with API key
emailjs.init("pNW2vDHr-8gYtWcXy");