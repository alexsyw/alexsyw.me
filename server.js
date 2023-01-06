const _socials = require('./_redirects/socials.js');
const _tinkoff_ref = require('./_redirects/tinkoff.js');

const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;

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
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});