type BotaoProps={
    titulo: string;
    estilo: string;
    onClick?: () => void;
};
export default function Botao({titulo, estilo}:BotaoProps){
    return(
        <div className="flex justify-center items-center">
            <button className={estilo}>{titulo}</button>          
        </div>
    )
};
export function BotaoM({titulo, estilo, onClick}:BotaoProps){
    return(
        <div className="flex justify-center items-center">
            <button className={estilo} onClick={onClick}>{titulo}</button>          
        </div>
    )
};