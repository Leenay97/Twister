let audio = new Audio('baraban_sg.mp3')

document.querySelector('.roll').addEventListener('click', (e)=> {
    e.target.style.transform = `rotate(${+Math.random()*40}rad)`;
})