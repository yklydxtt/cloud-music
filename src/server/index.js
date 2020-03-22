import express from 'express';
import proxy from 'express-http-proxy';
import { getStore } from '../store';
import routes from '../Routes'
import { render } from './utils'
var app = express();
app.use(express.static('public'));
app.use('/api', proxy('localhost:3000', {
  proxyReqPathResolver: function (req) {
    var parts = req.url.split('?');
    var queryString = parts[1];
    var updatedPath = parts[0]
    return updatedPath + (queryString ? '?' + queryString : '');
  }
}));
app.get('*', function (req, res) {
  const store = getStore(req);
  const context = { css: [] }
  context.path = req.path;
  res.send(render(req, store, routes, context));
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});