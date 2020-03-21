import express from 'express';
import { getStore } from '../store';
import routes from '../Routes'
import { render } from './utils'
var app = express();
app.use(express.static('public'));
app.get('*', function (req, res) {
  const store = getStore(req);
  const context={css:[]}
  context.path=req.path;
  res.send(render(req,store, routes,context));
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});