// Default language
let currentLanguage = 'en';

// Function to set language
function setLanguage(language) {
    currentLanguage = language;
    updateContent();
}

// Function to update content based on the current language
function updateContent() {
    fetch(`./locales/${currentLanguage}/${currentLanguage}.json`)
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

// Update lang localization
updateContent();