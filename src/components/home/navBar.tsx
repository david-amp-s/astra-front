import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 
      w-[70%] max-w-5xl px-6 py-3 
      flex items-center justify-between
      rounded-full border border-white/20 
      bg-white/5 backdrop-blur-md shadow-lg">
      
      {/* Logo */}
<div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500/60 to-pink-500/60">
  <Image 
    src="/icons/kai.png" 
    alt="Kai Logo" 
    width={64} 
    height={64} 
    className="rounded-full bg-black/80 p-1"
  />
</div>

      {/* Links */}
      <ul className="flex gap-8 text-white/80 font-medium">
        <li className="hover:text-white cursor-pointer transition">Inicio</li>
        <li className="hover:text-white cursor-pointer transition">Catálogo</li>
        <li className="hover:text-white cursor-pointer transition">Sobre Nosotros</li>
        <li className="hover:text-white cursor-pointer transition">Contacto</li>
      </ul>

      {/* Carrito */}
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 cursor-pointer hover:bg-white/20 transition">
        🛒
      </div>
    </nav>
  );
}
