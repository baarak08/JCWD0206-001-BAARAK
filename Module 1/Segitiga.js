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

