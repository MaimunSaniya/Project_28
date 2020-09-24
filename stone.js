class Stone{
  constructor(x, y) {
    var options = {
        isStatic : false,
        restitution : 0,
        friction : 1,
        density : 1.2
      }

    this.body = Bodies.circle(x, y,30,options);
    this.r  = 30;
    this.image = loadImage("stone2.png");
          
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
      
    imageMode(CENTER);
    image(this.image,0, 0,60,60);

    pop();
  }
};