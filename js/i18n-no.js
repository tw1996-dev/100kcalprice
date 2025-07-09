// i18n-no.js - Complete Norwegian translations
// This file should be loaded AFTER i18n-base.js

const norwegianTranslations = {
    // ========== ALERT MESSAGES ==========
    alerts: {
        // Rate limiting
        rateLimit: (seconds) => `⏱️ Vennligst vent ${seconds} sekunder før du beregner igjen!`,
        rateLimitProduct: (seconds) => `⏱️ Vennligst vent ${seconds} sekunder før du legger til et nytt produkt!`,
        
        // Product limits
        productLimit: (max) => `⚠️ Maksimalt antall produkter (${max}) nådd. Slett noen produkter for å legge til nye.`,
        noProducts: 'Ingen produkter å slette!',
        confirmDeleteAll: 'Er du sikker på at du vil slette alle produkter? Denne handlingen kan ikke angres.',
        
        // Form validation
        fillRequired: 'Vennligst fyll inn de obligatoriske feltene!',
        validCalories: 'Skriv inn en gyldig kaloriverdi (større enn 0)!',
        validPrice: 'Skriv inn en gyldig pris per kg (større enn 0)!',
        validWeight: 'Skriv inn en gyldig stykkevekt (større enn 0)!',
        priceRequired: 'Skriv inn en pris per stykke ELLER per kilogram!',
        sumSeven: 'Summen av trenings- og hviledager må være 7!',
        
        // Language redirects
        redirectPL: 'Omdirigerer til polsk versjon av siden...',
        redirectNO: 'Omdirigerer til norsk versjon av siden...',
        redirectEN: 'Omdirigerer til engelsk versjon av siden...'
    },

    // ========== TABLE CONTENT ==========
    table: {
        noProducts: 'Legg til ditt første produkt for å se kostnadsammenligning! 🚀',
        deleteAllBtn: '🗑️ Slett Alle',
        
        // Table headers
        headerProduct: '🍎 Produkt',
        headerCalories: '🔥 Kcal/100g',
        headerPrice: '💵 Pris per kg',
        headerCost: '💰 Kostnad for 100 kcal',
        headerActions: '🗑️'
    },

    // ========== COST CALCULATION RESULTS ==========
    costResults: {
        // Cost types
        firstCost: 'Første Kostnad',
        secondCost: 'Andre Kostnad',
        difference: 'Kostnadsdifferanse',
        
        // Comparison indicators
        firstCheaper: '(første billigere)',
        secondCheaper: '(andre billigere)',
        
        // Time periods
        daily: 'Daglig',
        weekly: 'Ukentlig',
        monthly: 'Månedlig',
        yearly: 'Årlig',
        
        // Average calories text
        avgCalories: (calories) => `avg ${calories} kcal/dag`,
        
        // Results header
        resultsHeader: '💰 Dine Matutgifter'
    },

    // ========== SUCCESS MESSAGES ==========
    success: {
        currencySet: (code, symbol) => `✅ Valuta satt til ${code} (${symbol})`,
        productAdded: 'Produkt lagt til!',
        productDeleted: 'Produkt slettet!'
    },

    // ========== PRODUCT MANAGEMENT ==========
    productName: {
        default: 'Produkt',
        // Auto-generated names will be: Produkt1, Produkt2, etc.
    },

    // ========== CURRENCY LABELS ==========
    currency: {
        pricePerKg: 'Pris per kg',
        pricePerPiece: 'Pris per stykke',
        cost100kcal: 'Kostnad per 100 kcal',
        averageCost: 'Gjennomsnittlig kostnad per 100 kcal',
        secondCost: 'Andre kostnad per 100 kcal'
    },

    // ========== BUTTONS AND ACTIONS ==========
    buttons: {
        addProduct: '➕ Legg til Produkt',
        calculate: '🧮 Beregn',
        calculateCosts: '🧮 Beregn Kostnader',
        deleteAll: '🗑️ Slett Alle',
        delete: '🗑️',
        
        // Mode switching
        perKilogram: 'Per Kilogram',
        perPiece: 'Per Stykke',
        normal: 'Normal',
        trainingRest: 'Trening/Hvile'
    },

    // ========== FORM LABELS ==========
    labels: {
        // Product form
        productName: 'Produktnavn',
        productNameOptional: 'Produktnavn (valgfritt)',
        caloriesPer100g: 'Kcal/100g',
        pricePerKg: 'Pris per kg',
        pricePerPiece: 'Pris per stykke',
        weightPerPiece: 'Vekt per stykke (g)',
        
        // Cost calculation form
        dailyCalories: 'Hvor mange kalorier spiser du daglig',
        trainingDayCalories: 'Kalorier på treningsdag',
        nonTrainingDayCalories: 'Kalorier på hviledag',
        trainingDaysPerWeek: 'Treningsdager per uke',
        nonTrainingDaysPerWeek: 'Hviledager per uke',
        avgCost100kcal: 'Gjennomsnittlig kostnad per 100 kcal',
        secondCost100kcal: 'Andre kostnad per 100 kcal (valgfritt)'
    },

    // ========== PLACEHOLDERS ==========
    placeholders: {
        searchCurrencies: 'Skriv for å søke valutaer',
        searchLanguages: 'Søk språk...',
        productName: 'Skriv inn produktnavn...',
        enterCalories: 'Skriv inn kalorier...',
        enterPrice: 'Skriv inn pris...'
    },

    // ========== HEADERS AND TITLES ==========
    headers: {
        calculator: '💰 100 kcal Kostnadskalkulator',
        checkEnergyCost: 'Sjekk kostnaden for energi i forskjellige produkter',
        funFact: '🤔 Morsomt Faktum',
        foodExpenses: '💰 Dine Matutgifter',
        costCalculation: 'Du kan beregne hvor mye du vil bruke på mat med en spesifikk kostnad per 100 kcal'
    },

    // ========== VALIDATION MESSAGES ==========
    validation: {
        required: 'Dette feltet er obligatorisk',
        mustBeNumber: 'Må være et tall',
        mustBePositive: 'Må være større enn 0',
        maxValue: (max) => `Maksverdi er ${max}`,
        minValue: (min) => `Minimumverdi er ${min}`
    },

    // ========== UNITS ==========
    units: {
        kcal: 'kcal',
        grams: 'g',
        kg: 'kg',
        piece: 'stykke',
        per100g: '/100g',
        perKg: '/kg',
        perPiece: '/stykke',
        days: 'dager',
        week: 'uke'
    },

    // ========== MISCELLANEOUS ==========
    misc: {
        optional: 'valgfritt',
        required: 'obligatorisk',
        loading: 'Laster...',
        noResults: 'Ingen resultater funnet',
        currency: 'Valuta',
        language: 'Språk',
        selected: 'Valgt',
        choose: 'Velg',
        search: 'Søk',
        save: 'Lagre',
        cancel: 'Avbryt',
        confirm: 'Bekreft',
        yes: 'Ja',
        no: 'Nei',
        ok: 'OK',
        error: 'Feil',
        success: 'Suksess',
        warning: 'Advarsel',
        info: 'Info'
    },

    // ========== TECHNICAL MESSAGES ==========
    technical: {
        scriptLoadError: 'Kunne ikke laste skript',
        dataLoadError: 'Kunne ikke laste data',
        saveError: 'Kunne ikke lagre data',
        networkError: 'Nettverksfeil',
        timeout: 'Forespørsel tidsavbrudd',
        invalidData: 'Ugyldig dataformat',
        notSupported: 'Funksjonen støttes ikke i denne nettleseren'
    },

    // ========== LANGUAGE SELECTOR ==========
    languages: {
        english: 'Engelsk',
        polish: 'Polsk',
        norwegian: 'Norsk',
        currentLanguage: 'Nåværende språk',
        selectLanguage: 'Velg språk',
        noLanguagesFound: 'Ingen språk funnet'
    },

    // ========== CURRENCY SELECTOR ==========
    currencySelector: {
        title: '💰 Velg Din Valuta',
        description: 'Velg din foretrukne valuta for prisberegninger. Denne innstillingen vil bli husket og brukt i kalkulatoren.',
        searchPlaceholder: 'Skriv for å søke valutaer',
        selected: 'Valgt',
        noCurrenciesFound: 'Ingen valutaer funnet'
    },

    // ========== INSTRUCTIONS/HELP ==========
    instructions: {
        title: '📱 100 kcal Kostnadskalkulator Brukerveiledning',
        firstLaunch: '🚀 Første Oppstart',
        howToUse: '🎯 Hvordan Bruke Kalkulatoren',
        managingResults: '📊 Håndtering av Resultater',
        practicalTips: '💡 Praktiske Tips',
        technicalInfo: 'ℹ️ Teknisk Informasjon',
        calculatorGoal: 'Mål med Kalkulatoren',
        
        // Mode descriptions
        defaultMode: 'Standard Modus: "Per Kilogram"',
        alternativeMode: 'Alternativ Modus: "Per Stykke"',
        forMostProducts: 'For de fleste produkter i butikker',
        forIndividualProducts: 'Bruk for produkter som selges individuelt',
        
        // Actions
        sortingTable: 'Sortering av Tabellen',
        deletingProducts: 'Sletting av Produkter',
        quickComparison: 'Rask sammenligning av to produkter',
        
        // Examples
        usageExamples: 'Brukseksempler',
        breakfastCereal: 'Frokostblanding',
        yogurt: 'Yoghurt',
        nuts: 'Nøtter',
        
        // Technical details
        roundsResults: 'Kalkulatoren runder resultater til 2 desimaler for bedre lesbarhet.',
        cooldownPeriod: 'Det er en nedkjølingsperiode på 1 sekund mellom å legge til produkter for å forhindre spamming.',
        maxProducts: 'Du kan legge til maksimalt 500 produkter.',
        
        // Goal explanation
        goalExplanation: 'Kalkulatoren viser deg hvor mye 100 kcal koster fra et gitt produkt. Jo lavere verdi, jo bedre pris-til-energiverdi-forhold har produktet.',
        
        // Important notes
        importantNote: 'Husk: Kalorier og pris er ikke alt – vurder også næringsverdier, vitaminer og mineraler når du velger produkter! 🥗'
    },

    // ========== MODE SWITCHING ==========
    modes: {
        perKilogram: 'Per Kilogram',
        perPiece: 'Per Stykke',
        normal: 'Normal',
        trainingRest: 'Trening/Hvile',
        
        // Descriptions
        perKgDescription: 'For de fleste butikkprodukter',
        perPieceDescription: 'For individuelt solgte varer',
        normalDescription: 'Standard daglig kalorisammenligning',
        trainingRestDescription: 'Forskjellige kalorier for trenings- og hviledager'
    },

    // ========== STEP-BY-STEP INSTRUCTIONS ==========
    steps: {
        step1: 'Steg 1',
        step2: 'Steg 2',
        step3: 'Steg 3',
        step4: 'Steg 4',
        step5: 'Steg 5',
        
        // Common actions
        enterProductName: 'Skriv inn produktnavn (valgfritt)',
        enterCalories: 'Skriv inn kalorier per 100g',
        enterPrice: 'Skriv inn prisinformasjon',
        clickAdd: 'Klikk "Legg til Produkt"',
        viewResults: 'Se resultater i tabellen',
        
        // Specific instructions
        convertPrice: 'Konverter prisen til per kilogram (f.eks. 500g for 50 kr = 100 kr/kg)',
        chooseOneMethod: 'Velg ÉN metode',
        pricePerPiece: 'Pris per stykke - hvor mye ett stykke koster',
        orPricePerKg: 'ELLER Pris per kg - den konverterte prisen per kilogram',
        clickColumnHeader: 'Klikk en kolonne-overskrift for å sortere',
        compareColumn: 'Sammenlign "Kostnad for 100 kcal" kolonnen'
    }
};

// Initialize the i18n system with Norwegian translations
if (typeof window.i18nManager !== 'undefined') {
    window.i18nManager.init('no', norwegianTranslations);
} else {
    // Fallback if base system isn't loaded
    console.error('i18n-base.js must be loaded before i18n-no.js');
    
    // Store translations for later initialization
    window.pendingTranslations = {
        language: 'no',
        translations: norwegianTranslations
    };
}