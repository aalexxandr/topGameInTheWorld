var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//размеры обьекта
var shitW = 50;
var shitH = 50;
//координаты обьекта (рандомное число в пределах сцены, с учетом размеров обьекта)
var y = Math.floor(Math.random() * ((canvas.height - shitH) - 1)) + 0;
var x = Math.floor(Math.random() * ((canvas.width - shitW) - 1)) + 0;
//скорость обьекта
var speedY = 10;
var speedX = -10;

//это нужно для бесконечного цикла, во всех браузерах
var requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 /20);
    };
})();

//переменная с фоном
var background = new Image();
background.src = "./img/background.jpg";

//переменная с обьектом
var shit = new Image();
shit.src = "./img/shit.png";

//после того, как грузится картинка с фоном, запускается функция с игрой и зацикливается
background.onload = function(){
    game();
}

//функция с игрой
function game(){
    requestAnimFrame(game);
    update();
    render();
}

function update(){
    y=y+speedY;
    x=x+speedX;
    //границы
    if(y >= canvas.height - shitH || y<=0){
      speedY *= -1;
    }
    if(x >= canvas.width - shitW || x<=0){
      speedX *= -1;
    }
    console.log('x: '+ x);
    console.log('y: '+ y);
}

//функция подгрузки элементов
function render(){
    context.drawImage(background, 0,0);
    context.drawImage(shit, x, y, shitH, shitW);
}
