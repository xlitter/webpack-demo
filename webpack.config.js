var path = require('path');

module.exports = {
  entry: './scripts/entry.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_modules)/,
        loader: 'babel'
      }]
  },
  plugins: [
    function() {
      this.plugin('done', function(stats) {
        require('fs').writeFileSync(path.join(__dirname, 'stats.json'),
          JSON.stringify(stats.toJson()));
      });
    }
    
  ]
};