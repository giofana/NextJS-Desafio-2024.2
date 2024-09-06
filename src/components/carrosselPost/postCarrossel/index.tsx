import Image from "next/image";

type PostCarrosselProps={
    imagem: string,
    titulo: string,
    valor: string,
};
export default function PostCarrossel({imagem, titulo, valor}:PostCarrosselProps){
    return(
            <div className="flex flex-col gap-4 bg-fundo p-4 rounded-md items-center">
                <Image alt="Imagem" src={imagem} width={500} height={500} className=""/> 
                <div className="flex flex-col justify-center gap-2 items-center">
                    <h1 className="text-xs text-center">{titulo}</h1>
                    <span className="text-xs px-2 py-1 bg-rosaMarrom rounded-sm">{valor}</span> 
                </div>
            </div>
        
    )
}