import Image from "next/image";
import Botao from "../botao";

export default function HeroSection(){
    return(
        <div className="bg-rosinha flex flex-col items-center justify-between py-16 px-5 gap-6 md:flex-row md:px-12 md:py-14 lg:px-20">
            <div className="flex gap-6 flex-col justify-start md:w-2/5 ">
                <h1 className="text-3xl font-libre md:text-4xl lg:text-5xl lg:w-3/4">Seu toque de Elegância</h1>
                <span className="text-sm md:text-md lg:text-lg xl:text-xl">Desde 1960, criando joias de alto padrão para mulheres importantes, destacando elegância e exclusividade em cada peça.</span>
                <div className="flex gap-3 flex-row">
                    <Botao borda="rosaC" corFundo="rosaC" corTexto="rosinha" redondo="md" titulo="Saiba Mais" />
                    <Botao borda="rosaC" corFundo="rosaC" corTexto="rosaC" redondo="md" titulo="Explorar" />
                </div>
            </div>
            
            <Image alt="" src={'assets/Imgaem.svg'} height={500} width={500} className="md:w-2/5 lg:w-1/4"/>
        </div>
    )
}