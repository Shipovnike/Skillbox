let engPower = prompt("Введите мощность автомобиля");

if (engPower < 100) {
    let tax = engPower * 12;
    console.log ("Сумма налога:", tax);
} else if (engPower >= 100 && engPower < 125) {
    let tax = engPower * 25;
    console.log ("Сумма налога:", tax);
} else if (engPower >= 125 && engPower < 150) {
    let tax = engPower * 35;
    console.log ("Сумма налога:", tax);
} else if (engPower >= 150 && engPower < 175) {
    let tax = engPower * 45;
    console.log ("Сумма налога:", tax);
} else if (engPower >= 175 && engPower < 200) {
    let tax = engPower * 50;
    console.log ("Сумма налога:", tax);
} else if (engPower >= 200 && engPower < 225) {
    let tax = engPower * 65;
    console.log ("Сумма налога:", tax);
} else if (engPower >= 225 && engPower < 250) {
    let tax = engPower * 75;
    console.log ("Сумма налога:", tax);
} else {
    let tax = engPower * 150;
    console.log ("Сумма налога:", tax);
}