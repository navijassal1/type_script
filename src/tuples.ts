/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 * Tuples are great because they allow each element in the array to be a known type of value.
 */

type person=[name:string,age:number,profession:string,admin:boolean]

const people:person=['Navdeep',23,'software engineer',true]
console.log(people,'basic tuple')