"use strict";
/*
    string, number, boolean, any, array, enum, tuple, void, never
*/
let fname;
fname = "Rahul";
fname = fname.toUpperCase();
console.log(fname);
// boolean values does not have any default value.
let isApplicable = false;
let empList;
// Cannot assign a number to string
// tsc - to compile this code and it gives an error.
// node datatypes - will run this code, and then it works fine. Because internally TS is converted to JS
empList = ["Rahul", "Karan", "Pruthvi", 1];
console.log("Print List", empList);
let numList;
numList = [1, 2, 3, 4, 5, 6, 7];
let result = numList.filter((num) => num > 2);
console.log("Result : ", result);
let m = 3 /* Month.April */;
console.log("enum value : ", m);
