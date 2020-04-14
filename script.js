'use strict';

var firstNumber=1;
var string="henlo";
const third=3;
var smth;

let tom={
    name:"Tomiris",
    age:22,
    isMarried:false
};
//console.log(tom["name"]);
//let answer=prompt("re u tom?");
//console.log(typeof(null));
//console.log(typeof(4+ +"object"));
//console.log(2==="2");
var money=+prompt("Ваш бюджет на месяц?");
var time=prompt("Введите дату в формате YYYY-MM-DD");
var expenceName=prompt("Введите обязательную статью расходов в этом месяце");
var expenseSum=prompt("Во сколько обойдется?");
var appData={
    budget:money,
    timeData:time,
    expenceName:expenceName,
    expenseSum:expenseSum,
    optionalExpenses:"",
    income: [],
    savings:false
};
var budgetForMonth=expenseSum/30;
console.log(appData);
console.log(appData.expenceName + ":" + appData.expenseSum);
alert("Бюджет на 1 день: " + budgetForMonth);


