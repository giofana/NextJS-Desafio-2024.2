'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Pagination from "@/components/paginacao";
import Post from "@/components/post";
import Search from "@/components/search";
import { fetchProducts } from "../../../../actions/home/actions";

export default function PostsPage() {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10); // Captura o valor de 'page' da URL, ou usa 1 como padrão

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
    }, [currentPage]); // Reexecuta o efeito sempre que currentPage mudar

    if (loading) {
        return <div>Carregando...</div>; // Adicione um indicador de carregamento
    }

    return (
        <div className="min-h-screen">
            <Search estilo="bg-rosaNav " />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-20 md:px-28 py-10 justify-center">
                {products.map((product, index) => (
                    <Post products={product} key={index} />
                ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
}
