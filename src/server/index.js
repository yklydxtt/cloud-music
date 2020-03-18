import express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server';
import Find from '../pages/Find/'
var app = express();
const content = renderToString(<Find/>);
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div id='root'><div>${content}</div></div>
      <script src='/index.js'></script>
  </body>
  </html>`);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});