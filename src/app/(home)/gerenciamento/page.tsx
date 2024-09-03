import Botao from "@/components/botao";
import Search from "@/components/search";

export default function Gerenciamento(){
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center px-3">
            <Search estilo="bg-rosaC w-5/6"/>
            <Botao estilo="bg-rosaC rounded-full px-5 py-3 my-10" titulo="Criar"/>
            </div>
            <div className="">
                

            </div>

            
        </div>
    );
}