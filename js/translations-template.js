// translations-template.js - Complete template of all translatable strings
// This template contains ALL translatable strings found in the JavaScript files
// Copy this template to create language-specific files like i18n-no.js, i18n-pl.js, etc.

const translationsTemplate = {
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
        
        // Language redirects (mostly removed, but kept for reference)
        redirectPL: 'Redirecting to Polish version of the page...',
        redirectNO: 'Redirecting to Norwegian version of the page...',
        redirectEN: 'Redirecting to English version of the page...'
    },

    // ========== TABLE CONTENT ==========
    table: {
        noProducts: 'Add your first product to see cost comparison! 🚀',
        deleteAllBtn: '🗑️ Delete All',
        
        // Table headers (if needed for dynamic generation)
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
    },

    // ========== PRODUCT MANAGEMENT ==========
    productName: {
        default: 'Product',
        // Auto-generated names will be: Product1, Product2, etc.
    },

    // ========== CURRENCY LABELS ==========
    currency: {
        pricePerKg: 'Price per kg',
        pricePerPiece: 'Price per piece',
        cost100kcal: 'Cost per 100 kcal',
        averageCost: 'Average cost per 100 kcal',
        secondCost: 'Second cost per 100 kcal'
    },

    // ========== BUTTONS AND ACTIONS ==========
    buttons: {
        addProduct: '➕ Add Product',
        calculate: '🧮 Calculate',
        calculateCosts: '🧮 Calculate Costs',
        deleteAll: '🗑️ Delete All',
        delete: '🗑️',
        
        // Mode switching
        perKilogram: 'Per Kilogram',
        perPiece: 'Per Piece',
        normal: 'Normal',
        trainingRest: 'Training/Rest'
    },

    // ========== FORM LABELS ==========
    labels: {
        // Product form
        productName: 'Product Name',
        productNameOptional: 'Product Name (optional)',
        caloriesPer100g: 'Kcal/100g',
        pricePerKg: 'Price per kg',
        pricePerPiece: 'Price per piece',
        weightPerPiece: 'Weight per piece (g)',
        
        // Cost calculation form
        dailyCalories: 'How many calories do you eat daily',
        trainingDayCalories: 'Calories on training day',
        nonTrainingDayCalories: 'Calories on rest day',
        trainingDaysPerWeek: 'Training days per week',
        nonTrainingDaysPerWeek: 'Rest days per week',
        avgCost100kcal: 'Average cost per 100 kcal',
        secondCost100kcal: 'Second cost per 100 kcal (optional)'
    },

    // ========== PLACEHOLDERS ==========
    placeholders: {
        searchCurrencies: 'Type to search currencies',
        searchLanguages: 'Search languages...',
        productName: 'Enter product name...',
        enterCalories: 'Enter calories...',
        enterPrice: 'Enter price...'
    },

    // ========== HEADERS AND TITLES ==========
    headers: {
        calculator: '💰 100 kcal Cost Calculator',
        checkEnergyCost: 'Check the cost of energy in different products',
        funFact: '🤔 Fun Fact',
        foodExpenses: '💰 Your Food Expenses',
        costCalculation: 'You can calculate how much you\'ll spend on food at a specific cost per 100 kcal'
    },

    // ========== VALIDATION MESSAGES ==========
    validation: {
        required: 'This field is required',
        mustBeNumber: 'Must be a number',
        mustBePositive: 'Must be greater than 0',
        maxValue: (max) => `Maximum value is ${max}`,
        minValue: (min) => `Minimum value is ${min}`
    },

    // ========== UNITS ==========
    units: {
        kcal: 'kcal',
        grams: 'g',
        kg: 'kg',
        piece: 'piece',
        per100g: '/100g',
        perKg: '/kg',
        perPiece: '/piece',
        days: 'days',
        week: 'week'
    },

    // ========== MISCELLANEOUS ==========
    misc: {
        optional: 'optional',
        required: 'required',
        loading: 'Loading...',
        noResults: 'No results found',
        currency: 'Currency',
        language: 'Language',
        selected: 'Selected',
        choose: 'Choose',
        search: 'Search',
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Info'
    },

    // ========== TECHNICAL MESSAGES ==========
    technical: {
        scriptLoadError: 'Failed to load script',
        dataLoadError: 'Failed to load data',
        saveError: 'Failed to save data',
        networkError: 'Network error',
        timeout: 'Request timeout',
        invalidData: 'Invalid data format',
        notSupported: 'Feature not supported in this browser'
    },

    // ========== LANGUAGE SELECTOR ==========
    languages: {
        english: 'English',
        polish: 'Polish',
        norwegian: 'Norwegian',
        currentLanguage: 'Current language',
        selectLanguage: 'Select language',
        noLanguagesFound: 'No languages found'
    },

    // ========== CURRENCY SELECTOR ==========
    currencySelector: {
        title: '💰 Choose Your Currency',
        description: 'Select your preferred currency for price calculations. This setting will be remembered and used in the calculator.',
        searchPlaceholder: 'Type to search currencies',
        selected: 'Selected',
        noCurrenciesFound: 'No currencies found'
    },

    // ========== INSTRUCTIONS/HELP ==========
    instructions: {
        title: '📱 100 kcal Cost Calculator User Guide',
        firstLaunch: '🚀 First Launch',
        howToUse: '🎯 How to Use the Calculator',
        managingResults: '📊 Managing Results',
        practicalTips: '💡 Practical Tips',
        technicalInfo: 'ℹ️ Technical Information',
        calculatorGoal: 'Goal of the Calculator',
        
        // Mode descriptions
        defaultMode: 'Default Mode: "Per Kilogram"',
        alternativeMode: 'Alternative Mode: "Per Piece"',
        forMostProducts: 'For most products in stores',
        forIndividualProducts: 'Use for products sold individually',
        
        // Actions
        sortingTable: 'Sorting the Table',
        deletingProducts: 'Deleting Products',
        quickComparison: 'Quick comparison of two products',
        
        // Examples
        usageExamples: 'Usage Examples',
        breakfastCereal: 'Breakfast Cereal',
        yogurt: 'Yogurt',
        nuts: 'Nuts',
        
        // Technical details
        roundsResults: 'The calculator rounds results to 2 decimal places for better readability.',
        cooldownPeriod: 'There\'s a cool-down period of 1 second between adding products to prevent spamming.',
        maxProducts: 'You can add a maximum of 500 products.',
        
        // Goal explanation
        goalExplanation: 'The calculator shows you how much 100 kcal costs from a given product. The lower the value, the better the price-to-energy-value ratio of the product.',
        
        // Important notes
        importantNote: 'Remember: Calories and price aren\'t everything – also consider nutritional values, vitamins, and minerals when choosing products! 🥗'
    },

    // ========== MODE SWITCHING ==========
    modes: {
        perKilogram: 'Per Kilogram',
        perPiece: 'Per Piece',
        normal: 'Normal',
        trainingRest: 'Training/Rest',
        
        // Descriptions
        perKgDescription: 'For most store products',
        perPieceDescription: 'For individually sold items',
        normalDescription: 'Standard daily calorie calculation',
        trainingRestDescription: 'Different calories for training and rest days'
    },

    // ========== STEP-BY-STEP INSTRUCTIONS ==========
    steps: {
        step1: 'Step 1',
        step2: 'Step 2',
        step3: 'Step 3',
        step4: 'Step 4',
        step5: 'Step 5',
        
        // Common actions
        enterProductName: 'Enter product name (optional)',
        enterCalories: 'Enter calories per 100g',
        enterPrice: 'Enter price information',
        clickAdd: 'Click "Add Product"',
        viewResults: 'View results in the table',
        
        // Specific instructions
        convertPrice: 'Convert the price to per kilogram (e.g., 500g for $5 = $10/kg)',
        chooseOneMethod: 'Choose ONE method',
        pricePerPiece: 'Price per piece - how much one item costs',
        orPricePerKg: 'OR Price per kg - the converted price per kilogram',
        clickColumnHeader: 'Click a column header to sort',
        compareColumn: 'Compare the "Cost of 100 kcal" column'
    }
};

// Export the template for use in creating language-specific files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translationsTemplate;
} else {
    window.translationsTemplate = translationsTemplate;
}