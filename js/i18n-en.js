// i18n-en.js - Complete English translations
// This file should be loaded AFTER i18n-base.js

const englishTranslations = {
    // ========== ALERT MESSAGES ==========
    alerts: {
        // Rate limiting
        rateLimit: (seconds) => `⏱️ Please wait ${seconds} seconds before calculating again!`,
        rateLimitProduct: (seconds) => `⏱️ Please wait ${seconds} seconds before adding another product!`,
        
        // Product limits
        productLimit: (max) => `⚠️ Maximum number of products (${max}) reached. Delete some products to add new ones.`,
        noProducts: 'No products to delete!',
        confirmDeleteAll: 'Are you sure you want to delete all products? This action cannot be undone.',
        
        // Form validation
        fillRequired: 'Please fill in the required fields!',
        validCalories: 'Enter a valid calorie value (greater than 0)!',
        validPrice: 'Enter a valid price per kg (greater than 0)!',
        validWeight: 'Enter a valid piece weight (greater than 0)!',
        priceRequired: 'Enter a price per piece OR per kilogram!',
        sumSeven: 'The sum of training and non-training days must be 7!',
        

    },

    // ========== TABLE CONTENT ==========
    table: {
        noProducts: 'Add your first product to see cost comparison! 🚀',
        deleteAllBtn: '🗑️ Delete All',
        
        // Table headers
        headerProduct: '🍎 Product',
        headerCalories: '🔥 Kcal/100g',
        headerPrice: '💵 Price per kg',
        headerCost: '💰 Cost of 100 kcal',
        headerActions: '🗑️'
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
        productAdded: 'Product added successfully!',
        productDeleted: 'Product deleted successfully!'
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