type BotaoProps={
    titulo: string;
    estilo: string;
};
export default function Botao({titulo, estilo}:BotaoProps){
    return(
        <div>
            <button className={estilo}>{titulo}</button>          
        </div>
    )
}