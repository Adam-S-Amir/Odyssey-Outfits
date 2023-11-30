document.getElementById('Job-Select').addEventListener('change', function () {
    let selectedOption = this.options[this.selectedIndex];
    let selectedText = selectedOption.textContent;
    let selectedCategory = selectedOption.parentElement.label;
    let fileInputLabel = document.getElementById("fileInputLabel");
    let pdfViewer = document.getElementById('pdfViewer');
    let jobvalue = document.getElementById("job-value");
    let jobdesc = document.getElementById('job-desc');
    let desc = "Job Description:&nbsp;<span id='focused'>";
    fileInputLabel.style.display = "block";
    if (selectedText === "Select a Job:") {
        hide()
    } else if (selectedCategory === 'Upper Management' && selectedText === 'Chief Financial Officer') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Chief Financial Officer to join our team at Odyssey Outfits. In this role, you will be overseeing our financial activities and strategy. As the CFO, you will develop and execute the organization's financial strategy in alignment with overall business goals, providing strategic financial guidance to the CEO and other executives." + "</span>";
        show();
    } else if (selectedCategory === 'Upper Management' && selectedText === 'Chief Executive Officer') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Chief Executive Officer to join our team at Odyssey Outfits. In this role, you will lead our organization to new heights by making strategic corporate decisions, overseeing overall operations and resources, and serving as the primary liaison between the board of directors and corporate operations. As the CEO, you will play a pivotal role in setting the strategic direction, identifying business opportunities, and ensuring the company's compliance with legal and regulatory requirements." + "</span>";
        show();
    } else if (selectedCategory === 'Upper Management' && selectedText === 'Chief Operating Officer') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Chief Operating Officer to join our team at Odyssey Outfits. In this role, you will be promoting operational efficiency and implementing strategies to achieve our organizational goals. As a key member of our leadership team, you will be responsible for developing and implementing operational policies and procedures, aligning operational strategies with business objectives, and ensuring the effective allocation of resources." + "</span>";
        show();
    } else if (selectedCategory === 'Lower Management' && selectedText === 'Human Resources') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Human Resources to join our team at Odyssey Outfits. In this role, you will in manage personnel, employment-related matters, and supporting the overall well-being of our valued employees. This role is crucial for creating a positive work environment, ensuring legal compliance, and supporting the strategic goals of our organization." + "</span>";
        show();
    } else if (selectedCategory === 'Lower Management' && selectedText === 'Regional Manager') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Regional Manager to join our team at Odyssey Outfits. In this role, you will be responsible in overseeing and managing the operations, sales, and overall performance of multiple locations within a specific geographic region. This key leadership position involves setting and achieving performance goals, ensuring compliance, and driving financial success." + "</span>";
        show();
    } else if (selectedCategory === 'Lower Management' && selectedText === 'Office Manager') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Office Manager to join our team at Odyssey Outfits. In this role, you will be responsible overseeing the daily operations of our office or business environment. This pivotal role requires a dynamic individual with strong organizational and managerial skills to ensure the seamless functioning of our office." + "</span>";
        show();
    } else if (selectedCategory === 'Sales Department' && selectedText === 'Regional Sales Director') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Regional Sales Director to join our team at Odyssey Outfits. In this leadership role, role in driving sales activities within a specific geographic region. As a key member of our team, you will be responsible for developing and executing sales strategies, leading a dynamic sales team, and contributing to the overall growth and success of the organization." + "</span>";
        show();
    } else if (selectedCategory === 'Sales Department' && selectedText === 'Account Executive') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Account Executive to join our team at Odyssey Outfits. In this role, you will be responsible in managing client accounts, driving business growth, and ensuring client satisfaction. If you thrive in a dynamic and collaborative environment, we invite you to be a part of our team." + "</span>";
        show();
    } else if (selectedCategory === 'Sales Department' && selectedText === 'Salesman') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Salesman to join our team at Odyssey Outfits. In this role, you will be responsible for driving revenue growth by effectively selling our products or services to potential customers. If you are passionate about sales, building relationships, and achieving targets, we invite you to be a part of our dynamic team." + "</span>";
        show();
    } else if (selectedCategory === 'Financial Department' && selectedText === 'Regional Financial Director') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Regional Financial Director to join our team at Odyssey Outfits. In this role, you will take on a strategic role in overseeing and managing the financial operations within our specific region. As a key leader, you will play a crucial role in shaping and implementing financial strategies to drive the success of our operations." + "</span>";
        show();
    } else if (selectedCategory === 'Financial Department' && selectedText === 'Payroll Administrator') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Payroll Administrator to join our team at Odyssey Outfits. In this role, you will be responsible for managing and processing employee compensation. As a Payroll Administrator, you will ensure the accurate and timely payment of employee salaries, bonuses, and benefits while maintaining compliance with local, state, and federal regulations." + "</span>";
        show();
    } else if (selectedCategory === 'Financial Department' && selectedText === 'Financial Analyst') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Financial Analyst to join our team at Odyssey Outfits. In this role, you will provide valuable insights and recommendations based on in-depth analysis of financial data and trends. As a Financial Analyst, your primary responsibility will be to support decision-makers by interpreting complex financial information and presenting it in a clear and meaningful manner." + "</span>";
        show();
    } else if (selectedCategory === 'IT Department' && selectedText === 'Fullstack Developer') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Fullstack Developer to join our team at Odyssey Outfits. In this role, you will leverage your expertise in both frontend and backend development to create seamless and user-friendly web applications. As a Fullstack Developer, you will be responsible for designing and implementing the visual elements that users interact with on our websites or web applications." + "</span>";
        show();
    } else if (selectedCategory === 'IT Department' && selectedText === 'Network Administrator') {
        jobdesc.innerHTML = desc + "We are seeking a skilled Network Administrator to join our team at Odyssey Outfits. In this role, you will manage and maintain our computer networks. As a Network Administrator, you will ensure the seamless operation of our network infrastructure, encompassing local area networks (LANs), wide area networks (WANs), and other communication systems." + "</span>";
        show();
    } else if (selectedCategory === 'IT Department' && selectedText === 'Help Desk Administrator') {
        jobdesc.innerHTML = desc + "We are seeking a skilled and customer-focused Help Desk Administrator to join our team at Odyssey Outfits. In this role, you will be responsible for providing technical assistance and support to end-users within the organization. Your primary focus will be on delivering high-quality customer service by addressing hardware, software, network, and other IT-related issues." + "</span>";
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
        document.getElementById("Job-Select").disabled = true;
        reader.onload = function (e) {
            pdfViewer.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid PDF file.');
    }
});
