"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Basic class
 */
console.log('---------Basic class----------');
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const p1 = new Person('Navdeep');
p1.greet();
/**
 * Encapsulation
 * Access modifiers
 * public => accessible everywhere
 * private => accessible only inside class
 * protected => accessible in class + subclasses
 */
console.log('---------Encapsulation----------');
class chai {
    tealeaves = 'red label';
    _flavour;
    _sugarSpoon;
    _secretIngredients = "elaichi";
    constructor(kind, sugerSpoons) {
        this._flavour = kind;
        this._sugarSpoon = sugerSpoons;
        console.log('your order being processed');
    }
    chaiReady() {
        return `your ${this._flavour} chai with ${this._sugarSpoon} sugar spoons is ready`;
    }
}
const makechai1 = new chai("masala", 3);
console.log(makechai1.tealeaves, "only Tea are used");
console.log(makechai1.chaiReady(), 'Chai is ready');
// Protected & getter setter controller
console.log('---------Protected & getter setter----------');
class shop {
    shopName;
    constructor(shopName) {
        this.shopName = shopName;
    }
}
class branch extends shop {
    constructor(shopName) {
        super(shopName);
    }
    get getshopname() {
        return this.shopName;
    }
    set changeShopName(shopName) {
        this.shopName = shopName;
    }
}
const b1 = new branch('stationary');
console.log(b1.getshopname, 'current shop name');
b1.changeShopName = 'fruit salad';
console.log(b1.getshopname, 'new shop name');
/**
 * --------Static members--------
 *  static members are those which can directly access by class instance no need to create objects
 * */
console.log('---------Static Members----------');
class demo {
    static name = 'Navdeep';
    age = 23;
}
const d = new demo();
console.log(demo.name, 'access directly using class'); //static access
console.log(d.age, 'via object'); //object access
/**
 * --------abstract class------
 *  this class are those which object will never created it is only work as base class for other classes
 * */
console.log('---------Abstract class----------');
class bikeColor {
    greet() {
        console.log('greet from abstract class');
    }
}
class bike extends bikeColor {
    bikeColor = 'red';
    get getColor() {
        return `bike color is ${this.bikeColor}`;
    }
    set setColor(color) {
        this.bikeColor = color;
    }
}
let b = new bike();
console.log(b.greet(), 'Greet directly from abstarct class');
console.log(b.getColor, 'using abstract class');
b.setColor = 'blue';
console.log(b.getColor, 'new bike color');
