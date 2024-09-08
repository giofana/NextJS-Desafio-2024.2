'use client'
import { useState } from "react";
import CreateModal from "../createModal";
import EditModal from "../editModal";
import ViewModal from "../viewModal";
import DeleteModal from "../deleteModal";

type BotaoProps={
    titulo?: string;
    estilo?: string;
    onClick?: () => void;
};
export default function Botao({titulo, estilo}:BotaoProps){
    return(
        <div className="flex justify-center items-center">
            <button className={estilo}>{titulo}</button>          
        </div>
    )
};


export function CreateButton( {id} : {id:number | undefined}){
    const [openModal, setOpenModal] = useState(false);
    
    const openCreateModal = () =>{
        setOpenModal(true);
    };
    const closeModal = () => {
        setOpenModal(false);
    };
    return(
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openCreateModal}>Criar</button>      
            { openModal && <CreateModal isOpen={openModal} closeModal={closeModal} />}
        </div>
    );
};

export function EditButton( {id} : {id:number | undefined}){
    const [openModal, setOpenModal] = useState(false);
    
    const openCreateModal = () =>{
        setOpenModal(true);
    };
    const closeModal = () => {
        setOpenModal(false);
    };
    return(
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openCreateModal}>Editar</button>      
            { openModal && <EditModal isOpen={openModal} closeModal={closeModal} />}
        </div>
    );
};

export function ViewButton({id} : {id:number | undefined}){
    const [openModal, setOpenModal] = useState(false);
    
    const openViewModal = () =>{
        setOpenModal(true);
    };
    const closeModal = () => {
        setOpenModal(false);
    };
    return(
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openViewModal}>Visualizar</button>      
            { openModal && <ViewModal isOpen={openModal} closeModal={closeModal} />}
        </div>
    )
};

export function DeleteButton({id} : {id:number | undefined}){
    const [openModal, setOpenModal] = useState(false);
    
    const openDeleteModal = () =>{
        setOpenModal(true);
    };
    const closeModal = () => {
        setOpenModal(false);
    };
    return(
        <div className="flex justify-center items-center">
            <button className="bg-rosaMarrom text-rosinha px-4 py-2 rounded-full" onClick={openDeleteModal}>Deletar</button>      
            { openModal && <DeleteModal isOpen={openModal} closeModal={closeModal} />}
        </div>
    )
};
