class Produk {
    constructor(nama, harga) {
      this.nama = nama;
      this.harga = harga;
    }
  }
  
  class Transaksi {
    constructor() {
      this.total = 0;
      this.produk = {};
    }
    
    tambahkan_ke_keranjang(produk, qty) {
      this.produk[produk.nama] = qty;
      this.total += (produk.harga * qty);
    }
    
    tampilkan_total() {
      return this.total;
    }
    
    checkout() {
      return {
        total: this.total,
        produk: this.produk
      };
    }
  }
  
  // Membuat objek produk
  let produk1 = new Produk("Buku Tulis", 5000);
  let produk2 = new Produk("Pensil", 1000);
  
  // Membuat objek transaksi
  let transaksi1 = new Transaksi();
  
  // Menambahkan produk ke keranjang
  transaksi1.tambahkan_ke_keranjang(produk1, 2);
  transaksi1.tambahkan_ke_keranjang(produk2, 3);
  
  // Menampilkan total
  console.log("Total Transaksi:", transaksi1.tampilkan_total());
  
  // Checkout
  console.log("Data Transaksi:", transaksi1.checkout());
  