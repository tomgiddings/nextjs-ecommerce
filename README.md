# Ecommerce Next.js application

## Tech

- [Next.js](https://nextjs.org/)
- [CockroachDB](https://www.cockroachlabs.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

### .env setup

Copy and rename the `.env.example` file in the project root using:

```
cp .env.example .env
```

Your `.env` file should include the following:

```
DATABASE_URL="postgresql://root@0.0.0.0:26257/defaultdb"
```

### Install & run application

Install dependencies via npm:

```bash
npm i
```

You can then launch the API and frontend of the application using:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker

A `docker-compose.yml` file is included in the root project directory. This runs any development service dependencies (such as CockroachDB) and can be run using:

```bash
docker-compose up
```

### Prisma/CockroachDB

To sync your local database with the project schema, you should run `npx prisma migrate dev`. You can access CockroachDB using [http://0.0.0.0:8080](http://0.0.0.0:8080/).

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
