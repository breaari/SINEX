export const ServiciosAnexos = () => {
    return (
      <div className="bg-gray-200 w-full flex flex-row  mq980:flex-col mq980:items-center items-start text-center py-16 px-6 mq980:p-8">
        {/* Sección de título */}
        <div className="w-[40%] mq980:w-full">
          <h1 className="text-4xl font-bold text-violaceo">SERVICIOS</h1>
          <h1 className="text-4xl font-bold text-violaceo">ANEXOS POR</h1>
          <h1 className="text-4xl font-bold text-violaceo">SER CLIENTE</h1>
          <h1 className="text-6xl font-bold text-violaceo">SINEX</h1>
        </div>
  
        {/* Sección de servicios */}
        <div className="w-[60%]  mq980:w-full flex flex-col items-start justify-start text-lg text-gray-700 text-start">
  
          {/* Servicios anexos */}
          <p className="font-semibold mt-6">✔ Consultoría gratuita para todo tipo de casos de clientes propios. </p>
          <p className="font-semibold mt-6">✔ Red de repuesteros nacionales con precios competitivos en piezas fuera de siniestros. </p>
          <p className="font-semibold mt-6">✔ Red de licitadores de restos para optimizar la venta de vehículos siniestrados </p>
        </div>
      </div>
    );
  };
  