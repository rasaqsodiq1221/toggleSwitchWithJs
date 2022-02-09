let btn = document.querySelector('.btn');
let bulb = document.querySelector('.bulb');
let loader = document.querySelector('.loader')

window.addEventListener('load', vanish);

function vanish () {
  loader.classList.add('disappear');
}

btn.addEventListener('click', update);

function update () {
  if (btn.textContent === 'On the light') {
    btn.textContent = 'off the light';
    bulb.src = '/assets/images/pic_bulbon.gif';
  }
 else {
   btn.textContent = 'On the light';
   bulb.src = '/assets/images/pic_bulboff.gif';
 }
}