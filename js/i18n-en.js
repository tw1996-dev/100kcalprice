// i18n-en.js - English translations for extra counting section
// This file should be loaded AFTER i18n-base.js

const englishTranslations = {
    // ========== ALERT MESSAGES ==========
    alerts: {
        // Rate limiting
        rateLimit: (seconds) => `⏱️ Please wait ${seconds} seconds before calculating again!`,
        
        // Form validation
        fillRequired: 'Please fill in the required fields!',
        sumSeven: 'The sum of training and non-training days must be 7!',
    },

    // ========== COST CALCULATION RESULTS ==========
    costResults: {
        // Cost types
        firstCost: 'First Cost',
        secondCost: 'Second Cost',
        difference: 'Cost Difference',
        
        // Comparison indicators
        firstCheaper: '(first cheaper)',
        secondCheaper: '(second cheaper)',
        
        // Time periods
        daily: 'Daily',
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly',
        
        // Average calories text
        avgCalories: (calories) => `avg ${calories} kcal/day`,
        
        // Results header
        resultsHeader: '💰 Your Food Expenses'
    },

    // ========== SUCCESS MESSAGES ==========
    success: {
        currencySet: (code, symbol) => `✅ Currency set to ${code} (${symbol})`,
    }
};

// Initialize the i18n system with English translations
if (typeof window.i18nManager !== 'undefined') {
    window.i18nManager.init('en', englishTranslations);
} else {
    // Fallback if base system isn't loaded
    console.error('i18n-base.js must be loaded before i18n-en.js');
    
    // Store translations for later initialization
    window.pendingTranslations = {
        language: 'en',
        translations: englishTranslations
    };
}