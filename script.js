// const userInput1 = +prompt("что вы хотите")
// const userInput2 = +prompt("сколько вы хотите проехать")
// const car = {
//     manufacturer: "Toyota", 
//     model: "Corolla",       
//     year: 2020,             
//     averageSpeed: 80        
// };


// function displayCarInfo(car) {
//     console.log(`Производитель: ${car.manufacturer}`);
//     console.log(`Модель: ${car.model}`);
//     console.log(`Год выпуска: ${car.year}`);
//     console.log(`Средняя скорость: ${car.averageSpeed} км/ч`);
// }


// function calculateTravelTime(distance, car) {
//     const travelTime = distance / car.averageSpeed;  
//     const breaks = Math.floor(travelTime / 4);       
//     const totalTime = travelTime + breaks;          
//     return totalTime;
// }



// displayCarInfo(car);


// const distance = 500; 
// const time = calculateTravelTime(distance, car);
// console.log(`Для преодоления ${distance} км понадобится ${time.toFixed(2)} часов (с учетом перерывов).`);

// Объект для списка покупок
// const shoppingList = {
//     items: [
//         { name: "Молоко", quantity: 1, bought: false },
//         { name: "Хлеб", quantity: 2, bought: false }
//     ],

//     
//     addItem(productName, quantity) {
//         // Ищем, есть ли уже продукт в списке
//         const existingItem = this.items.find(item => item.name.toLowerCase() === productName.toLowerCase());

//         if (existingItem) {
//             existingItem.quantity += quantity; 
//             console.log(`Количество продукта "${productName}" увеличено до ${existingItem.quantity}.`);
//         } else {
//           
//             this.items.push({ name: productName, quantity: quantity, bought: false });
//             console.log(`Продукт "${productName}" добавлен в список покупок.`);
//         }
//     },


//     markAsBought(productName) {
//         const item = this.items.find(item => item.name.toLowerCase() === productName.toLowerCase());

//         if (item) {
//             if (!item.bought) {
//                 item.bought = true; // Отмечаем продукт как купленный
//                 console.log(`Продукт "${productName}" отмечен как купленный.`);
//             } else {
//                 console.log(`Продукт "${productName}" уже куплен.`);
//             }
//         } else {
//             console.log(`Продукт "${productName}" не найден в списке.`);
//         }
//     },

//     
//     displayList() {
//         console.log("Список покупок:");
//         this.items.forEach(item => {
//             const status = item.bought ? "Куплено" : "Не куплено";
//             console.log(`${item.name} — ${item.quantity} шт. (${status})`);
//         });
//     }
// };




// shoppingList.addItem("Молоко", 2);  
// shoppingList.addItem("Яблоки", 5);  


// shoppingList.markAsBought("Хлеб");  
// shoppingList.markAsBought("Бананы"); 

// shoppingList.displayList();


// const receipt = [
//     { name: "Хлеб", quantity: 2, pricePerUnit: 30 },
//     { name: "Молоко", quantity: 1, pricePerUnit: 50 },
//     { name: "Яблоки", quantity: 5, pricePerUnit: 20 },
//     { name: "Шоколад", quantity: 3, pricePerUnit: 100 }
// ];


// function printReceipt(receipt) {
//     console.log("Чек:");
//     receipt.forEach(item => {
//         console.log(`${item.name}: ${item.quantity} шт. * ${item.pricePerUnit} руб. = ${item.quantity * item.pricePerUnit} руб.`);
//     });
// }

// function calculateTotal(receipt) {
//     return receipt.reduce((total, item) => total + (item.quantity * item.pricePerUnit), 0);
// }


// function getMostExpensiveItem(receipt) {
//     return receipt.reduce((prevItem, currentItem) => {
//         const prevTotal = prevItem.quantity * prevItem.pricePerUnit;
//         const currTotal = currentItem.quantity * currentItem.pricePerUnit;
//         return currTotal > prevTotal ? currentItem : prevItem;
//     });
// }


// function calculateAveragePrice(receipt) {
//     const totalSum = calculateTotal(receipt);
//     const totalQuantity = receipt.reduce((total, item) => total + item.quantity, 0);
//     return totalSum / totalQuantity;
// }




// printReceipt(receipt);


// const totalSum = calculateTotal(receipt);
// console.log(`Общая сумма покупки: ${totalSum} руб.`);


// const mostExpensiveItem = getMostExpensiveItem(receipt);
// console.log(`Самая дорогая покупка: ${mostExpensiveItem.name} на сумму ${mostExpensiveItem.quantity * mostExpensiveItem.pricePerUnit} руб.`);


// const averagePrice = calculateAveragePrice(receipt);
// console.log(`Средняя стоимость одного товара: ${averagePrice.toFixed(2)} руб.`);
