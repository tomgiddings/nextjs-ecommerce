import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const get = async (search) => (await prisma.product.findFirst({ where: search }));
const update = async (id: number, data) => (await prisma.product.update({ data, where: { id } }));
const remove = async (id: number) => (await prisma.product.delete({ where: { id } }));

export default async function handler(req, res) {
    try {
        switch(req.method) {
            case 'GET': 
                res.status(200).json(await get({ id: Number(req.query.id) }));
                break;
            case 'PATCH':
                res.status(200).json(await update(Number(req.query.id), req.body));
                break;
            case 'DELETE':
                res.status(200).json(await remove(Number(req.query.id)));
                break;
            default:
                res.status(404).json({ message: 'Not found' });
        }
    } catch (err) {
        res.status(500);
    }
}
  