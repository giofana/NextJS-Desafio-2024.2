'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Pagination from "@/components/paginacao";
import Post from "@/components/post";
import SearchPosts from '../searchPosts';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProducts } from '../../../actions/home/actions';
import { Loader } from 'lucide-react';

export default function PageSearchPosts({count}: {count: number}) {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { products, totalPages } = await fetchProducts(currentPage);
                setProducts(products);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    if (loading) {
        return (
            <div className='flex w-full min-h-screen flex-col justify-center items-center'>
                <Loader className="nimate-spin "/>
                <div className='flex justify-center items-center'>Carregando...</div>;
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            {count != 0?(
            <div>
                <SearchPosts estilo="bg-rosaNav" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-20 md:px-28 py-10 justify-center">
                    {products.map((product, index) => (
                        <Post products={product} key={index} />
                    ))}
                </div>
                <Pagination totalPages={totalPages} currentPage={currentPage} />
            </div>
                ):(<div className="w-full min-h-screen flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <Image 
                        alt="Imagem ilustrativa de um diamante" 
                        src={"/assets/diamante.png"} 
                        width={904} height={904}
                        className="w-1/3"/>

                        <h1>Nenhuma opção encontrada.</h1>
                        
                        <Link className="bg-rosaNav rounded-full w-fit px-3 py-1 flex justify-center mt-3" href={"/posts"}>
                        Voltar para a página anterior
                        </Link>
                        
                    </div> 
                // </div> 
            )}
        </div>
    );
};
