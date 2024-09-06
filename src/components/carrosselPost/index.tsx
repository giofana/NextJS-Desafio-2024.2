'use client';
import { Splide, SplideSlide,} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import PostCarrossel from "./postCarrossel";
export default function Carrossel() {
    return (
        <Splide aria-label="My Favorite Images" options={{type:"loop", autoplay:true, interval:2000, perPage:4}}>
            <SplideSlide>
                    <div className="flex w-48 justify-center items-center max-w-screen-xl mx-auto pb-10">
                        <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex w-48 justify-center items-center max-w-screen-xl mx-auto  pb-10">
                        <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                    </div>
                </SplideSlide>
                <SplideSlide> 
                    <div className="flex w-48 justify-center items-center max-w-screen-xl mx-auto pb-10">
                        <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                    </div>
                </SplideSlide>
                   </Splide>

    );
}