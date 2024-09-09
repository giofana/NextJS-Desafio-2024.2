import { GetServerSidePropsContext } from 'next';
import { fetchProducts } from '../../../actions/home/actions';

// Ajuste a tipagem do parâmetro 'context'
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const currentPage = parseInt(context.query.page as string) || 1; // Converta o valor da query string para string
    const { products, totalPages } = await fetchProducts(currentPage);

    return {
        props: {
            products,
            totalPages,
            currentPage,
        },
    };
}
