const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log (h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

// h1.innerHTML = 'Patito <br> Feo'; 
h1.innerText = 'Patito <br> Feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('verde');
h1.classList.remove('rojo');

input.value ="456";

const img = document.createElement('img');
img.setAttribute('src', 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/762319/762319.jpg');
console.log(img);

pid.append(img);