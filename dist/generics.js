"use strict";
/**
 * Generics
 * this are used to reuse code
 * in this basicaly we can't predefined which type of data has been passed while using it we define type this makes
 * code reusable for multiple types
 
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Function Generics
function wrappedInArray(value) {
    return [value];
}
wrappedInArray(60); // only number is passed
wrappedInArray("navi"); // only string is passed
// class Generics
class namedValue {
    name;
    _value;
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return `${this.name} : ${this._value}`;
    }
}
const obj = new namedValue("myNumber");
obj.setValue(10);
console.log(obj.getValue());
