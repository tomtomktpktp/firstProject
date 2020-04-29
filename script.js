'use strict';

//console.log(tom["name"]);
//let answer=prompt("re u tom?");
//console.log(typeof(null));
//console.log(typeof(4+ +"object"));
//console.log(2==="2");

//task1
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

var money, time, expenceName, expenseSum, optExpenceName, optExpenceNum;

function start(){
    while(isNaN(money) || money == null || money == ""){
        money=+prompt("Ваш бюджет на месяц?");
        time=prompt("Введите дату в формате YYYY-MM-DD");
    }
}
start();

function countExpences(){
    while(expenceName==null || expenseSum == null || expenceName == "" && expenseSum == ""){
        expenceName=prompt("Введите обязательную статью расходов в этом месяце"),
        expenseSum=+prompt("Во сколько обойдется?");
    }
}
countExpences();

function chooseOptExpences(){
    while( optExpenceName == "" || optExpenceName==null){
    for(optExpenceNum=0;optExpenceNum<=2;optExpenceNum++){
        
            optExpenceName=prompt("Статья необязательных расходов?");
        }  
    }
}
chooseOptExpences();

var appData={
    budget:money,
    timeData:time,
    expence:{sum:expenseSum},
    //optionalExpenses:{name:optExpenceName, number:optExpenceNum},
    optionalExpenses:[
        {name:optExpenceName, number:optExpenceNum},
        {name:optExpenceName, number:optExpenceNum},
        {name:optExpenceName, number:optExpenceNum},
    ],
    income: [],
    savings:true
};

//var budgetForMonth=appData.budget/30;
//taskForCyclePart1__method1
/*
for(let i=0;i<2;i++){
    var expenceName=prompt("Введите обязательную статью расходов в этом месяце"),
    expenseSum=prompt("Во сколько обойдется?");
    if((typeof(expenceName)) ==='string' && typeof(expenceName)!=null 
        && typeof(expenseSum)!= null && expenceName !== "" && expenseSum !== ""){
            console.log("done");
            console.log(appData);
            appData.expence[expenceName]=expenseSum;
    }else{
        i--;
    }
}*/
//taskForCyclePart1__method2
/*
var count=0;
while(count<2){
    var expenceName=prompt("Введите обязательную статью расходов в этом месяце"),
        expenseSum=prompt("Во сколько обойдется?");
    if((typeof(expenceName)) ==='string' && typeof(expenceName)!=null 
        && typeof(expenseSum)!= null && expenceName !== "" && expenseSum !== ""){

        console.log("done");
        console.log(appData);
        appData.expence[expenceName]=expenseSum;   
        count++;
    } 
} 
*/


function depositEarnings(){
    if(appData.savings==true){
        var depoSum = +prompt("Какая сумма у вас имеется в депозите?");
        var depoPercent = +prompt("Какой % депозита?");
        appData.monthIncome=depoSum/100/12*depoPercent;
        console.log("Ваша прибыль на месяц:" + appData.monthIncome);
    }
}
depositEarnings();

function detectDayBudget(){
    var budgetForDay=appData.expence.sum;
    console.log(budgetForDay);
}
detectDayBudget();

function detectLevel(){
    if(appData.budget<100000){
        console.log("Минимальный заработок: "+ appData.budget);
    } else if(appData.budget>150000 && appData.budget<300000){
        console.log("Средний заработок: " + appData.budget) ;
    } else if(appData.budget>300000){
        console.log("Хороший заработок: "+ appData.budget);
    }else{
        console.log("Произашла ошибка");
    } 
}
detectLevel();
for(let key in appData){
    console.log( key+" "+appData[key])
}

appData.optionalExpenses.forEach(function(item, i){
    console.log(i + ":" + item);
});




//console.log(appData.expenceName + ":" + appData.expenseSum);
//alert("Бюджет на 1 день: " + budgetForMonth);
              

