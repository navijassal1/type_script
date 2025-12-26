"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('-----------ARRAYS------------');
/**
 * Array is collection of values stored in order
 * Each Value called element, and you can access it by its index (starting from 0)
 */
// store only string values
const chaiFlavours = ["Masala", "Ginger", "Special"];
console.log(chaiFlavours, 'Only string values');
// store only number values
const price = [10, 20, 30];
console.log(price, 'Only number values');
// store mix values 
const mix = [1, 'navi', 2, 'manjot'];
console.log(mix, 'Mix values');
const peoples = [
    { name: 'Navdeep', age: 23 },
    { name: 'Manjot', age: 24 }
];
console.log(peoples, 'Array of objects');
// Multidimensional Array
const peopls = [
    [
        { name: 'Navdeep', age: 23 },
        { name: 'Manjot', age: 24 }
    ],
    [
        { name: 'karan', age: 21 },
        { name: 'ravinder', age: 22 }
    ]
];
console.log(peopls, 'Multi Dimensional Array');
/**
 * Readonly Array
 * these are special type of array which are only defines but never been manipulated only data can be read from array
 */
const cities = ['Punjab', 'Delhi', 'Mumbai'];
console.log(cities, 'readonly array');
