import Handlebars from 'handlebars/dist/cjs/handlebars';
// const Handlebars = require('Handlebars');

// var template = document.querySelector('#testTemplate').innerText;
// var bindTemplate = Handlebars.compile(template);

// var data = {
//   "id" : 16,
//   "name" : "test",
//   "content" : "새로운글을 올렸어요",
//   "like" : 5, 
//   "comment" : ["댓글이다", "멋진글이네요", "잘봤습니다"]
// };


// let show = document.querySelector('.show');
// let resultHtml = bindTemplate(data);
// show.innerHTML = resultHtml;




var source = $("#testTemplate").html();
var template = Handlebars.compile(source);
var values = {
  name : "Satoshi Watanabe",
  age : 33
};
var html = template(values);
console.log(html);
$(".show").html(html);