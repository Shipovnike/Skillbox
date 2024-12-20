const currentYear = 2024
let index = 0

let user1 = prompt("Имя пользователя 1")
let year1 = prompt("Возраст пользователя 1")
let age1 = currentYear - year1
console.log(++index, user1, age1)

let user2 = prompt("Имя пользователя 1")
let year2 = prompt("Возраст пользователя 1")
let age2 = currentYear - year2
console.log(++index, user2, age2)

let user3 = prompt("Имя пользователя 1")
let year3 = prompt("Возраст пользователя 1")
let age3 = currentYear - year3
console.log(++index, user2, age3)

console.log("Средний возраст пользователей:", (age1 + age2 + age3)/3)