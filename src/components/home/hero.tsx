import NavBar from '@/components/home/navBar';
import ShinyText from '../../components/ui/ShinyText';
import LightRays from '../../components/ui/LightRays';
import { Button } from '@/components/ui/button';

const Hero = () => {
    return ( 
            <div
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      className="bg-black"
    >
      {/* Fondo */}
      <div className="absolute left-0 top-0 h-screen w-full bg-[url('/fondo/fondoAstra.jpg')] bg-cover bg-center bg-no-repeat z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-purple-900/30"></div>
      </div>

      {/* Efecto de luces */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#D000FF"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays z-10"
      />

      {/* Contenido principal con navbar incluido */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center z-40">
        
        {/* Navbar arriba */}
        <div className="pt-6">
          <NavBar />
        </div>

        {/* Texto y botón en el centro */}
        <div className="flex flex-col items-center justify-center flex-grow gap-8 text-center text-secondary font-secundary">
          <h1 className="title_secundary text-8xl font-medium tracking-[0.3em]">
            ASTRA
          </h1>
          <ShinyText
            text="Joyería que brilla contigo"
            disabled={false}
            speed={2.8}
            className="custom-class text-6xl"
          />
          <Button
            className="relative mt-2 px-10 py-4 text-lg font-semibold rounded-xl 
              bg-black text-purple-300 border border-purple-600
              shadow-[0_0_10px_rgba(192,38,211,0.2)] 
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-fuchsia-600 hover:text-white
              hover:shadow-[0_0_40px_rgba(192,38,211,0.9)]
              transition-all duration-300 ease-in-out"
          >
            Explorar Catálogo
          </Button>
        </div>
      </div>
    </div>
     );
}
 
export default Hero;