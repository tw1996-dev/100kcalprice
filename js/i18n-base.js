// i18n-base.js - Base internationalization system
// This file provides the foundation for multi-language support

console.log('i18n-base.js loaded');

class I18nManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.originalFunctions = {};
        this.isInitialized = false;
    }

    // Initialize the system with translations
    init(language, translations) {
        this.currentLanguage = language;
        this.translations = translations;
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.applyTranslations();
            });
        } else {
            // DOM is already loaded, apply translations after a small delay
            // to ensure other scripts are loaded
            setTimeout(() => {
                this.applyTranslations();
            }, 100);
        }
    }

    // Get translation by key path (e.g., 'alerts.rateLimit')
    t(keyPath, ...args) {
        const keys = keyPath.split('.');
        let value = this.translations;
        
        for (const key of keys) {
            value = value?.[key];
            if (value === undefined) {
                console.warn(`Translation key not found: ${keyPath}`);
                return keyPath; // Return key as fallback
            }
        }
        
        // If value is a function, call it with arguments
        if (typeof value === 'function') {
            return value(...args);
        }
        
        return value;
    }

    // Backup original function before overriding
    backupFunction(functionName, originalFunction) {
        if (!this.originalFunctions[functionName]) {
            this.originalFunctions[functionName] = originalFunction;
        }
    }

    // Apply all translations
    applyTranslations() {
        if (this.isInitialized) return;
        
        this.overrideAlerts();
        this.overrideValidations();
        this.overrideUI();
        this.overrideCostCalculations();
        this.overrideCurrencyFunctions();
        this.overrideLanguageFunctions();
        
        this.isInitialized = true;
        console.log(`i18n initialized for language: ${this.currentLanguage}`);
    }

    // Override alert messages
    overrideAlerts() {
        // Rate limiting for calculations (from extracounting.js)
        if (typeof window.checkRateLimit === 'function') {
            this.backupFunction('checkRateLimit', window.checkRateLimit);
            window.checkRateLimit = () => {
                const currentTime = Date.now();
                const timeSinceLastCalculation = currentTime - (window.lastCalculationTime || 0);
                
                if (timeSinceLastCalculation < (window.CALCULATION_COOLDOWN || 1000)) {
                    const remainingTime = Math.ceil(((window.CALCULATION_COOLDOWN || 1000) - timeSinceLastCalculation) / 1000);
                    alert(this.t('alerts.rateLimit', remainingTime));
                    return false;
                }
                
                return true;
            };
        }

        // Product rate limiting (from calculator.js)
        if (typeof window.products !== 'undefined' && typeof window.lastProductAddTime !== 'undefined') {
            // Create a separate function for product rate limiting
            window.checkProductRateLimit = () => {
                const currentTime = Date.now();
                const timeSinceLastAdd = currentTime - window.lastProductAddTime;
                
                if (timeSinceLastAdd < window.ADD_PRODUCT_COOLDOWN) {
                    const remainingTime = Math.ceil((window.ADD_PRODUCT_COOLDOWN - timeSinceLastAdd) / 1000);
                    alert(this.t('alerts.rateLimitProduct', remainingTime));
                    return false;
                }
                
                return true;
            };
        }

        // Product limit check
        if (typeof window.checkProductLimit === 'function') {
            this.backupFunction('checkProductLimit', window.checkProductLimit);
            window.checkProductLimit = () => {
                if (window.products.length >= window.MAX_PRODUCTS) {
                    alert(this.t('alerts.productLimit', window.MAX_PRODUCTS));
                    return false;
                }
                return true;
            };
        }
    }

    // Override validation functions
    overrideValidations() {
        if (typeof window.validateInputs === 'function') {
            this.backupFunction('validateInputs', window.validateInputs);
            window.validateInputs = (productName, calories, pricePerKg, pieceWeight, pricePerPiece, pricePerKg2) => {
                if (!calories || calories <= 0) {
                    alert('❌ ' + this.t('alerts.validCalories'));
                    return false;
                }

                if (window.currentMode === 0) {
                    if (!pricePerKg || pricePerKg <= 0) {
                        alert('❌ ' + this.t('alerts.validPrice'));
                        return false;
                    }
                } else {
                    if (!pieceWeight || pieceWeight <= 0) {
                        alert('❌ ' + this.t('alerts.validWeight'));
                        return false;
                    }
                    if ((!pricePerPiece || pricePerPiece <= 0) && (!pricePerKg2 || pricePerKg2 <= 0)) {
                        alert('❌ ' + this.t('alerts.priceRequired'));
                        return false;
                    }
                }

                return true;
            };
        }
    }

    // Override UI functions
    overrideUI() {
        // Delete all products
        if (typeof window.deleteAllProducts === 'function') {
            this.backupFunction('deleteAllProducts', window.deleteAllProducts);
            window.deleteAllProducts = () => {
                if (window.products.length === 0) {
                    alert(this.t('alerts.noProducts'));
                    return;
                }
                
                if (confirm(this.t('alerts.confirmDeleteAll'))) {
                    window.products = [];
                    window.productIdCounter = 1;
                    window.autoProductCounter = 1;
                    window.sortColumn = null;
                    window.sortDirection = 'asc';
                    if (typeof window.saveToLocalStorage === 'function') {
                        window.saveToLocalStorage();
                    }
                    if (typeof window.renderTable === 'function') {
                        window.renderTable();
                    }
                }
            };
        }

        // Product name generation
        if (typeof window.generateUniqueProductName === 'function') {
            this.backupFunction('generateUniqueProductName', window.generateUniqueProductName);
            window.generateUniqueProductName = (originalName) => {
                if (!originalName || originalName.trim() === '') {
                    return `${this.t('productName.default')}${window.autoProductCounter++}`;
                }

                const baseName = originalName.trim();
                const existingNames = window.products.map(p => p.name);

                if (!existingNames.includes(baseName)) {
                    return baseName;
                }

                let counter = 1;
                let newName;

                do {
                    newName = `${baseName}${counter}`;
                    counter++;
                } while (existingNames.includes(newName));

                return newName;
            };
        }

        // Render table
        if (typeof window.renderTable === 'function') {
            this.backupFunction('renderTable', window.renderTable);
            window.renderTable = () => {
                const tbody = document.getElementById('productTableBody');
                if (!tbody) return;

                if (window.products.length === 0) {
                    tbody.innerHTML = `
                        <tr class="no-products">
                            <td colspan="5">${this.t('table.noProducts')}</td>
                        </tr>
                    `;
                    if (typeof window.hideDeleteAllButton === 'function') {
                        window.hideDeleteAllButton();
                    }
                    return;
                }

                tbody.innerHTML = window.products.map((product, index) => `
                    <tr>
                        <td>
                            <strong>${product.name}</strong>
                        </td>
                        <td>${typeof window.formatNumber === 'function' ? window.formatNumber(product.calories) : product.calories.toFixed(2)} kcal</td>
                        <td>${typeof window.formatPrice === 'function' ? window.formatPrice(product.price) : product.price.toFixed(2)}</td>
                        <td class="cost-cell">${typeof window.formatPrice === 'function' ? window.formatPrice(product.costPer100Kcal) : product.costPer100Kcal.toFixed(2)}</td>
                        <td>
                            <button class="delete-btn" data-product-id="${product.id}">
                                🗑️
                            </button>
                        </td>
                    </tr>
                `).join('');
                
                if (typeof window.showDeleteAllButton === 'function') {
                    window.showDeleteAllButton();
                }
            };
        }

        // Show delete all button
        if (typeof window.showDeleteAllButton === 'function') {
            this.backupFunction('showDeleteAllButton', window.showDeleteAllButton);
            window.showDeleteAllButton = () => {
                let deleteAllBtn = document.getElementById('deleteAllBtn');
                if (!deleteAllBtn) {
                    deleteAllBtn = document.createElement('button');
                    deleteAllBtn.id = 'deleteAllBtn';
                    deleteAllBtn.className = 'btn delete-all-btn';
                    deleteAllBtn.textContent = this.t('table.deleteAllBtn');
                    deleteAllBtn.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
                    deleteAllBtn.style.marginTop = '20px';
                    deleteAllBtn.onclick = window.deleteAllProducts;
                    
                    const container = document.querySelector('.table-container');
                    if (container) {
                        container.appendChild(deleteAllBtn);
                    }
                }
            };
        }

        // Override addProductKg and addProductPiece to use the new rate limit function
        if (typeof window.addProductKg === 'function') {
            this.backupFunction('addProductKg', window.addProductKg);
            const originalAddProductKg = this.originalFunctions.addProductKg;
            window.addProductKg = () => {
                // Check security limits using the new function name
                if (!window.checkProductLimit() || !window.checkProductRateLimit()) {
                    return;
                }
                
                // Call original function logic but skip the rate limit checks
                const originalProductName = document.getElementById('productName1').value;
                const calories = parseFloat(document.getElementById('calories1').value);
                const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);

                if (!window.validateInputs(null, calories, pricePerKg, null, null)) return;

                const productName = window.generateUniqueProductName(originalProductName);
                const costPer100Kcal = window.calculateCostPer100Kcal(calories, pricePerKg);

                const product = {
                    id: window.productIdCounter++,
                    name: productName,
                    calories: calories,
                    price: pricePerKg,
                    priceUnit: 'kg',
                    costPer100Kcal: costPer100Kcal
                };

                window.addProductToList(product);
                window.clearInputsKg();
                
                // Update rate limit timestamp
                window.lastProductAddTime = Date.now();
                
                if (typeof window.saveToLocalStorage === 'function') {
                    window.saveToLocalStorage();
                }
            };
        }

        if (typeof window.addProductPiece === 'function') {
            this.backupFunction('addProductPiece', window.addProductPiece);
            window.addProductPiece = () => {
                // Check security limits using the new function name
                if (!window.checkProductLimit() || !window.checkProductRateLimit()) {
                    return;
                }

                const originalProductName = document.getElementById('productName2').value;
                const pieceWeight = parseFloat(document.getElementById('pieceWeight').value);
                const calories = parseFloat(document.getElementById('calories2').value);
                const pricePerPiece = parseFloat(document.getElementById('pricePerPiece').value);
                const pricePerKg2 = parseFloat(document.getElementById('pricePerKg2').value);

                if (!window.validateInputs(null, calories, null, pieceWeight, pricePerPiece, pricePerKg2)) return;

                const productName = window.generateUniqueProductName(originalProductName);
                let costPer100Kcal;
                let pricePerKg;

                if (pricePerPiece && pricePerPiece > 0) {
                    costPer100Kcal = window.calculateCostPer100KcalFromPiece(pieceWeight, calories, pricePerPiece);
                    pricePerKg = (pricePerPiece / pieceWeight) * 1000;
                } else if (pricePerKg2 && pricePerKg2 > 0) {
                    costPer100Kcal = window.calculateCostPer100Kcal(calories, pricePerKg2);
                    pricePerKg = pricePerKg2;
                } else {
                    alert('❌ ' + this.t('alerts.priceRequired'));
                    return;
                }

                const product = {
                    id: window.productIdCounter++,
                    name: productName,
                    calories: calories,
                    price: pricePerKg,
                    priceUnit: 'kg',
                    costPer100Kcal: costPer100Kcal
                };

                window.addProductToList(product);
                window.clearInputsPiece();
                
                // Update rate limit timestamp
                window.lastProductAddTime = Date.now();
                
                if (typeof window.saveToLocalStorage === 'function') {
                    window.saveToLocalStorage();
                }
            };
        }
    }

    // Override cost calculations
    overrideCostCalculations() {
        if (typeof window.calculateNormalCost === 'function') {
            this.backupFunction('calculateNormalCost', window.calculateNormalCost);
            window.calculateNormalCost = () => {
                if (typeof window.checkRateLimit === 'function' && !window.checkRateLimit()) {
                    return;
                }
                
                const dailyCalories = parseFloat(document.getElementById('dailyCalories')?.value);
                const cost1 = parseFloat(document.getElementById('cost100kcal1')?.value);
                const cost2 = parseFloat(document.getElementById('cost100kcal2')?.value);
                const currency = typeof window.getSelectedCurrency === 'function' ? window.getSelectedCurrency() : { symbol: '$' };

                if (!dailyCalories || !cost1) {
                    alert(this.t('alerts.fillRequired'));
                    return;
                }

                const dailyCost1 = (dailyCalories / 100) * cost1;
                const weeklyCost1 = dailyCost1 * 7;
                const monthlyCost1 = dailyCost1 * 30;
                const yearlyCost1 = dailyCost1 * 365;

                let html = `
                    <div class="cost-item">
                        <h4>${this.t('costResults.firstCost')}</h4>
                        <div class="cost-value">${this.t('costResults.daily')}: <span>${dailyCost1.toFixed(2)} ${currency.symbol}</span></div>
                        <div class="cost-value">${this.t('costResults.weekly')}: <span>${weeklyCost1.toFixed(2)} ${currency.symbol}</span></div>
                        <div class="cost-value">${this.t('costResults.monthly')}: <span>${monthlyCost1.toFixed(2)} ${currency.symbol}</span></div>
                        <div class="cost-value">${this.t('costResults.yearly')}: <span>${yearlyCost1.toFixed(2)} ${currency.symbol}</span></div>
                    </div>
                `;

                if (cost2) {
                    const dailyCost2 = (dailyCalories / 100) * cost2;
                    const weeklyCost2 = dailyCost2 * 7;
                    const monthlyCost2 = dailyCost2 * 30;
                    const yearlyCost2 = dailyCost2 * 365;

                    html += `
                        <div class="cost-item">
                            <h4>${this.t('costResults.secondCost')}</h4>
                            <div class="cost-value">${this.t('costResults.daily')}: <span>${dailyCost2.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.weekly')}: <span>${weeklyCost2.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.monthly')}: <span>${monthlyCost2.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.yearly')}: <span>${yearlyCost2.toFixed(2)} ${currency.symbol}</span></div>
                        </div>
                    `;

                    const dailyDiff = Math.abs(dailyCost2 - dailyCost1);
                    const weeklyDiff = Math.abs(weeklyCost2 - weeklyCost1);
                    const monthlyDiff = Math.abs(monthlyCost2 - monthlyCost1);
                    const yearlyDiff = Math.abs(yearlyCost2 - yearlyCost1);
                    const isFirstCheaper = dailyCost1 < dailyCost2;

                    html += `
                        <div class="cost-item cost-item-difference">
                            <h4>💰 ${this.t('costResults.difference')} ${isFirstCheaper ? this.t('costResults.firstCheaper') : this.t('costResults.secondCheaper')}</h4>
                            <div class="cost-value">${this.t('costResults.daily')}: <span>${dailyDiff.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.weekly')}: <span>${weeklyDiff.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.monthly')}: <span>${monthlyDiff.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.yearly')}: <span>${yearlyDiff.toFixed(2)} ${currency.symbol}</span></div>
                        </div>
                    `;
                }

                const costComparison = document.getElementById('costComparison');
                const costResults = document.getElementById('costResults');
                if (costComparison) costComparison.innerHTML = html;
                if (costResults) costResults.style.display = 'block';
                
                window.lastCalculationTime = Date.now();
                
                setTimeout(() => {
                    if (typeof window.scrollToResults === 'function') {
                        window.scrollToResults();
                    }
                }, 100);
            };
        }

        if (typeof window.calculateDTDNTCost === 'function') {
            this.backupFunction('calculateDTDNTCost', window.calculateDTDNTCost);
            window.calculateDTDNTCost = () => {
                if (typeof window.checkRateLimit === 'function' && !window.checkRateLimit()) {
                    return;
                }
                
                const trainingCalories = parseFloat(document.getElementById('trainingDayCalories')?.value);
                const nonTrainingCalories = parseFloat(document.getElementById('nonTrainingDayCalories')?.value);
                const trainingDays = parseInt(document.getElementById('trainingDaysPerWeek')?.value);
                const nonTrainingDays = parseInt(document.getElementById('nonTrainingDaysPerWeek')?.value);
                const cost1 = parseFloat(document.getElementById('dtCost100kcal1')?.value);
                const cost2 = parseFloat(document.getElementById('dtCost100kcal2')?.value);
                const currency = typeof window.getSelectedCurrency === 'function' ? window.getSelectedCurrency() : { symbol: '$' };

                if (!trainingCalories || !nonTrainingCalories || trainingDays === '' || nonTrainingDays === '' || !cost1) {
                    alert(this.t('alerts.fillRequired'));
                    return;
                }

                if (trainingDays + nonTrainingDays !== 7) {
                    alert(this.t('alerts.sumSeven'));
                    return;
                }

                const weeklyCalories = (trainingCalories * trainingDays) + (nonTrainingCalories * nonTrainingDays);
                const dailyAvgCalories = weeklyCalories / 7;

                const dailyCost1 = (dailyAvgCalories / 100) * cost1;
                const weeklyCost1 = dailyCost1 * 7;
                const monthlyCost1 = dailyCost1 * 30;
                const yearlyCost1 = dailyCost1 * 365;

                const avgText = this.t('costResults.avgCalories', dailyAvgCalories.toFixed(0));

                let html = `
                    <div class="cost-item">
                        <h4>${this.t('costResults.firstCost')} (${avgText})</h4>
                        <div class="cost-value">${this.t('costResults.daily')}: <span>${dailyCost1.toFixed(2)} ${currency.symbol}</span></div>
                        <div class="cost-value">${this.t('costResults.weekly')}: <span>${weeklyCost1.toFixed(2)} ${currency.symbol}</span></div>
                        <div class="cost-value">${this.t('costResults.monthly')}: <span>${monthlyCost1.toFixed(2)} ${currency.symbol}</span></div>
                        <div class="cost-value">${this.t('costResults.yearly')}: <span>${yearlyCost1.toFixed(2)} ${currency.symbol}</span></div>
                    </div>
                `;

                if (cost2) {
                    const dailyCost2 = (dailyAvgCalories / 100) * cost2;
                    const weeklyCost2 = dailyCost2 * 7;
                    const monthlyCost2 = dailyCost2 * 30;
                    const yearlyCost2 = dailyCost2 * 365;

                    html += `
                        <div class="cost-item">
                            <h4>${this.t('costResults.secondCost')} (${avgText})</h4>
                            <div class="cost-value">${this.t('costResults.daily')}: <span>${dailyCost2.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.weekly')}: <span>${weeklyCost2.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.monthly')}: <span>${monthlyCost2.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.yearly')}: <span>${yearlyCost2.toFixed(2)} ${currency.symbol}</span></div>
                        </div>
                    `;

                    const dailyDiff = Math.abs(dailyCost2 - dailyCost1);
                    const weeklyDiff = Math.abs(weeklyCost2 - weeklyCost1);
                    const monthlyDiff = Math.abs(monthlyCost2 - monthlyCost1);
                    const yearlyDiff = Math.abs(yearlyCost2 - yearlyCost1);
                    const isFirstCheaper = dailyCost1 < dailyCost2;

                    html += `
                        <div class="cost-item cost-item-difference">
                            <h4>💰 ${this.t('costResults.difference')} ${isFirstCheaper ? this.t('costResults.firstCheaper') : this.t('costResults.secondCheaper')}</h4>
                            <div class="cost-value">${this.t('costResults.daily')}: <span>${dailyDiff.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.weekly')}: <span>${weeklyDiff.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.monthly')}: <span>${monthlyDiff.toFixed(2)} ${currency.symbol}</span></div>
                            <div class="cost-value">${this.t('costResults.yearly')}: <span>${yearlyDiff.toFixed(2)} ${currency.symbol}</span></div>
                        </div>
                    `;
                }

                const costComparison = document.getElementById('costComparison');
                const costResults = document.getElementById('costResults');
                if (costComparison) costComparison.innerHTML = html;
                if (costResults) costResults.style.display = 'block';
                
                window.lastCalculationTime = Date.now();
                
                setTimeout(() => {
                    if (typeof window.scrollToResults === 'function') {
                        window.scrollToResults();
                    }
                }, 100);
            };
        }
    }

    // Override currency functions
    overrideCurrencyFunctions() {
        if (typeof window.selectCurrency === 'function') {
            this.backupFunction('selectCurrency', window.selectCurrency);
            window.selectCurrency = (code, name, symbol) => {
                const currency = { code, name, symbol };
                if (typeof window.saveCurrency === 'function') {
                    window.saveCurrency(currency);
                }
                
                const searchInput = document.getElementById('currency-search');
                const resultsContainer = document.getElementById('currency-results');
                
                if (searchInput) searchInput.value = '';
                if (resultsContainer) resultsContainer.classList.remove('show');
                
                const tempMessage = document.createElement('div');
                tempMessage.className = 'currency-success-message';
                tempMessage.textContent = this.t('success.currencySet', code, symbol);
                
                document.body.appendChild(tempMessage);
                
                setTimeout(() => {
                    tempMessage.remove();
                }, 3000);
            };
        }

        // NEW: Override updateCurrencyLabelsAndPlaceholders
        if (typeof window.updateCurrencyLabelsAndPlaceholders === 'function') {
            this.backupFunction('updateCurrencyLabelsAndPlaceholders', window.updateCurrencyLabelsAndPlaceholders);
            const self = this; // Zachowaj referencję do this
            window.updateCurrencyLabelsAndPlaceholders = function() {
                const currencySymbol = typeof window.getCurrencySymbol === 'function' ? window.getCurrencySymbol() : '$';
                
                // Update labels for price inputs using translations
                const priceLabels = [
                    { id: 'pricePerKg', translationKey: 'currency.pricePerKg' },
                    { id: 'pricePerPiece', translationKey: 'currency.pricePerPiece' },
                    { id: 'pricePerKg2', translationKey: 'currency.pricePerKg' }
                ];
                
                priceLabels.forEach(labelInfo => {
                    const label = document.querySelector(`label[for="${labelInfo.id}"]`);
                    if (label) {
                        const translatedText = self.t(labelInfo.translationKey); // Użyj self zamiast this
                        label.textContent = `${translatedText} (${currencySymbol})`;
                    }
                });
            };
        }
    }

    // Override language functions (placeholder - language switching doesn't need translation)
    overrideLanguageFunctions() {
        // This can be used for language-specific logic if needed
        // For now, keep the original language switching functionality
    }
}

// Create global instance
window.i18nManager = new I18nManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18nManager;
}