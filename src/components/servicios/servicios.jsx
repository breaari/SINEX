export const Servicios = () => {
    return (
      <div className="bg-gray-100 w-full flex flex-row mq980:flex-col mq980:items-center items-start text-center py-16 px-6 mq980:p-8">
        {/* Sección de título */}  
        <div className="w-[40%] mq980:w-full flex flex-col items-center justify-start">
          <h1 className="text-5xl font-bold text-violaceo mq980:text-4xl">SERVICIOS</h1>
          <h1 className="text-8xl font-bold text-violaceo mq980:text-7xl">SINEX</h1>
        </div>

        {/* Sección de servicios */}  
        <div className="w-[60%] text-lg text-gray-700 text-start space-y-6 mq980:w-full mq980:mt-4">
          <p>
            <span className="font-semibold">✔ Asesoría jurídica gratuita:</span> En instancia administrativa a asegurados de nuestros clientes.
          </p>

          <p className="font-semibold">✔ Atención integral de reclamos de terceros:</p>
          <ul className="list-disc list-inside text-left space-y-0 text-md ml-8 mq980:ml-0">
            <li>Comunicación constante con asegurados para reducir la carga del broker.</li>
            <li>Reclamos a todas las compañías, en todas las instancias.</li>
            <li>Coberturas con y sin franquicia, daños materiales y lesiones.</li>
            <li>Presupuestos gratuitos y virtuales según necesidad del cliente.</li>
            <li>Gestión de reparación en nuestra red de talleres tras cobro de indemnización.</li>
          </ul>
        </div>
      </div>
    );
};
