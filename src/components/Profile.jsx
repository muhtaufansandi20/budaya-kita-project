import React from 'react';

const Profile = () => {
  const dataDesa = {
    sejarah: {
      judul: "Sejarah Desa Mola Nelayan Bhakti",
      konten: `Secara historiografis, keberadaan Desa Mola Nelayan Bhakti merupakan bagian tak terpisahkan dari narasi besar persebaran etnis maritim di Asia Tenggara. Sebagai bagian dari Suku Bajo (Sama-Bajo), masyarakat ini dikenal sebagai pengembara laut (sea nomads) dengan trajektori migrasi lintas batas negara.`,
      detail: [
        "Leluhur berasal dari kawasan Segitiga Terumbu Karang.",
        "Awalnya memiliki pola hidup nomadik menggunakan Lepa (perahu rumah).",
        "Mengalami proses sedentarisasi dengan membangun hunian panggung di atas paparan terumbu karang sebagai manifestasi identitas kebaharian."
      ]
    },
    geografis: {
      lokasi: "Kecamatan Wangi-Wangi Selatan, Kabupaten Wakatobi, Sulawesi Tenggara.",
      karakteristik: "Pemukiman di atas permukaan laut dan paparan terumbu karang.",
      dusun: ["Dusun Si Jampangi", "Dusun Mina Bahari"],
      batasWilayah: {
        utara: "Desa Mola Selatan",
        selatan: "Kelurahan Mandati III",
        timur: "Kelurahan Mandati III",
        barat: "Laut"
      }
    }
  };

  return (
    <section 
      id="profile" 
      className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20 font-sans text-slate-800"
    >
      {/* Header Utama */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
          Profil Desa
        </h1>
        <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-500 font-medium italic">Mola Nelayan Bhakti - Harmoni di Atas Laut</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Kolom Sejarah */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            {/* <span className="p-3 bg-blue-100 rounded-2xl mr-4 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Status: 12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span> */}
            <h2 className="text-2xl font-bold text-slate-800">Sejarah & Asal Usul Desa 📜⚓</h2>
          </div>
          
          <p className="leading-relaxed text-slate-600 mb-6 text-justify">
            {dataDesa.sejarah.konten}
          </p>
          
          <div className="space-y-4">
            {dataDesa.sejarah.detail.map((item, index) => (
              <div key={index} className="flex items-start bg-slate-50 p-4 rounded-xl border-l-4 border-blue-500">
                <span className="text-blue-500 font-bold mr-3">{index + 1}.</span>
                <p className="text-sm text-slate-700 font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Geografis */}
        <div className="flex flex-col gap-6">
          {/* Card Lokasi */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl text-white shadow-lg shadow-blue-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Letak Geografis
            </h2>
            <p className="text-blue-50 opacity-90 mb-2"><strong>Wilayah:</strong> {dataDesa.geografis.lokasi}</p>
            <p className="text-blue-50 opacity-90"><strong>Karakter:</strong> {dataDesa.geografis.karakteristik}</p>
          </div>

          {/* Card Pembagian & Batas */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Dusun */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="w-2 h-6 bg-cyan-400 rounded-full mr-2"></span>
                  Pembagian Dusun
                </h3>
                <ul className="space-y-2">
                  {dataDesa.geografis.dusun.map((dusun, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <svg className="h-4 w-4 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {dusun}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Batas Wilayah */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                  <span className="w-2 h-6 bg-indigo-400 rounded-full mr-2"></span>
                  Batas Wilayah
                </h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(dataDesa.geografis.batasWilayah).map(([arah, lokasi]) => (
                    <div key={arah} className="flex justify-between border-bottom border-slate-100 pb-1 border-b">
                      <span className="capitalize font-semibold text-slate-500">{arah}</span>
                      <span className="text-slate-700 font-medium">{lokasi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;