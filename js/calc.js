var amount = stat.innerHTML;
// var sum = parseInt(amount) + 5003;




//Listen to card continue
cardContinue[0].addEventListener('click', e => {
  e.stopPropagation();
  pledge[0].classList.remove('show');
  card[1].classList.remove('active');
  radioBtn[1].classList.remove('active');
  modal.classList.remove('active');
  
  progress.style.width = "25%";
  var newChild = stat.innerHTML = ++amount;

});
cardContinue[1].addEventListener('click', e => {
  e.stopPropagation();
  pledge[1].classList.remove('show');
  card[2].classList.remove('active');
  radioBtn[2].classList.remove('active');
  modal.classList.remove('active');

  progress.style.width = "75%";
  var newChild = stat.innerHTML = ++amount;
});