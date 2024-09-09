'use client'
import Categoria from "@/components/categoria/indext";
import HeroSection from "@/components/heroSection";
import Carrossel from "@/components/carrosselPost";
import Link from "next/link";
import { useEffect, useState } from "react";
import getApi from "@/api/get-secao";
import CardApi from "@/components/cardApi";

type ApiProps = {
  id: number,
  title: string,
  text: string
}

export default function Home() {

  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {

    const fetchData = async () =>{

      try{

        const {identities} = await getApi();
        setCards(identities);

      }catch{
          console.error('Deu erro');
      }

    };
    fetchData();
  });

  return (
    <div>
      <HeroSection/>

      <div className="flex bg-rosaNav p-8 justify-center items-center flex-col gap-2 lg:flex-row lg:px-20 lg:items-stretch">
        {(cards.map((card) => (
           <CardApi key={card.id} id={card.id} title={card.title} text={card.text} />
        )))}
      </div>

      <Categoria/>

      <div className="relative rounded-xl w-full mx-auto bg-white py-10">
        <Carrossel/>
        <div className="w w-full flex justify-center items-center">
          <Link href={"/posts"} className="border px-2 py-1 border-acinzentado">
           <span className="text-xs rounded-sm">VER TODOS</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
