class Keranjang {
    constructor(produk, qty, harga) {
        this.produk = produk;
        this.qty = qty;
        this.harga = harga;
    }
}
let belanja = [
    { produk: 'Kemeja Pria', stock: 10, harga: 120000 },
    { produk: 'Celana Jeans Pria', stock: 5, harga: 200000 },
    { produk: 'Kaos Polos', stock: 5, harga: 75000 }
];
let tampilanBelanja = '';
belanja.forEach((val, index) => {
    tampilanBelanja +=
        index +
        1 +
        '. ' +
        val.produk +
        ' Stock ' +
        val.stock +
        ' Rp.@' +
        val.harga.toLocaleString('id-ID') +
        '\n';
});


console.log(tampilanBelanja);

// let keranjang = [];
// let menu = 0;
// while (menu != 3) {
//     menu = prompt(`
// 1. menu
// 2. keranjang
// 3. exit`);


//     if (menu == '1') {
//         let opt = parseInt(prompt(tampilanBelanja));
//         if (opt > 0 && opt < tampilanBelanja.length) {
//             let item = belanja[opt - 1];
//             let qty = parseInt(prompt('Mau beli berapa banyak?'));
//             console.log(item);
//             qty > item.stock || qty < 0
//                 ? alert('input tidak tepat')
//                 : keranjang.push(new Keranjang(item.produk, qty, item.harga));
//         }
//     } else if (menu == 2) {
//         barang = [];
//         menuKeranjang = prompt(`
//       1. Keranjang Saya
//       2. Check Out
//       3. Back
//       `);
//         if (menuKeranjang == `1`) {
//             for (let i = 0; i <= keranjang.length; i++) {
//                 barang = barang + (i + 1) + ". " + keranjang[i].produk + " Quantity" + keranjang[i].qty + " Harga " + keranjang[i].harga + " Total Harga " + keranjang[i].harga * keranjang[i].qty + "\n"
//             }
//             menu = prompt(barang)
//         }

//     } else if (menu == 3) {
//         alert('terima kasih sudah berkunjung');
//     } else {
//         alert('menu belum dibuat');
//     }
// }
