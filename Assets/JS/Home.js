// Function to handle tab selection
function WhyUs(evt, selected) {
    // Get the element with the id "tab-content"
    let tabContent = document.getElementById("tab-content");
    // Declare a variable to be used in the loop
    var i;
    // Get all elements with the class "tab-links"
    let tabLinks = document.getElementsByClassName("tab-links");
    // Loop through all tab links and remove the "active" class
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    // Add the "active" class to the clicked tab link
    evt.currentTarget.className += " active";
    // Check the selected tab and update the tab content accordingly
    if (selected === "Learning-and-Growth-Opportunities") {
        tabContent.innerHTML = `
        <h3 id="Learning-and-Growth-Opportunities-2">Learning and Growth Opportunities</h3>
        <p id="Learning-and-Growth-Opportunities-3">We will provide you with the tools and resources you need to keep you ahead in your field. Join our team that values creativity and innovation. Our work environment encourages out-of-the-box thinking, empowering you to contribute ideas that shape the future of sustainable fashion.</p>
        `;
    } else if (selected === "Positive-Brand-Image") {
        tabContent.innerHTML = `
        <h3 id="Positive-Brand-Image-2">Positive Brand Image</h3>
        <p id="Positive-Brand-Image-3">The heart of our mission is a commitment to crafting fashion that not only enhances your wardrobe but also leaves a positive impact on the planet. Join our team and become a catalyst for promoting our environmentally conscious initiative.</p>
        `;
    } else if (selected == "Flexibility") {
        tabContent.innerHTML = `
        <h3 id="Flexibility-2">Flexibility</h3>
        <p id="Flexibility-3">We prioritize employee flexibility as a cornerstone of our values. Recognizing the importance of work-life balance, we empower our team with flexible schedules and remote work options. We believe that a harmonious and flexible work environment not only enhances individual well-being but also fosters creativity and innovation.</p>
        `;
    } else if (selected === "Healthy-Workplace") {
        tabContent.innerHTML = `
        <h3 id="Healthy-Workplace-2">Healthy Workplace</h3>
        <p id="Healthy-Workplace-3">Our team is committed to cultivating a healthy and diverse workplace. We believe that a diverse team brings a wealth of perspectives and creativity, fostering innovation in our sustainable fashion endeavors. Our inclusive environment celebrates differences, embracing a culture that promotes mutual respect and understanding.</p>
        `;
    }
}