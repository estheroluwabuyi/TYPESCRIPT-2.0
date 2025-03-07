"use strict";
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
//1ST variation
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// // year?.setAttribute("datetime", thisYear);
// if (year) {
//   year.setAttribute("datetime", thisYear); //setAttribute: datetime = 2025
//   year.textContent = thisYear;
// }
//2ND variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
