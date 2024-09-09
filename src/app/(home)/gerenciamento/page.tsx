"use client"; // Indica que o código deve ser executado no lado do cliente

import { useEffect, useState } from "react";
import GerenciamentoPage from "@/components/gerenciamento";
import { fetchProducts } from "../../../../actions/home/actions";

type ProdutoProp = {
  searchParams: {
    page?: string;
  };
};

export default function Gerenciamento({ searchParams }: ProdutoProp) {
  const currentPage = Number(searchParams?.page) || 1; // Define a página atual

  // Estados para armazenar os produtos e o total de páginas
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

  // useEffect para buscar os dados quando o componente é montado ou quando a página muda
  useEffect(() => {
    const fetchData = async () => {
      const { products, totalPages } = await fetchProducts(currentPage); // Chama a função assíncrona para buscar os produtos
      setProducts(products); // Armazena os produtos no estado
      setTotalPages(totalPages); // Armazena o total de páginas no estado
    };

    fetchData(); // Executa a função para buscar dados
  }, [currentPage]); // Dependência para executar o efeito novamente quando a página muda

  return (
    <div className="w-full flex justify-center bg-fundo min-h-screen">
      <GerenciamentoPage
        products={products}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}
