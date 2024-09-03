import Post from "@/components/post";
import Search from "@/components/search";

export default function PostsPage(){
    return(
        <>
        <Search estilo="bg-rosaNav"/>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-20 md:px-28 py-10 justify-center">
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
            <Post descricao="Em Ouro 18k com diamante" imagem="assets/Imgaem.svg" titulo="Anel Solitário Rosé" valor="R$ 4.390,00"/>
           
        </div>
        </>
    )
}