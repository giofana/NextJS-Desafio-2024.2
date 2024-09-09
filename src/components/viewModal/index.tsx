'use client'

import { Product } from "@prisma/client";

type ModalProps={
    isOpen: boolean,
    closeModal: () => void;
    product: Product;
};

//Modal de Visualizar
export default function ViewModal({isOpen, closeModal, product}: ModalProps){
    if (!isOpen) {
        return null;
    }
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className={`w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md fixed`}>
            
            <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Criar Produto</h1>
            <div className="px-3 flex flex-col">
                <span className="text-white py-2">Nome:</span>
                <input name="title" defaultValue={product.title} type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Descrição:</span>
                <input name="description" defaultValue={product.description} type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

                <span className="text-white py-2">Valor:</span>
                <input name="price" type="text" defaultValue={product.price} className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>
            </div>
            
            <div className="pt-9 flex gap-5 justify-end items-end">
            <button type="button" onClick={closeModal} className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Fechar</button>
            </div>
        </div>
        </div>
    )
};