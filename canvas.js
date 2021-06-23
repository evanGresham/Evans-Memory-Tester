var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height =  innerHeight-200;
let c = canvas.getContext("2d");

// c.beginPath();
// c.moveTo(100,10);
// c.lineTo(200,10);
// c.lineTo(200,100);
// c.lineWidth = 10;
// c.strokeStyle = "red";
// c.stroke();
//
//
// c.beginPath();
// c.fillStyle = "blue";
// c.rect(100,100,100,100);
// c.lineWidth = 5;
// c.strokeStyle = "black";
// c.fill();
// c.stroke();
//
//
// c.beginPath();
// c.fillStyle = "pink";
// c.arc(100,400,100,0,2*Math.PI,true);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.fill();
// c.stroke();

canvas.addEventListener("mousedown",onMouseDown,false);





let x = 0;
let y = 400;
function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);


    c.beginPath();
    c.fillStyle = "orange";
    c.arc(x, y, 100, 0, 2 * Math.PI, true);
    c.lineWidth = 2;
    c.strokeStyle = "black";
    c.fill();
    c.stroke();

    x+=1;
    if(x>canvas.width + 100){
        x = -100;


    }
}

function onMouseDown(clickEvent){

    x+=40;


    var element = canvas;
    var offsetX = 0, offsetY = 0;

    if (element.offsetParent) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    mousex = clickEvent.pageX - offsetX;
    mousey = clickEvent.pageY - offsetY;

    x = mousex;
    y = mousey;
    console.log(mousex, mousey);
    console.log(clickEvent.pageX,clickEvent.pageY);



}


draw();






