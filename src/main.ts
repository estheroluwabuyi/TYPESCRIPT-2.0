// // // // let username = "Esther";
// // // // console.log(username);

// // // // let a: number = 12;
// // // // let b: number = 6;
// // // // let c: number = 2;

// // // // console.log(a / b);

// // // // console.log(c * b);

// // // let myName: string = "Esther";
// // // let meaningOfLife: number;
// // // let isLoading: boolean;
// // // // let album: string | number;
// // // let album: any;

// // // myName = "John";
// // // meaningOfLife = 42;
// // // isLoading = true;
// // // album = 1094;

// // // const sum = (a: number, b: string) => {
// // //   return a + b;
// // // };

// // // let postId: string | number;
// // // let isActive: number | boolean | string;

// // // let re: RegExp = /\w+/g;
// // // console.log(re);

// // //Arrays
// // let stringArr = ["one", "hey", "David"];

// // let guitars = ["Strat", "Les Paul", 5150];

// // let mixedData = ["EVH", 1984, true];

// // stringArr[0] = "John";
// // stringArr.push("hey");
// // console.log(stringArr);

// // guitars[0] = 1984;
// // guitars.unshift("Jim");
// // console.log(guitars);

// // guitars = stringArr;
// // mixedData = guitars;

// // let test = [];
// // let bands: string[] = [];
// // bands.push("Tom Cruise");

// // //Tuple
// // let myTuple: [string, number, boolean] = ["Dave", 42, true];

// // let mixed = ["John", 1, false];

// // mixed = myTuple;
// // // myTuple = mixed;

// // // myTuple[0] = "Danny"; //error
// // // myTuple[2] = "Gigi"; //error

// // console.log(myTuple);

// // //Objects
// // let myObj: object;
// // // myObj = "";
// // myObj = [];
// // console.log(typeof myObj);
// // myObj = bands;
// // myObj = {};

// // const exampleObj = {
// //   prop1: "Dave",
// //   prop2: true,
// // };

// // // exampleObj.prop2 = 43;
// // exampleObj.prop2 = false;
// // // exampleObj.prop1 = 55
// // exampleObj.prop1 = "John";

// // // type Guitarist = {
// // //   name: string;
// // //   //active?: boolean;
// // //   active?: boolean;
// // //   albums: (string | number)[];
// // // };

// // interface Guitarist {
// //   name?: string;
// //   active: boolean;
// //   //   active?: boolean;
// //   albums: (string | number)[];
// // }

// // let evh: Guitarist = {
// //   name: "Eddie",
// //   active: false,
// //   albums: [1984, 5150, "OU756"],
// // };

// // let JP: Guitarist = {
// //   //   name: "Jimmy",
// //   active: true,
// //   albums: ["1", "II", "OU756"],
// // };

// // // evh = JP;

// // const greetGuitarist = (guitarist: Guitarist) => {
// //   //   return `Hello ${guitarist.name?.toUpperCase()}!`; //optional chaining
// //   if (guitarist.name) {
// //     return `Hello ${guitarist.name.toUpperCase()}!`;
// //   }
// //   return "Hello!";
// // };

// // console.log(greetGuitarist(JP));

// // //Enums
// // enum Grade {
// //   U = 10,
// //   D,
// //   C,
// //   B,
// //   A,
// // }

// // console.log(Grade.U);

// //Type Aliases
// type stringOrNumber = string | number;

// type stringOrNumberArray = string | number;

// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumber;
// };

// type UserId = stringOrNumber;

// // interface PostId = stringOrNumber //wont work!

// //Literal Types
// let myName: "Esther";
// myName = "Esther";
// let userName: "Dave" | "Esther" | "Jade";

// userName = "Dave";

// // FUNCTIONS
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any): void => {
//   console.log(message);
// };

// logMsg("Hello!");
// logMsg(add(2, 3));

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number;
// // interface mathFunction {
// //   (a: number, b: number): number;
// // }

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// logMsg(multiply(2, 2));
// console.log(multiply(3, 5));

// //optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") return a + b + c;

//   return a + b;
// };

// //default param values
// // const sumAll = (a: number, b: number, c: number = 2): number => {
// //   return a + b + c;
// // };

// // logMsg(addAll(2, 3, 2));
// // logMsg(addAll(2, 3));
// // logMsg(sumAll(2, 3));

// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// logMsg(sumAll(undefined, 3));

// //Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((prev, curr) => prev + curr);
// };
// logMsg(total(1, 2, 3));

// //The never type
// const createError = (errMsg: string) => {
//   throw new Error(errMsg);
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;

//     if (i > 100) break;
//   }
// };

// const isNumber = (value: any): boolean => {
//   return typeof value === "number" ? true : false;
// };

// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (isNumber(value)) return "number";

//   return createError("This should never happen");
//   //we wont get error anymore bcos we are returning a never type
// };

// TYPE ASSERTIONS AND TYPE CASTING (TYPESCRIPT CASTING)
type One = string;
type Two = string | number;
type Three = "hello"; //literal type, only "hello" is allowed

//with as keyword
let a: One = "hello";
let b = a as Two; //assignment to a less specific type
let c = a as Three; //assignment to a more specific type

//with angle brackets
let d = <One>"world"; // "world" as a string (One)g
// let d = "world" as One;
let e = <string | number>"world"; // let e = "world" as Two;

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;

  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

let nextVal: number = addOrConcat(2, 2, "concat") as number; //even tho this is not true, TS is believing us that this would return a number

//unknown type: like any unless you cant use unknown anywhere unless youre doing force or double casting
// 10 as string
//force casting
10 as unknown as string;

//assertions with DOM
// const img = document.querySelector("img")!; //this does nit throe any more error because we're literally selecting an img element and not just forcing src on an HTMLElement thats not an img
// const myImg = document.getElementById("img") as HTMLImageElement;
// const nextImg = <HTMLImageElement>document.getElementById("img");

// img.src; // TS now has no problem with us accessing
// myImg.src;

// TYPESCRIPT CLASSES
class Coder {
  secondLang!: string; //you wont get an error for not calling yet

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Esther = new Coder("Esther", "Pop", 25);
console.log(Esther);

Esther.music = "Jazz";
console.log(Esther);

console.log(Esther.getAge());
// console.log(Esther.age); //works in js becos theres nothing like or anything
// console.log(Esther.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Kara = new WebDev("Mac", "Kara", "Hip Pop", 23);
console.log(Kara.getLang());
console.log(Kara.getAge());
// console.log(Kara.age);
// console.log(Kara.lang); //only accessible WITHIN the classes and subclasses

/////////////////////////////////
//Applying interfaces to classes
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const John = new Guitarist("John", "Guitar");
console.log(John.play("strums"));
