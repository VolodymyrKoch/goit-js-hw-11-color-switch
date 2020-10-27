const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startRef = document.querySelector('[data-action="start"]'); 
const stopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

 let btnStop;

const changeColor = function () { 
  startRef.setAttribute('disabled', true)
   btnStop = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomColor = randomIntegerFromInterval(0, colors.length-1)
     bodyRef.style.backgroundColor = `${colors[randomColor]}`
    }, 1000);
}
  
const stopColor = function () {
  startRef.disabled= false;
  clearInterval(btnStop);
}
console.dir(startRef);

startRef.addEventListener('click', changeColor)
stopRef.addEventListener('click', stopColor)