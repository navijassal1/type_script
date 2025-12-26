"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('------types & Interface----------');
let user = { name: 'navdeep', age: 23 };
console.log(user, 'user interface');
let subs = 6;
subs = '1m';
console.log(subs, 'type alias');
const personDetail = { name: 'navdeep', age: 10 };
console.log(personDetail, 'intersection');
const userData = {
    id: 1,
    name: 'navdeep singh',
    age: 23
};
const userData1 = {
    id: 1,
    name: 'navdeep singh',
    age: 23,
    habbits: 'coding'
};
console.log(userData, 'userData');
console.log(userData1, 'userData1');
const chaiDetails = {
    type: 'masala',
    spicelevel: 'normal'
};
function makeChai(chai = chaiDetails) {
    return `making chai ${chai.type} and spicelevel ${chai.spicelevel}`;
}
console.log(' -----make Chai----- \n', makeChai());
