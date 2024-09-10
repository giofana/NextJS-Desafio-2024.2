import { CreateButton } from "@/components/botao";
import Pagination from "@/components/paginacao";
import SearchAdm from "@/components/searchAdm";
import Tabela from "@/components/tabela";

interface GerenciamentoPageProps {
    products: any[];
    totalPages: number;
    currentPage: number;
}

export default function GerenciamentoPage({ products, totalPages, currentPage }: GerenciamentoPageProps) {
    return (
        <div className="flex flex-col pb-16 px-16 bg-fundo">
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
                <Pagination totalPages={totalPages} currentPage={currentPage} />
            </div>
        </div>
    );
}
