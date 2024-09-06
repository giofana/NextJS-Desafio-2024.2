import { House, Menu, Phone, Settings, Tag, UserRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    return (
        <nav className="w-full h-16 bg-rosaNav flex items-center justify-between pl-6 p-6" >
            <Link href='/'>
                <Image alt="Logo" src={'assets/Logo.svg'} width={904} height={904} className="w-24 h-auto md:w-32"></Image>
            </Link>
            <div className="md:hidden">
                <Link href='#'>
                    <Menu/>
                </Link>
            </div>
            <div className="gap-2 hidden md:flex">
                <Link href='/'>
                    <House/>
                </Link>
                <Link href='/posts'>
                    <Tag/>
                </Link>
                <Link href='/contato'>
                    <Phone/>
                </Link>
                <Link href='/login'>
                    <UserRound/>
                </Link>
                <Link href='/gerenciamento'>
                    <Settings/>
                </Link>
                
            </div>

        </nav>
    );
}
