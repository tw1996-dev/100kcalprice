let products = [];
let productIdCounter = 1;
let autoProductCounter = 1;
let currentMode = 0; // 0 = kg, 1 = piece

function calculateCostPer100Kcal(caloriesPer100g, pricePerKg) {
    const caloriesPerKg = caloriesPer100g * 10;
    const costPer100Kcal = (pricePerKg / caloriesPerKg) * 100;
    return costPer100Kcal;
}

function calculateCostPer100KcalFromPiece(pieceWeight, caloriesPer100g, pricePerPiece) {
    // Calories per piece
    const caloriesPerPiece = (caloriesPer100g * pieceWeight) / 100;
    // Cost per kcal
    const costPerKcal = pricePerPiece / caloriesPerPiece;
    // Cost per 100 kcal
    const costPer100Kcal = costPerKcal * 100;
    return costPer100Kcal;
}

function generateUniqueProductName(originalName) {
    // If no name is provided, use an automatic one
    if (!originalName || originalName.trim() === '') {
        return `Produkt${autoProductCounter++}`;
    }

    const baseName = originalName.trim();

    // Check if the name already exists
    const existingNames = products.map(p => p.name);

    if (!existingNames.includes(baseName)) {
        return baseName;
    }

    // Find the first available version with a number
    let counter = 1;
    let newName;

    do {
        newName = `${baseName}${counter}`;
        counter++;
    } while (existingNames.includes(newName));

    return newName;
}

function updateFloatingLabels() {
    // Update all input fields to handle floating labels
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => {
        if (input.value && input.value !== '') {
            input.classList.add('has-value');
        } else {
            input.classList.remove('has-value');
        }
    });
}

function switchMode(mode) {
    currentMode = mode;
    const slider = document.querySelector('.mode-slider');
    const buttons = document.querySelectorAll('.mode-btn');
    const sections = document.querySelectorAll('.input-section');

    // Update slider position
    if (mode === 1) {
        slider.classList.add('right');
    } else {
        slider.classList.remove('right');
    }

    // Update active button
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === mode);
    });

    // Update active section
    sections.forEach((section, index) => {
        section.classList.toggle('active', index === mode);
    });

    // Focus first input
    setTimeout(() => {
        const firstInput = sections[mode].querySelector('input');
        if (firstInput) firstInput.focus();
        updateFloatingLabels();
    }, 300);
}

function addProductKg() {
    const originalProductName = document.getElementById('productName1').value;
    const calories = parseFloat(document.getElementById('calories1').value);
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);

    if (!validateInputs(null, calories, pricePerKg, null, null)) return;

    const productName = generateUniqueProductName(originalProductName);
    const costPer100Kcal = calculateCostPer100Kcal(calories, pricePerKg);

    const product = {
        id: productIdCounter++,
        name: productName,
        calories: calories,
        price: pricePerKg,
        priceUnit: 'kg',
        costPer100Kcal: costPer100Kcal
    };

    addProductToList(product);
    clearInputsKg();
}

function addProductPiece() {
    const originalProductName = document.getElementById('productName2').value;
    const pieceWeight = parseFloat(document.getElementById('pieceWeight').value);
    const calories = parseFloat(document.getElementById('calories2').value);
    const pricePerPiece = parseFloat(document.getElementById('pricePerPiece').value);
    const pricePerKg2 = parseFloat(document.getElementById('pricePerKg2').value);

    if (!validateInputs(null, calories, null, pieceWeight, pricePerPiece, pricePerKg2)) return;

    const productName = generateUniqueProductName(originalProductName);
    let costPer100Kcal;
    let pricePerKg;

    if (pricePerPiece && pricePerPiece > 0) {
        // Calculate from piece price
        costPer100Kcal = calculateCostPer100KcalFromPiece(pieceWeight, calories, pricePerPiece);
        pricePerKg = (pricePerPiece / pieceWeight) * 1000;
    } else if (pricePerKg2 && pricePerKg2 > 0) {
        // Calculate from kg price
        costPer100Kcal = calculateCostPer100Kcal(calories, pricePerKg2);
        pricePerKg = pricePerKg2;
    } else {
        alert('❌ Podaj cenę za sztukę LUB za kilogram!');
        return;
    }

    const product = {
        id: productIdCounter++,
        name: productName,
        calories: calories,
        price: pricePerKg,
        priceUnit: 'kg',
        costPer100Kcal: costPer100Kcal
    };

    addProductToList(product);
    clearInputsPiece();
}

