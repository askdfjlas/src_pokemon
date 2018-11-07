const WIDTH = 900;
const HEIGHT = 600;

var canvas, context;

var sim_time = 0;
var prev_time = 0;
var fps = 60;

var point_arr =
[[-1, -1, -1], [0, -1, -1], [1, -1, -1],
[-1, 0, -1], [0, 0, -1], [1, 0, -1],
[-1, 1, -1], [0, 1, -1], [1, 1, -1],
[-1, -1, 0], [0, -1, 0], [1, -1, 0],
[-1, 0, 0], [0, 0, 0], [1, 0, 0],
[-1, 1, 0], [0, 1, 0], [1, 1, 0],
[-1, -1, 1], [0, -1, 1], [1, -1, 1],
[-1, 0, 1], [0, 0, 1], [1, 0, 1],
[-1, 1, 1], [0, 1, 1], [1, 1, 1]];

var tilemap =
[[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1],
[1, 1, 1, 1, 1]];

function init() {
  requestAnimationFrame(main);

  canvas = document.getElementById("c");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  context = canvas.getContext("2d");
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
