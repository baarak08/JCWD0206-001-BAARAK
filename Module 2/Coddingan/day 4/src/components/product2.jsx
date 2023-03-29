export default function Product2() {
  const data = [
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      harga: "Rp.1.000.000,- ",
      name: "kucing 11",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "17 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      harga: "Rp.2.000.000,- ",
      name: "kucing 12",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "19 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 13",
      harga: "Rp.500.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "22Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 14",
      harga: "Rp.800.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "24 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 15",
      harga: "Rp.900.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "28 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      harga: "Rp.1.000.000,- ",
      name: "kucing 16",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "17 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      harga: "Rp.2.000.000,- ",
      name: "kucing 17",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "19 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 18",
      harga: "Rp.500.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "22Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 19",
      harga: "Rp.800.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "24 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 20",
      harga: "Rp.900.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "28 Maret",
    },
  ];

  return (
    <div className="background">
      <div className="kontener">
        <p>REKOMENDASI BARU</p>
        <div id="img-band">
          {data.map((val) => (
            <Card
              url={val.url}
              name={val.name}
              harga={val.harga}
              info={val.info}
              lokasi={val.lokasi}
              tanggal={val.tanggal}
            />
          ))}
        </div>
        <div className="next">
          <button>
            <a href="App.js">SEBELUMNYA</a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="gambar">
        <img src={props.url} alt="member" width="100%" height="100%" />
      </div>
      <div className="info">
        <div className="harga">{props.harga}</div>
        <div className="namaProduk">{props.name}</div>
        <div className="infoTambahan">{props.info}</div>
        <div className="lokasi">
          <div>{props.lokasi}</div>
          <div>{props.tanggal}</div>
        </div>
      </div>
    </div>
  );
}
