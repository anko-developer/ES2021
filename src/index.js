require('./assets/scss/index.scss'); //sass 연결

const $ = require('jquery');
const DOM = {
  body: '#Body'
};

$(DOM.body).append('<p>Webpack</p>');
// $(DOM.body).addClass('__block');
$(DOM.body).css('background-color', '#ffd200');