import recepcion from "../../assets/recepcion.png"
import cotizacion from "../../assets/cotizacion.png"
import envio from "../../assets/envio.png"
import acuerdo from "../../assets/acuerdo.png"
import cobro from "../../assets/cobro.png"
import legales from "../../assets/legales.png"

export const Proceso = () => {
    return (
        <div className="text-center p-8 bg-teal-50">
            <h1 className="font-bold text-gray-700 text-4xl mt-8 mb-16">PROCESO DEL RECLAMO</h1>
            <div className="flex flex-wrap gap-8 justify-evenly">
                <div className="bg-white shadow-xl flex flex-col justify-center items-center p-8 rounded-xl w-[300px]">
                    <img src={recepcion} className="w-[150px]"/>  
                    <h1 className="font-bold text-gray-700 text-3xl my-4">RECEPCIÓN</h1>
                    <h2 className="font-sembold text-gray-700 text-xl">Una vez establecido el contacto, armamos su expediente explicando plazos y procesos.</h2>
                </div>
                <div className="bg-white shadow-xl flex flex-col justify-center items-center p-8 rounded-xl w-[300px]">
                    <img src={cotizacion} className="w-[150px]"/>  
                    <h1 className="font-bold text-gray-700 text-3xl my-4">COTIZACIÓN DE DAÑOS</h1>
                    <h2 className="font-sembold text-gray-700 text-xl">Una vez establecido el contacto, armamos su expediente explicando plazos y procesos.</h2>
                </div>
                <div className="bg-white shadow-xl flex flex-col justify-center items-center p-8 rounded-xl w-[300px]">
                    <img src={envio} className="w-[150px]"/>  
                    <h1 className="font-bold text-gray-700 text-3xl my-4">PRESENTACIÓN DEL RECLAMO</h1>
                    <h2 className="font-sembold text-gray-700 text-xl">Se envía toda la documentación a la compañía del responsable.</h2>
                </div>
                <div className="bg-white shadow-xl flex flex-col justify-center items-center p-8 rounded-xl w-[300px]">
                    <img src={acuerdo} className="w-[150px]"/>  
                    <h1 className="font-bold text-gray-700 text-3xl my-4">ACEPTACIÓN</h1>
                    <h2 className="font-sembold text-gray-700 text-xl">Una vez acordado, gestionamos todo trámite pertinente al cobro.</h2>
                </div>
                <div className="bg-white shadow-xl flex flex-col justify-center items-center p-8 rounded-xl w-[300px]">
                    <img src={cobro} className="w-[150px]"/>  
                    <h1 className="font-bold text-gray-700 text-3xl my-4">COBRO DEL RECLAMO
                    </h1>
                    <h2 className="font-sembold text-gray-700 text-xl">El expediente sólo finaliza con la confirmación del cobro por parte del damnificado.</h2>
                </div>

                <div className="bg-white shadow-xl flex flex-col justify-center items-center p-8 rounded-xl w-[300px]">
                    <img src={legales} className="w-[150px]"/>  
                    <h1 className="font-bold text-gray-700 text-3xl my-4">LEGALES</h1>
                    <h2 className="font-sembold text-gray-700 text-xl">En caso de no llegar a un acuerdo brindamos la posibilidad de seguir reclamando vía judicial.</h2>
                </div>
            </div>
        </div>
    )
}