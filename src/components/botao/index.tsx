'use client'
import { useState, useEffect } from "react";
import CreateModal from "../createModal";
import EditModal from "../editModal";
import ViewModal from "../viewModal";
import DeleteModal from "../deleteModal";
import { ProductByID } from "../../../actions/home/actions";

type BotaoProps = {
    titulo?: string;
    estilo?: string;
    onClick?: () => void;
};

export default function Botao({ titulo, estilo }: BotaoProps) {
    return (
        <div className="flex justify-center items-center">
            <button className={estilo}>{titulo}</button>
        </div>
    );
}

export function CreateButton() {
    const [openModal, setOpenModal] = useState(false);

    const openCreateModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openCreateModal}>Criar</button>
            {openModal && <CreateModal isOpen={openModal} closeModal={closeModal} />}
        </div>
    );
}

export function EditButton({ id }: { id: number | undefined }) {
    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const data = await ProductByID(id);
                setProduct(data);
            }
        };
        if (openModal && id) {
            fetchProduct();
        }
    }, [openModal, id]);

    const openEditModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openEditModal}>Editar</button>
            {openModal && product && (
                <EditModal product={product} isOpen={openModal} closeModal={closeModal} />
            )}
        </div>
    );
}

export function ViewButton({ id }: { id: number | undefined }) {
    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const data = await ProductByID(id);
                setProduct(data);
            }
        };
        if (openModal && id) {
            fetchProduct();
        }
    }, [openModal, id]);

    const openViewModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openViewModal}>Visualizar</button>
            {openModal && product && (
                <ViewModal product={product} isOpen={openModal} closeModal={closeModal} />
            )}
        </div>
    );
}

export function DeleteButton({ id }: { id: number | undefined }) {
    const [openModal, setOpenModal] = useState(false);

    const openDeleteModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openDeleteModal}>Deletar</button>
            {/* Use "deleteId" em vez de "productId" */}
            {openModal && <DeleteModal isOpen={openModal} closeModal={closeModal} deleteId={id} />}
        </div>
    );
}

