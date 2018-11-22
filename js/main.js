var canvas, context, renderer;

var sim_time = 0;
var prev_time = 0;
const FPS = 60;

function init() {
  generate_points();

  canvas = document.getElementById("c");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  context = canvas.getContext("2d");

  renderer = new tilemapRenderer();

  requestAnimationFrame(main);
}

function nextFrame(time) {
  sim_time += time - prev_time;

  if(sim_time < 1000/FPS) {
    requestAnimationFrame(main);
    return false;
  }

  prev_time = time;

  return true;
}

// Game loop
function main(time) {
  if(!nextFrame()) return;

  ahri.update();
  renderer.draw();

  requestAnimationFrame(main);
}
