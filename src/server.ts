import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { request } from 'https';
import { hostname } from 'node:os';
const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

app.use('/api-bd', (req, res) => {
  const target = req.url.replace(/^\/api-bd/, '');

  const options = {
    hostname: 'api.bdjobs.com',
    port: 443,
    path: target,
    method: req.method,
    headers: {
      ...req.headers,
      host: 'api.bdjobs.com',
      origin: 'https://bdjobs.com',
      referer: 'https://bdjobs.com/'
    }
  };
  const proxyReq = request(options, (proxyRes) => {
    // ২. বিডিজবস থেকে আসা রেসপন্স হেডারে CORS পারমিশন যোগ করা
    res.writeHead(proxyRes.statusCode || 200, {
      ...proxyRes.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    console.error('Proxy Error:', err);
    res.status(500).send('Proxy Error');
  });

  // ৩. ব্রাউজার থেকে পাঠানো ডাটা (Body) থাকলে তা ফরোয়ার্ড করা
  req.pipe(proxyReq);
})

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
