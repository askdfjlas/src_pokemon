function transform() {
  true_point_arr = []

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

    point = math.multiply(2, point);
    point = math.multiply(transformMatrix, point);

    var newPoint = point.valueOf();

    true_point_arr.push([newPoint[0][0], newPoint[1][0], newPoint[2][0]]);
  }

  return true_point_arr;
}

function translate() {
  translateMatrix = math.matrix(
    [[1, 0, 0, -ahri.x],
    [0, 1, 0, ahri.y],
    [0, 0, 1, 0,],
    [0, 0, 0, 1]]
  );

  return translateMatrix;
}

function rotate() {
  return math.multiply(rotateX(), rotateZ());
}

function rotateZ() {
  var c = Math.cos(ahri.zRotation);
  var s = Math.sin(ahri.zRotation);

  rotateMatrix = math.matrix(
    [[c, -s, 0, 0],
    [s, c, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]]
  );

  return rotateMatrix;
}

function rotateX() {
  var c = Math.cos(ahri.xRotation);
  var s = Math.sin(ahri.xRotation);

  rotateMatrix = math.matrix(
    [[1, 0, 0, 0],
    [0, c, -s, 0],
    [0, s, c, 0],
    [0, 0, 0, 1]]
  );

  return rotateMatrix;
}

function project() {
  var tmp = 0;
}
