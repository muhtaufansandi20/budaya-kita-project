import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-blue-900/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          BAJO<span className="text-cyan-400">WAKATOBI</span>
        </h1>

        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">
            Beranda
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            Tentang
          </a>
          <a href="#profile" className="hover:text-cyan-400 transition">
            Profil Desa
          </a>
          <a href="#gallery" className="hover:text-cyan-400 transition">
            Galeri
          </a>
        </div>
            <a 
            href="#kontak" 
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold transition text-sm text-center"
          >
            Kunjungi Kami
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
