'use client';
import { deleteProduct } from "../../../actions/home/actions";
import { useRouter } from 'next/navigation'; 

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    deleteId: number | undefined;
};

export default function DeleteModal({ isOpen, closeModal, deleteId }: ModalProps) {
    const router = useRouter();

    const handleDelete = async () => {
        
        if (deleteId) {
            await deleteProduct(deleteId);
            window.location.reload();
            closeModal(); 
            router.push('/gerenciamento');
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md">
                <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Deletar</h1>
                <div className="flex flex-col justify-center items-center px-3">
                    <span className="text-rosaMarrom text-center py-2 font-bold">Tem certeza que deseja deletar esse item?</span>
                    <span className="text-rosaMarrom text-center py-2 font-bold">Esta ação não poderá ser desfeita.</span>
                </div>
                <div className="pt-9 flex gap-5 justify-end items-end">
                    <button className="bg-rosaMarrom text-white px-3 py-1 rounded-full" onClick={handleDelete}>Deletar</button>
                    <button className="bg-rosaMarrom text-white px-3 py-1 rounded-full" onClick={closeModal}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
