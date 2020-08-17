const path = require('path')
const dotenv = require('dotenv')
const WebpackUserscript = require('webpack-userscript')
const Dotenv = require('dotenv-webpack')

dotenv.config()
const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'He4rt Spotify.user.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: 'He4rt Spotify',
        match: 'https://open.spotify.com/*',
        grant: [
          'GM_addStyle'
        ],
        "run-at": "document-end",
        version: isProduction ? `[version]` : `[version]-build.[buildNo]`
      }
    })
  ]
}