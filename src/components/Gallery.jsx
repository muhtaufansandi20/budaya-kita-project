import { useState, useEffect } from "react";
import { dataBudaya } from "../data/budaya";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Semua");
 
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refreshHard(); 
    }
  }, [filter]);
  
  const categories = ["Semua", ...new Set(dataBudaya.map((item) => item.category))];
  const filteredData = filter === "Semua" ? dataBudaya : dataBudaya.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* HAPUS data-aos di sini */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Galeri Nusantara</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Koleksi visual kekayaan alam, budaya, dan tradisi.</p>
        </div>

        {/* HAPUS data-aos di sini */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-transparent ${
                filter === cat ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105" : "bg-slate-800/50 text-gray-400 border-slate-700 hover:border-cyan-500 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <div 
              key={item.id} 
              // HAPUS data-aos dan data-aos-delay di sini agar card tidak "blank"
              onClick={() => navigate(`/detail/${item.id}`)}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:shadow-cyan-500/20"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-cyan-500/80 backdrop-blur-sm text-white text-xs font-bold rounded mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;