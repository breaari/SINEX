import { GiInjustice } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export const ServiciosAnexos = () => {
    return (
      <div className="bg-gray-100 w-full flex flex-col items-center text-center py-16 px-6 mq980:p-8">
        {/* Sección de título */}
        <div className="w-full  flex flex-col items-center justify-start mb-8">
          <h1 className="text-5xl font-bold text-violaceo mq980:text-4xl">Beneficios Exclusivos para Clientes SINEX</h1>
          {/* <h1 className="text-8xl font-bold text-violaceo mq980:text-7xl">SINEX</h1> */}
        </div>

        <div className="w-full flex flex-row mq980:flex-col justify-center text-lg text-gray-700 text-center space-x-6 mq980:space-x-0 mq980:space-y-6 mq980:items-center">
  {/* Servicios anexos */}
  {[
    {
      icon: <GiInjustice className="text-8xl" />,
      title: 'Consultoría Legal Personalizada',
      desc: 'Asesoramiento gratuito en todo tipo de casos para nuestros clientes.',
    },
    {
      icon: <FaCar className="text-8xl" />,
      title: 'Red de Repuestos con Beneficios Exclusivos',
      desc: 'Acceso a proveedores nacionales con precios preferenciales en piezas fuera de siniestros.',
    },
    {
      icon: <FaMoneyBill className="text-8xl" />,
      title: 'Venta Inteligente de Vehículos Siniestrados',
      desc: 'Red de licitadores especializados para maximizar el valor de tu auto siniestrado.',
    },
    {
      icon: <FaTools className="text-8xl" />,
      title: 'Gestión de Reparaciones Eficiente',
      desc: 'Coordinación de reparación en nuestra red de talleres tras el cobro de la indemnización.',
    },
  ].map((item, idx) => (
    <div key={idx} className="flex flex-col w-[250px] bg-gray-200 p-6 rounded-md items-center">
      <div className="min-h-[100px] flex items-center justify-center">
        {item.icon}
      </div>
      <div className="mt-6 flex flex-col justify-start">
        <p className="font-semibold text-xl">{item.title}</p>
        <p>{item.desc}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    );
  };
  