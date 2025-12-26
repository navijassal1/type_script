// Narrowing 
// 
// it means use if else to check which type of data should be passing through variables and return response according to it 

// #eg1
function getChai(kind:string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} Chai...`
    }
    return `Chai Order ${kind}`
    
}

console.log(getChai('masala chai'))

// #eg2
/**
 * this is example of truthy type Narrowing
 * @param msg this may be or may not be present
 * @returns if msg present return 'msg' otherwise default chai
 */
function serveChai(msg?:string){
    if(msg){
        return `serving ${msg} chai...`
    }
    return `serving default masala chai...`
}


class masalaChai{
    serve(){
        return `serving masala chai`
    }
}
class cuttingChai{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai:masalaChai|cuttingChai){
    if(chai instanceof masalaChai){
        return chai.serve
    }
    return chai.serve
}

type chaiOrder={
    type:string,
    sugar:number
}

function order(chai:chaiOrder){
    if(chai.type=='string'){
        return `serving chai ${chai.type} with ${chai.sugar} sugar`
    }
}


