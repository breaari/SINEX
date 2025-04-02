import proceso from "../../assets/proceso.png"

export const Proceso = () => {
    return (
      <div className="bg-gray-200 w-full flex flex-row mq980:flex-col mq980:items-center mq980:p-8 items-start text-center py-16 px-6">
        {/* Sección de título */}  
        <div className="w-[40%] mq980:w-full flex flex-col items-center justify-start mq980:mb-4">
          <h1 className="text-4xl font-bold text-violaceo mq980:text-3xl">PROCESO DEL</h1>
          <h1 className="text-6xl font-bold text-violaceo mq980:text-5xl">RECLAMO</h1>
          <img src = { proceso } className="w-[38%] mq980:hidden"></img>
        </div>

        {/* Sección de pasos */}  
        <div className="w-[60%] mq980:w-full text-lg text-gray-700 text-start space-y-6">
          <p><span className="font-bold text-violaceo">1. RECEPCIÓN:</span> Armamos su expediente y explicamos plazos y procesos.</p>
          <p><span className="font-bold text-violaceo">2. COTIZACIÓN DE DAÑOS:</span> Evaluamos los daños y elaboramos un presupuesto.</p>
          <p><span className="font-bold text-violaceo">3. PRESENTACIÓN DEL RECLAMO:</span> Enviamos la documentación a la aseguradora.</p>
          <p><span className="font-bold text-violaceo">4. ACEPTACIÓN:</span> Una vez acordado, gestionamos el trámite de cobro.</p>
          <p><span className="font-bold text-violaceo">5. COBRO DEL RECLAMO:</span> El expediente finaliza con la confirmación del pago.</p>
          <p><span className="font-bold text-violaceo">6. LEGALES:</span> Si no hay acuerdo, ofrecemos opciones legales.</p>
        </div>
      </div>
    );
};