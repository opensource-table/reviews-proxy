const newRelic = require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/:id', proxy({target: 'http://18.221.67.249:3010/', changeorigin: true}));

app.listen(3000, () => {
  console.log('Open Table proxy server listening on port 3000!');
});
