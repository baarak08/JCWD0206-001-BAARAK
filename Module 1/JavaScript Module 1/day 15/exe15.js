console.log(`================== No 1 ====================\n`);

function isWeekEnd(tanggal) {
    let cari = new Date(tanggal).getDay()
    if (cari === 0 || cari === 6) {
        console.log(`Yeay it's a week-end\n`);
    } else {
        console.log(`Keep working buddy it's a week-day\n`);
    }
}
isWeekEnd(`4-22-2023`)


console.log(`================== No 2 ====================\n`);

// 15 = 1, 3, `5`, 15 && 35 = 1, `5`, 7, 35 // pakai modulus
// bisa cek pakai for of

function fpb(nilai1, nilai2) {
    let tampung1 = []
    let tampung2 = []
    for (let i = 0; i <= nilai1; i++) {
        if (nilai1 % i == 0) tampung1.push(i);
    }
    for (let j = 0; j <= nilai2; j++) {
        if (nilai2 % j == 0) tampung2.push(j)
    }
    let tampung3 = tampung1.concat(...tampung2)
    console.log(tampung3.sort((a, b) => a - b));

    // for (let k = 0; k < tampung3.length; k++) {
    //     let hasil = []
    //     let match = tampung3.sort().reduce(function (val, cur) {
    //         if (val == cur) { hasil.push(match) }
    //     })
    // }
    // console.log(hasl);
}
fpb(30, 35)

console.log(`================== No 3 ====================\n`);

// 15 = 15, 30, 45, 60, 75, 90, `105`, 120 && 35 = 35, 70, `105`, 140 // 

console.log(`================== No 4 ====================\n`);

function commonCharacter(kata) {
    let arr = kata.toLowerCase().split(``);
    let tampung = []
    for (let i = 0; i < arr.length; i++) {
        let match = arr.filter((val) => val == arr[i])
        if (match.length > tampung.length) {
            tampung = match
        }
    }
    console.log(`Common character is " ${tampung[0]} " with the length ${tampung.length}\n`);
}
commonCharacter(`Fuuuukiiiimaaiii`)


console.log(`================== No 5 ====================\n`);

function sortAlpha(huruf) {
    arrAlpha = huruf.split(``)
    let arrBaru = []
    for (let i = 0; i < arrAlpha.length; i++) {
        arrBaru[parseInt(arrAlpha[i], 36) - 9] = arrAlpha[i]
    }
    console.log(arrBaru.join(``).split(``));
    console.log(arrAlpha.sort());
}
sortAlpha(`ajbsdhabywsdb`)



console.log(`================== No 6 ====================\n`);

console.log(`================== No 7 ====================\n`);

console.log(`================== No 8 ====================\n`);

console.log(`================== No 9 ====================\n`);

console.log(`================== No 10 ===================\n`);

// cari tahu ada berapa hari di suatu bulan
// expected di bulan jan 2023 ada 31 hari

console.log(`================== No 11 ===================\n`);


function cariDate(date) {
    let dateCari = new Date(date)
    let today = new Date()
    let bedaWaktu = today.getTime() - dateCari.getTime()
    console.log(`Beda hari antara ${dateCari.toLocaleDateString()} dengan ${today.toLocaleDateString()} adalah ${Math.floor(bedaWaktu / (1000 * 3600 * 24))} hari\n`);
}
cariDate(`1-1-2023`)

console.log(`================== No 12 ===================\n`);


// sama kaya yg atas getTime convert ke day tapi %365 %30 sisanya dimasukin ke hari
// expected y tahun y bulan y hari

