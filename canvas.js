var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight - 200;
let c = canvas.getContext("2d");

var testImage = new Image();
// img.src = './codebullet.jpg';
if(Math.random()>0.5){

    testImage.src = './ahh.png';
}else{
    testImage.src = './codebullet.jpg';
}


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

canvas.addEventListener("mousedown", onMouseDown, false);


let x = 0;
let y = 400;


let currentText = "";
function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);


    drawPictureCenteredAndScaled(testImage);

    // drawDot();
    c.fillStyle = "white";
    c.font = "30px Arial";
    c.fillText(currentText,10,50);

}

function drawDot() {
    c.beginPath();
    c.fillStyle = "orange";
    c.arc(x, y, 100, 0, 2 * Math.PI, true);
    c.lineWidth = 2;
    c.strokeStyle = "black";
    c.fill();
    c.stroke();

    x += 1;
    if (x > canvas.width + 100) {
        x = -100;


    }


}

function drawPictureCenteredAndScaled(img) {


    let padding = 70;
    let imageToScreenWidthRatio = (canvas.width - padding * 2) / img.width;
    let imageToScreenHeightRatio = (canvas.height - padding * 2) / img.height;


    let scaleAmount = Math.min(imageToScreenHeightRatio, imageToScreenWidthRatio);

    let xOffset = (canvas.width - (scaleAmount * img.width)) / 2;
    let yOffset = (canvas.height - (scaleAmount * img.height)) / 2;

    c.drawImage(img, xOffset, yOffset, img.width * scaleAmount, img.height * scaleAmount);
}

function onMouseDown(clickEvent) {

    x += 40;


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


}


function confirmInput(){

    var x = document.getElementById("answerTextBox");
    console.log(x.value);

    currentText = "Wow u stupid, " + x.value + " is a fuckin dumb cunt answer \n fuck you"
    return false;
}

draw();






