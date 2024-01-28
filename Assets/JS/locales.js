// Function to handle changes in the URL hash
function handleUrlChange() {
    // Extract the language code from the URL hash
    const languageFromUrl = window.location.hash.substr(1);
    // Set the language based on the extracted code
    setLanguage(languageFromUrl);
}

// Add an event listener for changes in the browser's history (back/forward buttons)
window.addEventListener('popstate', handleUrlChange);

// Function to set the current language
function setLanguage(language) {
    // Update the currentLanguage variable
    currentLanguage = language;
    // Store the selected language in local storage
    localStorage.setItem('selectedLanguage', language);
    // Update the URL hash to reflect the selected language
    window.location.hash = language;
    // Update the content on the page
    updateContent();
}

// Function to update content on the page based on the selected language
function updateContent() {
    // Set the value of the language select dropdown to the current language
    document.getElementById('languageSelect').value = currentLanguage;

    // Update the value of an additional language select dropdown if it exists
    var TOSElement = document.getElementById('languageSelect_2');
    if (TOSElement) {
        TOSElement.value = currentLanguage;
    }

    // Match the language code from the URL hash and set it if valid
    const titleMatch = window.location.href.match(/#([a-zA-Z]{2})/);
    const locales = ['ar', 'cs', 'da', 'de', 'el', 'en', 'es', 'fi', 'fr', 'he', 'hu', 'it', 'ja', 'ko', 'nb', 'nl', 'pl', 'pt', 'ru', 'sk', 'sl', 'sv', 'tr', 'zh'];
    if (titleMatch) {
        const hashtagLocale = titleMatch[1].toLowerCase();
        if (locales.includes(hashtagLocale)) {
            currentLanguage = hashtagLocale;
            // Set the HTML lang attribute to the matched language
            document.documentElement.lang = hashtagLocale;
        } else {
            // Display an alert for an invalid locale and reload the page
            localStorage.removeItem("selectedLanguage");
            window.alert(`Locale ${hashtagLocale} doesn't exist!`);
            location.reload();
        }
    }

    // Fetch and load the JSON file for the current language
    fetch(`https://odysseyoutfits.vercel.app/Assets/Locales/${currentLanguage}/${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            // Iterate over the keys in the JSON data and update corresponding elements
            Object.keys(data).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    if (element.tagName.toLowerCase() === "option" || element.tagName.toLowerCase() === "optgroup") {
                        // Set 'label' attribute for <option> and <optgroup> elements
                        element.setAttribute('label', data[key]);
                    } else {
                        // Set innerHTML for other elements
                        element.innerHTML = data[key];
                    }
                }
                // Update elements with 'describedby' attribute
                //* This is a custom attribute because multiple tags can't have
                //* the same ID
                const allElementsWithDescribedBy = document.querySelectorAll('[describedby]');
                allElementsWithDescribedBy.forEach(DescribedByElement => {
                    const DescribedByValue = DescribedByElement.getAttribute('describedby');
                    if (data.hasOwnProperty(DescribedByValue)) {
                        DescribedByElement.innerHTML = data[DescribedByValue];
                        console.log(data[DescribedByValue]);
                    }
                });
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}

// Function to change the language based on user selection
function changeLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
}

// Function to retrieve the stored language from local storage
function getStoredLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

// Initialize the currentLanguage variable with the stored language or default to 'en'
let currentLanguage = getStoredLanguage();

// Set the value of the language select dropdown to the current language
document.getElementById('languageSelect').value = currentLanguage;

// Update the value of an additional language select dropdown if it exists
var TOSElement = document.getElementById('languageSelect_2');
if (TOSElement) {
    TOSElement.value = currentLanguage;
}

// Initial update of content based on the selected language
updateContent();