import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Título de tu canción | Artista',
  description: 'Una experiencia musical para los que sienten de más.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1048557267405011');
            fbq('track', 'PageView');

            // Evento innovador: Usuario interesado (se queda más de 10 seg)
            setTimeout(() => {
              if(window.fbq) fbq('trackCustom', 'Deep_Engagement');
            }, 10000);
          `}
        </Script>
      </head>
      <body className="antialiased bg-black">{children}</body>
    </html>
  )
}