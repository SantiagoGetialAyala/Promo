'use client'
import { motion } from 'framer-motion'

export default function Home() {
  const handleSpotifyClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'Click_Spotify_Directo')
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0b0b0b] text-white">
      
      {/* Fondo Dinámico con Resplandor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DB954]/20 blur-[150px] rounded-full animate-pulse-slow" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center space-y-12 z-10"
      >
        {/* Portada con Visualizador Pro */}
        <motion.div className="relative mx-auto w-full max-w-[320px] md:max-w-sm">
          <img
            src="/imagen.jpg" 
            alt="Portada canción"
            className="rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/5"
          />
          {/* Barras de sonido animadas */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-12 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
            {[0.1, 0.3, 0.2, 0.4, 0.1, 0.3].map((d, i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
                transition={{ repeat: Infinity, duration: 1, delay: d }}
                className="w-1.5 bg-[#1DB954] rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Texto con Estilo */}
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-light text-gray-300 leading-tight"
          >
            Escribí esta canción para cuando <br />
            <span className="text-white italic">sonríes por fuera...</span>
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-3xl md:text-4xl font-black tracking-tighter uppercase"
          >
            Pero por dentro <br />
            <span className="text-[#1DB954] drop-shadow-[0_0_15px_rgba(29,185,84,0.5)]">algo falta.</span>
          </motion.h2>
        </div>

        {/* BOTÓN ÚNICO SPOTIFY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <a
            href="https://open.spotify.com/intl-es/track/3C7xqJaJmdYN83M1BMUSVv?si=3d084b0ad77d4554"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSpotifyClick}
            className="
              group relative flex items-center justify-center gap-4
              bg-[#1DB954] hover:bg-[#1ed760]
              text-black font-black text-xl md:text-2xl
              px-10 py-6 rounded-full
              transition-all duration-300
              hover:scale-110 active:scale-95
              shadow-[0_0_30px_rgba(29,185,84,0.4)]
              animate-bounce-subtle
            "
          >
            {/* Logo de Spotify SVG */}
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.679.467-1.032.252-2.858-1.747-6.457-2.141-10.693-1.172-.404.093-.81-.157-.903-.561-.094-.405.157-.811.561-.904 4.634-1.06 8.608-.611 11.815 1.35.353.214.467.678.252 1.035zm1.47-3.255c-.271.44-.846.578-1.287.307-3.27-2.009-8.253-2.591-12.119-1.416-.497.151-1.023-.127-1.174-.624-.151-.498.127-1.023.624-1.174 4.417-1.339 9.897-.689 13.65 1.616.44.271.578.846.307 1.287zm.126-3.414c-3.922-2.329-10.387-2.544-14.153-1.399-.601.182-1.242-.164-1.424-.764-.182-.601.164-1.242.764-1.424 4.316-1.31 11.45-1.053 15.98 1.635.54.32.715 1.021.395 1.561-.32.54-1.022.715-1.561.395z"/>
            </svg>
            
            <span>ESCUCHAR AHORA</span>

            {/* Brillo que recorre el botón */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
               <div className="absolute top-0 -left-[100%] w-full h-full bg-white/30 skew-x-[-25deg] animate-shine" />
            </div>
          </a>
        </motion.div>

        <p className="text-xs tracking-[0.3em] text-gray-500 font-bold uppercase">
          Lanzamiento Exclusivo
        </p>
      </motion.div>
    </main>
  )
}