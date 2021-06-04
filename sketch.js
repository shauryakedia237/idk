 const Engine = Matter.Engine;
 const World= Matter.World; 
 const Bodies = Matter.Bodies;

 var engine,world;

var prize, player;
function preload(){
    prizeimg = loadImage("images/mysterybox.png")
    // gImg = loadImage("images/ghost.png")
    // bImg = loadImage("images/stand.png")
}
function setup(){
    var canvas = createCanvas(1440,900);

     engine = Engine.create();
     world = engine.world;

    prize = createSprite(980,380);
    prize.addImage(prizeimg);
    prize.scale= 0.6;

    ghost1 = new Ghost(160,260);
    
    ghost2 = new Ghost(360,130);

    ghost3 = new Ghost(920,560);
    
    ghost4 = new Ghost(920,630);

    

    boy = new Boy (50,40,20,50);
  
   
    wall1 = new maze (0,70,100,20);
    wall2 = new maze(100,190,20,610);
    wall3 = new maze(200,800,680,20);
    wall4 = new maze(980,800,340,20);
    wall5 = new maze(1320,90,20,730);
    wall6 = new maze(320,70,1020,20);
    wall7 = new maze(200,0,20,720);
    wall8 = new maze(120,190,100,20);
    wall9 = new maze(860,490,20,310);
    wall10 = new maze(760,190,20,510);
    wall11 = new maze(200,700,580,20);
    wall12 = new maze(880,490,100,20);
    wall13 = new maze(980,490,20,310);
    wall14 = new maze(400,600,380,20);
    wall15 = new maze(300,500,380,20);
    wall16 = new maze(400,400,380,20);
    wall17 = new maze(300,300,380,20);
    wall18 = new maze(400,200,380,20);
    wall19 = new maze(300,70,20,550);
    wall20 = new maze(860,260,240,20);
    wall21 = new maze(860,260,20,240);
    wall22 = new maze(1080,260,20,440);
    wall23 = new maze(860,200,360,20);
    wall24 = new maze(1180,280,140,20);
    wall25 = new maze(1080,360,140,20);
    wall26 = new maze(1180,440,140,20);
    wall27 = new maze(1080,520,140,20);
    wall28 = new maze(1180,600,140,20);
    wall29 = new maze(1080,680,140,20);
    wall30 = new maze(1180,760,140,20);

}

function draw(){
    background(180); 
    Engine.update(engine);

    // boy programming 

    //right

    if (keyDown(RIGHT_ARROW)){
        boy.x += 7;
    }

    // left

    if (keyDown(LEFT_ARROW)){
        boy.x -= 7;
    }

    // up

    if (keyDown(UP_ARROW)){
        boy.y -= 7;
    }

    // down

    if (keyDown(DOWN_ARROW)){
        boy.y += 7;
    }

    // other

    // ghost 1 programming 
    
   if (ghost1.y <= 760 && ghost1.x === 160 ){
       ghost1.y += 7;
    } 
    else if ( ghost1.y >= 755 && ghost1.x <= 820 ) {
        ghost1.x += 7;
        
    } 
    else if ( ghost1.y <= 764 && ghost1.y >= 140 && ghost1.x === 825) {
        ghost1.y -= 7;
    }
    else if ( ghost1.y <= 765 && ghost1.x >= 824 && ghost1.x < 1271) {
        ghost1.x += 7;
        
    }
    else { 
        ghost1.y += 0;
        ghost1.x += 0;
    }

    // ghost 2 programming 

   // console.log(ghost2.x,ghost2.y);
    
    if (ghost2.y >= 130 && ghost2.y <= 260 && ghost2.x === 360 ){
        ghost2.y += 7;
    } 
    else if ( ghost2.y === 263 && ghost2.x >= 360 &&  ghost2.x <= 730 ) {
        ghost2.x += 7;
        
    } 
    else if (ghost2.y >= 260 && ghost2.y <= 360 && ghost2.x === 731 ){
        ghost2.y += 7;
    } 
    else if ( ghost2.y === 361 && ghost2.x >= 360 ) {  
        ghost2.x -= 7;
        
    } 
    else if (ghost2.y >= 360 && ghost2.y <= 460 && ghost2.x === 353 ){
        ghost2.y += 7;
    } 
    else if ( ghost2.y === 466 && ghost2.x >= 350 && ghost2.x <= 730 ) {
        ghost2.x += 7;
        
    } 
    else if (ghost2.y >= 460 && ghost2.y <= 560 && ghost2.x === 731 ){
        ghost2.y += 7;
    } 
    else if ( ghost2.y === 564 && ghost2.x >= 360 ) {
        ghost2.x -= 7;
        
    }
    else if (ghost2.y >= 560 && ghost2.y <= 660 && ghost2.x === 353 ){
        ghost2.y += 7;
    }  
    else if ( ghost2.y === 662 && ghost2.x >= 260 ) {
        ghost2.x -= 7;
    }
    else if ( ghost2.x === 255 && ghost2.y >= 60 ) {
        ghost2.y -= 7;
    }
     else { 
        ghost2.y += 0;
        ghost2.x += 0;
    } 

    // ghost 3 programming

    if (ghost3.y >= 560 && ghost3.y <= 860 && ghost3.x === 920 ){
        ghost3.y += 7;
    } 
     else if ( ghost3.y === 861 && ghost3.x <= 1380 ) {
         ghost3.x += 7;
    } 
     else if ( ghost3.x === 1382 && ghost3.y >= 45) {
         ghost3.y -= 7;
    }
     else if ( ghost3.y === 42 && ghost3.x >= 255 && ghost3.x < 1383) {
         ghost3.x -= 7;
    }
     else { 
         ghost3.y += 0;
         ghost3.x += 0;
    }

   // ghost 4 programming


    if (ghost4.y >= 630 && ghost4.y <= 860 && ghost4.x === 920 ){
        ghost4.y += 7;
     } 
     else if ( ghost4.y === 861 && ghost4.x >= 40 ) {
         ghost4.x -= 7;
         
     } 
     else if ( ghost4.x === 38 && ghost4.y >= 145) {
         ghost4.y -= 7;
     }
     else { 
         ghost4.y += 0;
         ghost4.x += 0;
     }

    // return and restart 

    if (ghost1.x === 1273 && ghost1.y === 134 ) {
        ghost1.x = 160;
        ghost1.y = 260;
    }

    if (ghost2.x === 255 && ghost2.y === 53 ) {  
        ghost2.x = 360;
        ghost2.y = 130;
    }
  
    if (ghost3.x === 248 && ghost3.y === 42 ) {
        ghost3.x = 920;
        ghost3.y = 560;
    }

    if (ghost4.x === 38 && ghost4.y === 140 ) {
        ghost4.x = 920;
        ghost4.y = 630;
    }


    // boy colliding



    // display everything

    boy.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    ghost1.display();
    ghost2.display();
    ghost3.display();
    ghost4.display();
       drawSprites();
     
}