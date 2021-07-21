const mangoHand = document.querySelector('.middle-text');
const title = document.querySelector('.left-text');
const logo = document.querySelector('.logo')
const recipe =document.querySelector('.recipe');
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const mangoHanging = document.querySelector('.mangoHanging');
const navBar = document.querySelector('.nav-bar')

const titleRecipe = document.querySelector('.recipe-title')
console.log(recipe.getBoundingClientRect().top)
console.log(header.clientHeight);
window.addEventListener('scroll',(e)=>{
  console.log(window.scrollY)
  if(window.scrollY>5){
    title.style.transition = 'all 0.5s ease';
    title.style.transform = 'translateX('+(-window.scrollY)+'px)';
    title.style.zIndex = '10';
    title.style.opacity = '0.1'

    mangoHand.style.transition = 'all 0.5s ease';
    mangoHand.style.transform = 'translateY('+(-window.scrollY)+'px)';
    mangoHand.style.transform = 'scale(0.5)';
    mangoHand.style.opacity = '0.1'

    logo.style.transition = 'all 0.5s ease';
    logo.style.transform = 'translateX('+(window.scrollY)+'px)'
    logo.style.opacity = '0.1'

  }
  
  else{
    mangoHand.style.transition = 'transform 0.5s ease';
    mangoHand.style.transform = 'scale(1)';
    mangoHand.style.opacity = '1';

    title.style.opacity = '1'
    logo.style.opacity = '1'

  }

})
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('rotateHam');
  mangoHanging.classList.toggle('slideIn');
  title.classList.toggle('moveLeft');
    mangoHand.classList.toggle('moveDown');
    logo.classList.toggle('moveRight');
    navBar.classList.toggle('navSlide')
})
