class Ball{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

       this.ball=Bodies.circle(x,y,radius,options);
       this.radius=radius;
	    World.add(world,this.ball);
    
    }

display(){
    ellipseMode(RADIUS);
    ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
}
    
}
  