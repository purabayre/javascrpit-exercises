'use strict';

// =========================
// StorageManager Class
// =========================
class StorageManager {
  constructor(namespace = 'app') {
    this.namespace = namespace;
  }

  _key(key) {
    return `${this.namespace}_${key}`;
  }

  save(key, value, expiryMs = null) {
    const data = {
      value,
      expiry: expiryMs ? Date.now() + expiryMs : null,
    };
    localStorage.setItem(this._key(key), JSON.stringify(data));
  }

  get(key) {
    const raw = localStorage.getItem(this._key(key));
    if (!raw) return null;

    try {
      const data = JSON.parse(raw);

      if (data.expiry && Date.now() > data.expiry) {
        this.remove(key);
        return null;
      }

      return data.value;
    } catch {
      return null;
    }
  }

  remove(key) {
    localStorage.removeItem(this._key(key));
  }

  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.namespace + '_'))
      .forEach(k => localStorage.removeItem(k));
  }

  getAll() {
    const result = {};

    Object.keys(localStorage)
      .filter(k => k.startsWith(this.namespace + '_'))
      .forEach(k => {
        const key = k.replace(this.namespace + '_', '');
        const value = this.get(key);
        if (value !== null) result[key] = value;
      });

    return result;
  }
}

// =========================
// Demo Usage
// =========================
const storage = new StorageManager('myApp');
const output = document.getElementById('output');

document.getElementById('save').addEventListener('click', () => {
  storage.save('user', { name: 'Purab', role: 'Developer' });
  storage.save('token', 'Coder', 5000);
  output.textContent = 'Saved user & token (token expires in 5s)';
});

document.getElementById('get').addEventListener('click', () => {
  output.textContent = JSON.stringify(storage.get('user'), null, 2);
});

document.getElementById('getAll').addEventListener('click', () => {
  output.textContent = JSON.stringify(storage.getAll(), null, 2);
});

document.getElementById('remove').addEventListener('click', () => {
  storage.remove('user');
  output.textContent = 'User removed';
});

document.getElementById('clear').addEventListener('click', () => {
  storage.clear();
  output.textContent = 'Namespace cleared';
});
