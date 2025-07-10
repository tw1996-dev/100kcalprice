// i18n-fr.js - Complete French translations
// This file should be loaded AFTER i18n-base.js

const frenchTranslations = {
   // ========== ALERT MESSAGES ==========
   alerts: {
       // Rate limiting
       rateLimit: (seconds) => `⏱️ Attendez ${seconds} secondes avant de calculer à nouveau !`,
       rateLimitProduct: (seconds) => `⏱️ Attendez ${seconds} secondes avant d'ajouter un autre produit !`,
       
       // Product limits
       productLimit: (max) => `⚠️ Nombre maximum de produits atteint (${max}). Supprimez quelques produits pour en ajouter de nouveaux.`,
       noProducts: 'Aucun produit à supprimer !',
       confirmDeleteAll: 'Êtes-vous sûr de vouloir supprimer tous les produits ? Cette action ne peut pas être annulée.',
       
       // Form validation
       fillRequired: 'Veuillez remplir les champs obligatoires !',
       validCalories: 'Entrez une valeur calorique valide (supérieure à 0) !',
       validPrice: 'Entrez un prix valide par kg (supérieur à 0) !',
       validWeight: 'Entrez un poids par pièce valide (supérieur à 0) !',
       priceRequired: 'Entrez un prix par pièce OU par kilogramme !',
       sumSeven: 'La somme des jours d\'entraînement et de repos doit être de 7 !',
       
       // Language redirects
       redirectPL: 'Redirection vers la version polonaise de la page...',
       redirectNO: 'Redirection vers la version norvégienne de la page...',
       redirectEN: 'Redirection vers la version anglaise de la page...',
       redirectFR: 'Redirection vers la version française de la page...'
   },

   // ========== TABLE CONTENT ==========
   table: {
       noProducts: 'Ajoutez votre premier produit pour voir la comparaison des coûts ! 🚀',
       deleteAllBtn: '🗑️ Supprimer Tout',
       
       // Table headers
       headerProduct: '🍎 Produit',
       headerCalories: '🔥 Kcal/100g',
       headerPrice: '💵 Prix par kg',
       headerCost: '💰 Coût de 100 kcal',
       headerActions: '🗑️'
   },

   // ========== COST CALCULATION RESULTS ==========
   costResults: {
       // Cost types
       firstCost: 'Premier Coût',
       secondCost: 'Deuxième Coût',
       difference: 'Différence de Coût',
       
       // Comparison indicators
       firstCheaper: '(premier moins cher)',
       secondCheaper: '(deuxième moins cher)',
       
       // Time periods
       daily: 'Quotidien',
       weekly: 'Hebdomadaire',
       monthly: 'Mensuel',
       yearly: 'Annuel',
       
       // Average calories text
       avgCalories: (calories) => `moy. ${calories} kcal/jour`,
       
       // Results header
       resultsHeader: '💰 Vos Dépenses Alimentaires'
   },

   // ========== SUCCESS MESSAGES ==========
   success: {
       currencySet: (code, symbol) => `✅ Devise définie sur ${code} (${symbol})`,
       productAdded: 'Produit ajouté avec succès !',
       productDeleted: 'Produit supprimé avec succès !'
   },

   // ========== PRODUCT MANAGEMENT ==========
   productName: {
       default: 'Produit',
       // Auto-generated names will be: Produit1, Produit2, etc.
   },

   // ========== CURRENCY LABELS ==========
   currency: {
       pricePerKg: 'Prix par kg',
       pricePerPiece: 'Prix par pièce',
       cost100kcal: 'Coût pour 100 kcal',
       averageCost: 'Coût moyen pour 100 kcal',
       secondCost: 'Deuxième coût pour 100 kcal'
   },

   // ========== BUTTONS AND ACTIONS ==========
   buttons: {
       addProduct: '➕ Ajouter Produit',
       calculate: '🧮 Calculer',
       calculateCosts: '🧮 Calculer les Coûts',
       deleteAll: '🗑️ Supprimer Tout',
       delete: '🗑️',
       
       // Mode switching
       perKilogram: 'Par Kilogramme',
       perPiece: 'Par Pièce',
       normal: 'Standard',
       trainingRest: 'Entraînement/Repos'
   },

   // ========== FORM LABELS ==========
   labels: {
       // Product form
       productName: 'Nom du Produit',
       productNameOptional: 'Nom du Produit (optionnel)',
       caloriesPer100g: 'Kcal/100g',
       pricePerKg: 'Prix par kg',
       pricePerPiece: 'Prix par pièce',
       weightPerPiece: 'Poids par pièce (g)',
       
       // Cost calculation form
       dailyCalories: 'Combien de calories mangez-vous par jour',
       trainingDayCalories: 'Calories le jour d\'entraînement',
       nonTrainingDayCalories: 'Calories le jour de repos',
       trainingDaysPerWeek: 'Jours d\'entraînement par semaine',
       nonTrainingDaysPerWeek: 'Jours de repos par semaine',
       avgCost100kcal: 'Coût moyen pour 100 kcal',
       firstCost100kcal: 'Premier coût pour 100 kcal',
       secondCost100kcal: 'Deuxième coût pour 100 kcal (optionnel)'
   },

   // ========== PLACEHOLDERS ==========
   placeholders: {
       searchCurrencies: 'Tapez pour rechercher des devises',
       searchLanguages: 'Rechercher des langues...',
       productName: 'Entrez le nom du produit...',
       enterCalories: 'Entrez les calories...',
       enterPrice: 'Entrez le prix...'
   },

   // ========== HEADERS AND TITLES ==========
   headers: {
       calculator: '💰 Calculatrice de Coût de 100 kcal',
       checkEnergyCost: 'Vérifiez le coût de l\'énergie dans différents produits',
       funFact: '🤔 Fait Amusant',
       foodExpenses: '💰 Vos Dépenses Alimentaires',
       costCalculation: 'Vous pouvez calculer combien vous dépenserez en nourriture pour un coût donné par 100 kcal'
   },

   // ========== VALIDATION MESSAGES ==========
   validation: {
       required: 'Ce champ est obligatoire',
       mustBeNumber: 'Doit être un nombre',
       mustBePositive: 'Doit être supérieur à 0',
       maxValue: (max) => `La valeur maximale est ${max}`,
       minValue: (min) => `La valeur minimale est ${min}`
   },

   // ========== UNITS ==========
   units: {
       kcal: 'kcal',
       grams: 'g',
       kg: 'kg',
       piece: 'pièce',
       per100g: '/100g',
       perKg: '/kg',
       perPiece: '/pièce',
       days: 'jours',
       week: 'semaine'
   },

   // ========== MISCELLANEOUS ==========
   misc: {
       optional: 'optionnel',
       required: 'obligatoire',
       loading: 'Chargement...',
       noResults: 'Aucun résultat',
       currency: 'Devise',
       language: 'Langue',
       selected: 'Sélectionné',
       choose: 'Choisir',
       search: 'Rechercher',
       save: 'Enregistrer',
       cancel: 'Annuler',
       confirm: 'Confirmer',
       yes: 'Oui',
       no: 'Non',
       ok: 'OK',
       error: 'Erreur',
       success: 'Succès',
       warning: 'Avertissement',
       info: 'Information'
   },

   // ========== TECHNICAL MESSAGES ==========
   technical: {
       scriptLoadError: 'Échec du chargement du script',
       dataLoadError: 'Échec du chargement des données',
       saveError: 'Échec de la sauvegarde des données',
       networkError: 'Erreur réseau',
       timeout: 'Délai d\'attente de la demande dépassé',
       invalidData: 'Format de données invalide',
       notSupported: 'Fonction non prise en charge dans ce navigateur'
   },

   // ========== LANGUAGE SELECTOR ==========
   languages: {
       english: 'Anglais',
       polish: 'Polonais',
       norwegian: 'Norvégien',
       french: 'Français',
       currentLanguage: 'Langue actuelle',
       selectLanguage: 'Sélectionner la langue',
       noLanguagesFound: 'Aucune langue trouvée'
   },

   // ========== CURRENCY SELECTOR ==========
   currencySelector: {
       title: '💰 Choisissez Votre Devise',
       description: 'Sélectionnez votre devise préférée pour les calculs de prix. Ce paramètre sera mémorisé et utilisé dans la calculatrice.',
       placeholder: 'Tapez pour rechercher des devises',
       selected: 'Sélectionnée',
       noResults: 'Aucune devise trouvée'
   }
};

// Initialize the i18n system with French translations
if (typeof window.i18nManager !== 'undefined') {
    window.i18nManager.init('fr', frenchTranslations);
} else {
    // Fallback if base system isn't loaded
    console.error('i18n-base.js must be loaded before i18n-fr.js');
    
    // Store translations for later initialization
    window.pendingTranslations = {
        language: 'fr',
        translations: frenchTranslations
    };
}