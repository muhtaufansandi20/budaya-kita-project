import React, { useState, useEffect } from "react";
import { MapPin, Navigation } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 1. Komponen pembantu kamera peta (Letakkan di atas komponen utama)
// 1. Komponen pembantu kamera peta (DIPERBARUI)
function RecenterMap({ position, zoom }) {
  const map = useMap();
  
  useEffect(() => {
    // Fungsi untuk memaksa peta menggambar ulang agar area abu-abu hilang
    const fixMap = () => {
      map.invalidateSize();
    };

    // Jalankan saat pertama kali muat dan berikan sedikit delay untuk animasi
    fixMap();
    const timer = setTimeout(fixMap, 500);

    if (position) {
      map.flyTo(position, zoom, { duration: 2 });
    }

    return () => clearTimeout(timer);
  }, [position, zoom, map]);

  return null;
}

const MapsBajo = () => {
  const regions = [
    { name: "Sulawesi Tenggara", lat: -4.0, lng: 122.5, info: "Pusat Suku Bajo Wangi-Wangi", zoom: 8 },
    { name: "Nusa Tenggara Timur", lat: -8.5, lng: 121.0, info: "Komunitas Bajo Labuan Bajo", zoom: 8 },
    { name: "Maluku", lat: -3.0, lng: 129.0, info: "Jejak Pelayar Bajo", zoom: 7 },
    { name: "Kalimantan Timur", lat: 0.5, lng: 116.5, info: "Permukiman Terapung Berau", zoom: 8 },
  ];

  const [activeLocation, setActiveLocation] = useState({
    center: [-2.0, 118.0],
    zoom: 5
  });

  const handleFlyTo = (lat, lng, zoomLevel) => {
    setActiveLocation({ center: [lat, lng], zoom: zoomLevel });
  };

  return (
    <section id="maps" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Dekorasi Cahaya Latar */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* SISI KIRI: INFORMASI */}
          <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-bold">
              <Navigation size={16} />
              <span>NAVIGASI WILAYAH</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Sebaran Budaya <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Suku Bajo
              </span>
            </h2>
            
            <div className="grid gap-4">
              {regions.map((region, index) => (
                <button 
                  key={index} 
                  onClick={() => handleFlyTo(region.lat, region.lng, region.zoom)}
                  className="flex items-start text-left gap-4 p-4 bg-slate-800/40 border border-white/5 rounded-2xl hover:bg-slate-800 hover:border-cyan-500/50 transition-all group w-full"
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{region.name}</h4>
                    <p className="text-sm text-gray-400">{region.info}</p>
                  </div>
                </button>
              ))}
              
              <button 
                onClick={() => handleFlyTo(-2.0, 118.0, 5)}
                className="text-cyan-400 text-xs font-bold hover:underline mt-2 flex items-center gap-2"
              >
                ↺ Reset Tampilan Peta
              </button>
            </div>
          </div>

          {/* SISI KANAN: MAP DENGAN BINGKAI */}
          <div className="lg:w-1/2 w-full group relative" data-aos="zoom-in">
            {/* Bingkai Luar (Glow) */}
            <div className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-700"></div>

            {/* Bingkai Utama */}
            <div className="relative h-[500px] p-3 bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:border-cyan-500/50">
              
              {/* Garis Cahaya Atas */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

              {/* Kontainer Internal Peta */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-700">
                <MapContainer 
                  center={activeLocation.center} 
                  zoom={activeLocation.zoom} 
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%", filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <RecenterMap position={activeLocation.center} zoom={activeLocation.zoom} />
                  {regions.map((region, index) => (
                    <Marker key={index} position={[region.lat, region.lng]}>
                      <Popup>
                        <div className="text-slate-900 font-bold p-1">
                          {region.name} <br />
                          <span className="font-normal text-xs text-gray-600">{region.info}</span>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>

              {/* Dekorasi Sudut */}
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-cyan-500/30 rounded-br-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapsBajo;