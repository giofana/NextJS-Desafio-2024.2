import clsx from "clsx"
type BotaoProps={
    titulo: string;
    corFundo: string;
    borda: string;
    corTexto: string;
    redondo: string;
};
export default function Botao({titulo, corFundo, borda, corTexto, redondo}:BotaoProps){
    const caracteristicas=clsx(
        "px-3 py-2 border-1 ",
            `bg-${corFundo}`,
            `border-${borda}`,
            `text-${corTexto}`,
            `rounded-${redondo}`,
    );

    return(
        <div>
            <button className={caracteristicas}>{titulo}</button>          
        </div>
    )
}