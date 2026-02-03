const Newsletter = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl" data-aos="zoom-in-up">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Ingin Menjelajahi Wakatobi?</h2>
          <p className="text-cyan-100 mb-8 max-w-xl mx-auto relative z-10">Dapatkan panduan eksklusif, tips perjalanan, dan cerita budaya terbaru langsung ke email Anda.</p>

          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto relative z-10">
            <input type="email" placeholder="Masukkan email Anda..." className="px-6 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-cyan-100 focus:outline-none focus:bg-white/30 backdrop-blur-md w-full" />
            <button className="px-8 py-3 rounded-full bg-white text-blue-700 font-bold hover:bg-cyan-50 transition-colors shadow-lg">Berlangganan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
