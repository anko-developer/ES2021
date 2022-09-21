(function() {
  const $btn = document.querySelector('.testBtn');
  $btn.onclick = () => {
    console.log('wow');
  };

  $btn.addEventListener('click', function(e) {
    console.log(e.target.classList.contains('testBtn'));
  });

  $btn.addEventListener('click', function(e) {
    console.log(e.currentTarget);
    console.log(e.timeStamp);
  });

  // 마우스 드래그하여 이동시키는 예제
  const $box = document.querySelector('.box');
  const initailMousePos = { x: 0, y: 0 };
  const offset = { x: 0, y: 0 };
  const move = (e) => {
    offset.x = e.clientX - initailMousePos.x;
    offset.y = e.clientY - initailMousePos.y;

    $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
  };

  $box.addEventListener('mousedown', e => {
    initailMousePos.x = e.clientX - offset.x;
    initailMousePos.y = e.clientY - offset.y;

    document.addEventListener('mousemove', move);
  });

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
  });
}());