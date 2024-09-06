'use client';
import BotaoM from "@/components/botao";
import { Criar } from "@/components/modais";
import Pagination from "@/components/paginacao";
import Search from "@/components/search";
import { useState } from "react";

export default function Gerenciamento() {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(!openModal);
        console.log(openModal);
    };

    return (
        <div className="flex flex-col pb-16 px-16">
            <Criar isOpen={openModal} />
            <div className="flex flex-row justify-between">  
                <Search estilo="text-txttab bg-rosaMarrom w-full" />
                <BotaoM estilo="bg-rosaMarrom text-rosinha px-3 py-1 rounded-full" titulo="Criar" />
            </div>
            <div className="shadow-md sm:rounded-lg overflow-x-auto px-7 relative">
                <table className="w-full border-separate border-spacing-y-1 border-rosaC text-left">
                    <thead className="bg-rosaMarrom">
                        <tr>
                            <th scope="col" className="py-3 px-6 border-b text-white">#</th>
                            <th scope="col" className="py-3 px-6 border-b text-white">Nome do Produto</th>
                            <th scope="col" className="py-3 px-6 border-b text-white">Valor</th>
                            <th scope="col" className="py-3 px-6 border-b text-white">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-rosaB border-b">
                            <td className="py-2 px-6 border-b text-txttab">1</td>
                            <td className="py-2 px-6 border-b text-txttab">Anel de Ouro</td>
                            <td className="py-2 px-6 border-b text-txttab">R$ 1500,00</td>
                            <td className="py-2 px-6 border-b">
                                <div className="flex gap-3">
                                    <button onClick={handleClick} className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Editar</button>
                                    <button onClick={handleClick} className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Visualizar</button> 
                                    <button onClick={handleClick} className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Deletar</button>                                    </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination totalPages={7}/>
        </div>
    );
}
