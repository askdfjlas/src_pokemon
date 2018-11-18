var canvas, context;

var sim_time = 0;
var prev_time = 0;
var fps = 60;

function init() {
  generate_points();

  canvas = document.getElementById("c");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  context = canvas.getContext("2d");

  requestAnimationFrame(main);
}

function nextFrame(time) {
  sim_time += time - prev_time;

  if(sim_time < 1000/fps) {
    requestAnimationFrame(main);
    return false;
  }

  prev_time = time;

  return true;
}

function main(time) {
  if(!nextFrame()) return;

  updatePlayer();
  draw();

  requestAnimationFrame(main);
}
