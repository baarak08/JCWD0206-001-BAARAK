function isEqual(obj1, obj2) {
    // Mengecek jumlah properti di objek
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
  
    // Mengecek nilai properti di objek
    for (let prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
  
    // Kedua objek sama
    return true;
  }

let obj1 = {nama: "John", usia: 30};
let obj2 = {nama: "John", usia: 30};
let obj3 = {nama: "Mary", usia: 25};

console.log(isEqual(obj1, obj2)); // true
console.log(isEqual(obj1, obj3)); // false
