// Language dropdown toggle
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    
    dropdown.classList.toggle('show');
    toggle.classList.toggle('active');
}

// Language change function
function changeLanguage(selectedLang) {
    const currentFlag = document.getElementById('current-flag');
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    
    // Update current flag
    switch(selectedLang) {
        case 'en':
            currentFlag.src = 'flags/gb.svg';
            currentFlag.alt = 'English';
            break;
        case 'pl':
            currentFlag.src = 'flags/pl.svg';
            currentFlag.alt = 'Polish';
            break;
        case 'no':
            currentFlag.src = 'flags/no.svg';
            currentFlag.alt = 'Norwegian';
            break;
    }
    
    // Close dropdown
    dropdown.classList.remove('show');
    toggle.classList.remove('active');
    

    // For now, just showing an alert as placeholder
    switch(selectedLang) {
        case 'pl':
            alert('Przekierowanie do polskiej wersji strony...');
            // window.location.href = 'index-pl.html';
            break;
        case 'no':
            alert('Omdirigering til norsk versjon av siden...');
            // window.location.href = 'index-no.html';
            break;
        case 'en':
            window.location.href = 'index.html';
            break;
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const selector = document.getElementById('language-selector');
    const dropdown = document.getElementById('language-dropdown');
    const toggle = document.getElementById('language-toggle');
    
    if (!selector.contains(event.target)) {
        dropdown.classList.remove('show');
        toggle.classList.remove('active');
    }
});