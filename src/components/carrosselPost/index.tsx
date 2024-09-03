'use client'
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import PostCarrossel from "./postCarrossel";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';


import {Autoplay} from "swiper/modules"
import {Navigation} from "swiper/modules"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CarrosselPost() {
    return (
        <div className="flex flex-col justify-center items-center py-16 bg-white w-full">
            {/* Parte de cima */}
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }
                }
                // autoplay={{ delay:2500, disableOnInteraction: false}}
                loop={true}
                className="w-full lg:w-4/5"
            >

                <div className="flex justify-center items-center md:w-full">
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className="flex w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >

                        <div className=" gap-auto w-full justify-center items-center max-w-screen-xl mx-auto">
                            <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00" />
                        </div>
                    </SwiperSlide>
                    
                    <div className="flex justify-center pt-10">
                        <Link href={"#"} className="border px-2 py-1 border-acinzentado">
                            <span className="text-xs rounded-sm">VER TODOS</span>
                        </Link>
                    </div>
                </div>



            </Swiper>


            {/* <div className="flex flex-row gap-4 justify-center items-center px-4">
                <button className="w-8 h-8 bg-rosaB flex justify-center items-center rounded-full">
                    <CircleArrowLeft className="text-4xl text-white bg-rosaB rounded-full"/>
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-auto place-items-center w-full max-w-screen-xl mx-auto">
                    <PostCarrossel imagem="assets/Imgaem.svg" titulo="Anel em Ouro Amarelo 18k com Diamantes" valor="R$ 4.390,00"/>
                    </div>
                
                <button className="w-8 h-8 bg-rosaB flex justify-center items-center rounded-full">
                    <CircleArrowRight className="text-white bg-rosaB rounded-full"/>
                </button>
            </div> */}


        </div>
    );
}