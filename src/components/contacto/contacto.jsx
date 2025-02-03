import { IoMailUnreadOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import contacto from "../../assets/contacto.PNG"
import email from "../../assets/email.PNG"
import whatsapp from "../../assets/whatsapp.png"

export const Contacto = () => {
    return (
        <div className="h-[500px] p-8 flex items-center justify-center">
            <img src={contacto} className="absolute z-1"></img>
            <div className="absolute rounded-xl flex flex-row justify-evenly py-16 z-30">
                
                <div className="flex flex-row items-center text-white">
                    <img src={whatsapp} className="w-[150px]" />
                    <div className="flex flex-col">
                        <a >POR WHATSAPP</a>
                        <a className="text-2xl font-semibold">11 3600 2250</a>
                    </div>
                </div>
                <div className="flex flex-row items-center text-white">
                    <img src={email} className="w-[150px]" />
                    <div className="flex flex-col">
                        <a>POR EMAIL</a>
                        <a className="text-2xl font-semibold">reclamos@synex.com.ar</a>
                    </div>
                </div>
            </div>

        </div>
    )
}