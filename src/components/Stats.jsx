const Stats = () => {
  const stats = [
    { number: "900+", label: "Spesies Ikan" },
    { number: "750", label: "Spesies Karang" },
    { number: "4", label: "Pulau Utama" },
    { number: "100%", label: "Keindahan Alam" },
  ];

  return (
    <div className="relative z-20 container mx-auto px-6 py-12 -mt-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
            className="group relative"
          >
            {/* Background Glow Effect (Muncul saat Hover) */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Utama */}
            <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-500/50">
              
              {/* Animasi Garis di Atas Card */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-700"></div>

              <div className="flex flex-col items-center">
                {/* Angka dengan Gradient & Drop Shadow */}
                <h3 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">
                  {stat.number}
                </h3>
                
                {/* Divider Kecil */}
                <div className="w-8 h-0.5 bg-cyan-500/30 mb-3 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-300"></div>

                {/* Label dengan Spasi Huruf Modern */}
                <p className="text-cyan-100/70 text-xs md:text-sm font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;