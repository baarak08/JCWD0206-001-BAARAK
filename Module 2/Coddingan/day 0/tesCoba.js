class Produk {
  constructor(makanan, stock, harga, index) {
    this.makanan = makanan;
    this.stock = stock;
    this.harga = harga;
    this.index = index;
  }
}

let arrMakanan = [
  new Produk(`Surabi`, 10, 4000),
  new Produk(`Risol`, 10, 2000),
  new Produk(`Nasi Goreng`, 10, 15000),
  new Produk(`Nasi Ayam`, 10, 20000),
  new Produk(`Es Buah`, 10, 8000),
  new Produk(`Es Teh Manis`, 10, 5000),
];

let tampilanBelanja = ``;
arrMakanan.map((val, index) => {
  tampilanBelanja +=
    index +
    1 +
    ". " +
    val.makanan +
    ", jumlah tersedia " +
    val.stock +
    ", harga saatuan: Rp." +
    val.harga.toLocaleString(`id-ID`) +
    ",-" +
    "\n";
});

// // console.log(arrMakanan);
// // console.log(tampilanBelanja);
// // console.log(arrMakanan.length);

// console.log(parseInt(`checkout`));

class Keranjang extends Produk {
  constructor(makanan, stock, harga, jumlah) {
    super(makanan, stock, harga);
    this.jumlah = jumlah;
  }
}

let keranjang = [];
pilihan = arrMakanan[0];
jumlah = 2;
keranjang.push(new Keranjang(pilihan.makanan, 0, pilihan.harga, jumlah));

console.log(keranjang);

//   if (aksi == "checkout") {
//     let total = 0;
//     let hitung = keranjang.map((val) => val.harga * val.jumlah);
//     total += hitung;

//     let bayar = prompt(total);
//   } else if (aksi > 0) {
//   } else {
//     `input yang anda masukan tidak benar`;
//   }
