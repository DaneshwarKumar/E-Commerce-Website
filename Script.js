const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const close = document.getElementById('close');



if(menu){
      menu.addEventListener('click' , () => {
        navbar.classList.add('active');
      })
}


if(close){
    close.addEventListener('click' , () => {
      navbar.classList.remove('active');
    })
}