'use client'
import { useState } from "react";
import { editProduct } from "../../../actions/home/actions";
import { Product } from "@prisma/client";

type ModalProps={
    isOpen: boolean,
    closeModal: () => void,
    product: Product,
};
export default function EditModal({ isOpen, closeModal, product }: ModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
    if (!isOpen) {
      return null;
    }
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Impede o comportamento padrão de envio do formulário
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
  
      // Supondo que você tenha o ID disponível, você pode obter o ID do estado ou de outra fonte
      const id = 1; // Substitua com o ID real
  
      await editProduct(id, formData); // Chama a função editProduct passando o ID e o FormData
  
      closeModal(); // Fecha o modal após o envio
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md">
          <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Editar Produto</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="px-3 flex flex-col">
              <span className="text-white py-2">Nome:</span>
              <input
                type="text"
                value={title}
                defaultValue={product?.title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
                required
              />
  
              <span className="text-white py-2">Descrição:</span>
              <input
                type="text"
                value={description}
                defaultValue={product?.description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
                required
              />
  
              <span className="text-white py-2">Valor:</span>
              <input
                type="text"
                value={price}
                defaultValue={product?.price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
                required
              />
            </div>
            <div className="pt-9 flex gap-5 justify-end items-end">
              <button type="submit" className="bg-rosaMarrom text-white px-3 py-1 rounded-full">
                Editar
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-rosaMarrom text-white px-3 py-1 rounded-full"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  //Modal de Editar
// export await function EditModal({ isOpen, closeModal}: ModalProps){
//     if (!isOpen) {
//         return null;
//     }
//     return(
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         <form action={editProduct} className={`w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md fixed ${isOpen ? 'flex' : 'hidden'}`}>
//         <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Editar Produto</h1>
            
//             <div className="px-3 flex flex-col">
//                 <span className="text-white py-2">Nome:</span>
//                 <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

//                 <span className="text-white py-2">Descrição:</span>
//                 <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>

//                 <span className="text-white py-2">Valor:</span>
//                 <input type="text" className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"/>
//             </div>

//             <div className="pt-9 flex gap-5 justify-end items-end">
//                 <Botao estilo="bg-rosaMarrom text-white px-3 py-1 rounded-full" titulo="Editar"/>
//                 <button className="bg-rosaMarrom text-white px-3 py-1 rounded-full" onClick={closeModal}>Cancelar</button>
//             </div>
//         </form>
//         </div>
//     )
// };