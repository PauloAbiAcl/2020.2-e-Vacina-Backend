
class Drop {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.fallSpeed = 15;
  }

  fall(){
    this.y = this.y + this.fallSpeed;
  }

  show(){
    stroke(200,200,200);
    line(this.x, this.y, this.x, this.y+10);

  }

  isOut(windowHeight, newPosition){
    if(this.y >= windowHeight) this.y = newPosition
  }
}