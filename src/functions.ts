console.log("-------Functions-----------")

/**
 * basic function
 */

function basicFunc(name: string): string {
    return `Hello ${name}`
}
console.log(basicFunc('Navdeep'))

/**
 * Optional Parameters
 */

function optionalParams(name: string, age?: number): string {
    if (age) {
        return `Welcome ${name} you are ${age} year's old`
    }
    return `welcome ${name}`
}
console.log(optionalParams('Navi jassal'))
console.log(optionalParams('Navdeep', 23))

/**
 * default parameter
 */
function defaultParams(name: string, age?: number, greeting: string = 'Welcome'): string {
    if (age) {
        return `${greeting} ${name} you are ${age} year's old`
    }
    return `welcome ${name}`
}
console.log(defaultParams('Navi jassal'))
console.log(defaultParams('Navdeep', 23))


/**
 * Arrow function
 */

const sum = (a: number, b: number): number => a + b
console.log('Arrow function', sum(10, 30))

// RETURN TYPES
console.log('------------RETURN TYPES-----------')
/**
 * Void
 * it means function return nothing but its finishes and return flow back to the caller
 */

function voidFunc(name: string, greeting: string = "Welcome"): void {
    console.log(`${greeting} ${name}`)
}
voidFunc('Navdeep', " Void")

/**
 * Specific types
 * :string,number,boolean etc
 * it means function return specific type value in return
 */

function specificTypeFunc(name: string, greeting: string = "Welcome"): string {
    return `${greeting} ${name}`
}
console.log(specificTypeFunc('Navdeep'), " Specific Type :string")


/**
 * Union
 * it means function return nothing but its finishes and return flow back to the caller
 */

function unionFunc(name?: string, greeting: string = "Welcome"): string | null {
    if (name) {

        return `${greeting} ${name}`
    }
    return null
}
console.log(unionFunc('Navdeep'), " Union")

/**
 * never
 * it means function return nothing but its also never gets finish and cannot return flow back to the caller
 */

// function neverFunc(): never {
//     let i=0
//     while (true) {
//         console.log('Welcome',i)
//         i++
//     }

// }
// neverFunc()


type shape = { kind: "circle", radius: number } | { kind: 'sqaure', size: number }

function logger(shape: shape): number {

    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "sqaure":
            return Math.PI * shape.size * 2
        default:
            throw new Error("error");

    }

}
console.log(logger({ kind: "circle", radius: 3 }))
