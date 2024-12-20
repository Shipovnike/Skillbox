 let priceItem = prompt('Введите цену товара');
 let amountItem = prompt('Введите количество товара');
 let discountItem = prompt('Введите значение скидки в процентах');

 function totalSum(priceItem, amountItem, discountItem) {
    return (priceItem * amountItem * (100 - discountItem) / 100);
 }

console.log(totalSum(priceItem, amountItem, discountItem));