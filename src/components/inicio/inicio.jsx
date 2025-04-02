import inicio from "../../assets/inicioa.png";

export const Inicio = () => {
  return (
    <div className="pt-[103px] mq980:pt-[92px] w-full flex flex-col items-center justify-center text-white relative">
      {/* Imagen de fondo centrada horizontalmente */}
      <div 
        className="w-full h-[400px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${inicio})` }}
      >
        {/* Overlay solo sobre la imagen */}
        <div className="w-full h-full flex flex-col items-center justify-center py-12 px-24 mq980:p-8">
          <h1 className="font-bold text-4xl mb-4 text-center mq980:text-3xl">
            TU ALIADO EN LA GESTIÓN DE RECLAMOS DE SEGUROS
          </h1>
          <h2 className="font-semibold text-2xl mb-8 text-center mq980:text-xl">
            Te acompañamos en el proceso de reclamación a compañías de seguros, gestionamos tu reclamo de manera eficiente, sin costo para vos.
          </h2>
        </div>
      </div>
    </div>
  );
};
