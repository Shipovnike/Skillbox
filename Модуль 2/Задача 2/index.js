// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt("Название товара 1") // Название товара 1
let price1 = prompt("Стоимость товара 1") // Стоимость товара  1
let count1 = prompt("Количесто товара 1") // Количесто товара 1

console.log(product1, price1 * count1) // Вывод в консоль

let product2 = prompt("Название товара 2") // Название товара 2
let price2 = prompt("Стоимость товара 2")  // Стоимость товара  2
let count2 = prompt("Количесто товара 2") // Количесто товара 2

console.log(product2, price2 * count2) // Вывод в консоль

let product3 = prompt("Название товара 3") // Название товара 3
let price3 = prompt("Стоимость товара 3") // Стоимость товара  3
let count3 = prompt("Количесто товара 3") // Количесто товара 3

console.log(product3, price3 * count3) // Вывод в консоль

console.log("Сумма всей покупки: ", price1 * count1 + price2 * count2 + price3 * count3)