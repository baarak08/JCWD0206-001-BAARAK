console.log(`================================ Segitiga Pyramid =================================`);


let angkaSegitiga = 1
let loopSegitiga = 15
let loopbreak = 99
for (let i = 0 ; i < loopSegitiga ; i++){
    let sSamakaki= ``;
    
    for (let j = loopSegitiga ; j >= i ; j--){
    sSamakaki += ` `;
    }
    for (let j = 0 ; j <= i ; j++){
    if (angkaSegitiga >= loopbreak + 1){break}
    if (loopbreak.toString().length - angkaSegitiga.toString().length == 2) {
        sSamakaki += `  `;
    } else if (loopbreak.toString().length - angkaSegitiga.toString().length == 1) {
        sSamakaki += ` `;
    } else {
        sSamakaki += ``
    }
    sSamakaki += angkaSegitiga + ` `;
    angkaSegitiga++
    }
    // sSamakaki += `\n`;
    console.log(sSamakaki);
}
 

console.log(`================================ Segitiga Siku =================================`);

let angka = 1
let h = 8
let angkamax = 19

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

console.log(`================================ Segitiga Siku Terbalik =================================`);

let angka1 = 1
let h1 = 8
let angkamax1 = 28

for (let i1 = 1; i1 <= h1; i1++) {
    let a1 = '';
     
    for (let j1 = h1; j1 > i1; j1--) {
     if (angka1 >= angkamax1 + 1){
    break
    }     
        if (angka1.toString().length < angkamax1.toString().length) {
            a1 += `0`;
        } else {
            a1 += ``
        }
    a1 += angka1 + ` `;
    angka1++      
  
    }
    //  a1 += '\n';
    console.log(a1);
}
