import CarrosselPost from "@/components/carrosselPost";
import Categoria from "@/components/categoria/indext";
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
