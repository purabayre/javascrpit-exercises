const restaurant1 = {
  name: 'Italiano',
  loc: 'Mumbai',
  menu: ['Pizza', 'Pasta', 'Risotto', 'Tiramisu'],
  openingHours: {
    mon: { open: 10, close: 22 },
    tue: { open: 10, close: 22 },
    wed: { open: 10, close: 22 },
    thu: { open: 10, close: 23 },
    fri: { open: 10, close: 24 },
    sat: { open: 12, close: 24 },
    sun: { open: 12, close: 22 },
  },
  orderFood: function (mainDish, sideDish) {
    return `You ordered ${mainDish} with ${sideDish}`;
  },
};

const { name, loc } = restaurant1;
console.log(name, loc);

const [firstItem, , , lastItem] = restaurant1.menu;
console.log(firstItem, lastItem);

const {
  openingHours: {
    fri: { open: fridayOpen, close: fridayClose },
  },
} = restaurant1;
console.log(fridayOpen, fridayClose);

function printRestaurantInfo({ name, loc, menu }) {
  console.log(`${name} is located in ${loc}`);
  console.log(`Main dish: ${menu[0]}`);
}
printRestaurantInfo(restaurant1);

const [mainDish, ...otherDishes] = restaurant1.menu;
console.log(mainDish);
console.log(otherDishes);
