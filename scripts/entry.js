require('babel-core/register');
require('!style!css!../styles/style.css');
require('babel!./modules/babel-es6.js');
document.write(require('./modules/content.js'));
