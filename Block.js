class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed<3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,30,40);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visiblity = this.Visiblity -1;
          
          fill(197,this.Visiblity);
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
      }
      }