/**
 * ENUMS
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
 * Enums come in two flavors string and numeric.
 */

//NUMERIC
enum status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    BAD_REQUEST = 400
}
console.log('SUCCESS ', status.SUCCESS)
console.log('NOT_FOUND ', status.NOT_FOUND)
console.log('BAD_REQUEST ', status.BAD_REQUEST)

// STRING
enum cities {
    PUNJAB = 'PUNJAB',
    DELHI = 'DELHI',
    CHANDIGARH = 'CHANDIGARH'
}
console.log('cities ', cities.PUNJAB)
console.log('cities ', cities.DELHI)
console.log('cities ', cities.CHANDIGARH) 