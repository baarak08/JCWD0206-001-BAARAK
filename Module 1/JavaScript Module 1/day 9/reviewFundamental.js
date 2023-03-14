console.log(`//////////////// NUMBER ////////////////////`);

arr = [1, 2, 3, 4];
arr.push(5);
sum = 1;

for (let i = 0; i < arr.length; i++) {
  sum = sum * arr[i];
}
console.log(sum);

sum2 = arr.reduce((prev, curr) => prev * curr);
console.log(sum2);

let angka = 10000;
let strNumber = angka.toString();

console.log(angka);
console.log(angka.toLocaleString(`id-ID`));
console.log(angka.toFixed(2));
console.log(strNumber);

console.log(`//////////////// STRING ////////////////////`);

let str = new String(`ayam goreng`);
let str2 = `ayam goreng`;

console.log(str);
console.log(str2);
console.log(str2.charAt(1));
console.log(str2.length);
console.log(str2.includes(`m goreng`));
console.log(str2.includes(`m goreng`));

console.log(str2.slice(0, 4));

console.log(`/////////////// Funtion ///////////////////`);

function recursive(param) {
  console.log(param);
  if (param < 10) return recursive(param + 1);
}
recursive(5);

console.log(`=========`);
function recur(a) {
  if (a == 6) {
    return 0;
  }
  return a + recur(a + 1);
}
console.log(recur(1));

console.log(`/////////////// Array ///////////////////`);

sum = 0;
let i = 1;
