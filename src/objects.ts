console.log('--------OBJECTS---------')


interface details {
    first_name:string;
    last_name:string;
    user_name:string;
    isAdmin:boolean;
    hobbies:string[];
}

/**
 *  Utility Class 'Partial<T>'
 *  No required any specific property if user passes then ok otherwise no problem
 */
const userDetails= (user: Partial<details>)=>{
    console.log(user,'Partial utility class')
}
userDetails({first_name:'navdeep',last_name:'singh',isAdmin:true})

/**
 *  Utility Class 'Pick<T,"key">'
 * That Properties are only required which are asking
 */
const userDetails1= (user: Pick<details,"first_name" | "last_name">)=>{
    console.log(user,'Pick utility class')
}
userDetails1({first_name:'navdeep',last_name:'singh'})


/**
 *  Utility Class 'Required<T>'
 *  all properties are must required no matter its optional or not
 */
const userDetails2= (user: Required<details>)=>{
    console.log(user,'Required utility class')
}
userDetails2({first_name:'navdeep',last_name:'singh',user_name:"navi_jassal",isAdmin:true,hobbies:['coding','playing bgmi']})


/**
 *  Utility Class 'Required<T>'
 *  all properties are required which is passed as generic execpt only those one's
 */
const userDetails3= (user: Omit<details,"hobbies">)=>{
    console.log(user,'Required utility class')
}
userDetails3({first_name:'navdeep',last_name:'singh',user_name:"navi_jassal",isAdmin:true})



