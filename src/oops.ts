/**
 * Basic class
 */
console.log('---------Basic class----------')
class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    greet(): void {
        console.log(`Hello ${this.name}`)
    }
}

const p1 = new Person('Navdeep')
p1.greet()

/**
 * Encapsulation
 * Access modifiers
 * public => accessible everywhere
 * private => accessible only inside class
 * protected => accessible in class + subclasses
 */
console.log('---------Encapsulation----------')

type kind = "masala" | "ginger"
type sugarSpoons = 1 | 2 | 3 | 4 | 5

class chai {

    public tealeaves: string = 'red label';

    private _flavour: string;
    private _sugarSpoon: number;
    private _secretIngredients = "elaichi";

    constructor(kind: kind, sugerSpoons: sugarSpoons) {
        this._flavour = kind
        this._sugarSpoon = sugerSpoons
        console.log('your order being processed')
    }

    public chaiReady(): string {
        return `your ${this._flavour} chai with ${this._sugarSpoon} sugar spoons is ready`
    }
}

const makechai1 = new chai("masala", 3)
console.log(makechai1.tealeaves, "only Tea are used")
console.log(makechai1.chaiReady(), 'Chai is ready')


// Protected & getter setter controller

console.log('---------Protected & getter setter----------')

class shop {

    protected shopName: string
    constructor(shopName: string) {
        this.shopName = shopName
    }

}

class branch extends shop {

    constructor(shopName: string) {
        super(shopName)
    }
    get getshopname() {
        return this.shopName
    }

    set changeShopName(shopName: string) {
        this.shopName = shopName
    }

}

const b1 = new branch('stationary')

console.log(b1.getshopname, 'current shop name')

b1.changeShopName = 'fruit salad'

console.log(b1.getshopname, 'new shop name')

/**
 * --------Static members--------
 *  static members are those which can directly access by class instance no need to create objects
 * */
console.log('---------Static Members----------')

class demo {
    static name: string = 'Navdeep'
    age: number = 23
}

const d = new demo()
console.log(demo.name, 'access directly using class') //static access
console.log(d.age, 'via object') //object access


/**
 * --------abstract class------
 *  this class are those which object will never created it is only work as base class for other classes
 * */

console.log('---------Abstract class----------')

abstract class bikeColor {

    abstract bikeColor: string

    greet() {
        console.log('greet from abstract class')
    }
}

class bike extends bikeColor {

    bikeColor = 'red'
    get getColor(): string {
        return `bike color is ${this.bikeColor}`
    }
    set setColor(color: string) {
        this.bikeColor = color
    }
}


let b = new bike()

console.log(b.greet(),'Greet directly from abstarct class')
console.log(b.getColor, 'using abstract class')
b.setColor = 'blue'
console.log(b.getColor, 'new bike color')
