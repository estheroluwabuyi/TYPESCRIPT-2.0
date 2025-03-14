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
// const img = document.querySelector("img")!; //this does nit throe any more error because we're literally selecting an img element and not just forcing src on an HTMLElement thats not an img
// const myImg = document.getElementById("img") as HTMLImageElement;
// const nextImg = <HTMLImageElement>document.getElementById("img");
// img.src; // TS now has no problem with us accessing
// myImg.src;
// TYPESCRIPT CLASSES
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Esther = new Coder("Esther", "Pop", 25);
console.log(Esther);
Esther.music = "Jazz";
console.log(Esther);
console.log(Esther.getAge());
// console.log(Esther.age); //works in js
// console.log(Esther.lang); //can be accessed only in classes and derived classes
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Kara = new WebDev("Mac", "Kara", "Hip Pop", 23);
console.log(Kara.getLang());
console.log(Kara.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const John = new Guitarist("John", "Guitar");
console.log(John.play("strums"));
////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jane = new Peeps("Jane");
const Steve = new Peeps("John");
const Amy = new Peeps("John");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
//Setters and Getters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState; // leaving it like this makes the method readonly because theres no setter
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
