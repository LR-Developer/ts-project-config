import express, { Express } from 'express';

const DEFAULT_HTTP_PORT = 3000;

const app: Express = express();

app.listen(DEFAULT_HTTP_PORT);

console.log(`Application listening on port ${DEFAULT_HTTP_PORT}`);
