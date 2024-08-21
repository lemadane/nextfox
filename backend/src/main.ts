import Fastify from 'fastify';
import cors from '@fastify/cors';

const server = Fastify({ logger: true });
async function main() {
  server.register(cors, {
    origin: `http://localhost:4000`,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type'],
  });
  await server.listen({ port: 3000 });
}
main();
