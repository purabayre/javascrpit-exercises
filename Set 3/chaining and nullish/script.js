'use strict';

const users = [
  {
    name: 'Raj',
    email: 'raj@email.com',
    address: { city: 'Mumbai', pin: '400001' },
  },
  {
    name: 'Priya',
    email: null,
  },
  {
    name: 'Amit',
  },
];

function getUserInfo(user) {
  const name = user.name ?? 'Unknown';
  const email = user.email ?? 'No email';
  const city = user.address?.city ?? 'No city';

  return `Name: ${name}, Email: ${email}, City: ${city}`;
}

users.forEach(user => {
  console.log(getUserInfo(user));
});
