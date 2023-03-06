console.log(`======================= No 1 =============================`)
 
function arrNum(angka){
let Max = Math.max(...angka);
console.log(`nilai maximum adalah ${Max}`);
let Min = Math.min(...angka)
console.log(`nilai minimum adalah ${Min}`);
let Sum = (angka.reduce((Max,Min)=> Max+Min));
let Avrg = Sum / angka.length;
console.log(`nilai rerata adalah ${Avrg}`);
}
arrNum([1,3,4,2,9,8])

console.log(`======================= No 2 =============================`)

function NamaDan(arr1) {
let arr2 = [...arr1];
let arrDan = arr2.toString();
arr2.pop();
let slice = arrDan.slice(16,23);
let arrDan2 = arr2 + " dan " + slice;

console.log(`${arr1} -> 
${arrDan2}`);
}

NamaDan(["Baarak"," Martin"," Mikhael"])

console.log(`======================= No 3 =============================`)

function strTOarr(Value){
    let arr = Value.split(' ')
    return arr
    }
    console.log(strTOarr(`Hello World`));

console.log(`======================= No 4 =============================`)

function arrNumbers(arrNum1,arrNum2) {
let hasilArr = arrNum1.map((value,index) => value + arrNum2[index]);

console.log(`${arrNum1} ditambah ${arrNum2}`);
console.log(hasilArr);
}
arrNumbers([5,6,7,8,9],[9,8,7,6,5])

console.log(`=========== cara lain =============`); 

function penjumlahanArray (array1, array2) {
    let hasil = [];
    for (i=0; i< array1.length; i++){
        let jumlah = (array1[i] + array2[i])
        hasil.push(jumlah)
    }
    console.log(hasil);
    }
    penjumlahanArray([5,6,7,8,9],[9,8,7,6,5])
    
    

console.log(`======================= No 5 =============================`)

let arrWord = ["Muhammad", "Nur", "Ikhsan", "Mubaarak"];

function tambahKata(addArr) {
console.log(`Array awal adalah ${arrWord}`);
console.log(`Word yang ditambah adalah ${addArr}`);

     if (arrWord.includes(addArr)){
        console.log("hasilnya adalah DENNIED");
    } else {
        console.log("hasilnya adalah SUCCESS");
        arrWord.push(addArr);
    }   
console.log(arrWord);
}
tambahKata("Ganteng")


console.log(`======================= No 6 =============================`)
let arrNumber = []
let arrGanjil = []
let arrGenap = []

function loopNumber(end) {
    for (i = 1; i <= end; i++){
        arrNumber.push(i)
        if (i % 2 == 0){arrGenap.push(i)}
        else {arrGanjil.push(i)}
        // (i % 2 !== 0){arrGanjil.push(i)}
    }
    console.log(arrNumber);
    console.log(arrGenap);
    // console.log(arrGanjil);
    }

    loopNumber(15)

    