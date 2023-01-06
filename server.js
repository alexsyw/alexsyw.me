const _socials = require('./_redirects/socials.js');
const _tinkoff_ref = require('./_redirects/tinkoff.js');

const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');

const Path = (page) => path.resolve(__dirname, 'source', `${page}`);
app.use(express.static(__dirname + '/source'));

app.get('/', (req, res) => {
    res.sendFile(Path('index.html'));
});
app.use('/', _socials);
app.use('/tinkoff', _tinkoff_ref);

app.use((req, res) => {
    res.status(404).sendFile(Path('index.html'));
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem'),
}, app);

httpServer.listen(80, "alexsyw.me", () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, "alexsyw.me", () => {
    console.log('HTTPS Server running on port 443');
});