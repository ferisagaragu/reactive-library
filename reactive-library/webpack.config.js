var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  externals: {
    'react': 'commonjs react',
    'react-bootstrap': 'commonjs react-bootstrap',
    '@fortawesome/fontawesome-svg-core': 'commonjs @fortawesome/fontawesome-svg-core',
    '@fortawesome/free-solid-svg-icons': 'commonjs @fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome': 'commonjs @fortawesome/react-fontawesome',
    'sweetalert2': 'commonjs sweetalert2',
    'sweetalert2-react-content': 'commonjs sweetalert2-react-content',
    'inputmask': 'commonjs inputmask'
  }
};