import logo from "../../assets/logoverde.PNG";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white py-4 px-24 mq980:px-8 flex flex-row justify-between mq980:justify-start mq980:items-start shadow-xl items-center">
        <img src={logo} className="h-[70px] mq980:h-[60px] " alt="Logo" />
        <div className="mq980:hidden flex flex-row space-x-20 font-semibold items-center">
            <button className="text-verdeagua text-lg">Inicio</button>
            <button className="text-verdeagua text-lg">Servicios</button>
            <button className="bg-naranja h-[50px] text-white px-6 rounded-xl text-md">CONSULTAR RECLAMO</button>
        </div>
    </div>

  );
};
