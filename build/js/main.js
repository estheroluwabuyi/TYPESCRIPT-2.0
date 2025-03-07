"use strict";
// // // // let username = "Esther";
// // // // console.log(username);
//with as keyword
let a = "hello";
let b = a; //assignment to a less specific type
let c = a; //assignment to a more specific type
//with angle brackets
let d = "world"; // "world" as a string (One)g
// let d = "world" as One;
let e = "world"; // let e = "world" as Two;
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let nextVal = addOrConcat(2, 2, "concat"); //even tho this is not true, TS is believing us that this would return a number
//unknown type: like any unless you cant use unknown anywhere unless youre doing force or double casting
// 10 as string
//force casting
10;
//assertions with DOM
const img = document.querySelector("img"); //this does nit throe any more error because we're literally selecting an img element and not just forcing src on an HTMLElement thats not an img
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img");
img.src; // TS now has no problem with us accessing
myImg.src;
