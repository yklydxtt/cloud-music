import React from 'react'
import { StaticRouter } from "react-router-dom"
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
export const render = (req, store, routes, context) => {
    const content = renderToString(
        <Provider store={store} >
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );
    const cssStr = context.css.join();
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>网易云音乐</title>
          <style>${cssStr}</style>
      </head>
      <body>
          <div id='root'>${content}</div>
          <script>
        window.context ={
             state:${JSON.stringify(store.getState())}
        }
        </script>
          <script src='/index.js'></script>
      </body>
      </html>`

}