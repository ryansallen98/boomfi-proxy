const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const proxyMiddleware = createProxyMiddleware({
    target: process.env.TARGET || 'https://mapi.boomfi.xyz',
    changeOrigin: true,
});

app.use('/api', proxyMiddleware);

// Vercel automatically handles SSL certificates
app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});