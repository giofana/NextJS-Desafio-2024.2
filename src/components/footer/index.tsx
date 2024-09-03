import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MessageCircle, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-rosaNav w-full h-3/5 text-left px-4 mt-20 gap-1 flex flex-col py-9 md:py-12 md:px-10 text-acinzentado md:flex-row md:justify-between md:items-center">
      {/* Redes Sociais */}
      <div className="order-3 md:order-1">
        <span className="font-bold pt-2 md:text-2xl">Redes Sociais:</span>
        <span className="flex gap-2">
          <Link href="#" target="_blank">
            <Facebook />
          </Link>
          <Link href="#" target="_blank">
            <Instagram />
          </Link>
          <Link href="https://youtu.be/9iIRRSggpBU?si=EFF1k3lUAJw0A7gk" target="_blank">
            <Youtube />
          </Link>
        </span>
      </div>

      {/* Logo */} 
      <div className="order-1 md:order-2">
        <Link href="/">
          <Image alt="Logo" src={"assets/Logo.svg"} width={904} height={904} className="w-32 h-auto md:w-44"></Image>
        </Link>
      </div>

      {/* Contato */}
        <div className="order-2 md:order-3">
            <span className="font-bold pt-2 md:text-2xl">Contato:</span>
            <Link href="#" className="flex items-center gap-2" target="_blank">
                <MessageCircle />
                <span className="inline-flex">(21) 4002-8922</span>
            </Link>
            <Link href="#" className="flex items-center gap-2" target="_blank">
                <Mail />
                <span className="inline-flex">contato@essence.com.br</span>
            </Link>
        </div>

    </div>
  );
}
