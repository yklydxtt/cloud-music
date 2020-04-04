import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from "react-router-config";
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
  const loadBranchData = location => {
    const branch = matchRoutes(routes, location);

    const promises = branch.map(({ route }) => {
      return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });

    return Promise.all(promises);
  };
  loadBranchData(req.path).then(() => {
    const context = { css: [] }
    context.path = req.path;
    res.send(render(req, store, routes, context));
  }).catch((e) => {
    const context = { css: [] }
    context.path = req.path;
    // console.log(e)
    res.send(render(req, store, routes, context));
  })
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});