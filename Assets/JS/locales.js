// Function to handle URL changes
function handleUrlChange() {
    // Get the current language from the URL hash
    const languageFromUrl = window.location.hash.substr(1);
    // Set the language based on the URL hash
    setLanguage(languageFromUrl);
}
// Add an event listener for the popstate event
window.addEventListener('popstate', handleUrlChange);
// Function to set language
function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language); // Store the selected language
    window.location.hash = language;
    updateContent();
}
// Function to update content based on the current language
function updateContent() {
    // Set the selected option on page load
    document.getElementById('languageSelect').value = currentLanguage;
    window.location.hash = currentLanguage;
    var TOSelement = document.getElementById('languageSelect_2');
    if (TOSelement) {
        TOSelement.value = currentLanguage;
    }
    // Check if the title contains a hashtag followed by two characters
    const titleMatch = window.location.href.match(/#([a-zA-Z]{2})/);
    // Define an array of valid locales
    const locales = ['ar', 'cs', 'da', 'de', 'el', 'en', 'es', 'fi', 'fr', 'he', 'hu', 'it', 'ja', 'ko', 'nb', 'nl', 'pl', 'pt', 'ru', 'sk', 'sl', 'sv', 'tr', 'zh'];
    //^ Added valid locales
    if (titleMatch) {
        const hashtagLocale = titleMatch[1].toLowerCase();
        // Check if the locale exists
        if (locales.includes(hashtagLocale)) {
            currentLanguage = hashtagLocale; // Set language to matched locale
        } else {
            localStorage.removeItem("selectedLanguage");
            window.alert(`Locale ${hashtagLocale} doesn't exist!`);
            // Specify the URL you want to open
            location.reload();
        }
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
}
// Update lang localization
updateContent();