// character movement
var characterX = 50;
var characterY = 50;
// key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
// x and y for a shape
var shapeX = 370;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(800, 800);
    //random speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(210,145,85);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("Go Here!", width-85,height-50)



    //character
    fill(230,100,250);
    circle(characterX,characterY,25);

    // keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }




    // obstacle
    fill(25,145,210);
    circle(shapeX,shapeY,50);

     // random speed
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;


    // check bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

 // obstacle 2
 fill(25,145,210);
 circle(shapeX,20,shapeY, -20);

  // random speed
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

 // move
 shapeX += shapeXSpeed,25;
 shapeY += shapeYSpeed;

 // check bounds
 if(shapeX > width)
 {
     shapeX = 0;
 }
 if(shapeX < 0)
 {
     shapeX = width;
 }
 if(shapeY > height)
 {
     shapeY = 0;
 }
 if(shapeY < 0)
 {
     shapeY = height;
 }

 // obstacle 3
 fill(350,0,210);
 circle(shapeX,-10,shapeY, 80);

  // random speed
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

 // move
 shapeX += shapeXSpeed;
 shapeY += shapeYSpeed;

 // check bounds
 if(shapeX > width)
 {
     shapeX = 0;
 }
 if(shapeX < 0)
 {
     shapeX = width;
 }
 if(shapeY > height)
 {
     shapeY = 0;
 }
 if(shapeY < 0)
 {
     shapeY = height;
 }


    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(50);
        text("FINISHED!", width/2-50, height/2-50);
    }

    // mouse click shape
    fill(120,250,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */