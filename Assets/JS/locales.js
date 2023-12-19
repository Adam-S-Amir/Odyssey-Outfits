// Function to set language
function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language); // Store the selected language
    updateContent();
}

// Function to update content based on the current language
function updateContent() {
    // Set the selected option on page load
    document.getElementById('languageSelect').value = currentLanguage;

    var TOSelement = document.getElementById('languageSelect_2');

    if (TOSelement) {
        TOSelement.value = currentLanguage;
    } else {
        console.log('TOS Dialog is hidden');
    }

    fetch(`./Assets/Locales/${currentLanguage}/${currentLanguage}.json`)
        .then(response => response.json()).then(data => {
            // Loop through the keys in the JSON data
            Object.keys(data).forEach(key => {
                // Find the corresponding HTML element by ID
                const element = document.getElementById(key);
                if (element) {
                    // Check if the element is an optgroup
                    if (element.tagName.toLowerCase() === "option") {
                        element.setAttribute('label', data[key]);
                    } else if (element.tagName.toLowerCase() === "optgroup") {
                        element.setAttribute('label', data[key]);
                    } else {
                        // Update the text content of regular elements
                        element.innerHTML = data[key];
                    }
                }
                // Get all elements with aria-describedby attribute
                const allElementsWithAria = document.querySelectorAll('[aria-describedby]');
                // Loop through elements with aria-describedby attribute
                allElementsWithAria.forEach(ariaElement => {
                    // Get the value of the aria-describedby attribute
                    const ariaValue = ariaElement.getAttribute('aria-describedby');
                    // Check if the aria-describedby value is a key in the JSON data
                    if (data.hasOwnProperty(ariaValue)) {
                        // Set the innerHTML of the element to the corresponding JSON data key
                        ariaElement.innerHTML = data[ariaValue];
                    }
                });
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}


// Function to change language based on select value
function changeLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
}

// Function to get the language from localStorage or use default
function getStoredLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

// Set the initial language from localStorage or use default
let currentLanguage = getStoredLanguage();
document.getElementById('languageSelect').value = currentLanguage;

var TOSelement = document.getElementById('languageSelect_2');

if (TOSelement) {
    TOSelement.value = currentLanguage;
} else {
    console.log('TOS Dialog is hidden');
}

// Update lang localization
updateContent();