'use client'
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import CardCategoria from "./cardCategoria";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Categoria(){
    return(
        
        <div className="flex flex-col py-16 gap-2 justify-center items-center">
            <h1 className="font-semibold text-xl  ">ESCOLHA POR CATEGORIA</h1>
            <span>ENCONTRE A SUA FAVORITA</span>
            
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }
                }
                autoplay={{ delay:2500, disableOnInteraction: false}}
                loop={true}
                className="w-full lg:w-4/5"
            >
                <div className="flex justify-center items-center w-full md:w-full">
                    <SwiperSlide>
                    <div className="flex flex-row w-full justify-center items-center pt-10">
                        <CardCategoria imagem="assets/Imgaem.svg" titulo="Pulseiras"/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-row w-full justify-center items-center pt-10 ">
                        <CardCategoria imagem="assets/Imgaem.svg" titulo="Brincos"/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-row w-full justify-center items-center pt-10 ">
                        <CardCategoria imagem="assets/Imgaem.svg" titulo="Pingentes"/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-row w-full justify-center items-center pt-10 ">
                        <CardCategoria imagem="assets/Imgaem.svg" titulo="Colares"/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex flex-row w-full justify-center items-center pt-10 ">
                        <CardCategoria imagem="assets/Imgaem.svg" titulo="Alianças"/>
                    </div>
                    </SwiperSlide>
                    
                </div>
         </Swiper>
    
            {/* <div className="flex flex-row justify-center gap-3 md:hidden">
                <button className="w-8 h-8 bg-rosaB flex justify-center items-center pt-10 rounded-full">
                        <CircleArrowLeft className="text-4xl text-white bg-rosaB rounded-full"/>
                    </button>
                <button className="w-8 h-8 bg-rosaB flex justify-center items-center rounded-full">
                        <CircleArrowRight className="text-white bg-rosaB rounded-full"/>
                    </button>
            </div> */}
            
        </div>
    );
}