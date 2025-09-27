const Footer = () => {
  return (
    <footer className="w-full bg-black/90 border-t border-yellow-400/30 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Logo / Marca */}
        <div>
          <h3 className="text-pink-300 text-2xl font-serif mb-2">Astra ✦</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Joyas únicas con un toque de misticismo y elegancia.
          </p>
        </div>

        {/* Columna 2: Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-yellow-400 font-semibold mb-2">Navegación</h4>
          <a href="#" className="hover:text-pink-300 transition">Inicio</a>
          <a href="#" className="hover:text-pink-300 transition">Catálogo</a>
          <a href="#" className="hover:text-pink-300 transition">Sobre Nosotros</a>
          <a href="#" className="hover:text-pink-300 transition">Contacto</a>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-2">Síguenos</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-pink-300 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior con copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Astra. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
