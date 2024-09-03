type CardProps={
    titulo: string,
    mensagem: string,
};
export default function Card({titulo, mensagem}:CardProps){
    return(
        <div className="flex flex-col p-4 bg-rosaB gap-2 text-center md:w-1/5">
            <h1 className="text-xl">{titulo}</h1>
            <span>{mensagem}</span>
        </div>
    )
}