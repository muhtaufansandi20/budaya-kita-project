import { useParams, useNavigate } from 'react-router-dom';
import { dataBudaya } from "../data/budaya";
import { useEffect } from 'react'; // Pastikan ini diimport

const DetailBudaya = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = dataBudaya.find((b) => b.id === parseInt(id));

  // Fungsi krusial: Memaksa scroll ke atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) return (
    <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Data tidak ditemukan</h2>
        <button onClick={() => navigate('/')} className="text-cyan-400 hover:underline">Kembali ke Beranda</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
            onClick={() => navigate('/')} 
            className="group mb-8 flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 text-cyan-400 rounded-xl transition-all duration-300 shadow-lg"
            >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="font-medium">Kembali ke Galeri</span>
        </button>
        
        <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full rounded-2xl shadow-2xl mb-10 border border-slate-700 transition-all duration-500 ${
                item.category === "Produk KKN" 
                ? "h-auto max-h-[600px] object-contain bg-slate-800/30 p-4" 
                : "h-[400px] object-cover"
            }`} />
        
        {/* Sisanya biarkan sesuai kode Anda */}
        <div className="space-y-6">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold tracking-wide border border-cyan-500/30">
            {item.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">{item.title}</h1>
          <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed italic">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBudaya;