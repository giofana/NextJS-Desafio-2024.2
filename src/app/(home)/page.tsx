import CarrosselPost from "@/components/carrosselPost";
import Categoria from "@/components/categoria/indext";
import { Criar, Deletar, Editar, Visualizar } from "@/components/modais";
import HeroSection from "@/components/heroSection";
import MVV from "@/components/mvv";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MVV/>
      <Categoria/>
      <CarrosselPost/>
    </div>
  );
}
