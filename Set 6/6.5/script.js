'use strict';

/* =========================
   Expense Class
========================= */
class Expense {
  constructor(description, amount, category, date) {
    this.id = Date.now();
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.date = date;
  }
}

/* =========================
   ExpenseTracker Class
========================= */
class ExpenseTracker {
  constructor() {
    this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  }

  add(expense) {
    this.expenses.push(expense);
    this._commit();
  }

  remove(id) {
    this.expenses = this.expenses.filter(e => e.id !== id);
    this._commit();
  }

  filterByCategory(category) {
    if (category === 'All') return this.expenses;
    return this.expenses.filter(e => e.category === category);
  }

  filterByDate(start, end) {
    return this.expenses.filter(e => {
      const d = new Date(e.date);
      return (!start || d >= new Date(start)) && (!end || d <= new Date(end));
    });
  }

  getTotalsByCategory() {
    return this.expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {});
  }

  _commit() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
}

/* =========================
   UI Class
========================= */
class UI {
  constructor(tracker) {
    this.tracker = tracker;

    this.list = document.getElementById('expense-list');
    this.totals = document.getElementById('totals');

    this._render();
  }

  _render(expenses = this.tracker.expenses) {
    this.list.innerHTML = '';

    expenses.forEach(e => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${e.description} - ₹${e.amount} (${e.category})
        <button data-id="${e.id}">❌</button>
      `;
      this.list.appendChild(li);
    });

    this._renderTotals();
  }

  _renderTotals() {
    const totals = this.tracker.getTotalsByCategory();
    this.totals.innerHTML = '';

    for (const cat in totals) {
      const li = document.createElement('li');
      li.textContent = `${cat}: ₹${totals[cat]}`;
      this.totals.appendChild(li);
    }
  }
}

/* =========================
   App Initialization
========================= */
const tracker = new ExpenseTracker();
const ui = new UI(tracker);

// Add expense
document.getElementById('expense-form').addEventListener('submit', e => {
  e.preventDefault();

  const expense = new Expense(
    description.value,
    +amount.value,
    category.value,
    date.value,
  );

  tracker.add(expense);
  ui._render();

  e.target.reset();
});

// Delete expense
document.getElementById('expense-list').addEventListener('click', e => {
  if (!e.target.dataset.id) return;

  tracker.remove(Number(e.target.dataset.id));
  ui._render();
});

// Filters
document.querySelector('.filters').addEventListener('input', () => {
  let filtered = tracker.filterByCategory(
    document.getElementById('filter-category').value,
  );

  filtered = tracker.filterByDate(start - date.value, end - date.value);

  ui._render(filtered);
});
