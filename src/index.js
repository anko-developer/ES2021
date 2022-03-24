require('./assets/scss/index.scss'); //sass 연결

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


function faveMaskMotion(el, option) {
  let canvas;
  let ctx;
  let drawSvg = new Image();
  let frameImg = new Image();
  let endEventTrue = true;

  let svgOrientation;
  let svgHorizonRatio;
  let svgVerticalRatio;
  let svgW;
  let svgH;
  let minSvgW;
  let minSvgH;
  let svgCenterL;
  let svgCenterT;
  let standardX;
  let standardY;

  let autoPercent = 0;
  let autoRAF;
  let maxAutoPercent = 0;

  const defaults = {
      svgSrc : '',
      bgImgSrc : '',
      frameImgSrc : '',
      moveNode : '',
      autoPlay : false,
      minScale : 1,
      maxScale : 1,
      viewW : 0,
      viewH : 0,
      originX : 'center',
      originY : 'center',
      bgFadeIn : false,
      bgFadeOut : false,
      reverse : false,
      speed : 0.01,
      positionX : 0,
      positionY : 0,
      easingGrade : 10,
      alignX : 'left',
      alignY : 'top',
      bgColor : '#000'
  }
  const options = $.extend(defaults, option);

  let
  onScrollEvent = option.scrollEvent,
  onStartEvent = option.startEvent,
  onEndEvent = option.endEvent,
  onEndPrevEvent = option.endPrevEvent

  const _init = function() {
      canvas = el;
      ctx = canvas.getContext('2d');
      _destroy();

      console.log('width', canvas.width);

      drawSvg.src = options.svgSrc;
      frameImg.src = options.frameImgSrc;

      // if(options.bgImgSrc != '') {
      //     el.parent().append(`<div class="svg-bg"><div class="bg" /></div>`);
      //     el.parent().find('.svg-bg .bg').css({
      //         'position' : 'absolute',
      //         'top' : 0,
      //         'left' : 0,
      //         'width' : '100%',
      //         'height' : '100%',
      //         'background-image' : 'url('+options.bgImgSrc+')',
      //         'background-size':'cover',
      //         'background-position' : 'center center'
      //     });
      // }

      drawSvg.onload = function() {
          _resize();
          _draw(0);
      }
      frameImg.onload = function() {
          _draw(0);
      }
  }
  const _draw = function(_percent) {
      canvas.width = el.width * 2;
      
      let scalePercent = (options.reverse) ? (1-_percent) : _percent;
      let _currentW = ((svgW*scalePercent)+minSvgW);
      let _currentH = ((svgH*scalePercent)+minSvgH);

      // aline X
      if (options.alignX != 'center') {
          standardX = (options.alignX != 'right') ? (options.positionX*canvas.width) : canvas.width - minSvgW - (options.positionX*canvas.width);
      }else {
          standardX = (canvas.width/2) - (minSvgW/2);
      }
      // aline Y
      if (options.alignY != 'center') {
          standardY = (options.alignY != 'bottom') ? (options.positionY*canvas.height) : canvas.height - minSvgH - (options.positionY*canvas.height);
      }else {
          standardY = (canvas.height/2) - (minSvgH/2);
      }

      if (options.originX != 'center') {
          let ratioX = standardX + options.originX*((svgW+minSvgW)/100);
          svgCenterL = standardX - (ratioX*scalePercent);
      }else {
          svgCenterL = (canvas.width/2) - (_currentW/2);
      }
      if (options.originY != 'center') {
          let ratioY = standardY + options.originY*((svgH+minSvgH)/100);
          svgCenterT = standardY - (ratioY*scalePercent);
      }else {
          svgCenterT = (canvas.height/2) - (_currentH/2);
      }
      ctx.beginPath();
      if(drawSvg) ctx.drawImage(drawSvg,svgCenterL,svgCenterT,_currentW,_currentH);
      ctx.closePath();

      ctx.globalCompositeOperation = 'source-out';

      ctx.beginPath();
      ctx.fillStyle = options.bgColor;
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.closePath();

      if (options.frameImgSrc) {
          ctx.globalCompositeOperation = 'destination-over';
          ctx.beginPath();
          ctx.drawImage(frameImg,svgCenterL,svgCenterT,_currentW,_currentH);
          ctx.closePath();
      }

      if(options.bgFadeIn) el.parent().find('.svg-bg').css('opacity', _percent);
      if(options.bgFadeOut) el.parent().find('.svg-bg').css('opacity', 1-_percent);

      if(!options.autoPlay) onScrollEvent && onScrollEvent.call(this,_percent);

      if (_percent == 1 && endEventTrue) {
          endEventTrue = false;
          onEndEvent && onEndEvent.call();
      }else if (_percent != 1 && !endEventTrue){
          endEventTrue = true;
          onEndPrevEvent && onEndPrevEvent.call();
      }
  }
  const _scroll = function(_easing) {
      let st = (typeof(_easing) == 'number') ? _easing : $(window).scrollTop();

      let _scrollTop = st - options.moveNode.offset().top;
      let _moveArea = options.moveNode.height() - $(window).height();

      let _percent = Math.min(1, _scrollTop / _moveArea );
      _percent = Math.min(1, Math.max(0, _percent));

      _draw(_percent);
  }
  const _play = function() {
      if (autoPercent == 0) onStartEvent && onStartEvent.call();

      if (autoPercent <= 1) {
          autoPercent += (autoPercent/options.easingGrade)+options.speed;
          maxAutoPercent = Math.min(1, autoPercent);
          _draw(maxAutoPercent);
          autoRAF = window.requestAnimationFrame(_play);
      }else {
          autoPercent = 0;
          window.cancelAnimationFrame(autoRAF);
      }
  }
  const _pause = function() {
      window.cancelAnimationFrame(autoRAF);
  }
  const _resize = function() {
      canvas.width = el.width * 2;
      canvas.height = el.height * 2;

      svgOrientation = options.viewW>=options.viewH;
      svgHorizonRatio = (options.viewH/options.viewW);
      svgVerticalRatio = (options.viewW/options.viewH);
      svgW = (canvas.width*options.maxScale);
      svgH = svgW*svgHorizonRatio;

      if(svgOrientation) {
          minSvgW = Math.min(options.viewW*options.minScale, options.viewW*(canvas.width/options.viewW));
          minSvgH = minSvgW*svgHorizonRatio;
      }else {
          minSvgH = Math.min(options.viewH*options.minScale, options.viewH*(canvas.height/options.viewH));
          minSvgW = minSvgH*svgVerticalRatio;
      }

      if(!options.autoPlay) {
          _scroll();
      }else {
          _draw(maxAutoPercent);
      }
  }
  const _destroy = function() {
      canvas.width = '';
      canvas.height = '';
      autoPercent = 0;
      maxAutoPercent = 0;
      window.cancelAnimationFrame(autoRAF);
      // el.parent().find('.svg-bg').remove();
  }
  _init();

  return {
      init : _init,
      draw : _draw,
      scroll : _scroll,
      play : _play,
      pause : _pause,
      resize : _resize,
      destroy : _destroy
  }
}

const focusMask = document.querySelector('.mask-motion');
let focusMaskSrc = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><circle cx="50" cy="50" r="42.41"/></svg>');
// let focusMaskBgSrc = $('.mask-motion').data('bg-src');
let focusCircleSize = (!$('html').hasClass('mobile')) ? 2.5 : 1.2 ;
let focusCircleSizeMax = (!$('html').hasClass('mobile')) ? 1 : 1.3 ;
const focusMaskMotion = new faveMaskMotion(focusMask,{
  svgSrc : focusMaskSrc,
  // bgImgSrc : focusMaskBgSrc,
  // moveNode : $focusSection.find('.sticky-wrap'),
  minScale : focusCircleSize,
  maxScale : focusCircleSizeMax,
  viewW : 516,
  viewH : 516,
  reverse : true,
  bgColor : '#fff'
});