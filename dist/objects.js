"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('--------OBJECTS---------');
/**
 *  Utility Class 'Partial<T>'
 *  No required any specific property if user passes then ok otherwise no problem
 */
const userDetails = (user) => {
    console.log(user, 'Partial utility class');
};
userDetails({ first_name: 'navdeep', last_name: 'singh', isAdmin: true });
/**
 *  Utility Class 'Pick<T,"key">'
 * That Properties are only required which are asking
 */
const userDetails1 = (user) => {
    console.log(user, 'Pick utility class');
};
userDetails1({ first_name: 'navdeep', last_name: 'singh' });
/**
 *  Utility Class 'Required<T>'
 *  all properties are must required no matter its optional or not
 */
const userDetails2 = (user) => {
    console.log(user, 'Required utility class');
};
userDetails2({ first_name: 'navdeep', last_name: 'singh', user_name: "navi_jassal", isAdmin: true, hobbies: ['coding', 'playing bgmi'] });
/**
 *  Utility Class 'Required<T>'
 *  all properties are required which is passed as generic execpt only those one's
 */
const userDetails3 = (user) => {
    console.log(user, 'Required utility class');
};
userDetails3({ first_name: 'navdeep', last_name: 'singh', user_name: "navi_jassal", isAdmin: true });
