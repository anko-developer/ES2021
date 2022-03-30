require('./assets/scss/index.scss'); //sass 연결
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/images/svg', true, /\.svg$/));

// const $ = require('jquery');
const DOM = {
  body: '#Body'
};

$(DOM.body).append('<p>Webpack</p>');
$(DOM.body).css('background-color', '#ffd200');



// let context = focusMask.getContext('2d');
// let imgElem  = document.createElement('img');
// imgElem.src = `data:image/svg+xml,%3Csvg width='1920' height='1200' viewBox='0 0 1920 1200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1920 0H0V1200H1920V0ZM960 1000C1180.91 1000 1360 820.914 1360 600C1360 379.086 1180.91 200 960 200C739.086 200 560 379.086 560 600C560 820.914 739.086 1000 960 1000Z' fill='white'/%3E%3C/svg%3E%0A`;
// // imgElem.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><circle cx="50" cy="50" r="42.41"/></svg>');

// context.drawImage(imgElem, 0, 0);