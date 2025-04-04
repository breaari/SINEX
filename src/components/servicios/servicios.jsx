import asesoria from "../../assets/asesoria.PNG"
import terceros from "../../assets/terceros.PNG"
import { FaCheck } from "react-icons/fa";

export const Servicios = () => {
    return (
      <div className="bg-white w-full flex flex-col items-center text-center py-16 px-6 mq980:p-8">
        {/* Sección de título */}  
        <div className="w-full  flex flex-col items-center justify-start mb-8 mq980:mb-4">
          <h1 className="text-5xl font-bold text-violaceo mq980:text-4xl">Nuestros Servicios en SINEX</h1>
          {/* <h1 className="text-8xl font-bold text-violaceo mq980:text-7xl">SINEX</h1> */}
        </div>

        {/* Sección de servicios */}  
        
      <div className="w-full flex flex-row mq980:flex-col items-center justify-evenly text-gray-700 text-start space-y-6 mq980:mt-4"> 
        
      <div className="w-[40%] items-center mq980:w-full">
          <p className="font-bold text-4xl mb-4 mq980:text-center mq980:text-3xl">Atención integral de reclamos de terceros</p>

      <ul className="list-none text-start text-2xl mq980:text-xl">
        {/* <li className="flex items-center">
          <FaCheck className="text-[#FF8759] mr-2" /> Comunicación constante con asegurados para reducir la carga del broker.
        </li> */}
        <li className="flex items-center">
          <FaCheck className="text-[#FF8759] mr-2" /> Reclamos a todas las compañías, en todas las instancias.
        </li>
        <li className="flex items-center">
          <FaCheck className="text-[#FF8759] mr-2" /> Coberturas con y sin franquicia, daños materiales y lesiones.
        </li>
        {/* <li className="flex items-center">
          <FaCheck className="text-[#FF8759] mr-2" /> Presupuestos gratuitos y virtuales según necesidad del cliente.
        </li> */}
        {/* 
        <li className="flex items-center">
          <FaCheck className="text-[#FF8759] mr-2" /> Gestión de reparación en nuestra red de talleres tras cobro de indemnización.
        </li> */}
      </ul>

          </div>
          <div className="">
              <img src= {terceros} className="w-[400px]"></img>
          </div>
         
        </div>
        <div className="w-full flex flex-row mq980:flex-col items-center justify-evenly text-gray-700 text-end space-y-6 mq980:mt-4">
          <div className="block mq980:hidden">
            <img src= {asesoria} className="w-[400px] mq980:w-[300px]"></img>
          </div>
          
          <div className="w-[40%] items-center mq980:w-full mq980:text-center">
            <h1 className="font-bold text-4xl mb-4 mq980:text-3xl">Asesoría jurídica gratuita</h1> 
            <h2 className=" text-2xl mq980:text-xl">En instancia administrativa a asegurados de nuestros clientes.</h2>
          </div>
          <div className="hidden mq980:block">
            <img src= {asesoria} className="w-[400px]  mq980:w-[300px]"></img>
          </div>
          
      </div> 
      </div>
    );
};
