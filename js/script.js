// dark mode
const darkModeButton = document.querySelector('.dark-mode-button')
darkModeButton.addEventListener('click', ()=>{
  document.body.classList.toggle('darkmode')
  if(darkModeButton.innerText === 'Darkmode'){
    darkModeButton.innerText = 'Lightmode'
    localStorage.theme = 'darkmode';
  }else{
    darkModeButton.innerText = 'Darkmode'
    localStorage.theme = 'darkmode';
  }
}) 


//back to top
const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > 20){
    toTop.classList.add('active')
  }else{
    toTop.classList.remove('active')
  }
})


const navbarNav= document.querySelector(".navbar-nav");

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector("#hamburger-menu ");

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});