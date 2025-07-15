// Language data
const languages = [
    { code: 'en', name: 'English', native: 'English', flag: 'gb' },
    { code: 'pl', name: 'Polish', native: 'Polski', flag: 'pl' },
    { code: 'no', name: 'Norwegian', native: 'Norsk', flag: 'no' },
    { code: 'fr', name: 'French', native: 'Français', flag: 'fr' },
    { code: 'es', name: 'Spanish', native: 'Español', flag: 'es' },
    { code: 'de', name: 'German', native: 'Deutsch', flag: 'de' },
    { code: 'it', name: 'Italian', native: 'Italiano', flag: 'it' }
];

let currentLanguage = 'en';
let isDropdownOpen = false;
let flagsLoaded = false;


// Get all supported language codes
const supportedCodes = languages.map(lang => lang.code);

// Detect language from URL or filename
function detectCurrentLanguage() {
    const pathname = window.location.pathname;
    const currentFile = pathname.split('/').pop();
    
    for (const code of supportedCodes) {
        if (pathname.includes(`/${code}/`) || currentFile.includes(`-${code}`)) {
            return code;
        }
    }
    return 'en';
}

// Detect current page type
function detectCurrentPage() {
    const pathname = window.location.pathname;
    if (pathname.includes('/calc') || pathname.includes('calc.html')) return 'calc';
    if (pathname.includes('/instruction') || pathname.includes('instruction.html')) return 'instruction';
    return 'index';
}

// Get path prefix based on current location
function getPathPrefix() {
    const pathname = window.location.pathname;
    const currentFile = pathname.split('/').pop();
    
    for (const code of supportedCodes) {
        if (pathname.includes(`/${code}/`) || currentFile.includes(`-${code}`)) {
            return '../';
        }
    }
    return '';
}

// Helper functions
const getFlagsPath = () => getPathPrefix() + 'flags/';
const getMainPagePath = () => getPathPrefix();

// Update current flag image
function updateCurrentFlag() {
    const currentFlag = document.getElementById('current-flag');
    const currentLang = languages.find(lang => lang.code === currentLanguage);
    
    if (currentFlag && currentLang) {
        const flagsPath = getFlagsPath();
        currentFlag.src = `${flagsPath}${currentLang.flag}.svg`;
        currentFlag.alt = currentLang.name;
    }
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

   
    flagsLoaded = true;

    languageList.innerHTML = languagesToShow.map(lang => `
        <div class="language-option ${lang.code === currentLanguage ? 'active' : ''}" 
             data-code="${lang.code}">
            <img src="${flagsPath}${lang.flag}.svg" 
            alt="${lang.name} flag" 
            loading="lazy">
            <div class="language-info">
                <span class="language-name">${lang.name}</span>
                <span class="language-native">${lang.native}</span>
            </div>
        </div>
    `).join('');
    

    
    // Add click handlers
    languageList.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const langCode = option.getAttribute('data-code');
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

// Toggle language dropdown
function toggleLanguageDropdown() {
   const dropdown = document.getElementById('language-dropdown');
   const toggle = document.getElementById('language-toggle');
   const searchInput = document.getElementById('language-search-input');
   
   isDropdownOpen = !isDropdownOpen;
   
   if (isDropdownOpen) {
       dropdown?.classList.add('show');
       toggle?.classList.add('active');
       
       if (searchInput) {
           searchInput.value = '';
           setTimeout(() => searchInput.focus(), 100);
       }
       
       if (!flagsLoaded) {
           renderLanguageList(languages);
       }
   } else {
       dropdown?.classList.remove('show');
       toggle?.classList.remove('active');
   }
}

// Change language - preserves exact original logic in compact form
function changeLanguage(selectedLang) {
    if (!supportedCodes.includes(selectedLang)) return;
    
    const currentLangInUrl = detectCurrentLanguage();
    
    // Check if user is already on the selected language
    if (selectedLang === currentLangInUrl) {
        // Just close dropdown and update UI, no redirect needed
        const dropdown = document.getElementById('language-dropdown');
        const toggle = document.getElementById('language-toggle');
        dropdown?.classList.remove('show');
        toggle?.classList.remove('active');
        isDropdownOpen = false;
        return;
    }
    
    currentLanguage = selectedLang;
    localStorage.setItem('selectedLanguage', selectedLang);
    updateCurrentFlag();
    
    // Close dropdown
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    dropdown?.classList.remove('show');
    toggle?.classList.remove('active');
    isDropdownOpen = false;
    
    const currentPage = detectCurrentPage();
    const mainPagePath = getMainPagePath();
    
    let targetUrl = '';
    
    if (selectedLang === 'en') {
        // To English (root) - exactly as original
        targetUrl = mainPagePath + (currentPage === 'index' ? 'index.html' : `${currentPage}.html`);
    } else {
        // To any non-English language - preserves original navigation logic
        if (currentLangInUrl === 'en') {
            // From root to language folder
            targetUrl = currentPage === 'index' ? `${selectedLang}/` : `${selectedLang}/${currentPage}`;
        } else {
            // From any language folder to another language folder
            targetUrl = currentPage === 'index' ? `../${selectedLang}/` : `../${selectedLang}/${currentPage}`;
        }
    }
    
    if (targetUrl) {
        window.location.href = targetUrl;
    }
}

// Initialize language selector
function initializeLanguageSelector() {
    const detectedLang = detectCurrentLanguage();
    const savedLang = localStorage.getItem('selectedLanguage');
    
    // Prefer detected language over saved (maintains original behavior)
    currentLanguage = (savedLang && supportedCodes.includes(savedLang)) ? savedLang : detectedLang;
    
    if (detectedLang !== currentLanguage) {
        currentLanguage = detectedLang;
        localStorage.setItem('selectedLanguage', detectedLang);
    }
    
    updateCurrentFlag();
    
    // Set up event listeners
    document.getElementById('language-toggle')?.addEventListener('click', toggleLanguageDropdown);
    
    const searchInput = document.getElementById('language-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleLanguageSearch);
        searchInput.addEventListener('click', e => e.stopPropagation());
    }
    
    document.getElementById('language-dropdown')?.addEventListener('click', e => e.stopPropagation());
    
    renderLanguageList(languages);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeLanguageSelector);

// Close dropdown on outside click
document.addEventListener('click', e => {
    const selector = document.getElementById('language-selector');
    if (!selector?.contains(e.target) && isDropdownOpen) {
        document.getElementById('language-dropdown')?.classList.remove('show');
        document.getElementById('language-toggle')?.classList.remove('active');
        isDropdownOpen = false;
    }
});

// Close dropdown on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isDropdownOpen) {
        toggleLanguageDropdown();
    }
});