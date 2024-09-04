type BotaoProps={
    titulo: string;
    estilo: string;
};
export default function Botao({titulo, estilo}:BotaoProps){
    return(
        <div className="flex justify-center items-center">
            <button className={estilo}>{titulo}</button>          
        </div>
    )
};