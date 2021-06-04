class Boy {
    constructor(x,y){
        var options = {
           
            restitution: 0.2
        }
        this.body= Bodies.circle(x,y,70,options);
        this.r = 70;
        this.x=x;
        this.y=y;
        this.image= loadImage("images/stand.png");

        World.add(world,this.body);

    }
    display(){
     imageMode(CENTER);
     image(this.image,this.x,this.y,this.r+20,this.r)
     console.log(this.body);
    }
}