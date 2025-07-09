// i18n-pl.js - Complete Polish translations
// This file should be loaded AFTER i18n-base.js

const polishTranslations = {
   // ========== ALERT MESSAGES ==========
   alerts: {
       // Rate limiting
       rateLimit: (seconds) => `⏱️ Poczekaj ${seconds} sekund przed kolejnym obliczeniem!`,
       rateLimitProduct: (seconds) => `⏱️ Poczekaj ${seconds} sekund przed dodaniem kolejnego produktu!`,
       
       // Product limits
       productLimit: (max) => `⚠️ Osiągnięto maksymalną liczbę produktów (${max}). Usuń niektóre produkty, aby dodać nowe.`,
       noProducts: 'Brak produktów do usunięcia!',
       confirmDeleteAll: 'Czy na pewno chcesz usunąć wszystkie produkty? Tej operacji nie można cofnąć.',
       
       // Form validation
       fillRequired: 'Wypełnij wymagane pola!',
       validCalories: 'Wprowadź prawidłową wartość kalorii (większą od 0)!',
       validPrice: 'Wprowadź prawidłową cenę za kg (większą od 0)!',
       validWeight: 'Wprowadź prawidłową wagę sztuki (większą od 0)!',
       priceRequired: 'Wprowadź cenę za sztukę LUB za kilogram!',
       sumSeven: 'Suma dni treningowych i nietreningowych musi wynosić 7!',
       
       // Language redirects
       redirectPL: 'Przekierowywanie do polskiej wersji strony...',
       redirectNO: 'Przekierowywanie do norweskiej wersji strony...',
       redirectEN: 'Przekierowywanie do angielskiej wersji strony...'
   },

   // ========== TABLE CONTENT ==========
   table: {
       noProducts: 'Dodaj swój pierwszy produkt, aby zobaczyć porównanie kosztów! 🚀',
       deleteAllBtn: '🗑️ Usuń Wszystkie',
       
       // Table headers
       headerProduct: '🍎 Produkt',
       headerCalories: '🔥 Kcal/100g',
       headerPrice: '💵 Cena za kg',
       headerCost: '💰 Koszt 100 kcal',
       headerActions: '🗑️'
   },

   // ========== COST CALCULATION RESULTS ==========
   costResults: {
       // Cost types
       firstCost: 'Pierwszy Koszt',
       secondCost: 'Drugi Koszt',
       difference: 'Różnica w Kosztach',
       
       // Comparison indicators
       firstCheaper: '(pierwszy tańszy)',
       secondCheaper: '(drugi tańszy)',
       
       // Time periods
       daily: 'Dziennie',
       weekly: 'Tygodniowo',
       monthly: 'Miesięcznie',
       yearly: 'Rocznie',
       
       // Average calories text
       avgCalories: (calories) => `śr. ${calories} kcal/dzień`,
       
       // Results header
       resultsHeader: '💰 Twoje Wydatki na Jedzenie'
   },

   // ========== SUCCESS MESSAGES ==========
   success: {
       currencySet: (code, symbol) => `✅ Waluta ustawiona na ${code} (${symbol})`,
       productAdded: 'Produkt dodany pomyślnie!',
       productDeleted: 'Produkt usunięty pomyślnie!'
   },

   // ========== PRODUCT MANAGEMENT ==========
   productName: {
       default: 'Produkt',
       // Auto-generated names will be: Produkt1, Produkt2, etc.
   },

   // ========== CURRENCY LABELS ==========
   currency: {
       pricePerKg: 'Cena za kg',
       pricePerPiece: 'Cena za sztukę',
       cost100kcal: 'Koszt za 100 kcal',
       averageCost: 'Średni koszt za 100 kcal',
       secondCost: 'Drugi koszt za 100 kcal'
   },

   // ========== BUTTONS AND ACTIONS ==========
   buttons: {
       addProduct: '➕ Dodaj Produkt',
       calculate: '🧮 Oblicz',
       calculateCosts: '🧮 Oblicz Koszty',
       deleteAll: '🗑️ Usuń Wszystkie',
       delete: '🗑️',
       
       // Mode switching
       perKilogram: 'Za Kilogram',
       perPiece: 'Za Sztukę',
       normal: 'Standardowy',
       trainingRest: 'Trening/Odpoczynek'
   },

   // ========== FORM LABELS ==========
   labels: {
       // Product form
       productName: 'Nazwa Produktu',
       productNameOptional: 'Nazwa Produktu (opcjonalnie)',
       caloriesPer100g: 'Kcal/100g',
       pricePerKg: 'Cena za kg',
       pricePerPiece: 'Cena za sztukę',
       weightPerPiece: 'Waga za sztukę (g)',
       
       // Cost calculation form
       dailyCalories: 'Ile kalorii jesz dziennie',
       trainingDayCalories: 'Kalorie w dzień treningowy',
       nonTrainingDayCalories: 'Kalorie w dzień odpoczynku',
       trainingDaysPerWeek: 'Dni treningowe w tygodniu',
       nonTrainingDaysPerWeek: 'Dni odpoczynku w tygodniu',
       avgCost100kcal: 'Średni koszt za 100 kcal',
       secondCost100kcal: 'Drugi koszt za 100 kcal (opcjonalnie)'
   },

   // ========== PLACEHOLDERS ==========
   placeholders: {
       searchCurrencies: 'Wpisz, aby wyszukać waluty',
       searchLanguages: 'Szukaj języków...',
       productName: 'Wprowadź nazwę produktu...',
       enterCalories: 'Wprowadź kalorie...',
       enterPrice: 'Wprowadź cenę...'
   },

   // ========== HEADERS AND TITLES ==========
   headers: {
       calculator: '💰 Kalkulator Kosztu 100 kcal',
       checkEnergyCost: 'Sprawdź koszt energii w różnych produktach',
       funFact: '🤔 Ciekawostka',
       foodExpenses: '💰 Twoje Wydatki na Jedzenie',
       costCalculation: 'Możesz obliczyć ile wydasz na jedzenie przy określonym koszcie za 100 kcal'
   },

   // ========== VALIDATION MESSAGES ==========
   validation: {
       required: 'To pole jest wymagane',
       mustBeNumber: 'Musi być liczbą',
       mustBePositive: 'Musi być większe od 0',
       maxValue: (max) => `Maksymalna wartość to ${max}`,
       minValue: (min) => `Minimalna wartość to ${min}`
   },

   // ========== UNITS ==========
   units: {
       kcal: 'kcal',
       grams: 'g',
       kg: 'kg',
       piece: 'sztuka',
       per100g: '/100g',
       perKg: '/kg',
       perPiece: '/sztuka',
       days: 'dni',
       week: 'tydzień'
   },

   // ========== MISCELLANEOUS ==========
   misc: {
       optional: 'opcjonalnie',
       required: 'wymagane',
       loading: 'Ładowanie...',
       noResults: 'Brak wyników',
       currency: 'Waluta',
       language: 'Język',
       selected: 'Wybrane',
       choose: 'Wybierz',
       search: 'Szukaj',
       save: 'Zapisz',
       cancel: 'Anuluj',
       confirm: 'Potwierdź',
       yes: 'Tak',
       no: 'Nie',
       ok: 'OK',
       error: 'Błąd',
       success: 'Sukces',
       warning: 'Ostrzeżenie',
       info: 'Informacja'
   },

   // ========== TECHNICAL MESSAGES ==========
   technical: {
       scriptLoadError: 'Nie udało się załadować skryptu',
       dataLoadError: 'Nie udało się załadować danych',
       saveError: 'Nie udało się zapisać danych',
       networkError: 'Błąd sieci',
       timeout: 'Przekroczono limit czasu żądania',
       invalidData: 'Nieprawidłowy format danych',
       notSupported: 'Funkcja nie jest obsługiwana w tej przeglądarce'
   },

   // ========== LANGUAGE SELECTOR ==========
   languages: {
       english: 'Angielski',
       polish: 'Polski',
       norwegian: 'Norweski',
       currentLanguage: 'Aktualny język',
       selectLanguage: 'Wybierz język',
       noLanguagesFound: 'Nie znaleziono języków'
   },

   // ========== CURRENCY SELECTOR ==========
   currencySelector: {
       title: '💰 Wybierz Swoją Walutę',
       description: 'Wybierz preferowaną walutę dla obliczeń cenowych. To ustawienie zostanie zapamiętane i będzie używane w kalkulatorze.',
       searchPlaceholder: 'Wpisz, aby wyszukać waluty',
       selected: 'Wybrane',
       noCurrenciesFound: 'Nie znaleziono walut'
   },

   // ========== INSTRUCTIONS/HELP ==========
   instructions: {
       title: '📱 Przewodnik Użytkownika Kalkulatora Kosztu 100 kcal',
       firstLaunch: '🚀 Pierwsze Uruchomienie',
       howToUse: '🎯 Jak Używać Kalkulatora',
       managingResults: '📊 Zarządzanie Wynikami',
       practicalTips: '💡 Praktyczne Wskazówki',
       technicalInfo: 'ℹ️ Informacje Techniczne',
       calculatorGoal: 'Cel Kalkulatora',
       
       // Mode descriptions
       defaultMode: 'Domyślny Tryb: "Za Kilogram"',
       alternativeMode: 'Alternatywny Tryb: "Za Sztukę"',
       forMostProducts: 'Dla większości produktów w sklepach',
       forIndividualProducts: 'Użyj dla produktów sprzedawanych pojedynczo',
       
       // Actions
       sortingTable: 'Sortowanie Tabeli',
       deletingProducts: 'Usuwanie Produktów',
       quickComparison: 'Szybkie porównanie dwóch produktów',
       
       // Examples
       usageExamples: 'Przykłady Użycia',
       breakfastCereal: 'Płatki Śniadaniowe',
       yogurt: 'Jogurt',
       nuts: 'Orzechy',
       
       // Technical details
       roundsResults: 'Kalkulator zaokrągla wyniki do 2 miejsc po przecinku dla lepszej czytelności.',
       cooldownPeriod: 'Jest okres ochłodzenia 1 sekundy między dodawaniem produktów, aby zapobiec spamowaniu.',
       maxProducts: 'Możesz dodać maksymalnie 500 produktów.',
       
       // Goal explanation
       goalExplanation: 'Kalkulator pokazuje Ci ile kosztuje 100 kcal z danego produktu. Im niższa wartość, tym lepszy stosunek ceny do wartości energetycznej produktu.',
       
       // Important notes
       importantNote: 'Pamiętaj: Kalorie i cena to nie wszystko – rozważ także wartości odżywcze, witaminy i minerały przy wyborze produktów! 🥗'
   },

   // ========== MODE SWITCHING ==========
   modes: {
       perKilogram: 'Za Kilogram',
       perPiece: 'Za Sztukę',
       normal: 'Standardowy',
       trainingRest: 'Trening/Odpoczynek',
       
       // Descriptions
       perKgDescription: 'Dla większości produktów sklepowych',
       perPieceDescription: 'Dla produktów sprzedawanych pojedynczo',
       normalDescription: 'Standardowe dzienne obliczenie kalorii',
       trainingRestDescription: 'Różne kalorie dla dni treningowych i odpoczynku'
   },

   // ========== STEP-BY-STEP INSTRUCTIONS ==========
   steps: {
       step1: 'Krok 1',
       step2: 'Krok 2',
       step3: 'Krok 3',
       step4: 'Krok 4',
       step5: 'Krok 5',
       
       // Common actions
       enterProductName: 'Wprowadź nazwę produktu (opcjonalnie)',
       enterCalories: 'Wprowadź kalorie na 100g',
       enterPrice: 'Wprowadź informacje o cenie',
       clickAdd: 'Kliknij "Dodaj Produkt"',
       viewResults: 'Zobacz wyniki w tabeli',
       
       // Specific instructions
       convertPrice: 'Przelicz cenę na kilogram (np. 500g za 5 zł = 10 zł/kg)',
       chooseOneMethod: 'Wybierz JEDNĄ metodę',
       pricePerPiece: 'Cena za sztukę - ile kosztuje jedna sztuka',
       orPricePerKg: 'LUB Cena za kg - przeliczona cena za kilogram',
       clickColumnHeader: 'Kliknij nagłówek kolumny, aby sortować',
       compareColumn: 'Porównaj kolumnę "Koszt 100 kcal"'
   }
};

// Initialize the i18n system with Polish translations
if (typeof window.i18nManager !== 'undefined') {
   window.i18nManager.init('pl', polishTranslations);
} else {
   // Fallback if base system isn't loaded
   console.error('i18n-base.js must be loaded before i18n-pl.js');
   
   // Store translations for later initialization
   window.pendingTranslations = {
       language: 'pl',
       translations: polishTranslations
   };
}