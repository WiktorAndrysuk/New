"use strict";

let money = prompt("Ваш бюджет на месяц?", ''),
    time  = prompt("Введите дату в формате YYYY-MM-DD", '');

let note  = prompt('Введите обязательную статью расходов в этом месяце', ''),
    prise = prompt('Во сколько обойдется?');

let appData = {
    money   : money,
    timeData: time,
    optionalExpenses: {},
    income  : [],
    savings : false,
    note: note,
    prise: prise,
    expenses: {//Я не знаю как сделать правильный ключ.Помогите пожалуйста.
        note: prise
    }
}
let echo = appData.money / 30;
alert('бюджет на 1 день = ' + echo);



console.log(appData);
