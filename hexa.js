class Hexa{
    constructor(x,y) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.body = Bodies.circle(x,y,25, options);
       
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        push();
        var angle = this.body.angle
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0,0,25,25);
        pop();
      }
}