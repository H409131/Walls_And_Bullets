var car, wall, thickness;
var speed, weight, bullet;

function Preload() {
  var f = loadimage("f.jpg");
}

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(255);
  car.addImage("f");
  wall = createSprite(1500, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 5;
    var deformation = (0.5 * weight * speed * speed) / 22509;

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = color(225, 255, 225);
    }
  }

  drawSprites();
  hasCollided(nwall, nbullet);
}

function hasCollided(nwall, nbullet) {
  bulletRightEdge = nbullet.x + nbullet.width;
  wallLeftEdge = nwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    // returntrue;
  }
  // returnfalse;

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage =
      (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  }

  if (damage > 10) {
    wall.shapeColor(225, 0, 0);
  }

  if (damage < 10) {
    wall.shapeColor(0, 225, 0);
  }
}
