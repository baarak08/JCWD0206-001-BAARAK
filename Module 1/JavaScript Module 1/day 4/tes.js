
// let angka = 1
// let h = 8
// let angkamax = 17

// for (let i = 1; i <= h; i++) {
//     let a = '';
     
//     for (let j = 0; j < i; j++) {
//      if (angka >= angkamax + 1){
//     break
//     }     
//         if (angka.toString().length < angkamax.toString().length) {
//             a += `0`;
//         } else {
//             a += ``
//         }
//     a += angka + ` `;
//     angka++      
  
//     }
//     //  a += '\n';
//     console.log(a);
// }

// console.log(`=============================== Segitiga Mine ================================`);


// let angkaSegitiga = 1
// let loopSegitiga = 15
// let loopbreak = 105
// for (let i = 0 ; i < loopSegitiga ; i++){
//     let sSamakaki= ``;
    
//     for (let j = loopSegitiga ; j >= i ; j--){
//     sSamakaki += ` `;
//     }
//     for (let j = 0 ; j <= i ; j++){
//     if (angkaSegitiga >= loopbreak + 1){break}
//     if (loopbreak.toString().length - angkaSegitiga.toString().length == 2) {
//         sSamakaki += `00`;
//     } else if (loopbreak.toString().length - angkaSegitiga.toString().length == 1) {
//         sSamakaki += `0`;
//     } else {
//         sSamakaki += ``
//     }
//     sSamakaki += angkaSegitiga + ` `;
//     angkaSegitiga++
//     }
//     // sSamakaki += `\n`;
//     console.log(sSamakaki);
// }
 
// for (let num = 1; num <= 30; num++) {
//     if (num % 15 === 0) {
//         console.log(`FizzBuzz`);
//     } else if (num % 3 === 0) {
//         console.log(`Fizz`);
//     } else if (num % 5 === 0) {
//         console.log(`Buzz`);
//     } else {
//         console.log(`${num}`);
//     }
// }


// console.log(`=====================`);


// function BMI (weight, height) {
 
// }

//     if (num % 15 === 0) {
//         console.log(`makan yang banyak bang`);
//     } else if (num % 3 === 0) {
//         console.log(`sabi lah flexing body`);
//     } else if (num % 5 === 0) {
//         console.log(`olahraga tipis-tipis mantap`);
//     } else if (num % 5 === 0) {
//         console.log(`diet sama olahraga lah bang, insyaf`);
//     } else if (num % 5 === 0) {
//         console.log(`nunggu komplikasi aja inimah`);
//     }


// console.log(`=============================== Segitiga Bng Jordan ================================`);


// let n = 105 ;
// let tempN = n;
// let digit = '';
// let h = 0;
// let counter = 1;

// while (true) {
//  h++;
//  digit += ' ';
//  tempN -= counter;
//  counter++;
//  if (tempN < 1) {
//   break;
//  }
// }
// console.log(digit);

// let num = 0;
// let result = '';

// for (let i = 1; i <= h; i++) {
//  let str = '';
//  for (let j = 0; j < i && n > num; j++) {
//   num++;
//   if (j == 0) {
//    str = digit.slice(0, Math.ceil(digit.length - i));
//    if (num > 10 && num < 100) str += ` ${num} `;
//    else if (num > 100) str += `${num} `;
//    else str += `   ${num} `;
//   } else {
//    str += `${num} `;
//   }
//  }
//  str += '\n';
//  result += str;
// }

// console.log(result);


// console.log(`=============================== Currency ================================`);

// let number = 12345
// let currency = ""
// for (let i = 0; i < number.toString().length; i++) {

//     if (number.toString().length % 3 == 2) {
//         if (i > 1 && ((number.toString().length - i) % 3 == 0)) currency += "."
//     } 
//     else if (i > 0 && (( number.toString().length - i) % 3) == 0) currency += "."
//     currency += number.toString ().charAt(i) 

// }
// console.log(`Rp ${currency},00`);

// console.log(`=============================== Segitiga Siku Terbalik ================================`);

// let angka1 = 1
// let h1 = 8
// let angkamax1 = 25

// for (let i1 = 1; i1 <= h1; i1++) {
//     let a1 = '';
     
//     for (let j1 = 0; j1 < i1; j1++) {
//      if (angka1 >= angkamax1 + 1){
//     break
//     }     
//         if (angka1.toString().length < angkamax1.toString().length) {
//             a1 += `0`;
//         } else {
//             a1 += ``
//         }
//     a1 += angka1 + ` `;
//     angka1++      
  
//     }
//     //  a1 += '\n';
//     console.log(a1);

// }
// console.log(`=============================== End ================================`);


// let arr1 = [1,2,3,4,5]
// let arr2 = [5,4,3,2,1]

// function iAkhir(iA) {
// for (i = 0 ; i <=iA; i++){

// }
// }
// console.log(iAkhir(5));

// function test(a,b,c) {
// console.log(a + b + c);
// }
// arr = [10, 9, 8]
// test (...arr)



