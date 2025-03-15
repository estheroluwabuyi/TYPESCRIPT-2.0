"use strict";
// // // // let username = "Esther";
// // // // console.log(username);
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Tea: 80,
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);
let prop = "Books";
console.log(todayTransactions[prop]); //5
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test); //even though theres no test in our object, we dont get an error because TS dont know if have test in the obj or not
/////////////////////////////////
for (const key in student) {
    // console.log(`${key}: ${student[key]}`);
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
