"use client";
import SpotlightCard from '../ui/SpotlightCard';

const ExploraAstra = () => {
    return ( 
    <div className='w-[100vw] h-[100vh] bg-black text-white font-secundary text-center items-center justify-between flex flex-col'>
        <div className='h-[20%] w-full mt-8'>
            <h2 className='text-4xl'>Explora Astra</h2>
        <p>Descubre nuestras colecciones únicas, diseñadas para un momento especial para tu vida</p>
        </div>
    <section className=' w-full h-[80%] flex items-center justify-around'>
        <SpotlightCard className="custom-spotlight-card h-[90%] w-[24%]" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className='w-full h-full flex flex-col items-center justify-between'>
    <div>icono</div>
    <div>
        <p>Premium Collection</p>
        <h3>Astra Luxe</h3>
        <p>Piezas exclusivas que definen la elegancia suprema</p>
        <div>ver coleccion</div>
    </div>
  </div>
</SpotlightCard>
        
    </section>
    </div> );
}
 
export default ExploraAstra;