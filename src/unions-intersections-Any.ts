console.log('-------Union and Any----------')
// Union = | OR
// Means combination of Two or more DataTypes 
// #eg1
let subs: string | number = 10
console.log(subs, 'subs union')

// #eg2
let apiStatus: 'pending' | 'success' | 'error' = 'pending'
/**
 * This called default datatypes only three datatypes are allowed
 * in this
 * apiStatus='done' if you try to do this return error 
 */
console.log(apiStatus, 'api status union')

// Intersection
type paint = { type: string }
type color = paint & { color: string }

const cars: color={type:'mate',color:'black'}

console.log(cars,'intersection')

// Any 
let orders = ['11', '22', '55'];
/**
 * if you declare variable without value by default it is type Any
 * to overcome this you should define datatype of variable
 */
let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '22') {
        currentOrder = order
    }
}
console.log(currentOrder, 'current order')