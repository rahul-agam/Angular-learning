class Employee {
    /*
    For creating variables which are private, we can use below two syntaxes

    private id : number ;
            or 
    #id : number ;   // This is the latest one
    */
    #id : number ;
    address : string ;
    protected name : string;

    // In Typsecript we can either have a default constructor
    // OR paramterized constructor. BUT not BOTH.
    constructor(id : number, name : string, address : string) {
        this.#id = id;
        this.address = address;
        this.name = name;
    }

    // Getter
    get empId() : number {
        return this.#id;
    }

    // Setter
    set empId(id : number) {
        this.#id = id;
    }

    // Method - no need to use function keyword 
    getDetails() : string {
        return `${this.#id} in ${this.name}`
    }

} // END of class Employee

let rahul = new Employee(2, "Karan", "ECIL");
rahul.empId = 100;
console.log("EMP ID : ", rahul.empId);
console.log("Rahul Details :" , rahul.getDetails());

class Manager extends Employee {

    getManagerDetails() : string {
        return this.name + " hometown in " + this.address;
    }

    constructor(id : number, name : string, address : string) {
        super(id,name,address);
    }
}

const karan = new Manager(12,"Karan", "NZB");