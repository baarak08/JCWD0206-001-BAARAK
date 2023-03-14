class Employee {
  constructor(nama, jabatan, umur) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.umur = umur;
  }
}
class Salary extends Employee {
  constructor(nama, jabatan, umur, jam, tipe) {
    super(nama, jabatan, umur);
    this.jam = jam;
    this.tipe = tipe;
  }

  total() {
    let sisa = this.jam - 6 < 0 ? 0 : this.jam - 6;
    let jamKerja = this.jam - 6 > 0 ? 6 : this.jam;

    let base = 0;
    let ovt = 0;
    if (this.tipe === `Part-Time`) {
      base = 50000;
      ovt = 30000;
    } else {
      base = 100000;
      ovt = 75000;
    }
    return base * jamKerja + ovt * sisa;
  }
}

karyawan1 = new Salary(`ujang`, `junior Sales`, `24`, `8`, `Part-Time`);
karyawan2 = new Salary(`bambang`, `senior Sales`, `30`, `8`, `Full-Time`);
console.log(karyawan1);

console.log(karyawan1.total());
console.log(karyawan2.total());

console.log(
  `=============================================================================`
);

class Player {
  constructor(nama, health, power) {
    this.nama = nama;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }
  useItem(item) {
    if (item.health) {
      this.health += item.health;
    }
    if (item.power) {
      this.power += item.power;
    }
  }
  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}
class ShootingGame {
  constructor(player1, player2) {
    this.players = [player1, player2];
  }

  getRandomItem() {
    const item = {};
    const random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return (item.health = 0), item.power;
    } else {
      item.power = 10;
    }
    return item;
  }
}

let p1 = new Player(`Player 1`, `Barak`);
let p2 = new Player(`Player 2`, `Gaara`);
let game = [p1, p2];

console.log(game);
