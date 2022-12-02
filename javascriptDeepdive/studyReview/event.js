(function() {
  const btn = document.querySelector('.eventBtn');
  btn.addEventListener('click', function(e) {
    e.target.textContent = '와우';
  });
}());