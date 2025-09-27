const SobreNosotros = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-black">
      {/* Fondo con la imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo/sobre_nosotros.jpg')" }}
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full px-12 gap-20">
        
        {/* Texto con caja translúcida */}
        <div className="bg-gradient-to-br from-purple-900/60 via-black/70 to-black/90 backdrop-blur-sm rounded-2xl p-10 max-w-xl border border-yellow-400/40 shadow-[0_0_15px_rgba(255,215,0,0.2)] font-secundary">
          <h2 className="text-5xl  mb-6 text-pink-300 tracking-wide relative">
            Sobre Nosotros
            <span className="block w-16 h-[2px] bg-yellow-400 mt-3"></span>
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            En Astra buscamos que cada pieza no solo sea joyería, sino un símbolo
            de estilo, misticismo y elegancia. Nuestra historia nace de la pasión
            por lo único y lo especial.
          </p>
        </div>

        {/* Imagen/mascota refinada */}
        <div className="relative bg-gradient-to-br from-purple-800/50 to-black/70 backdrop-blur-sm border border-yellow-400/40 shadow-[0_0_20px_rgba(255,215,0,0.25)] w-[34%] h-[80%] rounded-2xl overflow-hidden transition duration-700 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/fondo/kai.png')" }}
          />
        </div>

      </div>
    </div>
  )
}

export default SobreNosotros
