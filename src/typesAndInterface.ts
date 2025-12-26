console.log('------types & Interface----------')
/**
 * type and interface both are used to define types in typescript
 * Aliases and Interfaces allows types to be easily shared between different variables/objects. 
 * to use interface
 */

/**
 * Interfaces
 * 
 * interfaces are used for objects only
 * must use in api's in express
 */

interface user {
    name: string
}
//interface can extends like this easily
interface user {
    age: number
}

let user: user = { name: 'navdeep', age: 23 }

console.log(user, 'user interface')


/**
 * type
 */
// UNION using type

type subs = string | number

let subs: subs = 6

subs = '1m'

console.log(subs, 'type alias')


// INTERSECTION using type

type name = { name: string }

type details = name & { age: number }

const personDetail: details = { name: 'navdeep', age: 10 }

console.log(personDetail, 'intersection')

// OBJECTS using type
type person = {
    id: number;
    name: string;
    age: number;
    habbits?: string; //may or may not be
}

const userData: person = {
    id: 1,
    name: 'navdeep singh',
    age: 23
}
const userData1: person = {
    id: 1,
    name: 'navdeep singh',
    age: 23,
    habbits: 'coding'
}

console.log(userData, 'userData')
console.log(userData1, 'userData1')

type chaiType = {
    type: string,
    spicelevel: string
}
const chaiDetails: chaiType = {

    type: 'masala',
    spicelevel: 'normal'
}


function makeChai(chai: chaiType = chaiDetails): string {

    return `making chai ${chai.type} and spicelevel ${chai.spicelevel}`
}

console.log(' -----make Chai----- \n', makeChai())
