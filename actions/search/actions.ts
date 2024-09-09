import prisma from "@/lib/db";

const itemsPerPage = 8;

export async function fetchFilteredProducts(pesquisa: string, currentPage:number){
    const offset = (currentPage - 1) * itemsPerPage;
    const products = await prisma.product.findMany ({
        where:{
            OR: [{
                title: {contains: pesquisa, mode: "insensitive"}
            }]
        },
        orderBy:{
            id:"asc"
        },
        select: {
            createdAt: true,
            title: true,
            description: true,
            price: true,
            id: true,
        },
        take: itemsPerPage,
        skip: offset,
    })
    const contador = await prisma.product.count({
        where:{
            OR:[{
                title: {contains: pesquisa, mode: "insensitive"}
            }]
        },
        orderBy:{
            id:"asc"
        },
    })
    const totalPages = Math.ceil(contador/8);
    return {products, totalPages, contador};
};