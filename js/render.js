const TILESIZE = 64;

function draw() {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  true_point_arr = transform();

  for(var i = 0; i < true_point_arr.length; i++) {
    xPos = true_point_arr[i][0];
    yPos = true_point_arr[i][1];

    context.fillStyle = "#FFFFFF";
    context.fillRect(xPos - 2 + WIDTH/2, yPos - 2 + HEIGHT/2, 4, 4);
  }
}
