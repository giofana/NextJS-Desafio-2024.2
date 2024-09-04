
type PaginacaoProps = {
    paginaAtual: number;
    mudarPagina: (pagina: number) =>void;
    totalPaginas: number;
};
export default function Paginacao({paginaAtual, mudarPagina, totalPaginas}: PaginacaoProps){
    return(
        <div className="container mx-auto p-4">
            <div className="flex justify-center">
                {Array.from({ length: totalPaginas}, (_, index) =>(
                    <button
                        key={index}
                        onClick={() => mudarPagina(index + 1)}
                        className={`px-6 py-2 mx-1 rounded-full border-rosaB ${paginaAtual === index + 1 ? 'bg-rosaB text-fundo' : 'bg-transparent text-rosaB'}`}
                    
                    ></button>
                ))}

            </div>

        </div>
    );
}