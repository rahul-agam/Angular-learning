/*
    string, number, boolean, any, array, enum, tuple, void, never
*/

let fname : string ;
fname = "Rahul";
fname = fname.toUpperCase();
console.log(fname);

// boolean values does not have any default value.
let isApplicable : boolean = false;

let empList : string[] ;
// Cannot assign a number to string
// tsc - to compile this code and it gives an error.
// node datatypes - will run this code, and then it works fine. Because internally TS is converted to JS
empList = ["Rahul", "Karan", "Pruthvi", 1];
console.log("Print List", empList);
let numList : Array<number> ;

numList = [1,2,3,4,5,6,7];

let result = numList.filter((num) => num > 2);
console.log("Result : " , result);

const enum Month {
    January,
    Feb,
    March,
    April
}

let m : Month = Month.April;
console.log("enum value : ", m);