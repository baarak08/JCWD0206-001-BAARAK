console.log(`=================== no 1 =======================`);

let arrAwal = [2, 7, 4, 5, 5, 4, 7, 7, 7, 7]
let arrUrut = []
for (let i = 0; i < arrAwal.length; i++) {
    let cek = arrAwal.sort().filter((val) => val == arrAwal[i])
    if (cek.length >= (arrAwal.length / 2)) { arrUrut.push(...cek) }
}
console.log(arrUrut[0]);

console.log(`=================== no 2 =======================`);

function rom(angka) {
    let arrRoman = []
    arrRoman[1] = `I`
    arrRoman[5] = `V`
    arrRoman[10] = `X`
    arrRoman[50] = `L`
    arrRoman[100] = `C`
    arrRoman[500] = `D`
    arrRoman[1000] = `M`

    console.log(arrRoman);

    let tampung = []
    for (let i = 0; i < angka.length; i++) {
        tampung.push(arrRoman.indexOf(angka.charAt(i)))
    }

    let tampungBaru = []
    for (let i = 1; i <= tampung.length; i++) {
        if (tampung[i - 1] < tampung[i]) {
            tampungBaru.push((tampung[i - 1]) * -1)
        }
        else {
            tampungBaru.push(tampung[i - 1])
        }
    }
    let hasil = tampungBaru.reduce((prev, curr) => prev + curr)
    console.log(tampungBaru);
    console.log(hasil);
}
rom(`MMXXIII`);


console.log(`=================== no 3 =======================`);


function pascal(t) {
    let i = 0;
    let j = 0;
    let hasil = [];

    for (i = 0; i < t; i++) {
        hasil.push(Array(i + 1));
        for (j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                hasil[i][j] = 1;
            } else {
                hasil[i][j] = hasil[i - 1][j - 1] + hasil[i - 1][j];


            }
        }

    }
    return hasil;
}

console.log(pascal(4));



console.log(`=================== no 4 =======================`);

let arrStocks = [7, 2, 3, 2, 7, 7]
let min = Math.min(...arrStocks)
let minIdx = (arrStocks.indexOf(min) + 1)
let max = Math.max(...arrStocks)
let maxIdx = (arrStocks.lastIndexOf(max) + 1)

if (maxIdx < minIdx) {
    console.log(`Belum mau jual, profit 0`);
} else {
    console.log(`Beli ${min} pada hari ke ${minIdx} dan dijual pada hari ke ${maxIdx} dengan harga ${max} maka profitnya ${max - min}`);
}

