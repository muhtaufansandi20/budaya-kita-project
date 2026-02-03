const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-110">
          <source src="https://videos.pexels.com/video-files/3629471/3629471-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-blue-950/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto mt-10">
        <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/50 backdrop-blur border border-cyan-400/30 text-cyan-300 font-bold tracking-widest text-xs md:text-sm mb-6 animate-pulse" data-aos="fade-down">
          EXPLORE WAKATOBI
        </span>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl" data-aos="zoom-in" data-aos-duration="1200">
          Penjaga <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Laut</span> <br /> Nusantara
        </h1>

        <p className="text-cyan-50 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md" data-aos="fade-up" data-aos-delay="400">
          Menyelami kehidupan Suku Bajo yang magis di jantung Segitiga Karang Dunia.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center" data-aos="fade-up" data-aos-delay="600">
          <a href="#gallery" className="group bg-cyan-500/90 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1">
            Jelajahi Budaya
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full z-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0f172a"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
