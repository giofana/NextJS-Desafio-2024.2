import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Brinco de Diamante',
      description: 'Um elegante par de brincos de diamante com corte clássico.',
      price: 1299.99,
      createdAt: new Date(),
    },
    {
      title: 'Pulseira de Ouro Branco',
      description: 'Uma pulseira de ouro branco com detalhes em pedras preciosas.',
      price: 2499.99,
      createdAt: new Date(),
    },
    {
      title: 'Anel de Safira',
      description: 'Um anel de safira com acabamento em ouro e diamantes.',
      price: 3199.99,
      createdAt: new Date(),
    },
    {
      title: 'Colar de Pérolas',
      description: 'Um colar de pérolas naturais com fecho em ouro.',
      price: 1899.99,
      createdAt: new Date(),
    },
    {
      title: 'Brinco de Esmeralda',
      description: 'Brincos delicados de esmeralda em ouro amarelo.',
      price: 2799.99,
      createdAt: new Date(),
    },
    {
      title: 'Pulseira de Diamantes',
      description: 'Uma pulseira sofisticada com uma fileira de diamantes.',
      price: 4599.99,
      createdAt: new Date(),
    },
    {
      title: 'Anel Solitário',
      description: 'Um anel solitário com diamante central em platina.',
      price: 3899.99,
      createdAt: new Date(),
    },
    {
      title: 'Colar de Ouro Rosé',
      description: 'Colar de ouro rosé com pingente de rubi e diamantes.',
      price: 3299.99,
      createdAt: new Date(),
    },
    {
      title: 'Pulseira de Rubis',
      description: 'Uma elegante pulseira de ouro branco com rubis.',
      price: 3999.99,
      createdAt: new Date(),
    },
    {
      title: 'Brinco de Pérolas',
      description: 'Brincos de pérolas naturais com fecho em prata.',
      price: 999.99,
      createdAt: new Date(),
    },
  ];


  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
