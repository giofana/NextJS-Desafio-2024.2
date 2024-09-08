'use server'
import Pagination from "@/components/paginacao";
import Post from "@/components/post";
import Search from "@/components/search";
import { fetchProducts } from "../../../../actions/home/actions";

export default async function PostsPage(){
    const {products, totalPages} = await fetchProducts(1);

    return(
        <div className="min-h-screem">
            <Search estilo="bg-rosaNav "/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-20 md:px-28 py-10 justify-center">
                {products.map((product, index) => (
                  <Post products={product} key={index} />
                ))}
            </div>
            <Pagination totalPages={10}/>
        </div>
    );
}