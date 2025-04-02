export const EnviarCasos = () => {
    return (
      <div className="bg-white w-full flex flex-col items-center text-center py-16 px-6">
        {/* Título */}
        <h1 className="text-5xl font-bold text-violaceo mb-4 mq980:text-4xl">¿CÓMO HACER PARA ENVIARNOS CASOS?</h1>
        
        {/* Descripción */}
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Para comenzar tu reclamo, completá nuestro formulario con los detalles del caso y nos pondremos en contacto para asesorarte.
        </p>
        
        {/* Botón */}
        <a
          href="https://forms.gle/tu-link-de-google-form" // Reemplazar con el link real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violaceo text-white text-md font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-violaceo-dark transition-all"
        >
          INICIAR RECLAMO
        </a>
      </div>
    );
  };
  