'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Pagination from "@/components/paginacao";
import Post from "@/components/post";
import { fetchProducts } from '../../../actions/home/actions';
import SearchPosts from '../searchPosts';

export default function PostsPage() {
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
        return <div className='w-full flex min-h-screen justify-center items-center'>Carregando...</div>;
    }

    return (
        <div className="min-h-screen">
            <SearchPosts estilo="bg-rosaNav " />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-20 md:px-28 py-10 justify-center">
                {products.map((product, index) => (
                    <Post products={product} key={index} />
                ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
}
