'use server';
import { CreateButton } from "@/components/botao";
import Pagination from "@/components/paginacao";
import Search from "@/components/search";
import { fetchProducts } from "../../../../actions/home/actions";
import Tabela from "@/components/tabela";

export default async function Gerenciamento() {

    const {products, totalPages} = await fetchProducts(1);

    return (
        <div className="flex flex-col pb-16 px-16">
          <div className="flex flex-row justify-between">
            <Search estilo="text-txttab bg-rosaMarrom w-full" />
            <CreateButton id={1} />
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
            <Pagination totalPages={totalPages}/>
        </div>
        </div>
    );
};
