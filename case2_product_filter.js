// Case 2: E-Commerce Product Filter
// Array of Objects

const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

// 1. Menyaring produk yang active-nya true
const activeProducts = products.filter((product) => {
    return product.active === true;
});

// 2. Membuat array baru yang hanya berisi nama produk
//    dan mengubahnya menjadi huruf kapital
const activeProductNames = activeProducts.map((product) => {
    return product.name.toUpperCase();
});

// 3. Menghitung total harga semua produk aktif
const totalPrice = activeProducts.reduce((total, product) => {
    return total + product.price;
}, 0);

// Menampilkan hasil
console.log("Semua produk:");
console.log(products);

console.log("\nProduk yang aktif:");
console.log(activeProducts);

console.log("\nNama produk aktif:");
console.log(activeProductNames);

console.log("\nTotal harga produk aktif:");
console.log(totalPrice);