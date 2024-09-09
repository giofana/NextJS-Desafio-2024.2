'use client';

import { useState } from "react";
import { editProduct } from "../../../actions/home/actions";
import { Product } from "@prisma/client";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  product: Product;
};

export default function EditModal({ isOpen, closeModal, product }: ModalProps) {
  const [title, setTitle] = useState(product?.title || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price?.toString() || '');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

    await editProduct(product.id, formData);

    window.location.reload();

    closeModal(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-2/6 p-5 h-fit flex flex-col bg-rosaB rounded-md">
        <h1 className="text-rosaMarrom pb-3 font-bold text-xl">Editar Produto</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="px-3 flex flex-col">
            <span className="text-white py-2">Nome:</span>
            <input
              name="title"
              type="text"
              value={title}
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
              required
            />

            <span className="text-white py-2">Descrição:</span>
            <input
              name="description"
              type="text"
              value={description}
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
              className="bg-rosaMarrom py-1 rounded-full w-auto text-acinzetado px-1 caret-marrom focus:outline-none text-white"
              required
            />

            <span className="text-white py-2">Valor:</span>
            <input
              name="price"
              type="text"
              value={price}
              autoComplete="off"
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
}
