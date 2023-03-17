let aplhaStr = `abcdefghijklmnopqrstuvwxyz`;
let alphaArr = aplhaStr.toUpperCase().split(``);

let cariStr = `ZZZ`;
let cariArr = cariStr.toLocaleUpperCase().split(``);

console.log(cariArr);
let tampung = [];

for (let i = 0; i < alphaArr.length; i++) {
  if (cariArr.length == 1) {
    if (alphaArr[i] == cariArr[0]) {
      tampung.push(i + 1);
    }
  }
  if (cariArr.length == 2) {
    if (alphaArr[i] == cariArr[0]) {
      tampung.push(i + 1);
    }
    if (alphaArr[i] == cariArr[1]) {
      tampung.push(i + 1);
    }
  }
  if (cariArr.length == 3) {
    if (alphaArr[i] == cariArr[0]) {
      tampung.push(i + 1);
    }
    if (alphaArr[i] == cariArr[1]) {
      tampung.push(i + 1);
    }
    if (alphaArr[i] == cariArr[2]) {
      tampung.push(i + 1);
    }
  }
}

console.log(tampung);
if (cariArr.length == 1) {
  console.log(tampung[0]);
} if (cariArr.length == 2) {
  let hasil = 26 * tampung[0] + tampung[1]
  console.log(hasil);
} if (cariArr.length == 3) {
  let hasiL = (tampung[0] * (26 * 26)) + (tampung[1] * 26) + tampung[2];
  console.log(hasiL);
}

console.log(`============= cara lain ==============`);

function urutan(huruf) {
  let str1 = `0abcdefghijklmnopqrstuvwxyz`;
  let arr1 = str1.toLocaleUpperCase().split(``)

  let cari1 = arr1.indexOf(huruf.charAt(0));
  let cari2 = arr1.indexOf(huruf.charAt(1));
  let cari3 = arr1.indexOf(huruf.charAt(2));

  console.log(arr1.indexOf(`Z`));

  switch (huruf.length) {
    case 1:
      console.log(arr1.indexOf(huruf));
      break;
    case 2:
      console.log((26 * cari1) + cari2);
      break;
    case 3:
      console.log((cari1 * (26 * 26) + (cari2 * 26) + cari3));
      break;
  }
}
urutan(`ABC`)





console.log(`=================== nomer 2 =====================`);

let arrAwal = [2, 1, 4, 5, 5, 4, 6, 7, 7, 7]
let arrUrut = []
for (let i = 0; i < arrAwal.length; i++) {
  let cek = arrAwal.sort().filter((val) => val == arrAwal[i])
  if (cek.length < 2) { arrUrut.push(...cek) }
}

console.log(arrUrut);


console.log(`============= cara lain ==============`);


let urutAwal = arrAwal.sort()
let arrUrut1 = []
for (let z = 0; z < urutAwal.length; z++)
  if (urutAwal[z] == urutAwal[z + 1]) {
    arrUrut1.push(urutAwal[z])
  }
console.log(arrUrut1);


console.log(`=================== nomer 3 =====================`);
function anagraM(sKata, tKata) {
  if (sKata.length !== tKata.length) {
    console.log(false);
  } else if (sKata.split(``).sort().join() == tKata.split(``).sort().join()) {
    console.log(true);
  } else {
    console.log(false);
  }
}
anagraM(`anagram`, `mraagan`);



console.log(`=================== nomer 4 =====================`);

let a = 0;
let b = 1;
let prob = a + b;
let tangga = 6;

for (let i = 0; i < tangga; i++) {
  // console.log(prob);
  prob = a + b;
  a = b;
  b = prob;
}
console.log(prob);