const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

// Create an Express application
const app = express();

// Serve the static files from the Docusaurus build directory
app.use(express.static(path.join(__dirname, 'build')));

const proxyMiddleware = createProxyMiddleware({
    target: process.env.TARGET || 'https://mapi.boomfi.xyz',
    changeOrigin: true,
});

app.use('/api', proxyMiddleware);

// For all routes, serve the index.html from the Docusaurus build directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 3000 (or any other port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});