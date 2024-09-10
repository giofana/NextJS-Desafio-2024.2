'use server';
import { fetchFilteredProducts } from "../../../../actions/search/actions";
import PageSearch from "@/components/pageSearchAdm";

export default async function SearchAdmPage({
    searchParams,
}:{
    searchParams:{
        query?: string;
        page?: string;
    }
}) {

    const query=searchParams?.query || ''
    const currentPageA= Number(searchParams?.page) || 1
    const {products, totalPages, contador} = await fetchFilteredProducts(query, currentPageA);


    return (
        <PageSearch products={products} totalPages={totalPages} count={contador}/>
    );
};
