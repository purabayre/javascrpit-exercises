'use strict';

const coordsEl = document.getElementById('coords');
const pinList = document.getElementById('pinList');

let map;
let pins = [];

// 1. Get user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;

      coordsEl.textContent = `Lat: ${latitude.toFixed(
        4,
      )}, Lng: ${longitude.toFixed(4)}`;

      loadMap(latitude, longitude);
    },
    () => alert('Could not get your location'),
  );
}

// 2. Load Leaflet map
function loadMap(lat, lng) {
  map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // User location marker
  L.marker([lat, lng]).addTo(map).bindPopup('You are here').openPopup();

  // 3. Drop pin on click
  map.on('click', function (e) {
    addPin(e.latlng.lat, e.latlng.lng);
  });
}

// 4. Add pin
function addPin(lat, lng) {
  const marker = L.marker([lat, lng]).addTo(map);

  const pin = {
    id: Date.now(),
    lat,
    lng,
    marker,
  };

  pins.push(pin);
  renderPins();
}

// 5. Render pin list
function renderPins() {
  pinList.innerHTML = '';

  pins.forEach(pin => {
    const div = document.createElement('div');
    div.className = 'pin';

    div.innerHTML = `
      <span>
        ${pin.lat.toFixed(4)}, ${pin.lng.toFixed(4)}
      </span>
      <button data-id="${pin.id}"></button>
    `;

    pinList.appendChild(div);
  });
}

// 6. Delete pin
pinList.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return;

  const id = Number(e.target.dataset.id);
  const pin = pins.find(p => p.id === id);

  map.removeLayer(pin.marker);
  pins = pins.filter(p => p.id !== id);

  renderPins();
});
