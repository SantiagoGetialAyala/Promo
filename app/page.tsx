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

      {/* Fondo Dinámico */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DB954]/20 blur-[150px] rounded-full animate-pulse-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center space-y-12 z-10"
      >

        {/* Portada */}
        <motion.div className="relative mx-auto w-full max-w-[320px] md:max-w-sm">
          <img
            src="/imagen.jpg"
            alt="Portada canción"
            className="rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/5"
          />

          {/* Visualizador */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-12 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
            {[0.1, 0.3, 0.2, 0.4, 0.1, 0.3].map((d, i) => (
              <motion.div
                key={i}
                animate={{ height: ['20%', '100%', '40%', '80%', '20%'] }}
                transition={{ repeat: Infinity, duration: 1, delay: d }}
                className="w-1.5 bg-[#1DB954] rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Texto */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-light text-gray-300"
          >
            Escribí esta canción para cuando <br />
            <span className="text-white italic">sonríes por fuera...</span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-3xl md:text-4xl font-black uppercase"
          >
            Pero por dentro <br />
            <span className="text-[#1DB954] drop-shadow-[0_0_15px_rgba(29,185,84,0.5)]">
              algo falta.
            </span>
          </motion.h2>
        </div>

        {/* BOTÓN SPOTIFY */}
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
              group relative flex items-center gap-4
              bg-[#1DB954] hover:bg-[#1ed760]
              text-black font-black text-xl md:text-2xl
              px-10 py-6 rounded-full
              transition-all duration-300
              hover:scale-110 active:scale-95
              shadow-[0_0_30px_rgba(29,185,84,0.4)]
            "
          >
            <span>ESCUCHAR AHORA</span>
          </a>
        </motion.div>

        <p className="text-xs tracking-[0.3em] text-gray-500 font-bold uppercase">
          Lanzamiento Exclusivo
        </p>
      </motion.div>
    </main>
  )
}
