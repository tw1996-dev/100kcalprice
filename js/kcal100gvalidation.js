function enforceLimitsAndFormat(input) {
    // Handle keypress - control what can be typed
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
            
            // Block if separator already exists
            if (hasDot || hasComma) {
                e.preventDefault();
                return;
            }
        }
        
        // If typing a digit, check decimal places and value limits
        if (/[0-9]/.test(key)) {
            const dotIndex = currentValue.indexOf('.');
            const commaIndex = currentValue.indexOf(',');
            const separatorIndex = Math.max(dotIndex, commaIndex);
            const cursorPos = input.selectionStart;
            
            // Check decimal places limit
            if (separatorIndex !== -1 && cursorPos > separatorIndex) {
                const afterSeparator = currentValue.substring(separatorIndex + 1);
                if (afterSeparator.length >= 2) {
                    e.preventDefault();
                    return;
                }
            }
            
            // Check if new value would exceed 900
            const newValue = currentValue.slice(0, cursorPos) + key + currentValue.slice(cursorPos);
            const testValue = parseFloat(newValue.replace(',', '.'));
            if (!isNaN(testValue) && testValue > 900) {
                e.preventDefault();
                return;
            }
        }
    });
    
    // Handle paste
    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        
        // Clean: keep only digits and first separator
        let cleaned = '';
        let separatorFound = false;
        
        for (let char of pastedText) {
            if (/[0-9]/.test(char)) {
                cleaned += char;
            } else if ((char === '.' || char === ',') && !separatorFound) {
                cleaned += '.'; // Always use dot internally
                separatorFound = true;
            }
        }
        
        // Limit decimal places
        const parts = cleaned.split('.');
        if (parts.length > 1 && parts[1].length > 2) {
            cleaned = parts[0] + '.' + parts[1].substring(0, 2);
        }
        
        // Check limits
        const numValue = parseFloat(cleaned);
        if (!isNaN(numValue)) {
            if (numValue > 900) {
                cleaned = '900';
            } else if (numValue < 1) {
                cleaned = '1';
            }
        }
        
        input.value = cleaned;
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // Handle input changes (cleanup)
    input.addEventListener('input', (e) => {
        if (e.inputType === 'insertFromPaste') return;
        
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
            const afterDot = value.substring(firstDot + 1).replace(/\./g, ''); // Remove extra dots
            value = beforeDot + '.' + afterDot;
        }
        
        // Limit decimal places
        const parts = value.split('.');
        if (parts.length > 1 && parts[1].length > 2) {
            value = parts[0] + '.' + parts[1].substring(0, 2);
        }
        
        // Apply value limits
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            if (numValue > 900) {
                value = '900';
            } else if (numValue < 1 && value !== '' && !value.endsWith('.')) {
                value = '1';
            }
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
            input.value = '1';
        } else if (numValue < 1) {
            input.value = '1';
        } else if (numValue > 900) {
            input.value = '900';
        } else {
            input.value = value;
        }
    });
}

// Apply to inputs
const inputs = [
    document.getElementById('calories1'), 
    document.getElementById('calories2')
];
inputs.forEach(enforceLimitsAndFormat);