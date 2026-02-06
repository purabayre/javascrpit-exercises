const input = document.getElementById('currencyInput');

// Format number to Indian currency
function formatINR(value) {
  if (!value) return '';
  return Number(value).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Allow only numbers and one decimal
input.addEventListener('input', () => {
  let value = input.value;

  // Remove invalid characters
  value = value.replace(/[^0-9.]/g, '');

  // Allow only one decimal
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts[1];
  }

  // Limit to 2 decimal places
  if (parts[1]) {
    parts[1] = parts[1].slice(0, 2);
    value = parts.join('.');
  }

  input.value = value;
});

// On focus → raw number
input.addEventListener('focus', () => {
  input.value = input.value.replace(/,/g, '');
});

// On blur → formatted INR
input.addEventListener('blur', () => {
  if (input.value !== '') {
    input.value = formatINR(input.value);
  }
});
