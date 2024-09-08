'use server';
import { fetchFilteredProducts } from "../../../../actions/search/actions";
import PageSearch from "@/components/pageSearch";

export default async function Search({
    searchParams,
}:{
    searchParams:{
        query?: string;
        currentPage?: string;
    }
}) {

    const query=searchParams?.query || ''
    const currentPageA= Number(searchParams?.currentPage) || 1
    const {products, totalPages, contador} = await fetchFilteredProducts(query, currentPageA);
    

    return (
        <PageSearch products={products} totalPages={totalPages} count={contador}/>
    );
};
