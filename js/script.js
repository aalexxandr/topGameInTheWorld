var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var y = 0;

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

//переменная с обьектом, который будет ловить главный герой
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
    y=y+5;
    //границы
    if(y>=600){
        y=0;
    }
}

//функция подгрузки элементов
function render(){
    context.drawImage(background, 0,0);
    context.drawImage(shit, 0, y, 50, 50);
}