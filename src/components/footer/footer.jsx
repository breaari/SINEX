import logo from "../../assets/logo.PNG"

export const Footer = () => {
    return (
        <div className="bg-verdeagua flex flex-row items-center px-12 justify-between mq980:flex-col h-auto py-8 mq980:px-4 mq980:justify-center">
            <img src={logo} className="h-[70px]"/>
            <a className="font-semibold text-white text-xl mq980:text-center mq980:mt-4">Sinex - todos los derechos reservados.</a>
        </div>
    )
}