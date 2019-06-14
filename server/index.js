const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/:id', proxy({target: 'http://localhost:3010/', changeorigin: true}));

// app.get('/:id', (req, res) => {
//   if (!req.params.id) {
//     res.status(400);
//     res.end();
//   } else {
//     res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
//   }
// });

app.listen(3000, () => {
  console.log('Open Table proxy server listening on port 3000!');
});
