import Disk from "./../class/Disk.class.js";

// déclarer les variables qui vont recevoir le canvas et le context
let canvas = document.getElementById('masterpiece');
let ctx = canvas.getContext('2d');

// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left - 23,
      y: evt.clientY - rect.top - 23
    };
}


// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
function onClickCanvas(evt){
    var pos = getMousePos(canvas, evt);
    let circle = new Disk(getRandomColor(), getRandomInt(100) + 10, pos.x, pos.y);
    circle.draw(ctx, 0, 2 * Math.PI, false)
}


// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur 
canvas.addEventListener("click", (e) => {
    onClickCanvas(e);
});
