"use client";

import Image from "next/image";
import SpotlightCard from "../ui/SpotlightCard";


const ExploraAstra = () => {
    return ( 
    <div className='w-[100vw] h-[100vh] bg-black text-white font-secundary text-center items-center justify-between flex flex-col'>
        <div className='h-[15%] flex flex-col justify-center items-center text-center m-1.5 '>
            <h2 className='text-4xl tracking-wide mb-2'>Explora Astra</h2>
        <p className="text-gray-300  text-sm md:text-base leading-relaxed">Descubre nuestras colecciones únicas, diseñadas para un momento especial para tu vida</p>
        </div>
    <section className=' w-full h-[84%] flex items-center justify-around mb-3'>
        {/*contenedor luxe */}
    <div className="relative w-[25%] h-full rounded-2xl shadow-lg overflow-hidden">
       <Image
        src="/fondo/fondo_luxe.jpg"
        alt="Fondo"
        fill
        className="object-cover opacity-85 rounded-2xl"
        priority
      />
       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="relative flex flex-col items-center justify-between h-full p-6 text-center text-white">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/60 border border-yellow-400 shadow-md"> 
        <Image 
        src="/icons/daimond.png"
        alt="diamante logo" 
        width={32} 
        height={32}/> 
        </div>
        <div className="flex flex-col gap-2"> 
        <p className="text-sm text-yellow-300/80 uppercase tracking-wide"> Premium Collection </p>
         <h3 className="text-3xl font-serif text-yellow-400">Astra Luxe</h3> 
         <p className="text-sm text-gray-200 max-w-[240px] leading-relaxed"> Piezas exclusivas que definen la elegancia suprema </p> 
     <SpotlightCard
              
              className="mt-4 px-6 py-2 rounded-full bg-black/70 border border-yellow-400 text-yellow-300 font-semibold tracking-wide shadow-lg hover:scale-105 transition-transform"
              spotlightColor="rgba(208, 0, 255, 0.25)"
            >
              Ver colección
            </SpotlightCard>
         </div>
      </div>
    </div>

    {/*contenedor piercing */}
        <div className="relative w-[25%] h-full rounded-2xl shadow-lg overflow-hidden">
       <Image
        src="/fondo/AstraFondo.png"
        alt="Fondo"
        fill
        className="object-cover opacity-85 rounded-2xl"
        priority
      />
       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="relative flex flex-col items-center justify-between h-full p-6 text-center text-white">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/60 border border-yellow-400 shadow-md"> 
        <Image 
        src="/icons/daimond.png"
        alt="diamante logo" 
        width={32} 
        height={32}/> 
        </div>
        <div className="flex flex-col gap-2"> 
       <p className="text-sm text-purple-300/80 uppercase tracking-wide"> Trend Collection </p>
<h3 className="text-3xl font-serif text-purple-400">Astra Piercing</h3> 
<p className="text-sm text-gray-200 max-w-[240px] leading-relaxed"> Diseños modernos y minimalistas que realzan tu estilo único </p>  
     <SpotlightCard
              
              className="mt-4 px-6 py-2 rounded-full bg-black/70 border border-yellow-400 text-yellow-300 font-semibold tracking-wide shadow-lg hover:scale-105 transition-transform"
              spotlightColor="rgba(208, 0, 255, 0.25)"
            >
              Ver colección
            </SpotlightCard>
         </div>
      </div>
    </div>
            {/*contenedor daily */}
    <div className="relative w-[25%] h-full rounded-2xl shadow-lg overflow-hidden">
       <Image
        src="/fondo/fondo_daily.jpg"
        alt="Fondo"
        fill
        className="object-cover opacity-85 rounded-2xl"
        priority
      />
       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="relative flex flex-col items-center justify-between h-full p-6 text-center text-white">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/60 border border-yellow-400 shadow-md"> 
        <Image 
        src="/icons/daimond.png"
        alt="diamante logo" 
        width={32} 
        height={32}/> 
        </div>
        <div className="flex flex-col gap-2"> 
        <p className="text-sm text-pink-300/80 uppercase tracking-wide"> Everyday Elegance </p>
<h3 className="text-3xl font-serif text-pink-400">Astra Daily</h3> 
<p className="text-sm text-gray-200 max-w-[240px] leading-relaxed"> Joyería versátil para acompañarte en cada momento del día </p>  
     <SpotlightCard
              
              className="mt-4 px-6 py-2 rounded-full bg-black/70 border border-yellow-400 text-yellow-300 font-semibold tracking-wide shadow-lg hover:scale-105 transition-transform"
              spotlightColor="rgba(208, 0, 255, 0.25)"
            >
              Ver colección
            </SpotlightCard>
         </div>
      </div>
    </div>
    </section>
    </div> );
}
 
export default ExploraAstra;