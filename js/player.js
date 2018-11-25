// Speed should be a divisor of the tile size (defined in tilemap.js)
const PLAYERSPEED = 4;

var direction = Object.freeze({"still": -1, "left": 0, "up": 1, "right": 2, "down": 3});

// Regular cardinal directions, 1234 correspond to walking/running animations
var spriteType = Object.freeze(
{"left": 0, "left1": 1, "left2": 2, "left3": 3, "left4": 4,
"up": 5, "up1": 6, "up2": 7, "up3": 8, "up4": 9,
"right": 10, "right1": 11, "right2": 12, "right3": 13, "right4": 14,
"down": 15, "down1": 16, "down2": 17, "down3": 18, "down4": 19});

class playerState {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.gridX = 0;
    this.gridY = 0;

    this.zRotation = 0;
    this.xRotation = -CAMERAANGLE;

    this.inputs = [false, false, false, false, false, false, false, false];
    this.imgs = [];

    this.facing = direction.down;
    this.movement = direction.still;
    this.moveProgress = 0;

    this.parity = 0;
  }

  getSprite() {
    switch(this.facing) {
      case direction.left:
        return this.directionalSprite(spriteType.left);
      case direction.up:
        return this.directionalSprite(spriteType.up);
      case direction.right:
        return this.directionalSprite(spriteType.right);
      case direction.down:
        return this.directionalSprite(spriteType.down);
    }
  }

  directionalSprite(dir) {
    if(this.moveProgress > 20 && this.moveProgress < 70) {
      return this.imgs[dir + this.parity + 1];
    }
    else {
      return this.imgs[dir];
    }
  }

  update() {
    if(this.movement == direction.still) {
      this.updateInputs();
    }
    else {
      this.updateMovement();
    }
  }

  updateInputs() {
    if(this.inputs[direction.left]) {
      this.manageDirection(direction.left);
    }
    if(this.inputs[direction.right]) {
      this.manageDirection(direction.right);
    }

    if(this.inputs[direction.up]) {
      this.manageDirection(direction.up);
    }
    if(this.inputs[direction.down]) {
      this.manageDirection(direction.down);
    }

    // Testing
    if(this.inputs[4]) {
      this.zRotation -= 0.1;
    }
    if(this.inputs[5]) {
      this.zRotation += 0.1;
    }
    if(this.inputs[6]) {
      this.xRotation += 0.1;
    }
    if(this.inputs[7]) {
      this.xRotation -= 0.1;
    }
  }

  manageDirection(dir) {
    if(this.facing != dir) {
      this.parity = 0;
    }
    else {
      this.parity = (this.parity + 1) % 2;
    }

    this.facing = dir;
    this.movement = dir;
  }

  updateMovement() {
    this.moveProgress += PLAYERSPEED;

    switch(this.movement) {
      case direction.left:
        this.x -= PLAYERSPEED;
        if(this.x % TILESIZE == 0) {
          this.setStill();
          this.gridX--;
        }

        break;
      case direction.right:
        this.x += PLAYERSPEED;
        if(this.x % TILESIZE == 0) {
          this.setStill();
          this.gridX++;
        }

        break;
      case direction.up:
        this.y += PLAYERSPEED;
        if(this.y % TILESIZE == 0) {
          this.setStill();
          this.gridY++;
        }

        break;
      case direction.down:
        this.y -= PLAYERSPEED;
        if(this.y % TILESIZE == 0) {
          this.setStill();
          this.gridY--;
        }

        break;
    }
  }

  setStill() {
    this.movement = direction.still;
    this.moveProgress = 0;
  }
}
