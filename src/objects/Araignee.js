class Araignee extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "araignee");
        this.body.allowGravity=true;
        this.isAlive=true;
        this.setDisplaySize(64,64);

        this.setVelocityX(-10);
        this.setCollideWorldBounds(true);
        this.setBounce(1,0.2);
        this.setBodySize(this.body.width-20,this.body.height-25);
        this.setOffset(15,10);
        this.world = scene;
    }
    update(Vt,VVt){
        var VVt = 100;

        if (this.body.velocity.x > 0){
          this.setFlip(true, false);
          if(this.isAlive){
          //console.log(0.1);
          if (this.world.player.y > this.y - 100 && this.world.player.y < this.y + 100){
              //console.log('1');
              //console.log(VVt);
              if (this.world.player.x > this.x - 300 && this.world.player.x < this.x + 300){
                this.setVelocityX(VVt*2.5);
                //console.log("Ca fonce");
              }else{}
            }else{this.setVelocityX(VVt);
              //console.log("WWt= ",VVt);
            }
          }
      }
        
        else {
          this.setFlip(false, false);
          if(this.isAlive){
          //console.log(0.1);
          if (this.world.player.y > this.y - 100 && this.world.player.y < this.y + 100){
              //console.log('1');
              //console.log(VVt);
              if (this.world.player.x > this.x - 300 && this.world.player.x < this.x + 300){
                this.setVelocityX(-VVt*2.5);
                //console.log("Ca fonce");
              }else{}
            }else{this.setVelocityX(-VVt);
              //console.log("VVt= ",VVt);
            }
          }
      }
        }
        
}