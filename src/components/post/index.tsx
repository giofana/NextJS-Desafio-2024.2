'use Client'
import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";


export default function Post({products}: {products: Product}){
    return(
        <div className="flex flex-col gap-2 shadow-lg justify-center bg-slate-100/20 p-4 hover:scale-105 transition ease-in-out">
            <Image alt="Imagem" src={"assets/Imgaem.svg"} width={500} height={500} className="w-full"/> 
            <div className="">
                <h1>{products?.title}</h1>
                <h2 className="text-xs text-acinzentado">{products?.description}</h2>
                <span className="text-xs">R$ {products?.price}</span>
            </div>
        </div>
    );
}