'use server';
import PageSearchPosts from "@/components/pageSearchPosts";
import { fetchFilteredProducts } from "../../../../actions/search/actions";

export default async function SearchPostPage({
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
        <PageSearchPosts products={products} totalPages={totalPages} count={contador}/>
    );
};
