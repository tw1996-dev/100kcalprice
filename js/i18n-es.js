// i18n-es.js - Complete Spanish translations
// This file should be loaded AFTER i18n-base.js

const spanishTranslations = {
    // ========== ALERT MESSAGES ==========
    alerts: {
        // Rate limiting
        rateLimit: (seconds) => `⏱️ ¡Por favor espera ${seconds} segundos antes de calcular de nuevo!`,
        rateLimitProduct: (seconds) => `⏱️ ¡Por favor espera ${seconds} segundos antes de agregar otro producto!`,
        
        // Product limits
        productLimit: (max) => `⚠️ Número máximo de productos (${max}) alcanzado. Elimina algunos productos para agregar nuevos.`,
        noProducts: '¡No hay productos para eliminar!',
        confirmDeleteAll: '¿Estás seguro de que quieres eliminar todos los productos? Esta acción no se puede deshacer.',
        
        // Form validation
        fillRequired: '¡Por favor completa los campos obligatorios!',
        validCalories: '¡Introduce un valor de calorías válido (mayor que 0)!',
        validPrice: '¡Introduce un precio válido por kg (mayor que 0)!',
        validWeight: '¡Introduce un peso válido por unidad (mayor que 0)!',
        priceRequired: '¡Introduce un precio por unidad O por kilogramo!',
        sumSeven: '¡La suma de días de entrenamiento y descanso debe ser 7!',
        
        // Language redirects
        redirectPL: 'Redirigiendo a la versión polaca de la página...',
        redirectNO: 'Redirigiendo a la versión noruega de la página...',
        redirectEN: 'Redirigiendo a la versión inglesa de la página...'
    },

    // ========== TABLE CONTENT ==========
    table: {
        noProducts: '¡Agrega tu primer producto para ver la comparación de costos! 🚀',
        deleteAllBtn: '🗑️ Eliminar Todo',
        
        // Table headers
        headerProduct: '🍎 Producto',
        headerCalories: '🔥 Kcal/100g',
        headerPrice: '💵 Precio por kg',
        headerCost: '💰 Costo de 100 kcal',
        headerActions: '🗑️'
    },

    // ========== COST CALCULATION RESULTS ==========
    costResults: {
        // Cost types
        firstCost: 'Primer Costo',
        secondCost: 'Segundo Costo',
        difference: 'Diferencia de Costo',
        
        // Comparison indicators
        firstCheaper: '(primero más barato)',
        secondCheaper: '(segundo más barato)',
        
        // Time periods
        daily: 'Diario',
        weekly: 'Semanal',
        monthly: 'Mensual',
        yearly: 'Anual',
        
        // Average calories text
        avgCalories: (calories) => `prom ${calories} kcal/día`,
        
        // Results header
        resultsHeader: '💰 Tus Gastos en Comida'
    },

    // ========== SUCCESS MESSAGES ==========
    success: {
        currencySet: (code, symbol) => `✅ Moneda establecida a ${code} (${symbol})`,
        productAdded: '¡Producto agregado exitosamente!',
        productDeleted: '¡Producto eliminado exitosamente!'
    },

    // ========== PRODUCT MANAGEMENT ==========
    productName: {
        default: 'Producto',
        // Auto-generated names will be: Producto1, Producto2, etc.
    },

    // ========== CURRENCY LABELS ==========
    currency: {
        pricePerKg: 'Precio por kg',
        pricePerPiece: 'Precio por unidad',
        cost100kcal: 'Costo por 100 kcal',
        averageCost: 'Costo promedio por 100 kcal',
        secondCost: 'Segundo costo por 100 kcal'
    },

    // ========== BUTTONS AND ACTIONS ==========
    buttons: {
        addProduct: '➕ Agregar Producto',
        calculate: '🧮 Calcular',
        calculateCosts: '🧮 Calcular Costos',
        deleteAll: '🗑️ Eliminar Todo',
        delete: '🗑️',
        
        // Mode switching
        perKilogram: 'Por Kilogramo',
        perPiece: 'Por Unidad',
        normal: 'Normal',
        trainingRest: 'Entrenamiento/Descanso'
    },

    // ========== FORM LABELS ==========
    labels: {
        // Product form
        productName: 'Nombre del Producto',
        productNameOptional: 'Nombre del Producto (opcional)',
        caloriesPer100g: 'Kcal/100g',
        pricePerKg: 'Precio por kg',
        pricePerPiece: 'Precio por unidad',
        weightPerPiece: 'Peso por unidad (g)',
        
        // Cost calculation form
        dailyCalories: 'Cuántas calorías comes diariamente',
        trainingDayCalories: 'Calorías en día de entrenamiento',
        nonTrainingDayCalories: 'Calorías en día de descanso',
        trainingDaysPerWeek: 'Días de entrenamiento por semana',
        nonTrainingDaysPerWeek: 'Días de descanso por semana',
        avgCost100kcal: 'Costo promedio por 100 kcal',
        secondCost100kcal: 'Segundo costo por 100 kcal (opcional)'
    },

    // ========== PLACEHOLDERS ==========
    placeholders: {
        searchCurrencies: 'Escribe para buscar monedas',
        searchLanguages: 'Buscar idiomas...',
        productName: 'Introduce nombre del producto...',
        enterCalories: 'Introduce calorías...',
        enterPrice: 'Introduce precio...'
    },

    // ========== HEADERS AND TITLES ==========
    headers: {
        calculator: '💰 Calculadora de Costo de 100 kcal',
        checkEnergyCost: 'Verifica el costo de energía en diferentes productos',
        funFact: '🤔 Dato Curioso',
        foodExpenses: '💰 Tus Gastos en Comida',
        costCalculation: 'Puedes calcular cuánto gastarás en comida con un costo específico por 100 kcal'
    },

    // ========== VALIDATION MESSAGES ==========
    validation: {
        required: 'Este campo es obligatorio',
        mustBeNumber: 'Debe ser un número',
        mustBePositive: 'Debe ser mayor que 0',
        maxValue: (max) => `El valor máximo es ${max}`,
        minValue: (min) => `El valor mínimo es ${min}`
    },

    // ========== UNITS ==========
    units: {
        kcal: 'kcal',
        grams: 'g',
        kg: 'kg',
        piece: 'unidad',
        per100g: '/100g',
        perKg: '/kg',
        perPiece: '/unidad',
        days: 'días',
        week: 'semana'
    },

    // ========== MISCELLANEOUS ==========
    misc: {
        optional: 'opcional',
        required: 'obligatorio',
        loading: 'Cargando...',
        noResults: 'No se encontraron resultados',
        currency: 'Moneda',
        language: 'Idioma',
        selected: 'Seleccionado',
        choose: 'Elegir',
        search: 'Buscar',
        save: 'Guardar',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
        yes: 'Sí',
        no: 'No',
        ok: 'OK',
        error: 'Error',
        success: 'Éxito',
        warning: 'Advertencia',
        info: 'Información'
    },

    // ========== TECHNICAL MESSAGES ==========
    technical: {
        scriptLoadError: 'Error al cargar script',
        dataLoadError: 'Error al cargar datos',
        saveError: 'Error al guardar datos',
        networkError: 'Error de red',
        timeout: 'Tiempo de espera agotado',
        invalidData: 'Formato de datos inválido',
        notSupported: 'Función no soportada en este navegador'
    },

    // ========== LANGUAGE SELECTOR ==========
    languages: {
        english: 'Inglés',
        polish: 'Polaco',
        norwegian: 'Noruego',
        spanish: 'Español',
        currentLanguage: 'Idioma actual',
        selectLanguage: 'Seleccionar idioma',
        noLanguagesFound: 'No se encontraron idiomas'
    },

    // ========== CURRENCY SELECTOR ==========
    currencySelector: {
        title: '💰 Elige Tu Moneda',
        description: 'Selecciona tu moneda preferida para cálculos de precios. Esta configuración será recordada y usada en la calculadora.',
        searchPlaceholder: 'Escribe para buscar monedas',
        selected: 'Seleccionada',
        noCurrenciesFound: 'No se encontraron monedas'
    },

    // ========== INSTRUCTIONS/HELP ==========
    instructions: {
        title: '📱 Guía de Usuario de la Calculadora de Costo de 100 kcal',
        firstLaunch: '🚀 Primer Lanzamiento',
        howToUse: '🎯 Cómo Usar la Calculadora',
        managingResults: '📊 Gestionar Resultados',
        practicalTips: '💡 Consejos Prácticos',
        technicalInfo: 'ℹ️ Información Técnica',
        calculatorGoal: 'Objetivo de la Calculadora',
        
        // Mode descriptions
        defaultMode: 'Modo Predeterminado: "Por Kilogramo"',
        alternativeMode: 'Modo Alternativo: "Por Unidad"',
        forMostProducts: 'Para la mayoría de productos en tiendas',
        forIndividualProducts: 'Úsalo para productos vendidos individualmente',
        
        // Actions
        sortingTable: 'Ordenar la Tabla',
        deletingProducts: 'Eliminar Productos',
        quickComparison: 'Comparación rápida de dos productos',
        
        // Examples
        usageExamples: 'Ejemplos de Uso',
        breakfastCereal: 'Cereales de Desayuno',
        yogurt: 'Yogur',
        nuts: 'Frutos Secos',
        
        // Technical details
        roundsResults: 'La calculadora redondea resultados a 2 decimales para mejor legibilidad.',
        cooldownPeriod: 'Hay un período de enfriamiento de 1 segundo entre agregar productos para prevenir spam.',
        maxProducts: 'Puedes agregar un máximo de 500 productos.',
        
        // Goal explanation
        goalExplanation: 'La calculadora te muestra cuánto cuestan 100 kcal de un producto determinado. Cuanto menor sea el valor, mejor es la relación precio-valor energético del producto.',
        
        // Important notes
        importantNote: '¡Recuerda: Las calorías y el precio no lo son todo – también considera valores nutricionales, vitaminas y minerales al elegir productos! 🥗'
    },

    // ========== MODE SWITCHING ==========
    modes: {
        perKilogram: 'Por Kilogramo',
        perPiece: 'Por Unidad',
        normal: 'Normal',
        trainingRest: 'Entrenamiento/Descanso',
        
        // Descriptions
        perKgDescription: 'Para la mayoría de productos de tienda',
        perPieceDescription: 'Para artículos vendidos individualmente',
        normalDescription: 'Cálculo estándar de calorías diarias',
        trainingRestDescription: 'Diferentes calorías para días de entrenamiento y descanso'
    },

    // ========== STEP-BY-STEP INSTRUCTIONS ==========
    steps: {
        step1: 'Paso 1',
        step2: 'Paso 2',
        step3: 'Paso 3',
        step4: 'Paso 4',
        step5: 'Paso 5',
        
        // Common actions
        enterProductName: 'Introduce nombre del producto (opcional)',
        enterCalories: 'Introduce calorías por 100g',
        enterPrice: 'Introduce información de precio',
        clickAdd: 'Haz clic en "Agregar Producto"',
        viewResults: 'Ver resultados en la tabla',
        
        // Specific instructions
        convertPrice: 'Convierte el precio a por kilogramo (ej. 500g por €5 = €10/kg)',
        chooseOneMethod: 'Elige UN método',
        pricePerPiece: 'Precio por unidad - cuánto cuesta un artículo',
        orPricePerKg: 'O Precio por kg - el precio convertido por kilogramo',
        clickColumnHeader: 'Haz clic en un encabezado de columna para ordenar',
        compareColumn: 'Compara la columna "Costo de 100 kcal"'
    }
};

// Initialize the i18n system with Spanish translations
if (typeof window.i18nManager !== 'undefined') {
    window.i18nManager.init('es', spanishTranslations);
} else {
    // Fallback if base system isn't loaded
    console.error('i18n-base.js must be loaded before i18n-es.js');
    
    // Store translations for later initialization
    window.pendingTranslations = {
        language: 'es',
        translations: spanishTranslations
    };
}