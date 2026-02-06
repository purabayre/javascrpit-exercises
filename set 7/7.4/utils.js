export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
