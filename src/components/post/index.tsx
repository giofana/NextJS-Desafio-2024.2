import Image from "next/image";

type PostProps={
    imagem: string,
    titulo: string,
    descricao?: string,
    valor: string,
};
export default function Post({imagem, titulo, descricao, valor}:PostProps){
    return(
        <div className="flex flex-col gap-2 ">
            <Image alt="Imagem" src={imagem} width={500} height={500} className="w-full"/> 
            <div className="">
                <h1>{titulo}</h1>
                <h2 className="text-xs text-acinzentado">{descricao}</h2>
                <span className="text-xs">{valor}</span>
            </div>
        </div>
    );
}