import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Tambah useLocation
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats"; 
import Gallery from "./components/Gallery";
import Newsletter from "./components/NewsLetter"; 
import Footer from "./components/Footer";
import WaterEffect from "./components/WaterEffect";
import DetailBudaya from "./components/DetailBudaya";
import  MapsBajo  from "./components/MapsBajo";
import Profile from "./components/Profile";

// Komponen internal untuk menangani navigasi balik agar tidak blank
function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Paksa ke atas setiap pindah rute
    if (window.AOS) {
      window.AOS.refresh(); // Segarkan posisi elemen
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ 
        duration: 800, 
        once: true, 
        easing: "ease-out-quad",
        disableMutationObserver: false,
        startEvent: 'DOMContentLoaded',
      });
    }
  }, []);

  return (
    <Router>
      <ScrollHandler /> {/* Panggil di sini */}
      <div className="font-sans antialiased bg-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden min-h-screen relative">
        <WaterEffect />
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <section className="pt-10">
                <Stats />
              </section>

              <section id="about" className="pt-20 pb-24 relative z-10 overflow-hidden">
                {/* Dekorasi Background */}
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>

                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2" data-aos="fade-right">
                    <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                      <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-xs">Filosofi & Tradisi</h4>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Kearifan Lokal <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Para Pengembara Laut
                      </span>
                    </h2>
                    
                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                      <p>
                        Bagi Suku Bajo, laut bukanlah sekadar hamparan air, melainkan ibu yang memberi kehidupan. Melalui prinsip <span className="text-cyan-400 font-semibold italic">"Papu Maneng"</span>, mereka percaya bahwa setiap jengkal karang dan arus memiliki jiwa yang harus dihormati.
                      </p>
                      <p>
                        Ketangguhan mereka bukan sekadar legenda; penelitian genetika membuktikan bahwa limpa mereka telah berevolusi untuk menyimpan lebih banyak oksigen, memungkinkan mereka menyelam hingga kedalaman 70 meter hanya dengan sepasang kacamata kayu tradisional.
                      </p>
                      <p className="text-base text-gray-400 italic border-l-2 border-cyan-500/50 pl-4">
                        "Di laut kami lahir, di laut kami hidup, dan kepada laut pula kami menitipkan masa depan."
                      </p>
                    </div>

                    {/* Grid Statistik */}
                    <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
                      <div className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-xl leading-none">13 Menit</h5>
                          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">Apnea Diving</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-xl leading-none">Samudera</h5>
                          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">Ruang Hidup</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 relative" data-aos="fade-left">
                    {/* Dekorasi Elemen */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    
                    <div className="relative group">
                      <div className="absolute -inset-4 border-2 border-cyan-500/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                      <div className="absolute -inset-4 border border-blue-500/20 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-700 delay-75"></div>
                      
                      <img 
                        src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800" 
                        alt="Budaya Bajo" 
                        className="relative rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition duration-700 object-cover w-full h-[500px]" 
                      />
                      
                      {/* Floating Info Card */}
                      <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl max-w-[200px]">
                        <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-xs">★</span>)}
                        </div>
                        <p className="text-white text-sm font-medium leading-tight italic">
                          "Menjaga harmoni antara manusia dan alam bawah laut selama berabad-abad."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Gallery />
              <Newsletter />
              <MapsBajo/>
              <Profile/>
                          </>
          } />

          <Route path="/detail/:id" element={<DetailBudaya />} />
        </Routes>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;