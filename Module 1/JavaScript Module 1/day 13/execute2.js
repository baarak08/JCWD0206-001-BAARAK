const antri = require(`./classQueue`)

const daftarAntri = [
    new antri(1, `Gara`),
    new antri(2, `Mikhael`),
    new antri(3, `Martin`),
    new antri(4, `Rezky`),
]
// console.log(daftarAntri);
async function prosesAntri() {
    const urutan = daftarAntri.map(val => val.antrian); // [1, 2, 3, 4]
    const namanya = daftarAntri.map(val => val.nama); // [`Gara`, `Mikhael`, `Martin`, `Rezky`]
    for (let j = 0; j < daftarAntri.length; j++) {
        const lamaWaktu = Math.floor((Math.random() * 10) + 1) * 1000; // set random
        console.log(`Memproses antrian ${urutan[j]} dengan nama ${namanya[j]} selama ${lamaWaktu / 1000} detik`);
        await new Promise(resolve => setTimeout(resolve, lamaWaktu)); // set waktu
        console.log(`Antrian ${urutan[j]} telah selesai`);

    }
}
prosesAntri()