class Ball{
    constructor(x,y,width,height,angle){
    
        
     var options={
     'frictionAir':1,
      'density':1
      }
      this.image = loadImage("superman.png");
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = 140;
      this.height =50;
      World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate (pos.x,pos.y)
        rotate(angle)
       fill (0)
        imageMode(CENTER);
           image(this.image, 0,0, this.width, this.height);
        pop();
    }
    }
   
