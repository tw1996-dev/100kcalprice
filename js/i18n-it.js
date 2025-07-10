// i18n-it.js - Complete Italian translations
// This file should be loaded AFTER i18n-base.js

const italianTranslations = {
    // ========== ALERT MESSAGES ==========
    alerts: {
        // Rate limiting
        rateLimit: (seconds) => `⏱️ Attendere ${seconds} secondi prima di calcolare di nuovo!`,
        rateLimitProduct: (seconds) => `⏱️ Attendere ${seconds} secondi prima di aggiungere un altro prodotto!`,
        
        // Product limits
        productLimit: (max) => `⚠️ Numero massimo di prodotti (${max}) raggiunto. Eliminare alcuni prodotti per aggiungerne di nuovi.`,
        noProducts: 'Nessun prodotto da eliminare!',
        confirmDeleteAll: 'Sei sicuro di voler eliminare tutti i prodotti? Questa azione non può essere annullata.',
        
        // Form validation
        fillRequired: 'Compilare i campi obbligatori!',
        validCalories: 'Inserire un valore calorico valido (maggiore di 0)!',
        validPrice: 'Inserire un prezzo valido per kg (maggiore di 0)!',
        validWeight: 'Inserire un peso valido per pezzo (maggiore di 0)!',
        priceRequired: 'Inserire un prezzo per pezzo O per chilogrammo!',
        sumSeven: 'La somma dei giorni di allenamento e riposo deve essere 7!',
        
        // Language redirects
        redirectPL: 'Reindirizzamento alla versione polacca della pagina...',
        redirectNO: 'Reindirizzamento alla versione norvegese della pagina...',
        redirectEN: 'Reindirizzamento alla versione inglese della pagina...',
        redirectFR: 'Reindirizzamento alla versione francese della pagina...',
        redirectDE: 'Reindirizzamento alla versione tedesca della pagina...',
        redirectES: 'Reindirizzamento alla versione spagnola della pagina...',
        redirectIT: 'Reindirizzamento alla versione italiana della pagina...'
    },

    // ========== TABLE CONTENT ==========
    table: {
        noProducts: 'Aggiungi il tuo primo prodotto per vedere il confronto dei costi! 🚀',
        deleteAllBtn: '🗑️ Elimina Tutto',
        
        // Table headers
        headerProduct: '🍎 Prodotto',
        headerCalories: '🔥 Kcal/100g',
        headerPrice: '💵 Prezzo per kg',
        headerCost: '💰 Costo di 100 kcal',
        headerActions: '🗑️'
    },

    // ========== COST CALCULATION RESULTS ==========
    costResults: {
        // Cost types
        firstCost: 'Primo Costo',
        secondCost: 'Secondo Costo',
        difference: 'Differenza di Costo',
        
        // Comparison indicators
        firstCheaper: '(primo più economico)',
        secondCheaper: '(secondo più economico)',
        
        // Time periods
        daily: 'Giornaliero',
        weekly: 'Settimanale',
        monthly: 'Mensile',
        yearly: 'Annuale',
        
        // Average calories text
        avgCalories: (calories) => `media ${calories} kcal/giorno`,
        
        // Results header
        resultsHeader: '💰 Le Tue Spese Alimentari'
    },

    // ========== SUCCESS MESSAGES ==========
    success: {
        currencySet: (code, symbol) => `✅ Valuta impostata su ${code} (${symbol})`,
        productAdded: 'Prodotto aggiunto con successo!',
        productDeleted: 'Prodotto eliminato con successo!'
    },

    // ========== PRODUCT MANAGEMENT ==========
    productName: {
        default: 'Prodotto',
        // Auto-generated names will be: Prodotto1, Prodotto2, etc.
    },

    // ========== CURRENCY LABELS ==========
    currency: {
        pricePerKg: 'Prezzo per kg',
        pricePerPiece: 'Prezzo per pezzo',
        cost100kcal: 'Costo per 100 kcal',
        averageCost: 'Costo medio per 100 kcal',
        secondCost: 'Secondo costo per 100 kcal'
    },

    // ========== BUTTONS AND ACTIONS ==========
    buttons: {
        addProduct: '➕ Aggiungi Prodotto',
        calculate: '🧮 Calcola',
        calculateCosts: '🧮 Calcola Costi',
        deleteAll: '🗑️ Elimina Tutto',
        delete: '🗑️',
        
        // Mode switching
        perKilogram: 'Per Chilogrammo',
        perPiece: 'Per Pezzo',
        normal: 'Normale',
        trainingRest: 'Allenamento/Riposo'
    },

    // ========== FORM LABELS ==========
    labels: {
        // Product form
        productName: 'Nome Prodotto',
        productNameOptional: 'Nome Prodotto (opzionale)',
        caloriesPer100g: 'Kcal/100g',
        pricePerKg: 'Prezzo per kg',
        pricePerPiece: 'Prezzo per pezzo',
        weightPerPiece: 'Peso per pezzo (g)',
        
        // Cost calculation form
        dailyCalories: 'Quante calorie mangi al giorno',
        trainingDayCalories: 'Calorie nel giorno di allenamento',
        nonTrainingDayCalories: 'Calorie nel giorno di riposo',
        trainingDaysPerWeek: 'Giorni di allenamento a settimana',
        nonTrainingDaysPerWeek: 'Giorni di riposo a settimana',
        avgCost100kcal: 'Costo medio per 100 kcal',
        firstCost100kcal: 'Primo costo per 100 kcal',
        secondCost100kcal: 'Secondo costo per 100 kcal (opzionale)'
    },

    // ========== PLACEHOLDERS ==========
    placeholders: {
        searchCurrencies: 'Digita per cercare valute',
        searchLanguages: 'Cerca lingue...',
        productName: 'Inserisci nome prodotto...',
        enterCalories: 'Inserisci calorie...',
        enterPrice: 'Inserisci prezzo...'
    },

    // ========== HEADERS AND TITLES ==========
    headers: {
        calculator: '💰 Calcolatore Costo 100 kcal',
        checkEnergyCost: 'Controlla il costo dell\'energia in diversi prodotti',
        funFact: '🤔 Curiosità',
        foodExpenses: '💰 Le Tue Spese Alimentari',
        costCalculation: 'Puoi calcolare quanto spenderai per il cibo a un costo specifico per 100 kcal'
    },

    // ========== VALIDATION MESSAGES ==========
    validation: {
        required: 'Questo campo è obbligatorio',
        mustBeNumber: 'Deve essere un numero',
        mustBePositive: 'Deve essere maggiore di 0',
        maxValue: (max) => `Il valore massimo è ${max}`,
        minValue: (min) => `Il valore minimo è ${min}`
    },

    // ========== UNITS ==========
    units: {
        kcal: 'kcal',
        grams: 'g',
        kg: 'kg',
        piece: 'pezzo',
        per100g: '/100g',
        perKg: '/kg',
        perPiece: '/pezzo',
        days: 'giorni',
        week: 'settimana'
    },

    // ========== MISCELLANEOUS ==========
    misc: {
        optional: 'opzionale',
        required: 'obbligatorio',
        loading: 'Caricamento...',
        noResults: 'Nessun risultato trovato',
        currency: 'Valuta',
        language: 'Lingua',
        selected: 'Selezionato',
        choose: 'Scegli',
        search: 'Cerca',
        save: 'Salva',
        cancel: 'Annulla',
        confirm: 'Conferma',
        yes: 'Sì',
        no: 'No',
        ok: 'OK',
        error: 'Errore',
        success: 'Successo',
        warning: 'Avvertimento',
        info: 'Informazioni'
    },

    // ========== TECHNICAL MESSAGES ==========
    technical: {
        scriptLoadError: 'Errore nel caricamento dello script',
        dataLoadError: 'Errore nel caricamento dei dati',
        saveError: 'Errore nel salvataggio dei dati',
        networkError: 'Errore di rete',
        timeout: 'Timeout della richiesta superato',
        invalidData: 'Formato dati non valido',
        notSupported: 'Funzione non supportata in questo browser'
    },

    // ========== LANGUAGE SELECTOR ==========
    languages: {
        english: 'Inglese',
        polish: 'Polacco',
        norwegian: 'Norvegese',
        french: 'Francese',
        german: 'Tedesco',
        spanish: 'Spagnolo',
        italian: 'Italiano',
        currentLanguage: 'Lingua attuale',
        selectLanguage: 'Seleziona lingua',
        noLanguagesFound: 'Nessuna lingua trovata'
    },

    // ========== CURRENCY SELECTOR ==========
    currencySelector: {
        title: '💰 Scegli la Tua Valuta',
        description: 'Seleziona la tua valuta preferita per i calcoli dei prezzi. Questa impostazione sarà ricordata e usata nel calcolatore.',
        placeholder: 'Digita per cercare valute',
        selected: 'Selezionata',
        noResults: 'Nessuna valuta trovata'
    },

    // ========== INSTRUCTIONS/HELP ==========
    instructions: {
        title: '📱 Guida Utente Calcolatore Costo 100 kcal',
        firstLaunch: '🚀 Primo Avvio',
        howToUse: '🎯 Come Usare il Calcolatore',
        managingResults: '📊 Gestione Risultati',
        practicalTips: '💡 Consigli Pratici',
        technicalInfo: 'ℹ️ Informazioni Tecniche',
        calculatorGoal: 'Obiettivo del Calcolatore',
        
        // Mode descriptions
        defaultMode: 'Modalità Predefinita: "Per Chilogrammo"',
        alternativeMode: 'Modalità Alternativa: "Per Pezzo"',
        forMostProducts: 'Per la maggior parte dei prodotti nei negozi',
        forIndividualProducts: 'Usa per prodotti venduti singolarmente',
        
        // Actions
        sortingTable: 'Ordinare la Tabella',
        deletingProducts: 'Eliminare Prodotti',
        quickComparison: 'Confronto veloce di due prodotti',
        
        // Examples
        usageExamples: 'Esempi di Utilizzo',
        breakfastCereal: 'Cereali per Colazione',
        yogurt: 'Yogurt',
        nuts: 'Noci',
        
        // Technical details
        roundsResults: 'Il calcolatore arrotonda i risultati a 2 decimali per migliore leggibilità.',
        cooldownPeriod: 'C\'è un periodo di raffreddamento di 1 secondo tra l\'aggiunta di prodotti per prevenire spam.',
        maxProducts: 'Puoi aggiungere un massimo di 500 prodotti.',
        
        // Goal explanation
        goalExplanation: 'Il calcolatore ti mostra quanto costano 100 kcal da un determinato prodotto. Più basso è il valore, migliore è il rapporto prezzo-valore energetico del prodotto.',
        
        // Important notes
        importantNote: 'Ricorda: Calorie e prezzo non sono tutto – considera anche valori nutrizionali, vitamine e minerali quando scegli i prodotti! 🥗'
    },

    // ========== MODE SWITCHING ==========
    modes: {
        perKilogram: 'Per Chilogrammo',
        perPiece: 'Per Pezzo',
        normal: 'Normale',
        trainingRest: 'Allenamento/Riposo',
        
        // Descriptions
        perKgDescription: 'Per la maggior parte dei prodotti del negozio',
        perPieceDescription: 'Per articoli venduti singolarmente',
        normalDescription: 'Calcolo calorico giornaliero standard',
        trainingRestDescription: 'Calorie diverse per giorni di allenamento e riposo'
    },

    // ========== STEP-BY-STEP INSTRUCTIONS ==========
    steps: {
        step1: 'Passo 1',
        step2: 'Passo 2',
        step3: 'Passo 3',
        step4: 'Passo 4',
        step5: 'Passo 5',
        
        // Common actions
        enterProductName: 'Inserisci nome prodotto (opzionale)',
        enterCalories: 'Inserisci calorie per 100g',
        enterPrice: 'Inserisci informazioni prezzo',
        clickAdd: 'Clicca "Aggiungi Prodotto"',
        viewResults: 'Visualizza risultati nella tabella',
        
        // Specific instructions
        convertPrice: 'Converti il prezzo per chilogrammo (es. 500g per €5 = €10/kg)',
        chooseOneMethod: 'Scegli UN metodo',
        pricePerPiece: 'Prezzo per pezzo - quanto costa un articolo',
        orPricePerKg: 'O Prezzo per kg - il prezzo convertito per chilogrammo',
        clickColumnHeader: 'Clicca un\'intestazione di colonna per ordinare',
        compareColumn: 'Confronta la colonna "Costo di 100 kcal"'
    }
};

// Initialize the i18n system with Italian translations
if (typeof window.i18nManager !== 'undefined') {
    window.i18nManager.init('it', italianTranslations);
} else {
    // Fallback if base system isn't loaded
    console.error('i18n-base.js must be loaded before i18n-it.js');
    
    // Store translations for later initialization
    window.pendingTranslations = {
        language: 'it',
        translations: italianTranslations
    };
}