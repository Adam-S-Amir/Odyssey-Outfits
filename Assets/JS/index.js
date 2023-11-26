document.getElementById('Job-Select').addEventListener('change', function () {
    let selectedOption = this.options[this.selectedIndex];
    let selectedText = selectedOption.textContent;
    let selectedCategory = selectedOption.parentElement.label;
    let fileInputLabel = document.getElementById("fileInputLabel");
    let pdfViewer = document.getElementById('pdfViewer');
    let jobvalue = document.getElementById("job-value");
    let jobdesc = document.getElementById('job-desc');
    let desc = "Job Description:<span id='focused'>";
    fileInputLabel.style.display = "block";
    if (selectedText === "Select a Job:") {
        hide()
    } else if (selectedCategory === 'Upper Management' && selectedText === 'Chief Financial Officer') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Upper Management' && selectedText === 'Chief Executive Officer') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Upper Management' && selectedText === 'Chief Operating Officer') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Lower Management' && selectedText === 'Human Resources') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Lower Management' && selectedText === 'Regional Manager') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Lower Management' && selectedText === 'Office Manager') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Sales Department' && selectedText === 'Regional Sales Director') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Sales Department' && selectedText === 'Account Executive') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Sales Department' && selectedText === 'Salesman') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Financial Department' && selectedText === 'Regional Financial Director') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Financial Department' && selectedText === 'Payroll Administrator') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'Financial Department' && selectedText === 'Financial Analyst') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'IT Department' && selectedText === 'Fullstack Developer') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'IT Department' && selectedText === 'Network Administrator') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else if (selectedCategory === 'IT Department' && selectedText === 'Help Desk Administrator') {
        jobdesc.innerHTML = desc + "" + "</span>";
        show();
    } else {
        jobdesc.innerHTML = "";
    }
    jobvalue.innerHTML = "Selected Job:&nbsp;<span class='focused'>" + selectedText + "</span><br>Department/Division:&nbsp;<span class='focused'>" + selectedCategory + "</span>";

    function hide() {
        jobvalue.style.display = "none";
        fileInputLabel.style.display = "none";
        pdfViewer.style.display = "none";
        jobdesc.style.display = "none";
    }

    function show() {
        jobvalue.style.display = "block";
        fileInputLabel.style.display = "block";
        jobdesc.style.display = "block";
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
        reader.onload = function (e) {
            pdfViewer.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid PDF file.');
    }
});
