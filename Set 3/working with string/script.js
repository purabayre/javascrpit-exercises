'use strict';

const flight = ' Air India AI 2847 Mumbai-Delhi ';

const cleanFlight = flight.trim();
const parts = cleanFlight.split(' ');

const airline = parts[0] + ' ' + parts[1];
const flightNumber = parts[2] + parts[3];
const route = parts[4];

const formatted = `${airline.toLowerCase()} | ${parts[2].toLowerCase()} ${parts[3]} | ${route.toLowerCase()}`;

const indianCities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
const [from, to] = route.split('-');
const isDomestic = indianCities.includes(from) && indianCities.includes(to);

const cityCodes = { Mumbai: 'MUM', Delhi: 'DEL' };
const boardingPass = `${airline.toUpperCase()} | Flight: ${flightNumber} | ${cityCodes[from]} → ${cityCodes[to]}`;

console.log(formatted);
console.log(isDomestic ? 'Domestic Flight' : 'International Flight');
console.log(boardingPass);
