import NavBar from '@/components/home/navBar';
import ShinyText from '../components/ui/ShinyText';
import LightRays from '../components/ui/LightRays';
import Image from 'next/image';

export default function Home() {
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

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full h-[30%] flex flex-col justify-around items-center z-50">
        <NavBar />
      </div>

      {/* Contenido principal */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-40">
        <div className="text-center text-secondary font-secundary flex flex-col gap-2.5 ">
          <h1 className='title_secundary text-8xl font-medium tracking-[0.3em]'>ASTRA</h1>
          <ShinyText
            text=" Joyeria que brilla contigo"
            disabled={false}
            speed={2.8}
            className="custom-class text-6xl"
          />
          
        </div>
      </div>
    </div>
  );
}
