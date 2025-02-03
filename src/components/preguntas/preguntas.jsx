import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Preguntas = () => {
  // Estado para manejar las respuestas abiertas o cerradas
  const [isAnswerOpen1, setIsAnswerOpen1] = useState(false);
  const [isAnswerOpen2, setIsAnswerOpen2] = useState(false);

  // Funciones para alternar el estado de las respuestas
  const toggleAnswer1 = () => setIsAnswerOpen1(!isAnswerOpen1);
  const toggleAnswer2 = () => setIsAnswerOpen2(!isAnswerOpen2);

  return (
    <div className="p-16 mq980:p-8">
       <h1 className="text-4xl text-gray-700 font-bold text-center mb-16 mq980:mb-8">PREGUNTAS FRECUENTES</h1> 
      {/* Primera pregunta */}
      <div className="mb-4">
        <button
          onClick={toggleAnswer1}
          className="text-left w-full text-2xl mq980:text-xl font-semibold text-gray-700 bg-gray-100 py-3 px-8 rounded-xl justify-between flex flex-row items-center"
        >
          ¿Presentan casos contra todas las compañías?
          <IoIosArrowDown className="mq980:hidden" />
        </button>

        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            isAnswerOpen1 ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {isAnswerOpen1 && (
            <div className="mt-2 text-gray-700 px-8 py-3 text-xl">
              <p>
                Sí. Desde Sinex sabemos que el cliente no elige quien lo
                choca, y aunque lamentablemente el sector no ignora compañías malas
                prácticas comerciales, entendemos que es en esos casos donde más la
                gente precisa un asesoramiento que lo acompañe durante todo el proceso
                del reclamo.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Segunda pregunta */}
      <div>
        <button
          onClick={toggleAnswer2}
          className="text-left w-full text-2xl mq980:text-xl font-semibold text-gray-700 bg-gray-100 py-3 px-8 rounded-xl justify-between flex flex-row items-center"
        >
          ¿Siguen el caso vía judicial?
          <IoIosArrowDown className="mq980:hidden"/>
        </button>

        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            isAnswerOpen2 ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {isAnswerOpen2 && (
            <div className="mt-2 text-gray-700 px-8 py-3 text-xl">
              <p>
                Sí, pero solo una vez que se haya agotado la vía administrativa. El
                compromiso de Tuveunchoque está siempre enfocado en lograr que el
                cliente cobre de la manera más rápida y sin vueltas posible, pero nunca
                a costas de un buen arreglo. Si las circunstancias llaman a iniciar vía
                legal, disponemos de las herramientas para iniciar los procesos legales
                a lo largo del país.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
