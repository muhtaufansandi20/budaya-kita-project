import molaImg from '../assets/kampung-mola.jpg';
import duaImg from '../assets/ritual-duata.jpg' 
import parenImg from '../assets/parende.jpg'
import kasImg from '../assets/kasuami.jpg'
import manImg from '../assets/manah.jpg'
import lepImg from '../assets/lepa.jpg'
import tarImg from '../assets/tariduata.jpg'
import mofImg from '../assets/Mofis.jpeg'
import petImg from '../assets/peta.png'
import mancImg from '../assets/tari-manca.png'
import madImg from '../assets/maduai-kaka.jpg'
export const dataBudaya = [
  // BOS, KALAU TAMBAH DATA DISINI... SESUAIKAN SAJA KATEGORINYA
  // DESTINASI
  {
    id: 1,
    title: "Kampung Terapung Mola",
    category: "Destinasi",
    image: molaImg,
    desc: "Desa unik di Wangi-Wangi di mana kehidupan berjalan sepenuhnya di atas air. Lorong-lorong sempit jembatan kayu menghubungkan ribuan jiwa.",
  },


  // TRADISI & ADAT
  {
    id: 4,
    title: "Ritual Duata",
    category: "Tradisi",
    image: duaImg,
    desc: "Tradisi Duata merupakan puncak dari segala upaya pengobatan tradisional suku Bajo. Kebiasaan ini akan dilakukan bila ada salah satu di antara mereka mengalami sakit keras dan tak lagi dapat disembuhkan dengan cara lain termasuk pengobatan medis. Saat menjalani prosesi Duata pengobatan, sejumlah tetua adat biasanya berkumpul di sebuah ruangan dan meramu jenis pelengkap ritual, seperti beras aneka warna, dupa, daun sirih, kelapa, dan pisang. Sementara itu, orang yang akan diobati dibawa menuju ke laut dengan diiringi nyanyian lagu masyarakat Bajo yaitu lilligo dan tarian ngigal. Selesai dari laut, orang yang sakit dan tetua adat bertemu di tempat semula dan berlangsung lah pengobatan. Tak terbatas pada pengobatan, tradisi Duata juga dapat dilakukan dalam acara syukuran dan hajatan. Duata juga dilaksanakan saat menyambut tamu.",
  },
  
  {
    id: 5,
    title: "Maduai kaka",
    category: "Tradisi",
    image: madImg,
    desc: "Ritual pengobatan tradisional yang dipercayai dapat menyembuhkan orang sakit salah satunya yaitu ritual pengobatan maduai kaka. Ritual pengobatan maduai  kaka merupakan sebuah ritual yang dipercayai bahwa setiap anak memiliki kembaran dilaut kaka/kagumbarang (kembaran), Sehingga jika sedang sakit, itu berarti sedang diganggu oleh kagumbarang (kembaran) yang berada dilaut.",
  },
  {
    id: 9,
    title: "Maduaikutta",
    category: "Tradisi",
    image: duaImg,
    desc: "Ritual Harmonisasi dengan Alam Daratan Maduaikutta merupakan praktik pengobatan yang berfokus pada hubungan manusia dengan lingkungan daratan (Kutta berarti tanah). Ritual ini dilakukan apabila seseorang diyakini jatuh sakit akibat terganggunya harmoni dengan entitas atau kekuatan yang menghuni tempat-tempat tertentu. Melalui doa dan persembahan simbolis, Maduaikutta menjadi sarana rekonsiliasi untuk memohon maaf atas perilaku manusia yang dianggap kurang santun terhadap alam, sehingga keseimbangan antara penghuni raga dan penjaga alam dapat pulih kembali.",
  },
  {
    id: 2,
    title: "Maduaituli",
    category: "Tradisi",
    image: duaImg,
    desc: "Ritual Penyejuk Jiwa dan Raga Ritual ini menitikberatkan pada penggunaan air sebagai media utama penyembuhan. Dalam perspektif lokal, penyakit sering kali dianggap sebagai kondisi panas yang menyerang raga akibat gangguan spiritual atau beban batin. Maduaituli dilakukan oleh tokoh adat atau imam dengan membacakan doa-doa khusus ke dalam air, yang kemudian digunakan untuk membasuh atau memandikan penderita. Air dalam ritual ini melambangkan kesejukan dan peluruhan, dengan harapan segala penyakit dan energi negatif dapat luruh sehingga mendatangkan ketenangan jiwa.",
  },
  
  {
    id: 6,
    title: "Tari Duata",
    category: "Seni",
    image: tarImg,
    desc: "Tarian klasik kerajaan yang dulunya dipersembahkan untuk menyambut tamu kehormatan di Kesultanan Buton dan Wakatobi.",
  },
    {
    id: 3,
    title: "Tari Manca ",
    category: "Seni",
    image: mancImg,
    desc: "Di samping ritual spiritual, desa ini memiliki kekayaan seni pertunjukan yang sangat populer, yakni Tari Manca. Tarian ini merupakan seni bela diri khas Suku Bajo yang memadukan gerakan ketangkasan, kekuatan, dan estetika yang di iringi dengan musik tradisional. Biasanya dipentaskan dalam acara adat, penyambutan tamu kehormatan, atau pesta pernikahan, Tari Manca menjadi simbol keberanian sekaligus persaudaraan. ",
  },

  // KULINER
  {
    id: 7,
    title: "Parende",
    category: "Kuliner",
    image: parenImg,
    desc: "Sup ikan khas Wakatobi (biasanya Kakap Merah) dengan kuah kuning segar yang kaya rempah, belimbing wuluh, dan kemangi.",
  },
  {
    id: 8,
    title: "Kasuami (Ubi Kayu)",
    category: "Kuliner",
    image: kasImg,
    desc: "Makanan pokok pengganti nasi berbentuk kerucut yang terbuat dari parutan singkong yang dikukus. Tahan lama dan bekal wajib nelayan.",
  },


  // FISIK & KEAHLIAN
  {
    id: 10,
    title: "Spearfishing (Manah)",
    category: "Fisik",
    image: manImg,
    desc: "Seni berburu ikan menggunakan panah tradisional (panah kawat) sambil menyelam bebas di kedalaman karang.",
  },
  {
    id: 11,
    title: "Lepa (Perahu)",
    category: "Arsitektur",
    image: lepImg,
    desc: "Rumah terapung sesungguhnya. Perahu kayu ramping yang didesain untuk membelah ombak dan menjadi tempat tinggal keluarga.",
  },

  {
    id: 13, // Pastikan ID unik
    title: "Mofis (Mola Fish)",
    category: "Produk KKN",
    image: mofImg, // Ganti dengan path gambar Anda
    desc: "Nikmati kebaikan laut Desa Mola di setiap gigitan. Mofis adalah produk nugget ikan tongkol inovatif yang diciptakan sebagai respons terhadap tingginya angka stunting di Desa Mola Nelayan Bhakti.",
  },
  {
    id: 14,
    title: "“GeoSmart Desa: Peta Wisata Terpadu Desa mola Nelayan Bhakti”",
    category: "Produk KKN",
    image: petImg, // Ganti dengan path gambar Anda
    desc: "Pengalaman menjelajah desa pesisir yang unik melalui peta interaktif berbasis digital. Platform ini menampilkan pesona wisata bahari, budaya khas Suku Bajo, serta berbagai fasilitas dan akses pendukung wisata dalam satu tampilan yang informatif dan menarik.",
  },

];
