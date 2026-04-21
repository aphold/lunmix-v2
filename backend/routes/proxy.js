import fetch from 'node-fetch';
import { pipeline } from 'stream/promises';
import { WispRouter } from '../proxy/wisp.js';
import { EpoxyTransport } from '../proxy/epoxyTransport.js';

export default async function proxyRoutes(fastify) {
  const router = new WispRouter();
  router.addRoute('lunmix://proxy', '/api/proxy');

  fastify.get('/status', async () => ({ status: 'proxy ready' }));

  fastify.get('/proxy', async (request, reply) => {
    const target = request.query.target || 'https://example.com';
    const upstream = String(target).startsWith('http') ? String(target) : `https://${target}`;

    const response = await fetch(upstream, {
      headers: {
        ...request.headers,
        host: new URL(upstream).host,
        referer: upstream
      }
    });

    reply.headers({
      'access-control-allow-origin': '*',
      'x-lunmix-proxy': 'true',
      'content-type': response.headers.get('content-type') || 'text/plain'
    });

    const transport = new EpoxyTransport(reply.raw);
    await transport.forward(response.body);
  });

  fastify.get('/route', async () => ({ routes: router.listRoutes() }));
}
