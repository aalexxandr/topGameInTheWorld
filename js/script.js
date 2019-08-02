var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var background = new Image();
background.src = "./img/background.jpg";

background.onload = function(){
    game();
    requestAnimFrame(game);
}

function game(){
    
    update();
    render();
}

function update(){

}

function render(){
    context.drawImage(background, 0,0);
}
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