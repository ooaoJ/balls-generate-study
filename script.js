const box = document.getElementById('box');
const button = document.getElementById('addCircle');
let colors = ['red', 'green', 'blue', 'greenyellow', 'aqua', 'indigo'];
let numCircle = 0;



button.addEventListener('click', (e) => {
    let randomSize = Math.floor(Math.random() * 101) + 50;
    const newCircle = document.createElement('div');

    newCircle.style.backgroundColor = colors[Math.floor(Math.random() * 6)]
    newCircle.style.width = `${randomSize}px`;
    newCircle.style.height = `${randomSize}px`;
    newCircle.style.border = 'none';
    newCircle.style.borderRadius = '50%';
    newCircle.style.cursor = 'pointer';
    newCircle.classList.add('fadeIn');
    newCircle.id = `circle${numCircle}`;

    numCircle++;

    newCircle.addEventListener('click',  () => removeCircle(newCircle.id))


    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;

    let randomX = Math.floor(Math.random() * (boxWidth - randomSize));
    let randomY = Math.floor(Math.random() * (boxHeight - randomSize));

    newCircle.style.position = 'absolute';
    newCircle.style.left = `${randomX}px`;
    newCircle.style.top = `${randomY}px`;


    box.appendChild(newCircle);
})

function removeCircle(id){
    let circle = document.getElementById(id);
    circle.classList.remove('fadeIn');
    circle.classList.add('fadeOut');
    setTimeout(() => {
        circle.remove();
    }, 1000);
}