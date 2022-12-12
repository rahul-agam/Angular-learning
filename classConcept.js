"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    // In Typsecript we can either have a default constructor
    // OR paramterized constructor. BUT not BOTH.
    constructor(id, name, address) {
        /*
        For creating variables which are private, we can use below two syntaxes
    
        private id : number ;
                or
        #id : number ;   // This is the latest one
        */
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.address = address;
        this.name = name;
    }
    // Getter
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    // Setter
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // Method - no need to use function keyword 
    getDetails() {
        return `${__classPrivateFieldGet(this, _Employee_id, "f")} in ${this.name}`;
    }
} // END of class Employee
_Employee_id = new WeakMap();
let rahul = new Employee(2, "Karan", "ECIL");
rahul.empId = 100;
console.log("EMP ID : ", rahul.empId);
console.log("Rahul Details :", rahul.getDetails());
class Manager extends Employee {
    getManagerDetails() {
        return this.name + " hometown in " + this.address;
    }
    constructor(id, name, address) {
        super(id, name, address);
    }
}
const karan = new Manager(12, "Karan", "NZB");
