const openButton = document.querySelectorAll('.open-btn');
const closeButton = document.querySelectorAll('.close-btn');
let target;
let openTarget;

Array.from(openButton).forEach((el, index) => {
  el.addEventListener('click', () => {
    target = el.dataset.target;
    openTarget = document.querySelector(`[data-open-target='${target}']`);
    openTarget.classList.toggle('is-hidden');
  });
});


Array.from(closeButton).forEach((el, index) => {
  el.addEventListener('click', () => {
    el.closest('.modal').classList.toggle('is-hidden');
  });
});

