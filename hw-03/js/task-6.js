const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];
  
const calculateTotalPrice = function(allProducts, productsName) {
   let total = 0;
   for (const products of allProducts) {
       let name = products.name;
       if (productsName === name) {
       return products.price * products.quantity;
       }
   }
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
console.log(calculateTotalPrice(products, 'Дроид')); // 2800