import inicio from "../../assets/inicio.png"

export const Inicio = () =>{ 
    return (
        <div className="mt-[102px] mq980:mt-[92px] px-12 mq980:py-4 flex flex-row items-center bg-yellow-100 justify-center mq980:flex-col">
            <div className="w-full hidden mq980:block">
                <img src={inicio}></img>
            </div>
            <div className="w-[50%] mq980:w-full mq980:py-8">
                <h1 className="font-bold text-gray-700 text-4xl mb-4">TU ALIADO EN LA GESTIÓN DE RECLAMOS DE SEGUROS</h1>
                <h2 className="font-semibold text-gray-700 text-2xl mb-8">Te acompañamos en el proceso de reclamación a compañías de seguros, gestionamos tu reclamo de manera eficiente, sin costo para vos.</h2>
                <button className="bg-verdeagua h-[50px] text-white px-6 rounded-xl text-md font-semibold">CONSULTAR RECLAMO</button>
            </div>
            <div className="w-[40%] mq980:hidden">
                <img src={inicio}></img>
            </div>
        </div>
    )
}