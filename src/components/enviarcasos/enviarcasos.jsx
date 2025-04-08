export const EnviarCasos = () => {
    return (
      <div className="bg-gray-100 w-full flex flex-col items-center text-center py-16 px-6">
        {/* Título */}
        <h1 className="text-5xl font-bold text-violaceo mb-4 mq980:text-4xl">¿Cómo hacer enviarnos casos?</h1>
        
        {/* Descripción */}
        <p className="text-2xl text-gray-700 max-w-2xl mb-8">
          Para comenzar tu reclamo, completá nuestro formulario con los detalles del caso y nos pondremos en contacto para asesorarte.
        </p>
        
        {/* Botón */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdUmn_VJFzaoAqfs3s8m7sZbT-VG703oq1MfwCL2alFAE3-Sg/viewform?usp=preview" // Reemplazar con el link real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violaceo text-white text-2xl mq980:text-xl font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-violaceo-dark transition-all"
        >
          INICIAR RECLAMO
        </a>
      </div>
    );
  };
  