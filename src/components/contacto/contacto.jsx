import { IoMailUnreadOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import contacto from "../../assets/contacto.PNG";
import email from "../../assets/email.PNG";
import whatsapp from "../../assets/whatsapp.png";

export const Contacto = () => {
    return (
        <div className="bg-white py-8 px-16 flex items-center justify-center mq980:px-4">
            {/* Fondo blanco detrás del fondo naranja */}
            
            {/* Contenedor del fondo naranja */}
            <div className=" flex flex-col justify-center items-center w-full h-full bg-naranja py-6 rounded-xl">
                <div className="flex flex-row justify-evenly w-full text-white mq980:flex-col">
                    {/* Contenedor de WhatsApp */}
                    <div className="flex flex-row items-center space-x-4 mq980:space-x-2 mq980:justify-center">
                        <img src={whatsapp} className="w-[150px] mq980:w-[120px]" alt="WhatsApp" />
                        <div className="flex flex-col">
                            <span className="text-2xl mq980:text-xl">POR WHATSAPP</span>
                            <span className="text-2xl font-semibold mq980:text-xl">11 3600 2250</span>
                        </div>
                    </div>

                    {/* Contenedor de Email */}
                    <div className="flex flex-row items-center space-x-4 mq980:space-x-2 mq980:justify-center">
                        <img src={email} className="w-[150px] mq980:w-[120px]" alt="Email" />
                        <div className="flex flex-col">
                            <span className="text-2xl mq980:text-xl">POR EMAIL</span>
                            <span className="text-2xl font-semibold mq980:text-sm">reclamos@synex.com.ar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
