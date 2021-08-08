// Declare an object and change any property of that object

let products = [
    { productName: "Sumsung A30", price: 20000 },
    { productName: "Wifi Router", price: 4000 },
    { productName: "ASUS Labtop", price: 70000 }
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
products[1].price = "1000";
console.log(products);