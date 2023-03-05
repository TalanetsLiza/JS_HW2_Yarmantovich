"use strict";

const a = 10;
const b = 2;
{
    // Task 3

    const num = "711117";
    if ((+num[0] + +num[1] + +num[2]) === (+num[3] + +num[4] + +num[5])) {
        console.log ("Да");
    } else {
        console.log ("Нет");
    }

}

{
    // Task 4

    const a = -1;
    const moreAnswer = a > 0 ? "Верно" : "Неверно";
    console.log(moreAnswer);

}

{
    // Task 5

    const sum = a + b;
    console.log(sum);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b)
    if (sum > 1) {
        console.log(sum ** 2);
    }   

}

{
      // Task 6

	if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
		console.log("Верно");
	} else {
		console.log("Неверно");
	}
}

{
    // Task 7

    const n = 41;
    if (n <= 15) {
        console.log("Первая");
    } else if (n <= 30) {
        console.log("Вторая");
    } else if (n <= 45) {
        console.log("Третья");
    } else {
        console.log("Четвертая");
    }
}

{
    // Task 8

    const day = 22;
    if (day <= 10) {
        console.log("Первая");
    } else if (day <= 20) {
        console.log("Вторая");
    } else {
        console.log("Третья");
    }
}

{
    // Task 9
    const DAYES_PER_YEAR = 365;
    const DAYES_PER_MONTHS = 31;
    const DAYES_PER_WEEK = 7;
    const HOURS_PER_DAY = 24;
    const MINUTES_PER_HOUR = 60;
    const SECONDS_PER_MINUTE = 60;

    const days = 1;
    const years = days / DAYES_PER_YEAR;
    const months = days / DAYES_PER_MONTHS;
    const weeks = days / DAYES_PER_WEEK;
    const hours = days * HOURS_PER_DAY;
    const minutes = hours * MINUTES_PER_HOUR;
    const seconds = minutes * SECONDS_PER_MINUTE;

    console.log(`${days} день это:`);

    if (years < 1) {
		console.log("Меньше года");
	} else {
        console.log(`${years} лет`);
    }

    if (months < 1) {
		console.log("Меньше месяца");
	} else {
        console.log(`${months} месяцев`);
    }

    if (weeks < 1) {
		console.log("Меньше недели");
	} else {
        console.log(`${weeks} недель`);
    }

    console.log(`${hours} часов`);
    console.log(`${minutes} минут`);
    console.log(`${seconds} секунд`);
}

{
    // Task 10
    const DAYES_PER_MONTHS = 31;

    const day = 380;
    const months = day / DAYES_PER_MONTHS;

    switch (Math.ceil(months)) {
        case 1:
        case 2:
        case 12:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:    
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Неверное значение");
    }
}