// validations.js
// Price field validation (max 5000, min 0.01, max 2 decimal places)
function enforcePriceLimits(input) {
   input.addEventListener('keypress', function(e) {
       const key = e.key;
       const currentValue = input.value;
       
       // Allow control keys
       if (key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab') {
           return;
       }
       
       // Only allow digits, comma, or dot
       if (!/[0-9.,]/.test(key)) {
           e.preventDefault();
           return;
       }
       
       // If trying to type separator (comma or dot)
       if (key === '.' || key === ',') {
           const hasDot = currentValue.includes('.');
           const hasComma = currentValue.includes(',');
           
           if (hasDot || hasComma) {
               e.preventDefault();
               return;
           }
       }
       
       // Check decimal places and value limits
       if (/[0-9]/.test(key)) {
           const dotIndex = currentValue.indexOf('.');
           const commaIndex = currentValue.indexOf(',');
           const separatorIndex = Math.max(dotIndex, commaIndex);
           const cursorPos = input.selectionStart;
           
           // Prevent leading zeros (except for 0. cases)
           if (key === '0' && cursorPos === 0 && currentValue === '') {
               e.preventDefault();
               return;
           }
           if (key !== '0' && currentValue === '0' && cursorPos === 1 && separatorIndex === -1) {
               // Replace the leading zero
               input.value = '';
           }
           
           // Limit decimal places to 2
           if (separatorIndex !== -1 && cursorPos > separatorIndex) {
               const afterSeparator = currentValue.substring(separatorIndex + 1);
               if (afterSeparator.length >= 2) {
                   e.preventDefault();
                   return;
               }
           }
           
           // Allow typing even if it would exceed 5000 (will be corrected later)
           // No blocking here - let user type freely
       }
   });

   // Handle input changes (cleanup) - includes paste cleanup
   input.addEventListener('input', (e) => {
       let value = input.value;
       const cursorPos = input.selectionStart;
       
       value = value.replace(',', '.');
       value = value.replace(/[^0-9.]/g, '');
       
       // Remove leading zeros (except for 0. cases)
       if (value.length > 1 && value[0] === '0' && value[1] !== '.') {
           value = value.substring(1);
       }
       
       // Ensure only one dot
       const firstDot = value.indexOf('.');
       if (firstDot !== -1) {
           const beforeDot = value.substring(0, firstDot);
           const afterDot = value.substring(firstDot + 1).replace(/\./g, '');
           value = beforeDot + '.' + afterDot;
       }
       
       // Limit decimal places
       const parts = value.split('.');
       if (parts.length > 1 && parts[1].length > 2) {
           value = parts[0] + '.' + parts[1].substring(0, 2);
       }
       
       // Apply value limits - correct to max if exceeded
       const numValue = parseFloat(value);
       if (!isNaN(numValue) && numValue > 5000) {
           value = '5000';
       }
       
       if (input.value !== value) {
           input.value = value;
           input.setSelectionRange(cursorPos, cursorPos);
       }
   });
   
   // Handle blur - final validation
   input.addEventListener('blur', () => {
       let value = input.value;
       
       if (value.endsWith('.')) {
           value = value.slice(0, -1);
       }
       
       const numValue = parseFloat(value);
       if (numValue > 5000) {
           input.value = '5000';
       } else if (value !== '') {
           input.value = value;
       }
   });
}

// Weight field validation (max 10000, min 1, integers only)
function enforceWeightLimits(input) {
   input.addEventListener('keypress', function(e) {
       const key = e.key;
       const currentValue = input.value;
       
       // Allow control keys
       if (key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab') {
           return;
       }
       
       // Only allow digits (no decimal points for weight)
       if (!/[0-9]/.test(key)) {
           e.preventDefault();
           return;
       }
       
       // Check if new value would exceed 10000
       const cursorPos = input.selectionStart;
       const newValue = currentValue.slice(0, cursorPos) + key + currentValue.slice(cursorPos);
       const testValue = parseInt(newValue);
       if (!isNaN(testValue) && testValue > 10000) {
           e.preventDefault();
           return;
       }
   });

   // Handle input changes (cleanup) - includes paste cleanup
   input.addEventListener('input', (e) => {
       let value = input.value;
       const cursorPos = input.selectionStart;
       
       // Remove all non-digits
       value = value.replace(/[^0-9]/g, '');
       
       // Apply value limits
       const numValue = parseInt(value);
       if (!isNaN(numValue) && numValue > 10000) {
           value = '10000';
       }
       
       if (input.value !== value) {
           input.value = value;
           input.setSelectionRange(cursorPos, cursorPos);
       }
   });
   
   // Handle blur - final validation
   input.addEventListener('blur', () => {
       let value = input.value;
       const numValue = parseInt(value);
       
       if (isNaN(numValue) || value === '' || numValue < 1) {
           input.value = '';
       } else if (numValue > 10000) {
           input.value = '10000';
       } else {
           input.value = value;
       }
   });
}

