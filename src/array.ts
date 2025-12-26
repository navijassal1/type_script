console.log('-----------ARRAYS------------')
/**
 * Array is collection of values stored in order
 * Each Value called element, and you can access it by its index (starting from 0)
 */
// store only string values
const chaiFlavours: string[] = ["Masala", "Ginger", "Special"]
console.log(chaiFlavours, 'Only string values')

// store only number values
const price: number[] = [10, 20, 30]
console.log(price, 'Only number values')

// store mix values 
const mix: (number | string)[] = [1, 'navi', 2, 'manjot']
console.log(mix, 'Mix values')

// Array of object

interface person {
    name: string;
    age: number
}

const peoples: person[] = [
    { name: 'Navdeep', age: 23 },
    { name: 'Manjot', age: 24 }
]
console.log(peoples, 'Array of objects')

// Multidimensional Array

const peopls: person[][] = [
    [
        { name: 'Navdeep', age: 23 },
        { name: 'Manjot', age: 24 }
    ],
    [
        { name: 'karan', age: 21 },
        { name: 'ravinder', age: 22 }
    ]
]
console.log(peopls, 'Multi Dimensional Array')


/**
 * Readonly Array
 * these are special type of array which are only defines but never been manipulated only data can be read from array
 */

const cities: readonly string[] = ['Punjab', 'Delhi', 'Mumbai']
console.log(cities, 'readonly array')



