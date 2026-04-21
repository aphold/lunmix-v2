import Fastify from 'fastify';
import cors from '@fastify/cors';
import proxyRoutes from './routes/proxy.js';

const app = Fastify({ logger: true });

await app.register(cors, { origin: true, methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] });
await app.register(proxyRoutes, { prefix: '/api' });

app.get('/', async () => ({ status: 'Lunmix backend is running' }));

const port = Number(process.env.PORT || 3000);
await app.listen({ port, host: '0.0.0.0' });
app.log.info(`Lunmix backend listening on http://localhost:${port}`);
