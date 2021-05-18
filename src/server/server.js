/* eslint-disable global-require */
import express from 'express'
import dotenv from 'dotenv'
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import getManifest from './getManifest'
dotenv.config()
const { ENV, PORT } = process.env
const app = express()

if (ENV === 'development') {
  console.log('Development config')
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const { publicPath } = webpackConfig.output
  const serverConfig = { serverSideRender: true, publicPath }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest()
    next()
  })
  // eslint-disable-next-line node/no-path-concat
  app.use(express.static(`${__dirname}/public`))
}

const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css'
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'
  return (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="https://i.ibb.co/T16t10c/jesus-S.png" />
      <title>Porfolio Yisus</title>   
      <link rel="stylesheet" href='${mainStyles}' type="text/css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script src='${mainBuild}' type="text/javascript"></script>
      <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>
  `)
}

const renderApp = async (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(serverRoutes())}
    </StaticRouter>
  )
  res.send(setResponse(html, req.hashManifest))
}
app.get('*', renderApp)

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Server running on port ${PORT}`)
  };
})
