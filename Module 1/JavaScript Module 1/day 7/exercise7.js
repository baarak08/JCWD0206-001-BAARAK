function penyetaraan(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    } 
    for (let prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }

    return true;
  }

let obj1 = {nama: "Martin", usia: 30};
let obj2 = {nama: "Mikhael", usia: 25};
let obj3 = {nama: "Mikhael", usia: 25};

console.log(penyetaraan(obj1, obj2));
console.log(penyetaraan(obj1, obj3));
