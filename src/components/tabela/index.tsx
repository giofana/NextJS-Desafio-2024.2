'use client'
import { useState } from "react";
import { Product } from "@prisma/client";
import { DeleteButton, EditButton, ViewButton } from "../botao";

export default function Tabela({products}: {products: Product}){
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <tr className="bg-rosaB border-b">
          <td className="py-2 px-6 border-b text-txttab">{products?.id}</td>
          <td className="py-2 px-6 border-b text-txttab">{products?.title}</td>
          <td className="py-2 px-6 border-b text-txttab">{products?.description}</td>
          <td className="py-2 px-6 border-b">
            <div className="flex gap-3">
              <EditButton id={products.id}/>
              <ViewButton id={products.id} />            
              <DeleteButton id={products.id} />

            </div>
          </td>
        </tr>
      );
    }