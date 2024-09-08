'use server'
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const itemsPerPage = 8;

export async function fetchProducts(pagAtual:number) {
    const offset = (pagAtual - 1)*itemsPerPage;

    const products = await prisma.product.findMany({
        orderBy:{
            id:"asc",
        },
        skip: offset,
        take: itemsPerPage,
    });
    const count = await prisma.product.count();
    const totalPages = Math.ceil(count/8);

    return {products,totalPages};
    
};

// Pega o produto pelo ID
export async function ProductByID(id: number | undefined){

    const product = await prisma.product.findUnique({
        where:{id},
        select:{
            id:true,
            title:true,
            description:true,
            price:true,
        }
    });
    return product;
};

export async function GetPost(){
    const posts = await prisma.product.findMany({select:{
        id: true,
        title: true,
        description: true,
        price: true,
    }});
    return posts;
};

// Função de Deletar
export async function deleteProduct(id:number | undefined) {

    await prisma.product.delete({
        where:{id},
    });
    revalidatePath("/gerenciamento");
};

// Função de Criar
export async function createProduct(data:FormData) {

    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const priceStr = data.get("price") as string;
    const price = Math.ceil(parseFloat(priceStr));

    await prisma.product.create({
        data:{
            title,
            description,
            price,
        },
    });
    redirect("/gerenciamento");
};

// Função de Editar
export async function editProduct(id: number | undefined, data: FormData) {
    const title = data.get("title") as string | undefined;
    const description = data.get("description") as string | undefined;
    const priceStr = data.get("price") as string;
    const price = Math.ceil(parseFloat(priceStr));
  
    // Atualizar apenas os campos que não são undefined
    const updateData: any = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (price) updateData.price = price;
  
    // Atualiza o produto no banco de dados
    if (id !== undefined) {
      await prisma.product.update({
        where: { id },
        data: updateData,
      });
    }
  
    // Redireciona ou faz o que for necessário após a atualização
    redirect("/gerenciamento");
  }
  