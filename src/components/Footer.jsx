import Logo1 from '../assets/logo-1.png';
import Logo2 from '../assets/logo-2.png';
import Logo3 from '../assets/logo-3.png';

import IconInstagram from '../assets/instagram.png'; 
import IconFacebook from '../assets/facebook.png';
import IconYoutube from '../assets/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
       
        <div className="flex justify-center items-center gap-8 mb-8">
          <img 
            src={Logo1} 
            alt="Logo pos 1" 
            className="h-16 w-auto transition-all duration-300 mix-blend-screen" 
          />
          <img 
            src={Logo2} 
            alt="Logo univ 2" 
            className="h-16 w-auto  transition-all duration-300" 
          />
          <img 
            src={Logo3} 
            alt="Logo kab 3" 
            className="h-16 w-auto transition-all duration-300" 
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 tracking-wider">
          BAJO<span className="text-cyan-500">WAKATOBI</span>
        </h2>
        <p className="text-slate-400 text-sm mb-8">Dibuat dengan rasa cinta terhadap budaya maritim Indonesia.</p>
       <div className="flex justify-center items-start space-x-10 mb-8">
          
          {/* Instagram */}
          <a href="#" className="group flex flex-col items-center">
            <div className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 mb-2 transition-transform group-hover:scale-110">
              <img src={IconInstagram} alt="Instagram" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Instagram</span>
          </a>

          {/* Facebook */}
          <a href="#" className="group flex flex-col items-center">
            <div className="p-3 rounded-full bg-blue-600 mb-2 transition-transform group-hover:scale-110">
              <img src={IconFacebook} alt="Facebook" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Facebook</span>
          </a>

          {/* YouTube */}
          <a href="#" className="group flex flex-col items-center">
            <div className="p-3 rounded-full bg-red-600 mb-2 transition-transform group-hover:scale-110">
              <img src={IconYoutube} alt="YouTube" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors">YouTube</span>
          </a>

        </div>
        <p className="text-slate-600 text-xs">&copy; 2026 Budaya Bajo Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
