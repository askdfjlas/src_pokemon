const WIDTH = 900;
const HEIGHT = 600;

const CAMERADISTANCE = 400;
const CAMERAANGLE = 0.5;

const VIEWX = WIDTH/2;
const VIEWY = HEIGHT/2;

class transform {
  constructor() {
    this.width = point_arr[0].length;
    this.height = point_arr.length;

    this.true_point_arr = [];

    this.zOffset = ahri.y*Math.atan(ahri.xRotation);
    this.yOffset = ahri.y*Math.cos(ahri.xRotation);
  }

  get_points() {
    var translateMatrix = this.translate();
    var rotateMatrix = this.rotate();
    var projectionMatrix = this.project();

    var transformMatrix = math.multiply(translateMatrix, rotateMatrix);
    var transformMatrix = math.multiply(projectionMatrix, transformMatrix);

    for(var i = 0; i < this.height; i++) {
      this.true_point_arr.push([]);
      for(var j = 0; j < this.width; j++) {
        var original = point_arr[i][j];
        var newPoint = this.transform_point(original, transformMatrix);

        this.true_point_arr[i].push(newPoint);
      }
    }

    return this.true_point_arr;
  }

  transform_point(original, transformMatrix) {
    var point = math.matrix(
      [[original[0]*TILESIZE],
      [original[1]*TILESIZE],
      [original[2]*TILESIZE],
      [1]]
    );

    point = math.multiply(transformMatrix, point);
    var newPoint = point.valueOf();

    return [newPoint[0][0], newPoint[1][0], newPoint[2][0], newPoint[3][0]];
  }

  translate() {
    var translateMatrix = math.matrix(
      [[1, 0, 0, -ahri.x],
      [0, 1, 0, this.yOffset],
      [0, 0, 1, 2*CAMERADISTANCE + this.zOffset],
      [0, 0, 0, 1]]
    );

    return translateMatrix;
  }

  rotate() {
    return math.multiply(this.rotateX(), this.rotateZ());
  }

  rotateZ() {
    var c = Math.cos(ahri.zRotation);
    var s = Math.sin(ahri.zRotation);

    var rotateMatrix = math.matrix(
      [[c, -s, 0, 0],
      [s, c, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]]
    );

    return rotateMatrix;
  }

  rotateX() {
    var c = Math.cos(ahri.xRotation);
    var s = Math.sin(ahri.xRotation);

    var rotateMatrix = math.matrix(
      [[1, 0, 0, 0],
      [0, c, -s, 0],
      [0, s, c, 0],
      [0, 0, 0, 1]]
    );

    return rotateMatrix;
  }

  project() {
    const f = 300;

    // Projection matrix taken from http://metalbyexample.com/linear-algebra/
    var projectionMatrix = math.matrix(
      [[CAMERADISTANCE/VIEWX, 0, 0, 0],
      [0, CAMERADISTANCE/VIEWY, 0, 0],
      [0, 0, -f/(f-CAMERADISTANCE), -(f*CAMERADISTANCE)/(f-CAMERADISTANCE)],
      [0, 0, 1, 0]]
    );

    return projectionMatrix;
  }

}

function clip_test(point) {
  if(point[0] < -point[3] || point[1] < -point[3]) return true;
  if(point[0] > point[3] || point[1] > point[3]) return true;

  return false;
}

function norm_and_transform(point) {
  point[0] /= point[3];
  point[1] /= point[3];

  point[0] *= WIDTH/2;
  point[1] *= HEIGHT/2;
}

// For testing
/*
function log_transform() {
  var arr = transform();

  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < 4; j++) {
      console.log(arr[i][j]);
    }
  }
}

function log_eye_space() {
  true_point_arr = [];

  var translateMatrix = translate();
  var rotateMatrix = rotate();

  var transformMatrix = math.multiply(translateMatrix, rotateMatrix);

  for(var i = 0; i < point_arr.length; i++) {
    var original = point_arr[i];

    var point = math.matrix(
      [[original[0]*TILESIZE],
      [original[1]*TILESIZE],
      [original[2]*TILESIZE],
      [1]]
    );

    point = math.multiply(transformMatrix, point);

    var newArr = point.valueOf();
    console.log(newArr[0] + " " + newArr[1] + " " + newArr[2]);
  }
}
*/
