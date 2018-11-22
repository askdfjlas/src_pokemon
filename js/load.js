const NUMSPRITES = 12;

function load() {
  ahri = new playerState();

  for(var i = 0; i < NUMSPRITES; i++) {
    ahri.imgs[i] = new Image();
    ahri.imgs[i].onload = check_img_load();
  }

  ahri.imgs[0].src = "sprites/png/ethand.png";
  ahri.imgs[1].src = "sprites/png/ethand1.png";
  ahri.imgs[2].src = "sprites/png/ethand2.png";
  ahri.imgs[3].src = "sprites/png/ethanu.png";
  ahri.imgs[4].src = "sprites/png/ethanu1.png";
  ahri.imgs[5].src = "sprites/png/ethanu2.png";
  ahri.imgs[6].src = "sprites/png/ethanr.png";
  ahri.imgs[7].src = "sprites/png/ethanr1.png";
  ahri.imgs[8].src = "sprites/png/ethanr2.png";
  ahri.imgs[9].src = "sprites/png/ethanl.png";
  ahri.imgs[10].src = "sprites/png/ethanl1.png";
  ahri.imgs[11].src = "sprites/png/ethanl2.png";
}

function check_img_load() {
  if(typeof check_img_load.count == 'undefined') {
    check_img_load.count = 0;
  }

  check_img_load.count++;

  if(check_img_load.count == 12) {
    console.log("All images loaded!");
    init();
  }
}
