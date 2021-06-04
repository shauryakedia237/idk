class maze {
    constructor(x,y,width,height){
        var options = {
            isStatic: false
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
 
    display(){
        fill("brown");
        rect(this.x,this.y,this.width,this.height);
    }

}