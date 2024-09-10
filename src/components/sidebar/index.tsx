'use client'
import { ArrowRight, House, Menu, Phone, Tag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ModalProps={
    isOpen: boolean,
    closeSidebar: () => void;
};

export default function Sidebar({isOpen, closeSidebar}: ModalProps){
    if (!isOpen) {
        return null;
    }
    const handleSubmit = async () => {
        window.location.reload();
        closeSidebar();
    };

    return(
    <div className={`fixed top-0 left-0 h-full gap-12 bg-rosaNav flex flex-col place-items-start pt-12 px-5 z-50 transition-transform transform -translate-x-full ${isOpen ? 'translate-x-0' : ''}`}>
        
        <div className="flex flex-row justify-between w-full items-center">
            <Image alt="logo da Essence" src={"assets/Logo.svg"} width={904} height={904} className="w-2/3"/>
            <ArrowRight onClick={handleSubmit} className="w-8 h-8"/>
        </div>
        
        <div className="flex flex-col gap-8">
            <Link href='/' className="flex flex-row gap-2 text-3xl px-3 py-1 text-acinzentado">
                <House className="w-8 h-8"/>
                Home
            </Link>
            <Link href='/posts' className="flex flex-row gap-2 text-3xl px-3 py-1 text-acinzentado">
                <Tag className="w-8 h-8"/>
                Produtos
            </Link>
            <Link href='/contato' className="flex flex-row gap-2 text-3xl px-3 py-1 text-acinzentado">
                <Phone className="w-8 h-8"/>
                Contato
            </Link>
            <Link href='/login' className="flex flex-row gap-2 text-3xl px-3 py-1 text-acinzentado">
                <UserRound className="w-8 h-8"/>
                Login
            </Link>
        </div>
        
    </div>
    );
};