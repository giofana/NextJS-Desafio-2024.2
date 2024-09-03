import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import CardCategoria from "./cardCategoria";

export default function Categoria(){
    return(
        <div className="flex flex-col py-16 gap-2 justify-center items-center">
            <h1 className="font-semibold text-xl  ">ESCOLHA POR CATEGORIA</h1>
            <span>ENCONTRE A SUA FAVORITA</span>
            
            <div className="flex flex-row gap-10 pt-10 pb-7">
                <CardCategoria imagem="assets/Imgaem.svg" titulo="Anéis"/>
                <CardCategoria imagem="assets/Imgaem.svg" titulo="Pulseiras"/>
                <CardCategoria imagem="assets/Imgaem.svg" titulo="Brincos"/>
                <CardCategoria imagem="assets/Imgaem.svg" titulo="Pingentes"/>
                <CardCategoria imagem="assets/Imgaem.svg" titulo="Colares"/>
                <CardCategoria imagem="assets/Imgaem.svg" titulo="Alianças"/>
            </div>
            <div className="flex flex-row justify-center gap-3 md:hidden">
                <button className="w-8 h-8 bg-rosaB flex justify-center items-center rounded-full">
                        <CircleArrowLeft className="text-4xl text-white bg-rosaB rounded-full"/>
                    </button>
                <button className="w-8 h-8 bg-rosaB flex justify-center items-center rounded-full">
                        <CircleArrowRight className="text-white bg-rosaB rounded-full"/>
                    </button>
            </div>
            
        </div>
    );
}