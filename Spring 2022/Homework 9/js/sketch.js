var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(700, 850);
}

function draw()
{
    background(120,400,590);
    textSize(50);
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
    circle(280,280,200);
    //face
    strokeWeight(4);
    fill(0);
    point(220,275);
    point(305,275);
    //nose
    triangle(240,320,250,320,245,280);
    //body
    fill(230,19,420)
    rect(200,380,180);

    //arms
    line(180,560,200,400);
    line(420,560,380,400);

    //legs
    line(230,560,230,720);
    line(350,560,350,720);
}