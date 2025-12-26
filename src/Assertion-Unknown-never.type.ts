/** Assertion
 * it means we forcefully define type of variable while accessing or calling
 * sanu koi v suggestions in onde without it 
 * assertion use krke type de functions suggestion on lgg jande
 */

let apiresponse: any = 45

let length: number = (apiresponse as string).length //this is forcefully assignment the apiresponse is string

console.log(length)
 
// assertion define the value which is passing is 'HTMLInputElement'
let inputElement = document.getElementById('username') as HTMLInputElement

console.log(inputElement)


// Any
let value:any=45
value=true
value=[1,2,3,4]
value='Navi Jassal'

//in any this will not giving error at compile time 
value.toUpperCase() 


// Unknown
let newValue:unknown=45

newValue=true
newValue=[1,2,3,4]
newValue='Navi Jassal'

//but case of unknow functions show an error
// so to resolve it you have to wrap it in Narrowing type 
if(typeof newValue === 'string'){
    value.toUpperCase() 
}


try {
    
} catch (error) {
    // in typescript you can't access error.message directly because its not possible everytime message instance or Error Class 
    // so you have to Narrowing it

    if(error instanceof Error){
        console.log(error.message)
    }
}

// never

type Role='user'|'admin'

function redirectTodashBoard(role:Role):void{
    if(role==='user'){
        console.log('Redirect to user dashboard')
        return
    }
    if(role==='admin'){
        console.log('Redirect to admin dashboard')
        return
    }
    role; //(parameter) role: never 'this is now never because all its parameter are used'
}



