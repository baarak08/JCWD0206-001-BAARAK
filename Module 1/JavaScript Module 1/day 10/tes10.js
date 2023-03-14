console.log(`=================== Selection Short =====================`);

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));

console.log(`=================== nomer 1 =====================`);

let aplhaStr = `abcdefghijklmnopqrstuvwxyz`;
let alphaArr = aplhaStr.toUpperCase().split(``);
let alphaMix = [];
// console.log(alphaArr);
for (let i = 0; i < alphaArr.length; i++) {
  let plusArr = alphaArr[0] + alphaArr[i];
  alphaMix.push(plusArr);
}
let arrMix = (alphaArr + `,` + alphaMix).split(`,`);
// console.log(arrMix);

function cariHuruf(huruf) {
  for (let j = 0; j < arrMix.length; j++) {
    if (arrMix[j] == huruf) {
      console.log(`${arrMix[j]} -> ${j + 1}`);
    }
  }
}
cariHuruf(`H`);









