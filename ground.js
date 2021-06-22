class Ground {
    constructor(x,y,width,height,angle) {
      var options = {
          isStatic: true
      }
     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.img = loadImage("w3.jpg")
     
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.img,pos.x, pos.y, this.width, this.height);
    }
  }