function validateInputs(productName, calories, pricePerKg, pieceWeight, pricePerPiece, pricePerKg2) {
    // Product name is not required

    if (!calories || calories <= 0) {
        alert('❌ Enter a valid calorie value (greater than 0)!');
        return false;
    }

    if (currentMode === 0) {
        if (!pricePerKg || pricePerKg < 0) {
            alert('❌ Enter a valid price per kg (greater than or equal to 0)!');
            return false;
        }
    } else {
        if (!pieceWeight || pieceWeight <= 0) {
            alert('❌ Enter a valid piece weight (greater than 0)!');
            return false;
        }
        if ((!pricePerPiece || pricePerPiece <= 0) && (!pricePerKg2 || pricePerKg2 <= 0)) {
            alert('❌ Enter a price per piece OR per kilogram!');
            return false;
        }
    }

    return true;
}

function addProductToList(product) {
    products.push(product);
    products.sort((a, b) => a.costPer100Kcal - b.costPer100Kcal);
    renderTable();
}

function deleteProduct(productId) {
    // Find the product index
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        alert('❌ Product to delete not found!');
        return;
    }

    if (confirm('🗑️ Are you sure you want to delete product "' + products[productIndex].name + '"?')) {
        products.splice(productIndex, 1);
        renderTable();
    }
}

function renderTable() {
    const tbody = document.getElementById('productTableBody');

    if (products.length === 0) {
        tbody.innerHTML = `
            <tr class="no-products">
                <td colspan="5">Add your first product to see cost comparison! 🚀</td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = products.map((product, index) => `
        <tr>
            <td><strong>${product.name}</strong></td>
            <td>${product.calories} kcal</td>
            <td>${product.price.toFixed(2)}</td>
            <td class="cost-cell">${product.costPer100Kcal.toFixed(3)} zł</td>
            <td>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">
                    🗑️
                </button>
            </td>
        </tr>
    `).join('');
}

function clearInputsKg() {
    document.getElementById('productName1').value = '';
    document.getElementById('calories1').value = '';
    document.getElementById('pricePerKg').value = '';
    updateFloatingLabels();
    document.getElementById('productName1').focus();
}

function clearInputsPiece() {
    document.getElementById('productName2').value = '';
    document.getElementById('pieceWeight').value = '';
    document.getElementById('calories2').value = '';
    document.getElementById('pricePerPiece').value = '';
    document.getElementById('pricePerKg2').value = '';
    updateFloatingLabels();
    document.getElementById('productName2').focus();
}

// Event listeners
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (currentMode === 0) {
            addProductKg();
        } else {
            addProductPiece();
        }
    }
});

// Add input event listeners for floating labels and mutual exclusion
document.addEventListener('input', function (e) {
    updateFloatingLabels();

    // Handle mutual exclusion for price inputs
    if (e.target.id === 'pricePerPiece') {
        const pricePerKg2 = document.getElementById('pricePerKg2');
        if (e.target.value && e.target.value !== '') {
            pricePerKg2.disabled = true;
            pricePerKg2.value = '';
        } else {
            pricePerKg2.disabled = false;
        }
        updateFloatingLabels();
    }

    if (e.target.id === 'pricePerKg2') {
        const pricePerPiece = document.getElementById('pricePerPiece');
        if (e.target.value && e.target.value !== '') {
            pricePerPiece.disabled = true;
            pricePerPiece.value = '';
        } else {
            pricePerPiece.disabled = false;
        }
        updateFloatingLabels();
    }
});

// Focus and blur event listeners
document.addEventListener('focus', updateFloatingLabels, true);
document.addEventListener('blur', updateFloatingLabels, true);

// Focus on load
window.onload = function () {
    document.getElementById('productName1').focus();
    updateFloatingLabels();
};