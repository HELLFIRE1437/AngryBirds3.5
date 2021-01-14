class SlingShot {
    constructor(bodyA , pointB){
        var options = {
            length : 10 ,
            stiffness : 0.04 ,
            bodyA : bodyA ,
            pointB : pointB
        }
        this.pointB = pointB ;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA != null){
            var pos1 = this.chain.bodyA.position ;
            var pos2 = this.pointB ;
            strokeWeight(4);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
        }    
    }
    fly(){
        this.chain.bodyA = null ;
    }
}