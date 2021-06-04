class Ghost {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.2,
        }
        this.body= Bodies.circle(x,y,120,options);
        this.r = 100;
        this.x=x;
        this.y=y;
        this.image= loadImage("images/ghost.png");

        World.add(world,this.body);

    }
    display(){
     imageMode(CENTER);
     image(this.image,this.x,this.y,this.r+50,this.r)
    }
}