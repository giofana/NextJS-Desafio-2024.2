'use server';
import Pagination from "@/components/paginacao";
import Tabela from "@/components/tabela";
import { CreateButton } from "../botao";
import { Product } from "@prisma/client";
import SearchAdm from "@/components/searchAdm";
import Image from "next/image";
import Link from "next/link";

export default async function PageSearch({products, totalPages, count}: {products: Product[] , totalPages:number, count:number}) {
  
    return (
        <div className="flex flex-col pb-16 px-16">
            {count != 0?(
        <div>
          <div className="flex flex-row justify-between">
            <SearchAdm estilo="text-txttab bg-rosaMarrom w-full" />
            <CreateButton />
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
                {products.map((product, index) => (
                  <Tabela products={product} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        <div>
            <Pagination  totalPages={totalPages} currentPage={count}/>
        </div>
        </div> 
        ):(<div className="w-full min-h-screen flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                  <Image 
                    alt="Imagem ilustrativa de um diamante" 
                    src={"/assets/diamante.png"} 
                    width={904} height={904}
                    className="w-1/3"/>

                  <h1>Nenhuma opção encontrada.</h1>
                  
                  <Link className="bg-rosaNav rounded-full w-fit px-3 py-1 flex justify-center mt-3" href={"/gerenciamento"}>
                    Voltar para a página anterior
                  </Link>
              </div>

           </div>
        )}
        </div>
    );
};
