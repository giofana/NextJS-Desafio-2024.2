import Image from "next/image";
import Link from "next/link";

type CardCategoriaProps={
    imagem: string;
    titulo: string;
};
export default function CardCategoria({imagem, titulo}:CardCategoriaProps){
    return(
            <Link href={"/"} className="flex flex-col gap-3 justify-center">
                <Image className="w-28  border border-acinzentado" alt="Imagem da Categoria" src={imagem} width={904} height={904}/>
                <span className="flex justify-center">{titulo}</span> 
            </Link>
             
    )
}