const counterEl = document.querySelector('.counter');

updateVisitor();

function updateVisitor() {
  fetch('https://api.countapi.xyz/update/mosfresh/youtube/?amount=1')
  .then(res => res.json())
  .then(res => {
    counterEl.innerHTML = res.value;
  })
}