// Calories field validation (max 900, min 1, max 2 decimal places)
function enforceCalorieLimits(input) {
   input.addEventListener('keypress', function(e) {
       const key = e.key;
       const currentValue = input.value;
       
       // Allow control keys
       if (key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab') {
           return;
       }
       
       // Only allow digits, comma, or dot
       if (!/[0-9.,]/.test(key)) {
           e.preventDefault();
           return;
       }
       
       // If trying to type separator (comma or dot)
       if (key === '.' || key === ',') {
           const hasDot = currentValue.includes('.');
           const hasComma = currentValue.includes(',');
           
           if (hasDot || hasComma) {
               e.preventDefault();
               return;
           }
       }
       
       // Check decimal places for digits
       if (/[0-9]/.test(key)) {
           const dotIndex = currentValue.indexOf('.');
           const commaIndex = currentValue.indexOf(',');
           const separatorIndex = Math.max(dotIndex, commaIndex);
           const cursorPos = input.selectionStart;
           
           // Limit decimal places to 2
           if (separatorIndex !== -1 && cursorPos > separatorIndex) {
               const afterSeparator = currentValue.substring(separatorIndex + 1);
               if (afterSeparator.length >= 2) {
                   e.preventDefault();
                   return;
               }
           }
           
           // Allow typing even if it would exceed 900 (will be corrected later)
           // No blocking here - let user type freely
       }
   });

   // Handle input changes (cleanup) - includes paste cleanup
   input.addEventListener('input', (e) => {
       let value = input.value;
       const cursorPos = input.selectionStart;
       
       // Convert comma to dot
       value = value.replace(',', '.');
       
       // Remove invalid characters
       value = value.replace(/[^0-9.]/g, '');
       
       // Ensure only one dot
       const firstDot = value.indexOf('.');
       if (firstDot !== -1) {
           const beforeDot = value.substring(0, firstDot);
           const afterDot = value.substring(firstDot + 1).replace(/\./g, '');
           value = beforeDot + '.' + afterDot;
       }
       
       // Limit decimal places
       const parts = value.split('.');
       if (parts.length > 1 && parts[1].length > 2) {
           value = parts[0] + '.' + parts[1].substring(0, 2);
       }
       
       // Apply value limits - correct to max if exceeded
       const numValue = parseFloat(value);
       if (!isNaN(numValue) && numValue > 900) {
           value = '900';
       }
       
       if (input.value !== value) {
           input.value = value;
           input.setSelectionRange(cursorPos, cursorPos);
       }
   });
   
   // Handle blur - final validation
   input.addEventListener('blur', () => {
       let value = input.value;
       
       // Remove trailing dot
       if (value.endsWith('.')) {
           value = value.slice(0, -1);
       }
       
       const numValue = parseFloat(value);
       if (isNaN(numValue) || value === '') {
           input.value = '';
       } else if (numValue < 1) {
           input.value = '';
       } else if (numValue > 900) {
           input.value = '900';
       } else {
           input.value = value;
       }
   });
}


// Validations for cost fields
function enforceCostLimits(input) {
   input.addEventListener('keypress', function(e) {
       const key = e.key;
       const currentValue = input.value;
       
       if (key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab') {
           return;
       }
       
       if (!/[0-9.,]/.test(key)) {
           e.preventDefault();
           return;
       }
       
       if (key === '.' || key === ',') {
           const hasDot = currentValue.includes('.');
           const hasComma = currentValue.includes(',');
           
           if (hasDot || hasComma) {
               e.preventDefault();
               return;
           }
       }
       
       if (/[0-9]/.test(key)) {
           const dotIndex = currentValue.indexOf('.');
           const commaIndex = currentValue.indexOf(',');
           const separatorIndex = Math.max(dotIndex, commaIndex);
           const cursorPos = input.selectionStart;
           
           if (separatorIndex !== -1 && cursorPos > separatorIndex) {
               const afterSeparator = currentValue.substring(separatorIndex + 1);
               if (afterSeparator.length >= 2) {
                   e.preventDefault();
                   return;
               }
           }
       }
   });
   
   input.addEventListener('input', (e) => {
       if (e.inputType === 'insertFromPaste') return;
       
       let value = input.value;
       const cursorPos = input.selectionStart;
       
       value = value.replace(',', '.');
       value = value.replace(/[^0-9.]/g, '');
       
       const firstDot = value.indexOf('.');
       if (firstDot !== -1) {
           const beforeDot = value.substring(0, firstDot);
           const afterDot = value.substring(firstDot + 1).replace(/\./g, '');
           value = beforeDot + '.' + afterDot;
       }
       
       const parts = value.split('.');
       if (parts.length > 1 && parts[1].length > 2) {
           value = parts[0] + '.' + parts[1].substring(0, 2);
       }
       
       const numValue = parseFloat(value);
       if (!isNaN(numValue) && numValue > 5000) {
           value = '5000';
       }
       
       if (input.value !== value) {
           input.value = value;
           input.setSelectionRange(cursorPos, cursorPos);
       }
   });
   
   input.addEventListener('blur', () => {
       let value = input.value;
       
       if (value.endsWith('.')) {
           value = value.slice(0, -1);
       }
       
       const numValue = parseFloat(value);
       if (numValue > 5000) {
           input.value = '5000';
       } else if (value !== '') {
           input.value = value;
       }
   });
}

