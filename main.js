function preload(){
}

function setup(){
  gif = createImg("Red_circle.gif")
  gif_2 = createImg("Red_circle.gif")
  gif_3 = createImg("Red_circle.gif")
  gif_4 = createImg("Red_circle.gif")
  cube = createImg("Cube gif 2.png")
  cube_2 = createImg("Cube gif 2.png")



    stroke(250,100,250);
    canvas = createCanvas(1685,805);
    gif.position(-10,-10);
    gif_2.position(1615,-10);
    gif_3.position(-10,725);
    gif_4.position(1615,725);
    cube.position (1128, 176);
    cube_2.position (181, 176);

    Video = createCapture(VIDEO);
    Video.size(575,511)
    Video.position(553,147);
}

function draw()
{

  fill(255,0,0);
  stroke(255,0,0)
  rect(0, 0, 25, 905);
  rect(0, 0, 1905, 25);

  rect(0, 783 , 11005, 25);
  rect(1660, 0 , 11005, 1100);
//
  fill	(255,165,0);
  stroke	(255,165,0);
  rect(26, 0, 25, 905);
  rect(0, 26, 1905, 25);

  rect(0, 783 , 1700, -26);
  rect(1660, 0 , -26, 1100);
//
  fill		(255,255,0);
  stroke	(255,255,0);
  rect(52, 52, 25, 704);
  rect(52, 50, 1580, 25);

  rect(52, 735 , 1600, 25);
  rect(1633, 52 , -26,708);
//
  fill		(0, 255, 0)
  stroke	(0, 255, 0);
  rect(78, 75, 25, 658);
  rect(78, 75, 1504, 25);

  rect(82, 709 , 1504, 25);
  rect(1606, 75 , -26,659);
//
  fill		(0, 0, 255)
  stroke	(0, 0, 255);
  rect(104, 100, 25, 608);
  rect(104, 100, 1476, 25);

  rect(104, 683 , 1476, 25);
  rect(1580, 100 , -26, 608);
//
  fill		(0, 155, 255	)
  stroke	(	0, 155, 255	);
  rect(130, 125, 25, 557);
  rect(130, 125, 1423, 25);

  rect(130, 657 , 1396, 25);
  rect(1553, 125 , -26, 557);
//
  fill		(	143, 0, 255	)
  stroke	(	143, 0, 255	);
  rect(155, 150, 25, 506);
  rect(155, 150, 1371, 25);

  rect(155, 631 , 1371, 25);
  rect(1526, 150 , -26, 506);
//
fill(0,0,0)
rect(181, 176 , 371, 454)
rect(1128, 176 , 371, 454)
}

