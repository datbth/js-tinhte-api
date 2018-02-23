const config = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'TinhteApiReact',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    html: {
      filename: 'index.html'
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  // https://gist.github.com/insin/2b0db9f9fe3922ca57ccda54d8166aba
  config.webpack.html.filename = '200.html'
}

module.exports = config