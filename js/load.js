const NUMSPRITES = 20;

function load() {
  ahri = new playerState();

  for(var i = 0; i < NUMSPRITES; i++) {
    ahri.imgs[i] = new Image();
    ahri.imgs[i].onload = check_img_load();
  }

  ahri.imgs[spriteType.left].src = "sprites/png/ethanl.png";
  ahri.imgs[spriteType.left1].src = "sprites/png/ethanl1.png";
  ahri.imgs[spriteType.left2].src = "sprites/png/ethanl2.png";
  ahri.imgs[spriteType.up].src = "sprites/png/ethanu.png";
  ahri.imgs[spriteType.up1].src = "sprites/png/ethanu1.png";
  ahri.imgs[spriteType.up2].src = "sprites/png/ethanu2.png";
  ahri.imgs[spriteType.right].src = "sprites/png/ethanr.png";
  ahri.imgs[spriteType.right1].src = "sprites/png/ethanr1.png";
  ahri.imgs[spriteType.right2].src = "sprites/png/ethanr2.png";
  ahri.imgs[spriteType.down].src = "sprites/png/ethand.png";
  ahri.imgs[spriteType.down1].src = "sprites/png/ethand1.png";
  ahri.imgs[spriteType.down2].src = "sprites/png/ethand2.png";
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
