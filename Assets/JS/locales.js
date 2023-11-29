// Function to set language
function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language); // Store the selected language
    updateContent();
}

// Function to update content based on the current language
function updateContent() {
    fetch(`./Assets/Locales/${currentLanguage}/${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('greeting').textContent = data.greeting;
            document.getElementById('description').textContent = data.description;
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

// Set the selected option on page load
document.getElementById('languageSelect').value = currentLanguage;

// Update lang localization
updateContent();
