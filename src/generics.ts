/**
 * Generics
 * this are used to reuse code 
 * in this basicaly we can't predefined which type of data has been passed while using it we define type this makes 
 * code reusable for multiple types
 
 */

// Function Generics

function wrappedInArray<T>(value: T): T[] {
    return [value]
}

wrappedInArray<number>(60) // only number is passed
wrappedInArray<string>("navi") // only string is passed

// class Generics

class namedValue<T> {

    private _value: T | undefined

    constructor(private name: string) { }

    setValue(value: T) {
        this._value = value
    }

    getValue(): string {
        return `${this.name} : ${this._value}`
    }
}

const obj = new namedValue<number>("myNumber")
obj.setValue(10)
console.log(obj.getValue())
