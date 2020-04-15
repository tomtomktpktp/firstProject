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
//tasl1
/*
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
*/
//task2
//let x = 5; alert( x++ ); 5
//[ ] + false - null + true NaN +
//let y = 1; let x = y = 2; alert(x); 2 
//[ ] + 1 + 2 12
//alert( "1"[0]) 1
//2 && 1 && null && 0 && undefined  null
//2 && 1 && 0 && undefined 0
//2 && 1 && undefined undefined 
//!!( a && b ) и (a && b) false?????
//( null || 2 && 3 || 4 )  3????
//a = [1, 2, 3]; b = [1, 2, 3]; is a == b false
//alert( +"Infinity" ); infinity +
//"ёжик" > "яблоко" true
//0 || "" || 2 || undefined || true || falsе 

var money=+prompt("Ваш бюджет на месяц?");
var time=prompt("Введите дату в формате YYYY-MM-DD");
var appData={
    budget:money,
    timeData:time,
    expence:{},
    optionalExpenses:{},
    income: [],
    savings:false
};

var budgetForMonth=appData.budget/30;
//taskForCyclePart1__method1
/*for(let i=0;i<2;i++){
    var expenceName=prompt("Введите обязательную статью расходов в этом месяце"),
    expenseSum=prompt("Во сколько обойдется?");
    if((typeof(expenceName)) ==='string' && typeof(expenceName)!=null 
        && typeof(expenseSum)!= null && expenceName !== "" && expenseSum !== ""){
            console.log("done");
            console.log(appData);
            appData.expence[expenceName]=expenseSum;
    }
}*/
//taskForCyclePart1__method2
do{
    var expenceName=prompt("Введите обязательную статью расходов в этом месяце"),
    expenseSum=prompt("Во сколько обойдется?");
        console.log("done");
        console.log(appData);
        appData.expence[expenceName]=expenseSum;
} 
while((typeof(expenceName)) ==='string' && typeof(expenceName)!=null 
    && typeof(expenseSum)!= null && expenceName !== "" && expenseSum !== "");


//console.log(appData.expenceName + ":" + appData.expenseSum);
alert("Бюджет на 1 день: " + budgetForMonth);
              

