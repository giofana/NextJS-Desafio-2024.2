'use client'
import { useState } from "react";
import Botao, { BotaoM } from "../botao";

type ModalProps={
    nome ?: string,
    descricao ? : string,
    valor ? : string,
    isOpen: boolean,
};
export function Criar({isOpen}: ModalProps){
    const [openModal, setOpenModal] = useState(true);
    const closeModal = () => {
        setOpenModal(false);
    };
    if (!openModal){
        return null;
    }

    return(
        <div className={`w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md z-1000 fixed bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
            
            <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Criar Produto</h1>
            <div className="px-3 flex flex-col">
                <span className="text-white py-2">Nome:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Descrição:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Valor:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>
            </div>
            
            <div className="pt-9 flex gap-5 justify-end items-end">
            <button className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Criar</button>
            <button onClick={closeModal} className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Cancelar</button>
            </div>
        </div>
    )
};

// Modal de Visualizar

export function Visualizar(){
    return(
        <div className="w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md z-1000 fixed bg-opacity-50">
            <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Visualizar Produto</h1>
            
            <div className="px-3 flex flex-col">
                <span className="text-white py-2">Nome:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Descrição:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Valor:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>
            </div>

            <div className="pt-9 flex gap-5 justify-end items-end">
                <Botao estilo="bg-rosaMarrom text-white px-3 py-1 rounded-full" titulo="Fechar"/>
            </div>
        </div>
    )
};

//Modal de Editar
export function Editar(){
    return(
        <div className="w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md z-1000 fixed bg-opacity-50">
            <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Editar Produto</h1>
            
            <div className="px-3 flex flex-col">
                <span className="text-white py-2">Nome:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Descrição:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Valor:</span>
                <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>
            </div>

            <div className="pt-9 flex gap-5 justify-end items-end">
                <Botao estilo="bg-rosaMarrom text-white px-3 py-1 rounded-full" titulo="Editar"/>
                <Botao estilo="bg-rosaMarrom text-white px-3 py-1 rounded-full" titulo="Cancelar"/>
            </div>
        </div>
    )
};

//Modal de Deletar
export function Deletar({  }){
    return(
        <div className="w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md z-1000 fixed bg-opacity-50">
            <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Deletar</h1>
            
            <div className="flex flex-col justify-center items-center px-3">
                <span className="text-rosaMarrom text-center py-2 font-bold">Tem certeza que deseja deletar esse item?</span>
                <span className="text-rosaMarrom text-center py-2 font-bold">Esta ação não poderá ser desfeita.</span>
            </div>
            
            <div className="pt-9 flex gap-5 justify-end items-end">
                <Botao estilo="bg-rosaMarrom text-white px-3 py-1 rounded-full" titulo="Deletar"/>
                <BotaoM estilo="bg-rosaMarrom text-white px-3 py-1 rounded-full" titulo="Cancelar "/>
            </div>
        </div>
    )
};