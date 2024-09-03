import { Facebook, Instagram, Mail, MapPinned, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage(){
    return(
        <div className="flex pl-10 md:pl-0 flex-col md:flex-row md:justify-between md:items-center gap-10 py-20 md:pr-10">
            <Image className="hidden md:flex w-80" alt="Imagem" src={"assets/Imgaem.svg"} width={904} height={904} />
            <div className="flex flex-col gap-3">
                <span className="font-bold pt-2 md:text-2xl">Nossas Redes Sociais</span>
                <div className="flex gap-3 flex-col">
                <Link className="inline-flex gap-2 " href="#" target="_blank">
                    <Facebook />
                    <span >facebook.com/Essence</span>
                </Link>
                <Link className="inline-flex gap-2" href="#" target="_blank">
                    <Instagram />
                    <span >@Essence</span>
                </Link>
                <Link className="inline-flex gap-2" href="https://youtu.be/9iIRRSggpBU?si=EFF1k3lUAJw0A7gk" target="_blank">
                    <Youtube />
                    <span>Essence</span>
                </Link>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <span className="font-bold pt-2 md:text-2xl">Entre Contato</span>
                <div className="flex gap-3 flex-col">
                    <Link className="inline-flex gap-2" href="#" target="_blank">
                        <MessageCircle />
                        <span >(21) 4002-8922</span>
                    </Link>
                    <Link className="inline-flex gap-2" href="#" target="_blank">
                        <Mail />
                        <span >contato@essence.com.br</span>
                    </Link>
                    <Link className="inline-flex gap-2" href="https://independenciashopping.com.br/" target="_blank">
                        <MapPinned />
                        <span >Independência Shopping</span>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}