'use client'
import { createProduct } from "../../../actions/home/actions";

type ModalProps={
    isOpen: boolean,
    closeModal: () => void;
};
export default function CreateModal({isOpen, closeModal}: ModalProps){
    if (!isOpen) {
        return null;
    }
    const handleSubmit = async () => {
        window.location.reload();
        closeModal();
    };
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <form onSubmit={handleSubmit} action={createProduct} method="post" className={`w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md fixed`}>
            
            <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Criar Produto</h1>
            <div className="px-3 flex flex-col">
                <span className="text-white py-2">Nome:</span>
                <input 
                    autoComplete="off" 
                    name="title" 
                    type="text" 
                    className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
                />

                <span className="text-white py-2">Descrição:</span>
                <input 
                    autoComplete="off" 
                    name="description" 
                    type="text" 
                    className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
                />

                <span className="text-white py-2">Valor:</span>
                <input 
                    autoComplete="off" 
                    name="price" 
                    type="text" 
                    className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
                />
            </div>
            
            <div className="pt-9 flex gap-5 justify-end items-end">
            <button type="submit" className="bg-rosaMarrom text-white px-3 py-1 rounded-full" >Criar</button>
            <button type="button" onClick={closeModal} className="bg-rosaMarrom text-white px-3 py-1 rounded-full">Cancelar</button>
            </div>
        </form>
        </div>
    )
};