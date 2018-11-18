function draw() {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  var true_point_arr = transform();

  var width = tilemap[0].length;
  var height = tilemap.length;

  for(var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {

      switch(tilemap[i][j]) {
        case 1:
          draw_grid_square(i, j, true_point_arr);

          break;
        }
      }
    }
}

function draw_grid_square(i, j, t) {
  var square_arr = [t[i][j], t[i][j + 1], t[i + 1][j + 1], t[i + 1][j]];

  context.strokeStyle = "#FFFFFF";
  context.beginPath();

  var orgx, orgy; // :^^^^)

  for(var i = 0; i < square_arr.length; i++) {
    var p = square_arr[i];
    var pcpy = [p[0], p[1], p[2], p[3]];

    if(clip_test(pcpy)) return;
    norm_and_transform(pcpy);

    // context.fillStyle = "#FFFFFF";
    // context.fillRect(pcpy[0] - 2 + WIDTH/2, pcpy[1] - 2 + HEIGHT/2, 4, 4);

    if(i == 0) {
      orgx = pcpy[0];
      orgy = pcpy[1];

      context.moveTo(orgx + WIDTH/2, orgy + HEIGHT/2);
    }
    else {
      context.lineTo(pcpy[0] + WIDTH/2, pcpy[1] + HEIGHT/2);
      context.stroke();
    }
  }

  context.lineTo(orgx + WIDTH/2, orgy + HEIGHT/2);
  context.stroke();
}
