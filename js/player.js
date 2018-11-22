const PLAYERSPEED = 3;

var moveDirection = Object.freeze({"still": 0, "down": 1, "up": 2, "right": 3, "left": 4});

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
  }

  update() {
    this.updateInputs();
  }

  updateInputs() {
    if(this.inputs[0]) {
      this.x -= PLAYERSPEED;
    }
    if(this.inputs[2]) {
      this.x += PLAYERSPEED;
    }

    if(this.inputs[1]) {
      this.y += PLAYERSPEED;
    }
    if(this.inputs[3]) {
      this.y -= PLAYERSPEED;
    }

    // ~~~~~~~~~~~~~~~~~~~~
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
}
