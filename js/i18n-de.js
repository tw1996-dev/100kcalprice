// i18n-de.js - Complete German translations
// This file should be loaded AFTER i18n-base.js

const germanTranslations = {
   // ========== ALERT MESSAGES ==========
   alerts: {
       // Rate limiting
       rateLimit: (seconds) => `⏱️ Bitte warten Sie ${seconds} Sekunden, bevor Sie erneut berechnen!`,
       rateLimitProduct: (seconds) => `⏱️ Bitte warten Sie ${seconds} Sekunden, bevor Sie ein weiteres Produkt hinzufügen!`,
       
       // Product limits
       productLimit: (max) => `⚠️ Maximale Anzahl von Produkten (${max}) erreicht. Löschen Sie einige Produkte, um neue hinzuzufügen.`,
       noProducts: 'Keine Produkte zum Löschen!',
       confirmDeleteAll: 'Sind Sie sicher, dass Sie alle Produkte löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
       
       // Form validation
       fillRequired: 'Bitte füllen Sie die erforderlichen Felder aus!',
       validCalories: 'Geben Sie einen gültigen Kalorienwert ein (größer als 0)!',
       validPrice: 'Geben Sie einen gültigen Preis pro kg ein (größer als 0)!',
       validWeight: 'Geben Sie ein gültiges Gewicht pro Stück ein (größer als 0)!',
       priceRequired: 'Geben Sie einen Preis pro Stück ODER pro Kilogramm ein!',
       sumSeven: 'Die Summe von Trainings- und Ruhetagen muss 7 betragen!',
       
       // Language redirects
       redirectPL: 'Weiterleitung zur polnischen Version der Seite...',
       redirectNO: 'Weiterleitung zur norwegischen Version der Seite...',
       redirectEN: 'Weiterleitung zur englischen Version der Seite...',
       redirectFR: 'Weiterleitung zur französischen Version der Seite...',
       redirectDE: 'Weiterleitung zur deutschen Version der Seite...'
   },

   // ========== TABLE CONTENT ==========
   table: {
       noProducts: 'Fügen Sie Ihr erstes Produkt hinzu, um den Kostenvergleich zu sehen! 🚀',
       deleteAllBtn: '🗑️ Alle löschen',
       
       // Table headers
       headerProduct: '🍎 Produkt',
       headerCalories: '🔥 Kcal/100g',
       headerPrice: '💵 Preis pro kg',
       headerCost: '💰 Kosten 100 kcal',
       headerActions: '🗑️'
   },

   // ========== COST CALCULATION RESULTS ==========
   costResults: {
       // Cost types
       firstCost: 'Erste Kosten',
       secondCost: 'Zweite Kosten',
       difference: 'Kostendifferenz',
       
       // Comparison indicators
       firstCheaper: '(erste günstiger)',
       secondCheaper: '(zweite günstiger)',
       
       // Time periods
       daily: 'Täglich',
       weekly: 'Wöchentlich',
       monthly: 'Monatlich',
       yearly: 'Jährlich',
       
       // Average calories text
       avgCalories: (calories) => `durchschn. ${calories} kcal/Tag`,
       
       // Results header
       resultsHeader: '💰 Ihre Lebensmittelausgaben'
   },

   // ========== SUCCESS MESSAGES ==========
   success: {
       currencySet: (code, symbol) => `✅ Währung auf ${code} (${symbol}) gesetzt`,
       productAdded: 'Produkt erfolgreich hinzugefügt!',
       productDeleted: 'Produkt erfolgreich gelöscht!'
   },

   // ========== PRODUCT MANAGEMENT ==========
   productName: {
       default: 'Produkt',
       // Auto-generated names will be: Produkt1, Produkt2, etc.
   },

   // ========== CURRENCY LABELS ==========
   currency: {
       pricePerKg: 'Preis pro kg',
       pricePerPiece: 'Preis pro Stück',
       cost100kcal: 'Kosten für 100 kcal',
       averageCost: 'Durchschnittliche Kosten für 100 kcal',
       secondCost: 'Zweite Kosten für 100 kcal'
   },

   // ========== BUTTONS AND ACTIONS ==========
   buttons: {
       addProduct: '➕ Produkt hinzufügen',
       calculate: '🧮 Berechnen',
       calculateCosts: '🧮 Kosten berechnen',
       deleteAll: '🗑️ Alle löschen',
       delete: '🗑️',
       
       // Mode switching
       perKilogram: 'Pro Kilogramm',
       perPiece: 'Pro Stück',
       normal: 'Standard',
       trainingRest: 'Training/Ruhe'
   },

   // ========== FORM LABELS ==========
   labels: {
       // Product form
       productName: 'Produktname',
       productNameOptional: 'Produktname (optional)',
       caloriesPer100g: 'Kcal/100g',
       pricePerKg: 'Preis pro kg',
       pricePerPiece: 'Preis pro Stück',
       weightPerPiece: 'Gewicht pro Stück (g)',
       
       // Cost calculation form
       dailyCalories: 'Wie viele Kalorien essen Sie täglich',
       trainingDayCalories: 'Kalorien am Trainingstag',
       nonTrainingDayCalories: 'Kalorien am Ruhetag',
       trainingDaysPerWeek: 'Trainingstage pro Woche',
       nonTrainingDaysPerWeek: 'Ruhetage pro Woche',
       avgCost100kcal: 'Durchschnittliche Kosten für 100 kcal',
       firstCost100kcal: 'Erste Kosten für 100 kcal',
       secondCost100kcal: 'Zweite Kosten für 100 kcal (optional)'
   },

   // ========== PLACEHOLDERS ==========
   placeholders: {
       searchCurrencies: 'Tippen Sie, um Währungen zu suchen',
       searchLanguages: 'Sprachen suchen...',
       productName: 'Produktname eingeben...',
       enterCalories: 'Kalorien eingeben...',
       enterPrice: 'Preis eingeben...'
   },

   // ========== HEADERS AND TITLES ==========
   headers: {
       calculator: '💰 100 kcal Kostenrechner',
       checkEnergyCost: 'Überprüfen Sie die Energiekosten verschiedener Produkte',
       funFact: '🤔 Wissenswertes',
       foodExpenses: '💰 Ihre Lebensmittelausgaben',
       costCalculation: 'Sie können berechnen, wie viel Sie für Lebensmittel bei bestimmten Kosten pro 100 kcal ausgeben werden'
   },

   // ========== VALIDATION MESSAGES ==========
   validation: {
       required: 'Dieses Feld ist erforderlich',
       mustBeNumber: 'Muss eine Zahl sein',
       mustBePositive: 'Muss größer als 0 sein',
       maxValue: (max) => `Maximalwert ist ${max}`,
       minValue: (min) => `Minimalwert ist ${min}`
   },

   // ========== UNITS ==========
   units: {
       kcal: 'kcal',
       grams: 'g',
       kg: 'kg',
       piece: 'Stück',
       per100g: '/100g',
       perKg: '/kg',
       perPiece: '/Stück',
       days: 'Tage',
       week: 'Woche'
   },

   // ========== MISCELLANEOUS ==========
   misc: {
       optional: 'optional',
       required: 'erforderlich',
       loading: 'Laden...',
       noResults: 'Keine Ergebnisse',
       currency: 'Währung',
       language: 'Sprache',
       selected: 'Ausgewählt',
       choose: 'Wählen',
       search: 'Suchen',
       save: 'Speichern',
       cancel: 'Abbrechen',
       confirm: 'Bestätigen',
       yes: 'Ja',
       no: 'Nein',
       ok: 'OK',
       error: 'Fehler',
       success: 'Erfolg',
       warning: 'Warnung',
       info: 'Information'
   },

   // ========== TECHNICAL MESSAGES ==========
   technical: {
       scriptLoadError: 'Skript konnte nicht geladen werden',
       dataLoadError: 'Daten konnten nicht geladen werden',
       saveError: 'Daten konnten nicht gespeichert werden',
       networkError: 'Netzwerkfehler',
       timeout: 'Anfrage-Timeout überschritten',
       invalidData: 'Ungültiges Datenformat',
       notSupported: 'Funktion wird in diesem Browser nicht unterstützt'
   },

   // ========== LANGUAGE SELECTOR ==========
   languages: {
       english: 'Englisch',
       polish: 'Polnisch',
       norwegian: 'Norwegisch',
    //    spanish: 'Spanisch',
       french: 'Französisch',
       german: 'Deutsch',
       currentLanguage: 'Aktuelle Sprache',
       selectLanguage: 'Sprache auswählen',
       noLanguagesFound: 'Keine Sprachen gefunden'
   },

   // ========== CURRENCY SELECTOR ==========
   currencySelector: {
       title: '💰 Wählen Sie Ihre Währung',
       description: 'Wählen Sie Ihre bevorzugte Währung für Preisberechnungen. Diese Einstellung wird gespeichert und im Rechner verwendet.',
       placeholder: 'Tippen Sie, um Währungen zu suchen',
       selected: 'Ausgewählt',
       noResults: 'Keine Währung gefunden'
   }
};

// Initialize the i18n system with German translations
if (typeof window.i18nManager !== 'undefined') {
    window.i18nManager.init('de', germanTranslations);
} else {
    // Fallback if base system isn't loaded
    console.error('i18n-base.js must be loaded before i18n-de.js');
    
    // Store translations for later initialization
    window.pendingTranslations = {
        language: 'de',
        translations: germanTranslations
    };
}