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

              <section id="about" className="pt-20 pb-24 relative z-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                  {/* Pastikan atribut data-aos tetap ada tapi akan dipicu ulang oleh ScrollHandler */}
                  <div className="md:w-1/2" data-aos="fade-right">
                    <h4 className="text-cyan-400 font-bold tracking-widest uppercase mb-2 text-sm">Tentang Mereka</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Kearifan Lokal <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Para Pengembara Laut</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      Suku Bajo memiliki ikatan spiritual dengan laut. Mereka adalah satu-satunya manusia yang berevolusi secara genetik untuk menyelam lebih lama.
                    </p>
                  </div>
                  <div className="md:w-1/2 relative" data-aos="fade-left">
                    <div className="absolute -inset-4 border-2 border-cyan-500/30 rounded-2xl rotate-6"></div>
                    <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800" alt="Budaya Bajo" className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-500" />
                  </div>
                </div>
              </section>

              <Gallery />
              <Newsletter />
              <MapsBajo/>
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