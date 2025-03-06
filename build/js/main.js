"use strict";
// // // let username = "Esther";
// // // console.log(username);
// interface PostId = stringOrNumber //wont work!
//Literal Types
let myName;
myName = "Esther";
let userName;
userName = "Dave";
// FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
console.log(multiply(3, 5));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
//default param values
// const sumAll = (a: number, b: number, c: number = 2): number => {
//   return a + b + c;
// };
// logMsg(addAll(2, 3, 2));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3));
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3));
//The never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
    //we wont get error anymore bcos we are returning a never type
};
