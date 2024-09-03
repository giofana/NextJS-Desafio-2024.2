import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MessageCircle, Youtube } from "lucide-react"
export default function Footer(){
    return(
        <div className="bg-rosaNav w-full h-3/5 text-left pl-3 mt-24 gap-1 flex flex-col  py-8 text-acinzentado">
            <Link href='#'>
                <Image alt="Logo" src={'assets/Logo.svg'} width={904} height={904} className="w-32 h-auto md:w-32"></Image>
            </Link>

            
            <span className="font-bold pt-2 ">Contato:</span>

            <Link href='#' className="flex gap-2" target="_blank">
                <MessageCircle/>
                <span>(21) 4002-8922</span>
            </Link>
            <Link href='#' className="flex gap-2" target="_blank">
                <Mail/>
                <span>atendimento@essence.com.br</span>
            </Link>

            <span className="font-bold pt-2">Redes Sociais:</span>
            <span className="flex gap-2">
                <Link href='#' target="_blank">
                    <Facebook/>
                </Link>
                <Link href='#' target="_blank">
                    <Instagram/>
                </Link>
                <Link href='https://youtu.be/9iIRRSggpBU?si=EFF1k3lUAJw0A7gk' target="_blank">
                    <Youtube/>
                </Link>
            </span> 
        </div>
    )
}