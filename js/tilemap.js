const TILESIZE = 80;

var tilemap =
[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

var point_arr = [];

function generate_points() {
  var width = tilemap[0].length;
  var height = tilemap.length;

  for(var i = 0; i <= height; i++) {
    point_arr.push([]);
    for(var j = 0; j <= width; j++) {
      point_arr[i].push([j, i, 0]);
    }
  }
}
