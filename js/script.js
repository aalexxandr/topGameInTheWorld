var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var background = new Image();
background.src = "./img/background.jpg";
background.onload = function(){
    context.drawImage(background, 0,0);
    
}

console.log(background);
