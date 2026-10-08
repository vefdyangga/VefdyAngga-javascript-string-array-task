// Case 1: User Data Cleaner
// String & Array Manipulation

const rawData = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Membersihkan whitespace di awal & akhir string
const cleanedData = rawData.trim();

// 2. Memisahkan data menjadi array berdasarkan koma
const names = cleanedData.split(",");

// 3. Membersihkan setiap nama, mengubah menjadi lowercase,
//    dan menghilangkan spasi
const formattedNames = names.map((name) => {
    return name.trim().toLowerCase().replace(/\s+/g, "");
});

// 4. Menggabungkan kembali menjadi string
const result = formattedNames.join(" | ");

// Menampilkan hasil
console.log("Data awal:");
console.log(rawData);

console.log("\nArray setelah dibersihkan:");
console.log(formattedNames);

console.log("\nHasil akhir:");
console.log(result);