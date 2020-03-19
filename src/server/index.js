import express from 'express';
import React from 'react'
import { StaticRouter } from "react-router-dom"
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config'
import routes from '../Routes'
var app = express();
app.use(express.static('public'));
app.get('*', function (req, res) {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div id='root'>${content}</div>
      <script src='/index.js'></script>
  </body>
  </html>`);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});