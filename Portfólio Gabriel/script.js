window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

var btn = document.querySelector('#ver-mais');

btn.addEventListener('click', function() {
    var div = document.querySelector('.div-secundaria');
    div.classList.toggle('active');

    if(div.classList.contains('active')) {
        return btn.textContent = "Ver Menos";
    }

    btn.textContent = "Ver Mais";
})

const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav-header');

btnMobile.addEventListener('click', function(){
    nav.classList.toggle('active');
    header.classList.toggle('cinza');
});

nav.addEventListener('click', function(){
    nav.classList.toggle('active');
    Hamb.classList.toggle('x');
    header.classList.toggle('cinza');
});

const Hamb = document.getElementById('hamburguer');

Hamb.addEventListener('click', function(){
    Hamb.classList.toggle('x');
});

const overlay = document.getElementById('overlay');

const header = document.getElementById('header');

overlay.addEventListener('click', function(){
    nav.classList.remove('active');
    Hamb.classList.toggle('x');
    header.classList.toggle('cinza');
});