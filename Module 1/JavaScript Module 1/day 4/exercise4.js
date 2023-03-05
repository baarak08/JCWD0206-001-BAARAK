console.log(`======================= No 1 =============================`)

function segitigaSiku(angka,h,angkamax) {
for (let i = 1; i <= h; i++) {
    let a = '';
     
    for (let j = 0; j < i; j++) {
     if (angka >= angkamax + 1){
    break
    }     
        if (angka.toString().length < angkamax.toString().length) {
            a += `0`;
        } else {
            a += ``
        }
    a += angka + ` `;
    angka++      
  
    }
    //  a += '\n';
    console.log(a);
}
}
segitigaSiku(1,6,18)

console.log(`======================= No 2 =============================`)

function FizzBuzz(n){
for (let num = 1; num <= n; num++) {
    if (num % 15 === 0) {
        console.log(`FizzBuzz`);
    } else if (num % 3 === 0) {
        console.log(`Fizz`);
    } else if (num % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(`${num}`);
    }
}
}
FizzBuzz(30)

console.log(`======================= No 3 =============================`)

function BMI (w,h) {
 let bmi = (w / (h*h))
 if (bmi < 18.5) {return `BMI kamu adalah ${bmi}, maka kamu Less Weight`}
 else if (18.5 < bmi < 24.9) {return `BMI kamu adalah ${bmi}, maka kamu Ideal`}
 else if (25.0 < bmi < 29.9) {return `BMI kamu adalah ${bmi}, maka kamu Overweight`}
 else if (30.0 < bmi < 39.9) {return `BMI kamu adalah ${bmi}, maka kamu Very Overweight`}
 else if (bmi > 39.9) {return ` BMI kamu adalah ${bmi}, maka kamu Obesity`}
}
console.log(BMI (75,1.74));

console.log(`======================= No 4 =============================`)
let arrNumber = []
let arrGanjil = []
let arrGenap = []

function loopNumber(start,end) {
for (i = start; i <= end; i++){
    if (i % i == 0){arrNumber.push(i)}
    if (i % 2 == 0){arrGenap.push(i)}
    if (i % 2 !== 0){arrGanjil.push(i)}
}
console.log(arrNumber);
console.log(arrGenap);
// console.log(arrGanjil);
}

loopNumber(1,10)

console.log(`======================= No 5 =============================`)

function strTOarr(Value){
let arr = Value.split(' ')
return arr
}
console.log(strTOarr(`Hello World`));
