import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const get = async () => await prisma.product.findMany();
const create = async (data) => await prisma.product.create({ data });

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        res.status(200).json(await get());
        break;
      case 'POST':
        res.status(200).json(await create(req.body));
        break;
      default:
        res.status(404).json({ message: 'Not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
