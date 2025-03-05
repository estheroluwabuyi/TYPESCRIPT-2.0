"use strict";
// // let username = "Esther";
// // console.log(username);
// // let a: number = 12;
// // let b: number = 6;
// // let c: number = 2;
// // console.log(a / b);
// // console.log(c * b);
// let myName: string = "Esther";
// let meaningOfLife: number;
// let isLoading: boolean;
// // let album: string | number;
// let album: any;
// myName = "John";
// meaningOfLife = 42;
// isLoading = true;
// album = 1094;
// const sum = (a: number, b: string) => {
//   return a + b;
// };
// let postId: string | number;
// let isActive: number | boolean | string;
// let re: RegExp = /\w+/g;
// console.log(re);
//Arrays
let stringArr = ["one", "hey", "David"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
console.log(stringArr);
guitars[0] = 1984;
guitars.unshift("Jim");
console.log(guitars);
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Tom Cruise");
//Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
// myTuple = mixed;
// myTuple[0] = "Danny"; //error
// myTuple[2] = "Gigi"; //error
console.log(myTuple);
//Objects
let myObj;
// myObj = "";
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
// exampleObj.prop2 = 43;
exampleObj.prop2 = false;
// exampleObj.prop1 = 55
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU756"],
};
let JP = {
    //   name: "Jimmy",
    active: true,
    albums: ["1", "II", "OU756"],
};
// evh = JP;
const greetGuitarist = (guitarist) => {
    //   return `Hello ${guitarist.name?.toUpperCase()}!`; //optional chaining
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(JP));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 10] = "U";
    Grade[Grade["D"] = 11] = "D";
    Grade[Grade["C"] = 12] = "C";
    Grade[Grade["B"] = 13] = "B";
    Grade[Grade["A"] = 14] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
