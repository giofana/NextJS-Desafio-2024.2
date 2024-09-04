import { ViewBtn, Botao, EditBtn, DeleteBtn, CriarBtn } from "@/components/botao";
import Search from "@/components/search";

export default function Gerenciamento(){
    return(
        <div className="flex flex-col pb-16 px-16">
            <div className="flex flex-row justify-between">
                <Search estilo="text-txttab bg-rosaC w-full" />
                <CriarBtn id={1}/>
            </div>
            <div className="shadow-md sm:rounded-lg overflow-x-auto px-7 relative"> 
                <table className="w-full border-separate border-spacing-y-1 border-rosaC text-left">
                    <thead className=" bg-rosaMarrom">
                        <tr className="">
                            <th scope="col" className="py-3 px-6 border-b text-white">Nome do Produto</th>
                            <th scope="col" className="py-3 px-6 border-b text-white">Valor</th>
                            <th scope="col" className="py-3 px-6 border-b text-white">Ações</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr className="bg-rosaB border-b">  
                            <td className="py-2 px-6 border-b text-txttab">Anel de Ouro</td>
                            <td className="py-2 px-6 border-b text-txttab">R$ 1500,00</td>
                            <td className="py-2 px-6 border-b">
                                <div className="flex gap-3">
                                    <ViewBtn id={1}/>
                                    <EditBtn id={1}/>
                                    <DeleteBtn id={1}/>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                        
                </table>
            </div>
        </div>
    );
}
