var headX = 300;
var headY = 150;
var headDirection = 4;

var noseX = 280;
var noseY = 190;
var noseDirection = 4;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 45;
var count = 5;
var sizeDirection = 2;

var eyesY = 250;
var eyesX = 150;
var eyesDirection = 2;

function setup()
{
    createCanvas(700, 850);
}

function draw()
{
    background(120,400,590);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 10)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("LeeCheezy!", 50,50);

    //hair
    line(180,280,160,380);
    line(195,230,100,450);
    line(380,280,400,380);
    line(365,230,460,450);
    line(240,220,230,350);
    line(300,220,330,350);
    //head
    fill(80,190,240);
    circle(headX,headY,280,280,200);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    headY+=headDirection;
    if(headY >= 350 || headY <= 100)
    {
        headDirection *= -1;
    }
    //face
    strokeWeight(4);
    fill(0);
    point(220,eyesY,275);
    eyesY += eyesDirection;
    if(eyesY <= 0 || eyesY >= 450 )
    {
        eyesDirection *= -1;
    }
    point(305,eyesY,275);
    eyesY += eyesDirection;
    if(eyesY <= 0 || eyesY >= 450 )
    {
        eyesDirection *= -1;
    }
    //nose
    triangle(noseX,240,noseX,320,250,noseX,320,noseX,245,noseX,280);
    noseX += noseDirection;
    if(noseX <= 0 || noseX >= 450 )
    {
        noseDirection *= -1;
    }
    //body
    fill(230,19,420)
    rect(bodyX,200,380,180);
    bodyX += bodyDirection;
    if(bodyX <= 0 || bodyX >= 450 )
    {
        bodyDirection *= -1;
    }
    

    //arms
    line(180,560,200,400);
    line(420,560,380,400);

    //legs
    line(230,560,230,720);
    line(350,560,350,720);
}