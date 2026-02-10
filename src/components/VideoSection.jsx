import React from 'react';
// Pastikan path import ini benar sesuai struktur folder Anda
import videoBajo from '../assets/video-bajo.mp4'; 

const VideoSection = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Cahaya Latar Belakang Lingkaran */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-cyan-500/10 border border-cyan-500/30 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-blue-600/10 border border-blue-500/20 blur-[80px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-slate-800/50 border border-white/20 mb-6 backdrop-blur-md">
            <h4 className="text-white font-semibold tracking-widest uppercase text-[10px]">Cinematic Experience</h4>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Jelajahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Kehidupan Bajo</span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
        </div>

        {/* CONTAINER BINGKAI UTAMA */}
        <div className="max-w-5xl mx-auto relative p-4">
          
          {/* Efek Bingkai Neon Luar */}
          <div className="absolute inset-0 bg-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-40"></div>
          
          {/* Bingkai Garis Neon */}
          <div className="relative p-2 rounded-[2rem] bg-gradient-to-br from-cyan-400/50 via-transparent to-blue-600/50 border border-white/10 backdrop-blur-sm shadow-2xl">
            
            {/* Inner Border */}
            <div className="rounded-[1.5rem] overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] bg-slate-950">
              
              <div className="relative aspect-video">
                <video 
                  key="video-player-bajo"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={videoBajo} type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>

                {/* Overlay Dekoratif */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-500 rounded-full animate-ping z-20"></div>
              </div>

            </div>
          </div>

          {/* Label Kecil */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 border border-white/10 px-4 py-1 rounded-full text-[10px] text-gray-400 tracking-tighter uppercase backdrop-blur-md z-20">
              Video Transmisi : 24 React / src / assets
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;