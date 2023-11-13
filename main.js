const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const span = document.querySelector('span');
const span2 = document.querySelector('.span_2');
const span3 = document.querySelector('.span_3');

toggle.addEventListener('click', ()=>{
 nav.classList.toggle('active');
 toggle.classList.toggle('active')
 span.classList.toggle('active')
 span2.classList.toggle('active')
 span3.classList.toggle('active')
})