module.exports = {
  mount: {
    'js': { url: '/js' },
    'css': { url: '/css' },
    'static': { url: '/', static: true, resolve: false }
  },
  buildOptions: {
    out: '../priv/static/'
  },
  optimize: {
    entrypoints: ['./static/index.html'],
    bundle: true,
    minify: true,
    target: 'es2018'
  },
  plugins: [
    '@snowpack/plugin-sass',
    [
      'snowpack-plugin-copy',
      {
        patterns: [
          {
            source: ['static/*.*', '!static/index.html'],
            destination: '../priv/static/',
            options: {},
          },
        ],
      },
    ],
  ],
};