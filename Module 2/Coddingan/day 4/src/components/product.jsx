export default function Product() {
  const data = [
    {
      url: "https://th.bing.com/th/id/OIP.76wFnHe-5Vy2Ko2B987JugHaFb?w=272&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      harga: "Rp.1.000.000,- ",
      name: "kucing 1",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "17 Maret",
    },
    {
      url: "https://th.bing.com/th?id=OIP.zJ1pB1J-UuEOQ4lq0aqwrgHaFd&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      harga: "Rp.2.000.000,- ",
      name: "kucing 2",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "19 Maret",
    },
    {
      url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
      name: "kucing 3",
      harga: "Rp.500.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "22Maret",
    },
    {
      url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "kucing 4",
      harga: "Rp.800.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "24 Maret",
    },
    {
      url: "https://th.bing.com/th/id/OIP.6dOw-i1qSM3Tb9vkeYloYgHaE2?w=275&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "kucing 5",
      harga: "Rp.900.000,- ",
      info: "Kucing jenis perkawinan silang antara persia dan kampung",
      lokasi: "Kebayoran lama, Jakarta Selatan.",
      tanggal: "28 Maret",
    },
    // {
    //   url: "https://th.bing.com/th?id=OIP.tvLyTCC-VwYzI49eBtUEzwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //   harga: "Rp.1.000.000,- ",
    //   name: "kucing 6",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "17 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.46hmunM29hKXN3wiLzr0EwHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   harga: "Rp.2.000.000,- ",
    //   name: "kucing 7",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "19 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.g7EPagJ47PA6TwmwYRlW2AHaEj?w=308&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 8",
    //   harga: "Rp.500.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "22Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.f3Pxuen3GmrcEgUUF2Gx9AHaE8?w=271&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 9",
    //   harga: "Rp.800.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "24 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.ra9mAN4ZmzepyUlOyp1VtwHaD4?w=319&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 10",
    //   harga: "Rp.900.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "28 Maret",
    // },

    // {
    //   url: "https://th.bing.com/th/id/OIP.76wFnHe-5Vy2Ko2B987JugHaFb?w=272&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   harga: "Rp.1.000.000,- ",
    //   name: "kucing 1",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "17 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th?id=OIP.zJ1pB1J-UuEOQ4lq0aqwrgHaFd&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //   harga: "Rp.2.000.000,- ",
    //   name: "kucing 2",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "19 Maret",
    // },
    // {
    //   url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
    //   name: "kucing 3",
    //   harga: "Rp.500.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "22Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 4",
    //   harga: "Rp.800.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "24 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.6dOw-i1qSM3Tb9vkeYloYgHaE2?w=275&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 5",
    //   harga: "Rp.900.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "28 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th?id=OIP.tvLyTCC-VwYzI49eBtUEzwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //   harga: "Rp.1.000.000,- ",
    //   name: "kucing 6",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "17 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.46hmunM29hKXN3wiLzr0EwHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   harga: "Rp.2.000.000,- ",
    //   name: "kucing 7",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "19 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.g7EPagJ47PA6TwmwYRlW2AHaEj?w=308&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 8",
    //   harga: "Rp.500.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "22Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.f3Pxuen3GmrcEgUUF2Gx9AHaE8?w=271&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 9",
    //   harga: "Rp.800.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "24 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.ra9mAN4ZmzepyUlOyp1VtwHaD4?w=319&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 10",
    //   harga: "Rp.900.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "28 Maret",
    // },

    // {
    //   url: "https://th.bing.com/th/id/OIP.76wFnHe-5Vy2Ko2B987JugHaFb?w=272&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   harga: "Rp.1.000.000,- ",
    //   name: "kucing 1",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "17 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th?id=OIP.zJ1pB1J-UuEOQ4lq0aqwrgHaFd&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //   harga: "Rp.2.000.000,- ",
    //   name: "kucing 2",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "19 Maret",
    // },
    // {
    //   url: "https://asset.kompas.com/crops/W4P3no-vmu-9GnsCWwybHDufncM=/120x34:4222x2768/750x500/data/photo/2021/04/18/607ba95f8d6f7.jpg",
    //   name: "kucing 3",
    //   harga: "Rp.500.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "22Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.4wKHoJyGsV9478Q8pzN17gHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 4",
    //   harga: "Rp.800.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "24 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.6dOw-i1qSM3Tb9vkeYloYgHaE2?w=275&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 5",
    //   harga: "Rp.900.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "28 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th?id=OIP.tvLyTCC-VwYzI49eBtUEzwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //   harga: "Rp.1.000.000,- ",
    //   name: "kucing 6",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "17 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.46hmunM29hKXN3wiLzr0EwHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   harga: "Rp.2.000.000,- ",
    //   name: "kucing 7",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "19 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.g7EPagJ47PA6TwmwYRlW2AHaEj?w=308&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 8",
    //   harga: "Rp.500.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "22Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.f3Pxuen3GmrcEgUUF2Gx9AHaE8?w=271&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 9",
    //   harga: "Rp.800.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "24 Maret",
    // },
    // {
    //   url: "https://th.bing.com/th/id/OIP.ra9mAN4ZmzepyUlOyp1VtwHaD4?w=319&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    //   name: "kucing 10",
    //   harga: "Rp.900.000,- ",
    //   info: "Kucing jenis perkawinan silang antara persia dan kampung",
    //   lokasi: "Kebayoran lama, Jakarta Selatan.",
    //   tanggal: "28 Maret",
    // },
  ];

  return (
    <div className="background">
      <div className="kontener">
        <p>REKOMENDASI BARU</p>
        <div id="img-jualan">
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
            {" "}
            MUAT LAINNYA
            {/* <a href="App2.js">MUAT LAINNYA</a> */}
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
