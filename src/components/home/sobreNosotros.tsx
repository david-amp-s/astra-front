const SobreNosotros = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-black">
      {/* Fondo con la imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo/sobre_nosotros.jpg')" }}
      />

      {/* Capa oscura sutil */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full px-10 gap-16">
        
        {/* Texto con borde y glow */}
        <div className="bg-black/60 border border-yellow-500/60 shadow-[0_0_20px_rgba(255,215,0,0.5)] rounded-2xl p-10 max-w-xl">
          <h2 className="text-5xl font-serif mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent tracking-wide">
            Sobre Nosotros
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            En Astra buscamos que cada pieza no solo sea joyería, sino un símbolo
            de estilo, misticismo y elegancia. Nuestra historia nace de la pasión
            por lo único y lo especial.
          </p>
        </div>

        {/* Imagen/mascota con glow */}
        <div className="relative bg-black/60 border border-yellow-500/70 shadow-[0_0_25px_rgba(255,215,0,0.6)] w-[34%] h-[80%] rounded-2xl overflow-hidden transition duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]">
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
