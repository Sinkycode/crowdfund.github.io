// Get Success Modal
const success = document.querySelector('#success');
// Get main Modal
const modal = document.querySelector('#modal');
// Get Project button
const projectBtn = document.querySelector('.project-btn');
// Get close button
const closeBtn = document.querySelector('.close');
// Get Modal radio button
const radioBtn = document.querySelectorAll('.radio-btn');
// Get Modal cards
const card = document.querySelectorAll('.wrap-box');
// Get Modal pledge
const pledge = document.getElementsByClassName('pledge');
// Get Complete button
const complete = document.querySelectorAll('.complete');
//Get continue 
const cardContinue = document.querySelectorAll('.continue');
// Get Success button
const successBtn = document.querySelector('.success-btn'); 
// Get hamburger button
const hamburger = document.querySelector('.hamburger');
//Get close-menu
const closeMenu = document.querySelector('.close-menu');
// Get canvas 
const canvas = document.querySelector('.canvas');
// Get progress track
const progress = document.querySelector('.progress-track');
//Get progress stats 
var stat = document.querySelector('.stats-amount');

//Listen to project button
projectBtn.addEventListener('click',openModal);

//Listen to project button
closeBtn.addEventListener('click',closeModal);

// Listen to complete Button
for(var i = 0; i < complete.length; i++){
  complete[i].addEventListener('click', openSuccess);
}

//Listen to Modal cards
card[0].addEventListener('click', e => {
  card[0].classList.toggle('active');
  radioBtn[0].classList.toggle('active');
});
card[1].addEventListener('click', e => {
  pledge[0].classList.add('show');
  card[1].classList.add('active');
  radioBtn[1].classList.add('active');
});
card[2].addEventListener('click', e => {
  pledge[1].classList.add('show');
  card[2].classList.add('active');
  radioBtn[2].classList.add('active');
});



hamburger.addEventListener('click', function(){
  canvas.classList.toggle('show');
  hamburger.classList.add('hide');
  closeMenu.classList.add('show')
})

closeMenu.addEventListener('click', e => {
  canvas.classList.remove('show');
  hamburger.classList.remove('hide');
  closeMenu.classList.remove('show');
})

//Listen to success Button 
successBtn.addEventListener('click',closeSuccess);

//Function to openModal
function openModal(){
  modal.classList.toggle('active');
}
//Function to closeModal
function closeModal(){
  modal.classList.remove('active');
}
//Function to openSuccess
function openSuccess(){
  success.classList.toggle('active');
}
// Function to closeSuccess
function closeSuccess(){
 success.classList.remove('active');
}
