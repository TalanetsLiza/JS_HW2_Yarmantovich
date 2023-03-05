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