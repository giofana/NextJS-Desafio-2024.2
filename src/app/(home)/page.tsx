import Categoria from "@/components/categoria/indext";
import HeroSection from "@/components/heroSection";
import MVV from "@/components/mvv";
import Carrossel from "@/components/carrosselPost";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MVV/>
      <Categoria/>
      <div className="relative rounded-xl w-full mx-auto bg-white py-10">
      <Carrossel/>
      </div>
    </div>
  );
}
