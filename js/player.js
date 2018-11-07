const PLAYERSPEED = 3;

class playerState {
  constructor() {
    this.x = -225;
    this.y = 150;

    this.zRotation = 0;
    this.xRotation = 0;

    this.inputs = [false, false, false, false, false, false, false, false];
  }
}

var ahri = new playerState();

function updatePlayer() {
  if(ahri.inputs[0]) {
    ahri.x -= PLAYERSPEED;
  }
  if(ahri.inputs[2]) {
    ahri.x += PLAYERSPEED;
  }

  if(ahri.inputs[1]) {
    ahri.y += PLAYERSPEED;
  }
  if(ahri.inputs[3]) {
    ahri.y -= PLAYERSPEED;
  }

  // ~~~~~~~~~~~~~~~~~~~~
  if(ahri.inputs[4]) {
    ahri.zRotation -= 0.1;
  }
  if(ahri.inputs[5]) {
    ahri.zRotation += 0.1;
  }
  if(ahri.inputs[6]) {
    ahri.xRotation += 0.1;
  }
  if(ahri.inputs[7]) {
    ahri.xRotation -= 0.1;
  }

}
