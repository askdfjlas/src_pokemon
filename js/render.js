const PSIZE = 60;

const PXOFFSET = 450 - PSIZE/2;
const PYOFFSET = 300 - PSIZE/2 - 10;

const XOFFSET = 428;
const YOFFSET = 282;

function draw() {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  draw_tiles();
  draw_player();
}

function draw_tiles() {
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

    // Show points
    // context.fillStyle = "#FFFFFF";
    // context.fillRect(pcpy[0] - 2 + XOFFSET, pcpy[1] - 2 + YOFFSET, 4, 4);

    if(i == 0) {
      orgx = pcpy[0];
      orgy = pcpy[1];

      context.moveTo(orgx + XOFFSET, orgy + YOFFSET);
    }
    else {
      context.lineTo(pcpy[0] + XOFFSET, pcpy[1] + YOFFSET);
      context.stroke();
    }
  }

  context.lineTo(orgx + XOFFSET, orgy + YOFFSET);
  context.stroke();
}

function draw_player() {
  context.drawImage(ahri.imgs[0], PXOFFSET, PYOFFSET, PSIZE, PSIZE);
}
