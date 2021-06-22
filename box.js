class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          
      }
      this.body = Bodies.rectangle(x, y,50,100, options);
      this.visible = 255
    this.img = loadImage("w.png")
    this.img2 = loadImage("w2.png")
     
      World.add(world, this.body);
  }
    display(){
      if((this.body.speed)<=4){
        var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image( this.img,0, 0, 50,100);
      pop();
       
      
              }else{
              
                World.remove(world,this.body)
                push()
               
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
               
            tint(255,this.visible)
            image( this.img2,0,0,100,100);       
            this.visible = this.visible -19
          
            pop()

              }
    }
    
  }
