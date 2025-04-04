import inicio from "../../assets/inicioa.png";
import iniciomobile from "../../assets/iniciob.png";

export const Inicio = () => {
    return (
        <div className="max-w-full mx-0 px-0 mt-[108px] mq980:mt-[90px]">
            <img className='block mq980:hidden w-full'src={inicio} /> 
            <img className='hidden mq980:block w-full'src={iniciomobile}/> 
        </div>
    );
};
