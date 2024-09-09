"use client";

import { useEffect, useState } from "react";
import GerenciamentoPage from "@/components/gerenciamento";
import { fetchProducts } from "../../../../actions/home/actions";

type ProdutoProp = {
  searchParams: {
    page?: string;
  };
};

export default function Gerenciamento({ searchParams }: ProdutoProp) {
  const currentPage = Number(searchParams?.page) || 1;

  const [products, setProducts] = useState<
    {
      id: number;
      title: string;
      description: string | null;
      price: number;
      createdAt: Date;
    }[]
  >([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const { products, totalPages } = await fetchProducts(currentPage);
      setProducts(products);
      setTotalPages(totalPages);
    };
    
    fetchData();
  }, [currentPage]);

  return (
    <div className="w-full flex justify-center bg-fundo min-h-screen">
      <GerenciamentoPage products={products} totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
