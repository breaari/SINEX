import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Preguntas = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const toggleAnswer = (index) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  const preguntas = [
    {
      pregunta: "¿Presentan casos contra todas las compañías?",
      respuesta:
        "Sí. Desde Sinex sabemos que el cliente no elige quien lo choca, y aunque lamentablemente el sector no ignora compañías con malas prácticas comerciales, entendemos que es en esos casos donde más la gente precisa un asesoramiento que lo acompañe durante todo el proceso del reclamo.",
      // color: "bg-[rgba(49,80,175,0.2)]",
    },
    {
      pregunta: "¿Siguen el caso vía judicial?",
      respuesta:
        "Sí, pero solo una vez que se haya agotado la vía administrativa. El compromiso de Tuveunchoque está siempre enfocado en lograr que el cliente cobre de la manera más rápida y sin vueltas posible, pero nunca a costas de un buen arreglo. Si las circunstancias llaman a iniciar vía legal, disponemos de las herramientas para iniciar los procesos legales a lo largo del país.",
      // color: "bg-gray-100",
    },
    {
      pregunta: "¿Puedo reparar mi vehículo si aún no cobré el reclamo ante la compañía?",
      respuesta:
        "Sí, puede reparar el vehículo, pero siempre debe sacarle fotos y videos a la unidad con el fin de acreditar los daños materiales en la compañía aseguradora.",
      // color: "bg-gray-200",
    },
    {
      pregunta: "¿Puedo reclamar si solamente tengo la patente de la persona que me chocó?",
      respuesta:
        "Sí, puede reclamar. Es por ello la importancia de tomar fotos al momento del siniestro en donde se visualicen los vehículos involucrados, toda vez que, al momento de iniciar un reclamo en una compañía aseguradora, la patente es la información más importante.",
      // color: "bg-gray-200",
    },
    {
      pregunta: "¿Qué pasa si me choca una persona que no tiene seguro?",
      respuesta:
        "En caso de que la persona que te chocó no tenga seguro, vas a tener que iniciar un proceso judicial contra el titular registral de ese vehículo. En caso de tener escasos datos, solicitar un informe de dominio y conocer quién es el titular registral.",
      // color: "bg-[rgba(49,80,175,0.2)]",
    },
    {
      pregunta: "¿Qué documentación necesito para ingresar el reclamo?",
      respuesta: (
        <ul className="list-disc list-inside space-y-2">
          <li>Denuncia de siniestro en su compañía de seguros.</li>
          <li>Certificado de cobertura.</li>
          <li>Cédula verde.</li>
          <li>DNI del titular del vehículo y conductor al momento del siniestro, si lo hubiera.</li>
          <li>Licencia de conducir.</li>
          <li>Fotos del vehículo en donde se vean los daños y patente.</li>
          <li>Presupuesto.</li>
          <li>En caso de haber lesiones, certificados médicos.</li>
        </ul>
      ),
      // color: "bg-gray-100",
    },
    {
      pregunta: "¿Cómo proceder ante lesiones? ¿Es obligatorio que me den la historia clínica?",
      respuesta:
        "En caso de tener lesiones a causa del siniestro, concurrir de inmediato a cualquier sala de atención médica a fin de obtener el certificado médico para acreditar las lesiones ante la compañía de seguros de la persona que generó el siniestro.\nEs obligatorio que el centro médico aporte el historial clínico al paciente.",
      // color: "bg-gray-100",
    },
    {
      pregunta: "¿Qué documentación solicitarle a la persona que me chocó?",
      respuesta:
        "Debe solicitarle los datos de la póliza que tiene contratada en su seguro, DNI, licencia de conducir, tomar fotos al dominio del vehículo y solicitarle el contacto a fin de no perder la comunicación.",
      // color: "bg-gray-200",
    },
  ];

  return (
    <div className="p-16 mq980:p-8">
      <h1 className="text-5xl text-gray-700 font-bold text-center mb-16 mq980:mb-8 mq980:text-4xl">
        Preguntas frecuentes
      </h1>
      <div className="flex flex-col gap-6 mq980:grid-cols-1">
        {preguntas.map((item, index) => (
          <div key={index} className={`${item.color} p-4 mq980:p-3 rounded-xl shadow-md border border-violaceo`}>
            <button
              onClick={() => toggleAnswer(index)}
              className="text-left w-full text-2xl mq980:text-xl font-semibold text-gray-700 py-3 px-4 rounded-xl flex justify-between items-center "
            >
              {item.pregunta}
              <IoIosArrowDown
                className={`${
                  openAnswer === index ? "rotate-180" : ""
                } transition-transform text-violaceo text-3xl`}
              />
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openAnswer === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {openAnswer === index && (
                <div className="mt-2 text-gray-700 px-4 py-2 text-lg">{item.respuesta}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