// Validations for calorie fields (max 20000)
function enforceCaloriesLimits(input) {
   input.addEventListener('keypress', function(e) {
       const key = e.key;
       
       if (key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab') {
           return;
       }
       
       if (!/[0-9]/.test(key)) {
           e.preventDefault();
           return;
       }
   });
   
   input.addEventListener('input', (e) => {
       let value = input.value;
       const cursorPos = input.selectionStart;
       
       value = value.replace(/[^0-9]/g, '');
       
       const numValue = parseInt(value);
       if (!isNaN(numValue) && numValue > 20000) {
           value = '20000';
       }
       
       if (input.value !== value) {
           input.value = value;
           input.setSelectionRange(cursorPos, cursorPos);
       }
   });
   
   input.addEventListener('blur', () => {
       let value = input.value;
       const numValue = parseInt(value);
       
       if (isNaN(numValue) || value === '' || numValue < 1) {
           input.value = '';
       } else if (numValue > 20000) {
           input.value = '20000';
       } else {
           input.value = value;
       }
   });
}

// Validations for days (max 7)
function enforceDaysLimits(input) {
   input.addEventListener('keypress', function(e) {
       const key = e.key;
       
       if (key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Tab') {
           return;
       }
       
       if (!/[0-7]/.test(key)) {
           e.preventDefault();
           return;
       }
   });
   
   input.addEventListener('input', (e) => {
       let value = input.value;
       
       value = value.replace(/[^0-7]/g, '');
       
       const numValue = parseInt(value);
       if (!isNaN(numValue) && numValue > 7) {
           value = '7';
       }
       
       input.value = value;
   });
}

// Apply validations to respective fields
const priceInputs = [
   document.getElementById('pricePerKg'),
   document.getElementById('pricePerPiece'), 
   document.getElementById('pricePerKg2')
];
priceInputs.forEach(enforcePriceLimits);

const calorieInputs = [
   document.getElementById('calories1'), 
   document.getElementById('calories2')
];
calorieInputs.forEach(enforceCalorieLimits);

const weightInput = document.getElementById('pieceWeight');
enforceWeightLimits(weightInput);


// Apply validations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
   // Cost fields
   const costInputs = [
       document.getElementById('cost100kcal1'),
       document.getElementById('cost100kcal2'),
       document.getElementById('dtCost100kcal1'),
       document.getElementById('dtCost100kcal2')
   ];
   costInputs.forEach(input => {
       if (input) enforceCostLimits(input);
   });

   // Calorie fields (for extra counting)
   const extraCalorieInputs = [
       document.getElementById('dailyCalories'),
       document.getElementById('trainingDayCalories'),
       document.getElementById('nonTrainingDayCalories')
   ];
   extraCalorieInputs.forEach(input => {
       if (input) enforceCaloriesLimits(input);
   });

   // Day fields
   const dayInputs = [
       document.getElementById('trainingDaysPerWeek'),
       document.getElementById('nonTrainingDaysPerWeek')
   ];
   dayInputs.forEach(input => {
       if (input) enforceDaysLimits(input);
   });

   // Auto-fill opposite day value
   const trainingDaysInput = document.getElementById('trainingDaysPerWeek');
   const nonTrainingDaysInput = document.getElementById('nonTrainingDaysPerWeek');

   if (trainingDaysInput && nonTrainingDaysInput) {
       trainingDaysInput.addEventListener('input', function() {
           const trainingDays = parseInt(this.value) || 0;
           if (trainingDays >= 0 && trainingDays <= 7) {
               nonTrainingDaysInput.value = 7 - trainingDays;
           }
       });

       nonTrainingDaysInput.addEventListener('input', function() {
           const nonTrainingDays = parseInt(this.value) || 0;
           if (nonTrainingDays >= 0 && nonTrainingDays <= 7) {
               trainingDaysInput.value = 7 - nonTrainingDays;
           }
       });
   }
});