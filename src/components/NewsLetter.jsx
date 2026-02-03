import React from 'react';

const Newsletter = () => {
  // Masukkan nomor WhatsApp Anda di sini (format: 628xxx)
  const whatsappNumber = "6281234567890"; 
  const message = "Halo! Saya ingin bertanya lebih lanjut mengenai panduan perjalanan dan budaya di Wakatobi.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="kontak" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl" data-aos="zoom-in-up">
          {/* Dekorasi Background */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Siap Menjelajahi Mola Nelayan Bhakti? 🌊
          </h2>
          <p className="text-emerald-50 mb-8 max-w-xl mx-auto relative z-10">
            Dapatkan panduan eksklusif, tips perjalanan, dan info budaya terbaru langsung melalui chat personal.
          </p>

          <div className="flex justify-center relative z-10">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-4 rounded-full bg-white text-emerald-700 font-extrabold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl"
            >
              {/* Icon WhatsApp */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.89-11.892 11.89-2.01 0-3.987-.51-5.742-1.47l-6.253 1.641zm6.15-4.145l.443.263c1.517.902 3.268 1.379 5.064 1.379 5.419 0 9.829-4.411 9.829-9.828 0-2.623-1.022-5.088-2.879-6.946-1.856-1.857-4.321-2.879-6.945-2.879-5.42 0-9.831 4.411-9.831 9.829 0 2.115.673 4.184 1.947 5.922l.288.397-1.036 3.784 3.882-1.021zm10.748-7.14c-.301-.15-1.78-.878-2.056-.978-.275-.1-.475-.15-.675.15-.2.3-.775.978-.95 1.178-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.89-.793-1.49-1.772-1.665-2.072-.175-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.51-.675-.52l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.112 3.225 5.118 4.525.715.31 1.273.495 1.708.633.718.228 1.371.196 1.888.118.577-.087 1.78-.727 2.03-1.427.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z"/>
              </svg>
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;