// Language data - only 3 languages as in original
const languages = [
    { code: 'en', name: 'English', native: 'English', flag: 'gb' },
    { code: 'pl', name: 'Polish', native: 'Polski', flag: 'pl' },
    { code: 'no', name: 'Norwegian', native: 'Norsk', flag: 'no' }
];

let currentLanguage = 'en';
let isDropdownOpen = false;

// Function to dynamically detect the correct path prefix
function getPathPrefix() {
    const pathname = window.location.pathname;
    
    // Check if we're in a language subfolder
    if (pathname.includes('/no/') || pathname.includes('/pl/') || pathname.includes('/de/') || pathname.includes('/fr/') || pathname.includes('/es/')) {
        return '../';
    }
    
    // Check if current page filename suggests we're in a subfolder
    const currentFile = pathname.split('/').pop();
    if (currentFile.includes('-no') || currentFile.includes('-pl') || currentFile.includes('-de') || currentFile.includes('-fr') || currentFile.includes('-es')) {
        return '../';
    }
    
    // Default to root level
    return '';
}

// Function to get the correct flags path
function getFlagsPath() {
    return getPathPrefix() + 'flags/';
}

// Function to get the correct path for main pages
function getMainPagePath() {
    return getPathPrefix();
}

// Function to determine current language based on URL
function detectCurrentLanguage() {
    const pathname = window.location.pathname;
    const currentFile = pathname.split('/').pop();
    
    // Check if we're in a language subfolder
    if (pathname.includes('/no/')) {
        return 'no';
    } else if (pathname.includes('/pl/')) {
        return 'pl';
    } else if (pathname.includes('/de/')) {
        return 'de';
    } else if (pathname.includes('/fr/')) {
        return 'fr';
    } else if (pathname.includes('/es/')) {
        return 'es';
    }
    
    // Check filename patterns
    if (currentFile.includes('-no')) {
        return 'no';
    } else if (currentFile.includes('-pl')) {
        return 'pl';
    } else if (currentFile.includes('-de')) {
        return 'de';
    } else if (currentFile.includes('-fr')) {
        return 'fr';
    } else if (currentFile.includes('-es')) {
        return 'es';
    }
    
    // Default to English
    return 'en';
}

// Initialize language selector on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSelector();
});

// Initialize language selector
function initializeLanguageSelector() {
    // Auto-detect current language
    const detectedLang = detectCurrentLanguage();
    
    // Load saved language preference, but prefer detected language
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && languages.find(lang => lang.code === savedLang)) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = detectedLang;
    }
    
    // If detected language differs from saved, update current
    if (detectedLang !== currentLanguage) {
        currentLanguage = detectedLang;
        localStorage.setItem('selectedLanguage', detectedLang);
    }
    
    updateCurrentFlag();
    
    // Set up language toggle click handler
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguageDropdown);
    }
    
    // Set up search input
    const searchInput = document.getElementById('language-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleLanguageSearch);
        
        // Prevent dropdown from closing when clicking on search input
        searchInput.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Prevent dropdown from closing when clicking inside
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Initialize language list
    renderLanguageList(languages);
}

// Render language list
function renderLanguageList(languagesToShow) {
    const languageList = document.getElementById('language-list');
    if (!languageList) return;
    
    const flagsPath = getFlagsPath();
    
    if (languagesToShow.length === 0) {
        languageList.innerHTML = '<div class="no-results">No languages found</div>';
        return;
    }

    languageList.innerHTML = languagesToShow.map(lang => `
        <div class="language-option ${lang.code === currentLanguage ? 'active' : ''}" 
             data-code="${lang.code}">
            <img src="${flagsPath}${lang.flag}.svg" 
                 alt="${lang.name} flag">
            <div class="language-info">
                <span class="language-name">${lang.name}</span>
                <span class="language-native">${lang.native}</span>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for language options
    const languageOptions = languageList.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const langCode = this.getAttribute('data-code');
            changeLanguage(langCode);
        });
    });
}

// Handle language search
function handleLanguageSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    const filtered = languages.filter(lang => 
        lang.name.toLowerCase().includes(searchTerm) ||
        lang.native.toLowerCase().includes(searchTerm) ||
        lang.code.toLowerCase().includes(searchTerm)
    );
    
    renderLanguageList(filtered);
}

// Update current flag
function updateCurrentFlag() {
    const currentFlag = document.getElementById('current-flag');
    const currentLang = languages.find(lang => lang.code === currentLanguage);
    
    if (currentFlag && currentLang) {
        const flagsPath = getFlagsPath();
        currentFlag.src = `${flagsPath}${currentLang.flag}.svg`;
        currentFlag.alt = currentLang.name;
    }
}

// Toggle language dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    const searchInput = document.getElementById('language-search-input');
    
    isDropdownOpen = !isDropdownOpen;
    
    if (isDropdownOpen) {
        if (dropdown) dropdown.classList.add('show');
        if (toggle) toggle.classList.add('active');
        
        // Reset search and focus
        if (searchInput) {
            searchInput.value = '';
            setTimeout(() => searchInput.focus(), 100); // Small delay for smooth animation
        }
        
        // Reset language list to show all
        renderLanguageList(languages);
    } else {
        if (dropdown) dropdown.classList.remove('show');
        if (toggle) toggle.classList.remove('active');
    }
}

// Change language function
function changeLanguage(selectedLang) {
    const langData = languages.find(lang => lang.code === selectedLang);
    if (!langData) return;
    
    currentLanguage = selectedLang;
    
    // Save language preference
    localStorage.setItem('selectedLanguage', selectedLang);
    
    // Update current flag
    updateCurrentFlag();
    
    // Close dropdown
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    if (dropdown) dropdown.classList.remove('show');
    if (toggle) toggle.classList.remove('active');
    isDropdownOpen = false;
    
    // Get the correct path for navigation
    const mainPagePath = getMainPagePath();
    
    // Redirect based on selected language
    switch(selectedLang) {
        case 'pl':
            // Redirect to Polish version
            if (window.location.pathname.includes('/no/')) {
                // If we're in Norwegian folder, go to Polish folder
                window.location.href = '../pl/';
            } else {
                // If we're in root, go to Polish folder
                window.location.href = 'pl/';
            }
            break;
        case 'no':
            // Redirect to Norwegian version
            if (window.location.pathname.includes('/pl/')) {
                // If we're in Polish folder, go to Norwegian folder
                window.location.href = '../no/';
            } else {
                // If we're in root, go to Norwegian folder
                window.location.href = 'no/';
            }
            break;
        case 'en':
            // Redirect to English version (root)
            window.location.href = mainPagePath + 'index.html';
            break;
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const selector = document.getElementById('language-selector');
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    
    if (!selector || !selector.contains(event.target)) {
        if (isDropdownOpen) {
            if (dropdown) dropdown.classList.remove('show');
            if (toggle) toggle.classList.remove('active');
            isDropdownOpen = false;
        }
    }
});

// Close dropdown on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isDropdownOpen) {
        toggleLanguageDropdown();
    }
});