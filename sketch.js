let makeupBottles = [];
let skincareBottles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  // create some makeup bottles
  for (let i = 0; i < 5; i++) {
    let x = random(width/2);
    let y = random(height);
    let size = random(20, 50);
    let c = color(random(255), random(255), random(255));
    let bottle = new Bottle(x, y, size, c);
    makeupBottles.push(bottle);
  }
  
  // create some skincare bottles
  for (let i = 0; i < 5; i++) {
    let x = random(width/2, width);
    let y = random(height);
    let size = random(20, 50);
    let c = color(random(255), random(255), random(255));
    let bottle = new Bottle(x, y, size, c);
    skincareBottles.push(bottle);
  }
}

function draw() {
  resizeCanvas(window.innerWidth, window.innerHeight)
  background(0);
  
  // update the position of the makeup bottles
  for (let i = 0; i < makeupBottles.length; i++) {
    makeupBottles[i].x += random(-3, 3);
    makeupBottles[i].y += random(-3, 3);
  }
  
  // update the position of the skincare bottles
  for (let i = 0; i < skincareBottles.length; i++) {
    skincareBottles[i].x += random(-3, 3);
    skincareBottles[i].y += random(-3, 3);
  }
  
  // draw the makeup bottles
  for (let i = 0; i < makeupBottles.length; i++) {
    makeupBottles[i].drawBottle();
  }
  
  // draw the skincare bottles
  for (let i = 0; i < skincareBottles.length; i++) {
    skincareBottles[i].drawBottle();
  }
}

class Bottle {
  constructor(x, y, size, c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = c;
  }
  
  drawBottle() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size*2);
    ellipse(this.x + this.size/2, this.y - this.size/2, this.size);
  }
}

